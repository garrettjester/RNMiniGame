import { StyleSheet, TextInput, View, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";


function StartGameScreen({ onPickNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function inputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {

        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show error
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        onPickNumber(chosenNumber);
    }

    return <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
            <View style={styles.rootContainer}>
                <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a number</InstructionText>
                    <TextInput
                        value={enteredNumber}
                        onChangeText={inputHandler}
                        style={styles.numberInput}
                        maxLength={2}
                        keyboardType='number-pad' />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>

}

export default StartGameScreen;

const styles = StyleSheet.create({

    screen: {
        flex: 1
    },

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        textAlign: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1
    }
})