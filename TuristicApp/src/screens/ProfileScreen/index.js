import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Logo } from "../../components/Logo";
import {MyText} from '../../components/MyText'

const ProfileScreen = ({route}) => {
  const { user }= route.params
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
                        <MyText >{user.dataUser.rol}</MyText>
                        <MyText bold>{user.dataUser.guide?'ho':'no'}</MyText>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    
    
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    
    add: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
   containeeData: {
        flexDirection:'row',
        marginHorizontal:30,
        marginVertical:20,
    },
    data: {
        marginHorizontal:20
    },

    
});