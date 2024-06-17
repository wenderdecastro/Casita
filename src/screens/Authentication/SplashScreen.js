import React from 'react'
import { AppContainer, PositionedImage } from '../../components/AppContainers'
import { AppColors } from '../../utils/Pallete'
import LottieView from 'lottie-react-native'
import { View, StyleSheet } from 'react-native'

export default function SplashScreen({ navigation }) {
    return (
        <View>
            <View style={styles.splash}>
                <LottieView style={{ flex: 1 }}  autoPlay loop />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 splash: {
    height: 300,
    aspectRatio: 1
 }
});