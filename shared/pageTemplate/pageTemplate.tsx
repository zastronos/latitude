import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import Footer from "../Footer/footer";
import NavHeader from "../NavHeader/NavHeader";

export default function PageTemplate({ children }:
    { children?: React.ReactNode }) {
    return (
        <View style={styles.container}>
            <NavHeader />
            {children}
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    }
})