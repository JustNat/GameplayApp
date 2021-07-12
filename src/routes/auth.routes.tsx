import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Responsável pela navegação entre páginas

import { SignIn } from '../Screens/SignIn';
import { Home } from '../Screens/Home';

const { Navigator, Screen } = createStackNavigator(); // Destruturamento de propriedades do stack

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent' // Faz com que o background funcione normalmente
                }
            }}
        >
            <Screen
            name="SignIn"
            component={SignIn}
            />
            <Screen
            name="Home"
            component={Home}
            />
        </Navigator>
    )
}