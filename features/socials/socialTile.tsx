import { colors, fonts } from '@/constants/theme';
import * as Linking from 'expo-linking';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Social } from './useSocials';

export default function SocialTile({ social }: { social: Social }) {
    const { Icon } = social;

    return (
        <Pressable
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
            onPress={() => Linking.openURL(social.url)}
        >
            <View style={styles.avatar}>
                <Icon width={24} height={24} />
            </View>
            <Text style={styles.name}>{social.name}</Text>
            <Text style={styles.chevron}>{'→'}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginVertical: 8,
        gap: 16,
    },
    rowPressed: {
        borderColor: colors.accent,
        opacity: 0.85,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    name: {
        flex: 1,
        color: colors.text,
        fontFamily: fonts.display,
        fontSize: 20,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    chevron: {
        color: colors.textMuted,
        fontSize: 18,
    },
})
