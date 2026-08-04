import { useWindowDimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconProps';

export default function TikTokIcon({ width, height }: IconProps) {
    const { width: windowWidth } = useWindowDimensions();
    const size = width ?? height ?? Math.min(windowWidth * 0.2, 100);

    return (
        <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <Path
                d="M27 6 C27 14 32 18 38 18.5 V25 C33.5 25 29.8 23.5 27 21.2 V32.5 C27 39 21.7 43 16.2 42 C10.7 41 7 35.7 8.4 30.2 C9.6 25.4 14.5 22 19.5 23 V29.4 C17.6 28.8 15.6 29.9 15.1 31.8 C14.6 33.7 15.9 35.6 17.9 36 C20.1 36.4 22 34.7 22 32.4 V6 H27 Z"
                fill="white"
            />
        </Svg>
    );
}
