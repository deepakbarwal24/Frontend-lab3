import React, { useState } from 'react';

function ThemeButton() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleTheme} style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
            Toggle Theme
        </button>
    );
}

export default ThemeButton;
