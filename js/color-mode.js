import {getCookie, setCookie} from "./cookies.js";

window.colorScheme = "light"; // Default

function setColorScheme(cookie=null) {
    if (cookie !== null) {
        if (cookie['color_scheme'] == 'dark') {
            setDarkMode();
            return;
        } else if (cookie['color_scheme'] == 'light') {
            setLightMode();
            return;
        }
    }

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
    saveColorScheme();
}

function setDarkMode() {
    window.colorScheme = "dark";
    document.documentElement.className = "dark-mode";
    document.getElementById("colorscheme-button").innerHTML = "&#9790;";
    saveColorScheme();
}

function saveColorScheme() {
    let json = {"color_scheme": window.colorScheme};
    setCookie(json, 1);
}

function toggleColorScheme() {
    if (window.colorScheme == "dark") {
        setLightMode();
    } else if (window.colorScheme == "light") {
        setDarkMode();
    }
}

function initColorScheme() {
    let cookie = getCookie();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) { // Dark Mode
            setDarkMode();
        }
        else { // Light Mode
            setLightMode();
        }
    });

    setColorScheme(cookie);
}

// Add as window property
window.toggleColorScheme = toggleColorScheme;
window.initColorScheme = initColorScheme;