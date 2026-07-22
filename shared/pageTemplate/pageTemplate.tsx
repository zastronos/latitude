import { colors } from "@/constants/theme";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Footer from "../Footer/footer";
import NavHeader from "../NavHeader/NavHeader";

export default function PageTemplate({ children }:
    { children?: React.ReactNode }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <NavHeader />
            {children}
            <Footer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        flexGrow: 1,
    },
})