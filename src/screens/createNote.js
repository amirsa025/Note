import React from 'react';
import {
    Alert,
    Button,
    Dimensions,
    KeyboardAvoidingView, Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const CreateNote = ({navigation}) => {
    const [note, setNote] = React.useState("")
    const handleInput = (enterText) => setNote(enterText)
    const [saveData, setSaves] = React.useState([])

    const SaveNote =()=>{
        if (note === '') {
            Alert.alert('TextInput is Empty, Please Enter Some Value To Continue...');
        }
        else {
            saveData.push(note.toString());
            Alert.alert('Data Added Successfully...');
            console.log(saveData);
            setNote(" ")

        }


    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Note </Text>
                <TextInput placeholder='Title' multiline={true} required={true}
                           numberOfLines={10} style={styles.input} value={note}
                           onChangeText={handleInput}/>
            </View>
            <View>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Button title='save' style={
                        styles.BtnCreateNote
                    } onPress={SaveNote}></Button>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export default CreateNote;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffeab9',
        justifyContent: 'space-between',
        height: "100%",
        width: Dimensions.get("window").width
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    header: {
        padding: 10
    },
    input: {
        backgroundColor: '#faf9a2',
        marginTop: 10,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    BtnCreateNote: {
        marginBottom: 50,
        width: 70,
        height: 70,
    },
});
