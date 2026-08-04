import { colors, fonts } from '@/constants/theme';
import * as Linking from 'expo-linking';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gig } from './useGigs';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export default function GigRow({ gig }: { gig: Gig }) {
    const date = new Date(gig.date);
    const month = MONTHS[date.getMonth()];
    const day = date.getDate();

    return (
        <View style={styles.row}>
            <View style={styles.dateBlock}>
                <Text style={styles.month}>{month}</Text>
                <Text style={styles.day}>{day}</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.venue}>{gig.venue}</Text>
                <Text style={styles.city}>{gig.city}</Text>
            </View>

            {gig.soldOut ? (
                <Text style={styles.soldOut}>SOLD OUT</Text>
            ) : gig.ticketUrl ? (
                <TouchableOpacity style={styles.ticketButton} onPress={() => Linking.openURL(gig.ticketUrl!)}>
                    <Text style={styles.ticketText}>TICKETS</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        gap: 16,
    },
    dateBlock: {
        width: 56,
        alignItems: 'center',
    },
    month: {
        color: colors.accent,
        fontFamily: fonts.display,
        fontSize: 14,
        letterSpacing: 1,
    },
    day: {
        color: colors.text,
        fontFamily: fonts.display,
        fontSize: 28,
        lineHeight: 30,
    },
    details: {
        flex: 1,
    },
    venue: {
        color: colors.text,
        fontFamily: fonts.display,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    city: {
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    ticketButton: {
        borderWidth: 1,
        borderColor: colors.text,
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    ticketText: {
        color: colors.text,
        fontFamily: fonts.display,
        fontSize: 13,
        letterSpacing: 1,
    },
    soldOut: {
        color: colors.textMuted,
        fontFamily: fonts.display,
        fontSize: 13,
        letterSpacing: 1,
    },
})
