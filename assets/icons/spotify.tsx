import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
export default function SpotifyIcon() {
    const{ width, height } = useWindowDimensions();

    const imageWidth = Math.min(width * 0.2, 100);
    const imageHeight = imageWidth;

    return (
        <Image
            source={require('@/assets/icons/spotify.png')}
            style={{ width: imageWidth, height: imageHeight }}
        />
    );
}