import { colors, fonts } from '@/constants/theme';
import LinkRow from '@/shared/LinkRow/LinkRow';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type SongBoxProps = {
    title: string;
    subtitle?: string;
    youtubeVideoId?: string;
    spotifyUrl?: string;
    appleMusicUrl?: string;
};

export default function SongBox({ title, youtubeVideoId, appleMusicUrl, spotifyUrl }: SongBoxProps) {
    const [playing, setPlaying] = useState(false);
    const thumbnailUrl = youtubeVideoId
        ? `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`
        : undefined;

    return (
        <View style={styles.box}>
            <Pressable
                style={styles.thumbnail}
                onPress={() => setPlaying(true)}
                disabled={playing || !youtubeVideoId}
            >
                {playing && Platform.OS === 'web' && youtubeVideoId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                        title={title}
                        style={{ border: 0, width: '100%', height: '100%' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ) : (
                    <>
                        {thumbnailUrl && (
                            <Image source={{ uri: thumbnailUrl }} style={StyleSheet.absoluteFill} contentFit="cover" />
                        )}
                        <View style={styles.playButton}>
                            <View style={styles.playTriangle} />
                        </View>
                    </>
                )}
            </Pressable>

            <Text style={styles.title}>{title}</Text>
            <LinkRow
                width={48}
                appleMusicUrl={`https://music.apple.com/gb/song/${appleMusicUrl}`}
                spotifyUrl={`https://open.spotify.com/track/${spotifyUrl}`}
                youtubeUrl={`https://youtu.be/${youtubeVideoId}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 30,
        maxWidth: 340,
        alignItems: 'center',
    },
    thumbnail: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 2,
        borderColor: colors.text,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playTriangle: {
        width: 0,
        height: 0,
        marginLeft: 4,
        borderTopWidth: 9,
        borderBottomWidth: 9,
        borderLeftWidth: 14,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: colors.text,
    },
    title: {
        marginTop: 12,
        color: colors.text,
        fontFamily: fonts.display,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
})
