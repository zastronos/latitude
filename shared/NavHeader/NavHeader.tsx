import { colors, fonts } from "@/constants/theme";
import { useViewport } from "@/shared/stateMachine/ViewportProvider";
import { Button } from "@react-native-material/core";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const NAV_LINKS = [
    { title: "Home", href: "/" },
    { title: "Music", href: "/music" },
    { title: "Gigs", href: "/gigs" },
    { title: "Socials", href: "/socials" },
] as const;

export default function NavHeader() {
    const { isMobile } = useViewport();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = (href: string) => {
        router.push(href as any);
        setMenuOpen(false);
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.leftSide}>
                    <Text style={styles.text}>THE LATITUDE</Text>
                </View>
                <View style={styles.rightSide}>
                    {isMobile ? (
                        <Button title="MENU" variant="text" color={colors.text} titleStyle={styles.text} pressEffect="none" onPress={() => setMenuOpen((open) => !open)} />
                    ) : (
                        NAV_LINKS.map((link) => (
                            <Button key={link.href} title={link.title} variant="text" color={colors.text} titleStyle={styles.text} pressEffect="none" onPress={() => navigate(link.href)} />
                        ))
                    )}
                </View>
            </View>
            {isMobile && menuOpen && (
                <View style={styles.dropdown}>
                    {NAV_LINKS.map((link) => (
                        <Button key={link.href} title={link.title} variant="text" color={colors.text} titleStyle={styles.text} style={styles.dropdownItem} pressEffect="none" onPress={() => navigate(link.href)} />
                    ))}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.background,
    },
    leftSide: {
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    },
    rightSide: {
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20
    },
    dropdown: {
        backgroundColor: colors.background,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingVertical: 5,
    },
    dropdownItem: {
        alignItems: "flex-start",
        paddingHorizontal: 20,
    },
    text: {
        color: colors.text,
        fontFamily: fonts.display,
    }
})