import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { gStyles, COLORS } from "../components/Styles";

export default function Login({ navigation }: any): JSX.Element {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={[styles.container]}>
            <View>
                <View style={[styles.LogoContainer]}>
                    <Text style={[gStyles.white, gStyles.h1, styles.LoginTitle]}>Login</Text>
                </View>
                <View style={[styles.formContainer]}>
                    <View style={[gStyles.marginTB, gStyles.margin]}>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Email</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="johndoe@email.com"
                            />
                        </View>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Password</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="Enter Your Password"
                            />
                        </View>
                        <TouchableOpacity style={[gStyles.button, gStyles.bRadius, gStyles.childMargin]} onPress={() => navigation.navigate('ProductForm')}>
                            <Text style={[gStyles.white, gStyles.textCenter, gStyles.h3]}>Login</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={gStyles.h3}>Don't have any account?<Text style={{color: '#038cfc'}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    formContainer: {
        height: '80%',
        backgroundColor: '#fafaf2',
        borderRadius: 15,
        borderTopLeftRadius: 100,
    },
    LogoContainer: {
        height: '20%',
    },
    LoginTitle: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 50
    },
    input: {
        backgroundColor: 'white'
    }
});