function baloons() {
    let elem = document.createElement("div");

    elem.id = "baloons";

    document.body.appendChild(elem);

    return;
}

function fly_baloon(baloon) {
    let o = parseFloat(baloon.style.opacity);
    let y = parseFloat(baloon.style.top);

    if (o > 0) {
        baloon.style.opacity = `${o - 0.05}`;
        baloon.style.top     = `${y - 5}px`;

        window.setTimeout(() => fly_baloon(baloon), 50);
    } else {
        let baloons = document.getElementById("baloons");

        baloons.removeChild(baloon);
    }

    return;
}

function let_baloon_loose(e, text) {
    let baloon = document.createElement("div");

    baloon.innerHTML = `<span>${text}</span>`;

    baloon.classList.add("baloon");

    let x = e.pageX
    let y = e.pageY - window.scrollY

    baloon.style.position = 'fixed';
    baloon.style.zIndex   = 1;

    baloon.style.left = `${x}px`;
    baloon.style.top  = `${y}px`;

    baloon.style.opacity       = 1.25;
    baloon.style.pointerEvents = 'none';

    let baloons = document.getElementById("baloons");

    baloons.appendChild(baloon);

    fly_baloon(baloon);

    return;
}

function copy_to_clipboard(e, content) {
    navigator.clipboard.writeText(content);

    let_baloon_loose(e, "Copied to clipboard!")

    return;
}

