import React from "react";
import { View, SafeAreaView, Image, ScrollView } from "react-native";
import { Button } from "../../components/MyButton";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Logo } from "../../components/Logo";
import {MyText} from '../../components/MyText'
import { styles } from './styles';

const ProfileScreen = ({navigation, route}) => {
  const { user }= route.params
  console.log(user.dataUser.guide)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={{ uri : user.dataUser.photo[0] }} style={styles.image} />
                    </View>
                    <View style={styles.add}>
                        <Icon name="plus-circle" size={48} color="#f75f6a"/>
                    </View>
                </View>
                <View style={styles.containeeData}>
                    <Logo color={'#f75f6a'} size={80}/>
                    <View style={styles.data}>
                        <MyText bold>{user.dataUser.firstName} {user.dataUser.lastName}</MyText>
                        <MyText >{user.dataUser.city}, {user.dataUser.state}</MyText>
                        <MyText >{user.dataUser.rol}</MyText>
                        {user.dataUser.guide?
                          <MyText bold>You are guide</MyText>
                        :
                        <MyText bold> 
                         You are not guide
                        </MyText>
                        }
                    </View>
                </View>
                <View style={styles.infoGuide}>
                    <MyText size={'20px'} color={'#f75f6a'} bold>Add new: </MyText>
                    <MyText bold>
                    As a guide you will be able to add places, food and events, 
                    soon your services as a guide will be available. 
                    </MyText>
                </View>
                <View style={styles.infoGuide}>
                  {user.dataUser.guide?
                  <View style={styles.continerBtn}>
                    <View style={styles.btn}>
                      <Button 
                        text={'Place'}
                        onPress={() => {navigation.navigate('AddPlaces')}}
                      />
                    </View>
                    <View style={styles.btn}>
                      <Button 
                        text={'Food'}
                        onPress={() => {navigation.navigate('AddFood')}}
                        />
                    </View>
                    <View style={styles.btn}>
                      <Button 
                        text={'Event'}
                        onPress={() => {navigation.navigate('AddEvent')}}
                        />
                    </View>
                  </View>
                  :
                  <Button text={'Activate profile as guide'}/>
                  }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;

