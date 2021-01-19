window.colorScheme = "light"; // Default

function setColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setLightMode() {
    window.colorScheme = "light";
    document.documentElement.className = "light-mode";
    document.getElementById("colorscheme-button").innerHTML = "&#9788;";
}

function setDarkMode() {
    window.colorScheme = "dark";
    document.documentElement.className = "dark-mode";
    document.getElementById("colorscheme-button").innerHTML = "&#9790;";
}

function toggleColorScheme() {
    if (window.colorScheme == "dark") {
        setLightMode();
    } else if (window.colorScheme == "light") {
        setDarkMode();
    }
}

function initColorScheme() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) { // Dark Mode
            setDarkMode();
        }
        else { // Light Mode
            setLightMode();
        }
    });

    setColorScheme();
}