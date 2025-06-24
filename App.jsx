import {Text, View, StyleSheet} from "react-native";

export default function App() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    }
})