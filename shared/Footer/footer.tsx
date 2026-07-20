import { colors, fonts } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>© {year} THE LATITUDE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.background,
    },
    text: {
        color: colors.textMuted,
        fontFamily: fonts.display,
        fontSize: 14,
    },
})