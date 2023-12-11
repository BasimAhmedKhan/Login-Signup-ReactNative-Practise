import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { gStyles, COLORS } from "../components/Styles";
import TextInputValidaion from "../components/TextInputValidation";

export default function SignUp({ navigation }: any): JSX.Element {

    const [validation, setValidation] = useState(false);

    return (
        <View style={[styles.container]}>
            <View>
                <View style={[styles.LogoContainer]}>
                    <Text style={[gStyles.white, gStyles.h1, styles.LoginTitle]}>Sign Up</Text>
                </View>
                <View style={[styles.formContainer]}>
                    <View style={[gStyles.marginTB, gStyles.margin]}>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Full Name</Text>
                            <TextInputValidaion
                                regex={/^[\s\S]{3,}$/}
                                placeholder={" John Doe"}
                                errorMessage="Enter a valid name"
                                setValidation={setValidation}
                            />
                        </View>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Email</Text>
                            <TextInputValidaion
                                regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                                placeholder={" johnDoe@gmail.com"}
                                errorMessage="Please provide a valid email!"
                                setValidation={setValidation}
                            />
                        </View>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Password</Text>
                            <TextInputValidaion
                                regex={/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[\s\S]{6,}$/}
                                placeholder={" ********"}
                                errorMessage="You're password must contain 1 uppercase letter, 1 number and atleast 6 length"
                                setValidation={setValidation}
                            />
                        </View>
                        <TouchableOpacity style={[gStyles.button, gStyles.bRadius, gStyles.childMargin]} onPress={() => navigation.navigate('ProductForm')}>
                            <Text style={[gStyles.white, gStyles.textCenter, gStyles.h3]}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={gStyles.h3}>Already have an account?<Text style={{ color: '#038cfc' }} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
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