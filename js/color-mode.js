import {getCookie, setCookie} from "./cookies.js";

window.colorScheme = "light"; // Default

function setColorScheme(cookie=null) {
    if (cookie !== null && cookie != undefined) {
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
    document.documentElement.className = "light-mode ready";
    saveColorScheme();
}

function setLightIcon() {
    document.getElementById("colorscheme-button").innerHTML = "&#9788;";
}

function setDarkMode() {
    window.colorScheme = "dark";
    document.documentElement.className = "dark-mode ready";
    saveColorScheme();
}

function setDarkIcon() {
    document.getElementById("colorscheme-button").innerHTML = "&#9790;";
}

function saveColorScheme() {
    let json = {"color_scheme": window.colorScheme};
    setCookie(json, 1);
}

function toggleColorScheme() {
    if (window.colorScheme == "dark") {
        setLightIcon();
        setLightMode();
    } else if (window.colorScheme == "light") {
        setDarkIcon();
        setDarkMode();
    }   
}

function loadColorScheme() {
    // Disable fading
    document.body.className = "";

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

function initColorScheme() {

    if (window.colorScheme == 'dark') {
        setDarkIcon();
    } else if (window.colorScheme == 'light') {
        setLightIcon();
    }

    // Enable fading
    document.body.className = "fade";
}

export {toggleColorScheme, loadColorScheme, initColorScheme};