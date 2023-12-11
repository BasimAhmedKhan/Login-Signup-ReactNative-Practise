import { View } from 'react-native';
import { COLORS } from './Styles';

export default function RadioButton(props: any): JSX.Element {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: COLORS.black,
              }}/>
              : null
          }
        </View>
    );
  }