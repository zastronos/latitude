import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
import { IconProps } from './iconProps';

export default function SpotifyIcon({ width, height }: IconProps) {
    const { width: windowWidth } = useWindowDimensions();

    const imageWidth = width ?? Math.min(windowWidth * 0.2, 100);
    const imageHeight = height ?? imageWidth;

    return (
        <Image
            source={require('@/assets/icons/spotify.png')}
            style={{ width: imageWidth, height: imageHeight }}
        />
    );
}