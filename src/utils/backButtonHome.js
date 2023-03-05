import { BackHandler } from "react-native";

export const backButtonHome = () => {
    const onBackPress = () => {
        BackHandler.exitApp();
        return true;
    };

    const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
    );

    return () => subscription.remove();
}