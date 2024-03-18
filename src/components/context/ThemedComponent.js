
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
    const { theme } = useTheme();

    return (
        <div style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black', padding: '20px' }}>Themed Component</div>
    );
};

export default ThemedComponent;
