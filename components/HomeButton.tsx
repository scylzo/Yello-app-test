import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FC } from "react";
import { COLORS } from "constant/colors";

interface HomeButtonProps {
    onPress: () => void
}


const HomeButton: FC<HomeButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <AntDesign name="home" size={24} color="black" />
            </View>
        </TouchableOpacity>
    );
};

export default HomeButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.tertiary,
        width: 80,
        height: 80,
        borderRadius: 40,
        bottom: 30,
        borderColor: COLORS.primary,
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});
