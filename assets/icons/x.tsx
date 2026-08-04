import { useWindowDimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconProps';

export default function XIcon({ width, height }: IconProps) {
    const { width: windowWidth } = useWindowDimensions();
    const size = width ?? height ?? Math.min(windowWidth * 0.2, 100);

    return (
        <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <Path
                d="M10 10 L38 38 M38 10 L10 38"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </Svg>
    );
}
