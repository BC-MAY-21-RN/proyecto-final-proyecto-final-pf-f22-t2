import auth from '@react-native-firebase/auth';
import React from 'react';
import {ToastAndroid} from 'react-native';
import { useEffect, useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
  const signUp = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
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

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
      });
  };

  const infoUser = () => {
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

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        infoUser,
        signUp,
        errorEmail,
        setErrorEmail,
        errorPassword,
      }}>
      {children}
    </AuthContext.Provider>
  )
}


export const signIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Logged in', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
      });
};

export const signUp = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Signed up', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
    });
}

export const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
      });
};

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
