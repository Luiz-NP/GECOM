/*========== ROOT IMPORTS ==========*/
import { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

import { coordsToAddress } from '../api/coordsToAddress';

/*========== COMPONENT DECLARATION ==========*/
export function NotificationLocation() {
  const [address, setAddress] = useState();

  useEffect(() => {
    coordsToAddress(setAddress);
  }, []);

  return (
    <View style={style.notificationContainer}>
      <Svg
        width={18}
        height={18}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M15 8a1 1 0 11-2 0 1 1 0 012 0zm-1.75 3.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-1.5 0zM2 14C2 7.373 7.373 2 14 2s12 5.373 12 12-5.373 12-12 12S2 20.627 2 14zM14 3.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5 24.5 19.799 24.5 14 19.799 3.5 14 3.5z"
          fill="white"
        />
      </Svg>

      <Text style={style.notificationText}>Você está localizado em:</Text>
      <Text style={style.highlight}>{address ? `${address?.city} - ${address?.state}` : '...'}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  notificationContainer: {
    backgroundColor: '#025248',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  notificationText: {
    color: '#FFFFFF',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 14,
    marginLeft: 6,
  },
  highlight: {
    color: '#00c4ac',
    fontFamily: 'ClashGrotesk-Medium',
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: '#00c4ac',
    marginLeft: 6,
  },
});
