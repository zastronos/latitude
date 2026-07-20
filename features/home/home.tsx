import AppleMusicIcon from '@/assets/icons/appleMusic';
import SpotifyIcon from '@/assets/icons/spotify';
import YouTubeIcon from '@/assets/icons/youtube';
import { colors, fonts } from '@/constants/theme';
import * as Linking from 'expo-linking';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

export default function Home() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768; // Adjust breakpoint as needed
    const fontSize = isMobile ? 32 : 64;

    return (
        <View>
            <View style={styles.titleArea}>
                <Text style={[styles.title, { color: colors.accent, fontSize: fontSize }]}>FEVER DREAMING</Text>
                <Text style={[styles.title, { fontSize: fontSize }]}>OUT NOW</Text>
                <View style={{ flexDirection: 'row', gap: 20, marginTop: 20, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://open.spotify.com/artist/4l57qRht3VVng5HYzXCPvo');
                    }}>
                        <SpotifyIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://music.apple.com/gb/artist/the-latitude/1502342387');
                    }}>
                        <AppleMusicIcon />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.youtube.com/channel/UC9e3A4cH8bOsT6z9MeXJ1hg');
                    }}>
                        <YouTubeIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleArea: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    title: {
        fontFamily: fonts.display,
        color: colors.highlightText,
        backgroundColor: colors.highlight,
        paddingHorizontal: 15,
        paddingVertical: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    gifContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
});