import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import { statements } from '@babel/template';

export default function src() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" /> 
            <Routes />
        </>
    );
}
