import { colors, fonts } from "@/constants/theme";
import SocialTile from "@/features/socials/socialTile";
import { useSocials } from "@/features/socials/useSocials";
import PageTemplate from "@/shared/pageTemplate/pageTemplate";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Socials() {
    const { socials, loading } = useSocials();

    return (
        <PageTemplate>
            <View style={styles.header}>
                <Text style={styles.title}>SOCIALS</Text>
                <Text style={styles.subtitle}>FOLLOW ALONG</Text>
            </View>

            {!loading && (
                <FlatList
                    data={socials}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <SocialTile social={item} />}
                    scrollEnabled={false}
                    style={styles.list}
                />
            )}
        </PageTemplate>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        color: colors.accent,
        fontFamily: fonts.display,
        fontSize: 64,
    },
    subtitle: {
        color: colors.textMuted,
        fontFamily: fonts.display,
        fontSize: 16,
        letterSpacing: 2,
        marginTop: 4,
    },
    list: {
        width: '100%',
        maxWidth: 520,
        alignSelf: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
});
