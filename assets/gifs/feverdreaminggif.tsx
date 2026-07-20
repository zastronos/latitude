import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';

const videoSource = require('@/assets/gifs/feverdreaming.gif');

export default function FeverDreamingGif() {
    const { height } = useWindowDimensions();

    return (
        <Image
            source={videoSource}
            contentFit="cover"
            autoplay
            style={{ width: '100%', height : height}}
        />
    )
}
