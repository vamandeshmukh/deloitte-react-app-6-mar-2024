import { useTheme } from "./ThemeContext";

const ThemeButton = () => {

    const { theme, changeTheme } = useTheme();

    return (
        <button onClick={changeTheme}>
            Change Theme
        </button>

    );
};

export default ThemeButton;
