import {Image, StyleSheet, Text, View, Animated} from 'react-native';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';

export default function ProfileSkeleton() {
  return (
    <View style={styles.userInfo}>
      <View style={styles.userAvatar}>
        <AnimatedLinearGradient
          customColors={presetColors.shimmer}
          speed={6000}
        />
      </View>
      <View style={styles.userName}>
        <AnimatedLinearGradient
          customColors={presetColors.shimmer}
          speed={6000}
        />
      </View>
      <View style={styles.userCompany}>
        <AnimatedLinearGradient
          customColors={presetColors.shimmer}
          speed={6000}
        />
      </View>
      <View style={styles.authorizationArea}>
        <View style={styles.authorizationType}>
          <AnimatedLinearGradient
            customColors={presetColors.shimmer}
            speed={6000}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userAvatar: {
    width: 200,
    height: 200,
    marginVertical: 12,
    marginBottom: 18,
    borderRadius: 100,
  },
  userName: {
    width: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 30,
  },
  userCompany: {
    borderWidth: 1,
    borderColor: '#1e1e1e',
    height: 25,
    width: 200,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  authorizationArea: {
    marginVertical: 16,
    borderRadius: 15,
    paddingHorizontal: 6,
  },
  authorizationType: {
    height: 30,
    width: 200,
  },
});
