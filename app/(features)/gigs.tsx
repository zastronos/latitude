import { colors, fonts } from "@/constants/theme";
import GigRow from "@/features/gigs/gigRow";
import { useGigs } from "@/features/gigs/useGigs";
import PageTemplate from "@/shared/pageTemplate/pageTemplate";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Gigs() {
    const { gigs, loading } = useGigs();

    return (
        <PageTemplate>
            <View style={styles.header}>
                <Text style={styles.title}>GIGS</Text>
            </View>

            {!loading && (
                gigs.length > 0 ? (
                    <FlatList
                        data={gigs}
                        keyExtractor={(gig) => gig.id}
                        renderItem={({ item }) => <GigRow gig={item} />}
                        scrollEnabled={false}
                        style={styles.list}
                    />
                ) : (
                    <Text style={styles.empty}>No upcoming shows — check back soon.</Text>
                )
            )}
        </PageTemplate>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    title: {
        color: colors.accent,
        fontFamily: fonts.display,
        fontSize: 64,
        marginBottom: 10,
    },
    list: {
        width: '100%',
        maxWidth: 800,
        alignSelf: 'center',
        marginBottom: 40,
    },
    empty: {
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: 40,
        fontFamily: fonts.display,
        fontSize: 18,
    },
});