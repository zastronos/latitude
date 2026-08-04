import { useWindowDimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './iconProps';

export default function SoundcloudIcon({ width, height }: IconProps) {
    const { width: windowWidth } = useWindowDimensions();
    const size = width ?? height ?? Math.min(windowWidth * 0.2, 100);

    return (
        <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <Path
                d="M13 32 H34 C38 32 41 29 41 25 C41 21 38 18 34 18 C33.5 18 33 18.1 32.5 18.2 C31.6 13.6 27.6 10 22.7 10 C19.5 10 16.7 11.6 15 14 V32 Z"
                fill="white"
            />
            <Rect x="7" y="22" width="3" height="10" rx="1.5" fill="white" />
            <Rect x="11" y="18" width="3" height="14" rx="1.5" fill="white" />
        </Svg>
    );
}
