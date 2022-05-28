import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    infoGuide:{
        paddingHorizontal:40,
        paddingBottom: 20
    },
    continerBtn:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    btn:{
        width:'32%'
    }
    
});