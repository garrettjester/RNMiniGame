

import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

export default function GameOverScreen({onRestart, numberOfTries, userNumber}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{numberOfTries}</Text> rounds to
                guess the number <Text style>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
    )
};


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },

    summaryText: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 24,
        marginBottom: 24
    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})