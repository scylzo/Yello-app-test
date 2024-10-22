import { NavigationProp, RouteProp } from "@react-navigation/native";
import { FC } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { MainParamList, PAGES } from "types/Types";
import { COLORS } from "constant/colors";


interface DetailScreenProps {
    navigation: NavigationProp<MainParamList, PAGES.Main>
    route: RouteProp<MainParamList, PAGES.Main | PAGES.Detail>;
}
const DetailScreen: FC<DetailScreenProps> = ({ navigation, route }) => {
    const course = route?.params?.course;


    return (
        <View style={styles.container}>
            <Image
                resizeMode="cover"
                style={styles.detailImage}
                source={require("assets/images/514.jpg")}
            />
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="back" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView style={styles.detail}>
                <View style={styles.heading}>
                    <Text style={styles.title}>{course?.title}</Text>

                </View>
                <View style={styles.descContainer}>
                    <Text>{course?.description}</Text>
                </View>
            </ScrollView>

        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    detailImage: {
        width: "100%",
        height: 400
    },
    backBtn: {
        position: "absolute",
        top: 60,
        left: 25
    },
    detail: {
        backgroundColor: COLORS.primary,
        padding: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -40
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: COLORS.secondary,
        width: "90%",
        fontSize: 20,
        fontWeight: 'bold',
    },
    descContainer: {
        paddingVertical: 10,
        paddingBottom: 30,
    },
    desc: {

        fontSize: 15,
        color: "#3333",
        lineHeight: 20,
    },
});


