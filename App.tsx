import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ProductForm from './screens/ProductForm';
import ProductDescription from './screens/ProductDescription';

const Stack = createStackNavigator();

const screenOptionStyles: any = {
  headerStyle: {
      backgroundColor: '#191919',
  },
  headerTitleAlign: "center",
  headerTintColor: "white",
  headerBackTitle: "Back",
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyles}>
        <Stack.Screen name='Login' component={Login} options={{title: ""}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{title: ""}} />
        <Stack.Screen name='ProductForm' component={ProductForm} options={{title: ""}} />
        <Stack.Screen name='ProductDescrition' component={ProductDescription} options={{title: ""}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
