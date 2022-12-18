import {Image, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function DebugCamera() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              marginTop: 6,
              fontSize: 14,
              lineHeight: 18,
              color: 'black',
            }}>
            Hello world
          </Text>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
