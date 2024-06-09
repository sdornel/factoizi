import React from 'react';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const root = () => {
    // const navigationRef: React.RefObject<any> = React.createRef();

    // function navigate(name: any, params: any) {
    //     console.log('navigationRef', navigationRef);
    //     navigationRef.current.navigate(name, params);
    // }

    const Stack = createNativeStackNavigator();
    return (
            <App />
    )
}

export default root;
