import {Path, Svg} from 'react-native-svg';

export const FirstBubble = () => {
  return (
    <Svg width={30} height={30} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 0c5.523 0 10 4.478 10 10s-4.477 10-10 10S0 15.522 0 10 4.477 0 10 0zm.002 13.004a.999.999 0 100 1.997.999.999 0 000-1.997zM10 5a1 1 0 00-.993.884L9 6l.002 5.001.007.117a1 1 0 001.986 0l.007-.117L11 6l-.007-.117A1 1 0 0010 5z"
        fill="#00c4ac"
      />
    </Svg>
  );
};
