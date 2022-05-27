import auth from '@react-native-firebase/auth';
import React from 'react';
import {ToastAndroid} from 'react-native';
import { useEffect, useState, createContext } from 'react';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const signIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Logged in', ToastAndroid.SHORT);
      })
      .catch(err => {
        if (err.code == 'auth/user-not-found'){
          setErrorEmail("Eamil not found")
        }
        if (err.code == 'auth/wrong-password'){
          setErrorPassword("Wrong Password")
        }
      });
  };
  const signUp = (email, password, dataUser) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firestore().collection('users').doc(auth().currentUser.uid)
        .set({
          dataUser,
          createdAt: firestore.Timestamp.fromDate(new Date()),
        })
        .catch(error => {
            console.log('Something went wrong with added user to firestore: ', error);
        })
        ToastAndroid.show('Signed up', ToastAndroid.SHORT);
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setErrorEmail('That email address is already in use!');
        }

        if (err.code === 'auth/invalid-email') {
          setErrorEmail('That email address is invalid!');
        }
        console.error(err);
    });
  }

  const getUser = (email) => {
    return firestore()
      .collection('users')
      .where('dataUser.email', '==', email)
      .get()
  };

  const getInfoUser = async () => {
    const infoUser = await getUser(auth()._user.email);
    setUser(infoUser.docs[0].data())
    
  };


  
  useEffect(() => {
    getInfoUser()
  }, []);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        infoUser,
        signUp,
        getUser,
        errorEmail,
        setErrorEmail,
        errorPassword,
      }}>
      {children}
    </AuthContext.Provider>
  )
}


export const infoUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const onAuthStateChanged = async user => {
      await setCurrentUser(user);
      setIsLoading(false);
    };
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);

    if (isLoading) {
      return null;
    }

    return currentUser
}


