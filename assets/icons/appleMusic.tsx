import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
export default function AppleMusicIcon() {
    const{ width, height } = useWindowDimensions();

    const imageWidth = Math.min(width * 0.2, 75);
    const imageHeight = imageWidth;

    return (
        <Image
            source={require('@/assets/icons/applemusic.png')}
            style={{ width: imageWidth, height: imageHeight }}
        />
    );
}