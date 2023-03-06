import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const LoadingIndicator = () => {
    return (
        <View style={style.container}>
            <ActivityIndicator size="large" color="#00C4AC" />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',

    }
})
