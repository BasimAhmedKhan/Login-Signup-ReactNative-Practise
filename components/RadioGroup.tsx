import { StyleSheet, Text, TouchableOpacity, View, type ViewStyle } from 'react-native';
import { COLORS, gStyles } from './Styles';

type RadioProps = {
  selected: boolean;
  style: ViewStyle;
};

export type Option = {
  value: string;
  label: string;
}

export default function RadioGroup({
  options,
  selected,
  setSelected,
}: {
  options: Option[],
  selected: Option | null,
  setSelected: (opt: Option) => void;
}) {
  return options.map(option => (
    <TouchableOpacity style={[gStyles.flex, gStyles.childMargin]} onPress={() => setSelected(option)}>
      <RadioButton selected={option.value === selected?.value} style={gStyles.margin} />
      <Text style={[gStyles.black, gStyles.h3]}>Electronics</Text>
    </TouchableOpacity>
  ));
}

function RadioButton(props: RadioProps): JSX.Element {
  return (
    <View style={[lStyles.radioBtn, props.style]}>
      {
        props.selected ?
          <View style={lStyles.radioBtnSelected} />
          : null
      }
    </View>
  );
}

const lStyles = StyleSheet.create({
  radioBtn: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBtnSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.black,
  },
});