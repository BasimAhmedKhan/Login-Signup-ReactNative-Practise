import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { gStyles, COLORS } from "../components/Styles";
import { useState } from 'react';
import RadioButton from "../components/RadioBtn";
import TextInputValidaion from "../components/TextInputValidation";
import { Switch } from "react-native";

type RadioProps = {
    Electronics: boolean;
    Clothing: boolean;
    HomeAppliance: boolean;
};

export default function ProductForm({ navigation }: any): JSX.Element {

    const [validation, setValidation] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [text, onChangeText] = useState('');
    const [radio, setRadio] = useState<RadioProps>({
        Electronics: true,
        Clothing: false,
        HomeAppliance: false,
    });

    return (
        <View style={[styles.container]}>
            <View>
                <View style={[styles.formContainer]}>
                    <View style={[gStyles.marginTB, gStyles.margin]}>
                        <View>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Product Name</Text>
                            <TextInputValidaion
                                regex={/^[\s\S]{6,}$/}
                                placeholder={" XX9 MARK I HEADPHONES"}
                                errorMessage="Enter a valid product name"
                                setValidation={setValidation}
                            />
                        </View>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h2, gStyles.childMargin]}>Product Category</Text>
                            <View style={gStyles.childMargin}>
                                <TouchableOpacity style={[gStyles.flex, gStyles.childMargin]} onPress={() => setRadio(
                                    {
                                        Electronics: true,
                                        Clothing: false,
                                        HomeAppliance: false,
                                    }
                                )}>
                                    <RadioButton selected={radio.Electronics} style={gStyles.margin} />
                                    <Text style={[gStyles.black, gStyles.h3]}>Electronics</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[gStyles.flex, gStyles.childMargin]} onPress={() => setRadio(
                                    {
                                        Electronics: false,
                                        Clothing: true,
                                        HomeAppliance: false,
                                    }
                                )}>
                                    <RadioButton selected={radio.Clothing} style={gStyles.margin} />
                                    <Text style={[gStyles.black, gStyles.h3]}>Clothing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[gStyles.flex]} onPress={() => setRadio(
                                    {
                                        Electronics: false,
                                        Clothing: false,
                                        HomeAppliance: true,
                                    }
                                )}>
                                    <RadioButton selected={radio.HomeAppliance} style={gStyles.margin} />
                                    <Text style={[gStyles.black, gStyles.h3]}>Home Appliances</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[gStyles.childMargin, gStyles.flex]}>
                            <Text style={[gStyles.h2, gStyles.black]}>New Product? </Text>
                            <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
                        </View>
                        <TouchableOpacity style={[gStyles.button, gStyles.bRadius, gStyles.childMargin]} onPress={() => validation ? navigation.navigate('ProductDescription') : null}>
                            <Text style={[gStyles.white, gStyles.textCenter, gStyles.h3]}>Proceeds to Detail Form</Text>
                        </TouchableOpacity>
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
        height: '100%',
        backgroundColor: '#fafaf2',
    },
    input: {
        backgroundColor: 'white'
    }
});