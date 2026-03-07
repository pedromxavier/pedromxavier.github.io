function rand(a = -1, b = 1, k = 2) {
    n = (b - a) * Math.random() + a

    // k decimal places
    m = Math.pow(10, k)

    return Math.round(n * m) / m
}

function trail(e) {
    //trail
    [.7, .9, .8, .5, .25, .6, .4, .3, .2].forEach((j) => {
        var elem = document.createElement('div');
        var size = rand(5, 10, 1); // Math.ceil(Math.random() * 10 * i) + 'px';

        var opacity = rand(0.2, 0.8, 2);

        elem.classList.add('sparkle');

        elem.style.position = 'fixed';
        elem.style.zIndex   = 1;

        elem.style.width  = `${size}px`;
        elem.style.height = `${size}px`;

        x = e.pageX
        y = e.pageY - window.scrollY

        dx = j * rand(-1, +1, 2) * size
        dy = j * rand(-1, +1, 2) * size

        elem.style.left = `${x + dx}px` // e.pageX // + Math.round(Math.random() * j - j / 2) - 100 + 'px';
        elem.style.top  = `${y + dy}px` // (e.pageY - window.scrollY) // + Math.round(Math.random() * j - j / 2) - 100 + 'px';
        
        
        elem.style.opacity       = opacity;
        elem.style.pointerEvents = 'none';
        
        let sparkles = document.getElementById("sparkles");

        sparkles.appendChild(elem);

        window.setTimeout(
            () => { sparkles.removeChild(elem); },
            Math.round(Math.random() * (1 - j) * 1000),
        );
    });
}

function cursor() {
    let elem = document.createElement('div');

    elem.id = "sparkles";

    document.body.appendChild(elem);

    window.addEventListener('mousemove', trail, false);

    return;
}
