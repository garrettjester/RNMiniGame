import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function InstructionText({ children, style}) {

    return <Text style={[styles.instructionText, style]}>{children}</Text>

};

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        fontSize: 26,
        color: Colors.accent500
    },
})