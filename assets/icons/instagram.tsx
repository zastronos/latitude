import { useWindowDimensions } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { IconProps } from './iconProps';

export default function InstagramIcon({ width, height }: IconProps) {
    const { width: windowWidth } = useWindowDimensions();
    const size = width ?? height ?? Math.min(windowWidth * 0.2, 100);

    return (
        <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <Rect x="4" y="4" width="40" height="40" rx="12" stroke="white" strokeWidth="3" />
            <Circle cx="24" cy="24" r="10" stroke="white" strokeWidth="3" />
            <Circle cx="34" cy="14" r="2.5" fill="white" />
        </Svg>
    );
}
