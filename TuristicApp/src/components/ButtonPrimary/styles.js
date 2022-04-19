import {     StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerTouch:{
        alignSelf:'center',
        width: '90%',
        backgroundColor: "#f75f6a",
        borderRadius: 10,
        marginVertical: 20,
        padding: 5,
        shadowOffset: {
            width: -2,
            height: 23,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        shadowColor: "#f85f6a",
        elevation: 20,
    }, 
    containerTouchD:{
        alignSelf:'center',
        width: '90%',
        backgroundColor: "#f75f6a",
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 5,
        shadowOffset: {
            width: -2,
            height: 23,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 20,
    }, 

    text:{
        alignSelf:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 3,
    }
})