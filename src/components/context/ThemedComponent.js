import { useTheme } from "./ThemeContext";


const ThemedComponent = () => {

    const { theme } = useTheme();

    return (
        // <div style={{ color: theme }}>
        <div style={{ color: theme === 'light' ? 'dark' : 'white', background: 'white' }}>
        </div>

    );
};

export default ThemedComponent;
