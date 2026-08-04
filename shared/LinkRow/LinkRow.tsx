import AppleMusicIcon from "@/assets/icons/appleMusic";
import SpotifyIcon from "@/assets/icons/spotify";
import YouTubeIcon from "@/assets/icons/youtube";
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";

type LinkRowProps = {
    spotifyUrl?: string;
    appleMusicUrl?: string;
    youtubeUrl?: string;
    height?: number;
    width?: number;
};

export default function LinkRow({ height, width, spotifyUrl, appleMusicUrl, youtubeUrl }: LinkRowProps) {
    return (
        <View style={styles.row}>
            <TouchableOpacity onPress={() => {
                Linking.openURL(spotifyUrl || 'https://open.spotify.com/artist/4l57qRht3VVng5HYzXCPvo');
            }}>
                <SpotifyIcon width={width} height={height} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Linking.openURL(appleMusicUrl || 'https://music.apple.com/gb/artist/the-latitude/1502342387');
            }}>
                <AppleMusicIcon width={width} height={height} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                Linking.openURL(youtubeUrl || 'https://www.youtube.com/channel/UC9e3A4cH8bOsT6z9MeXJ1hg');
            }}>
                <YouTubeIcon width={width} height={height} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
})