function scroll_off(){
    let H = document.body.scrollHeight;
    let h = window.innerHeight;
    let y = window.scrollY;

    return (H > h) ? (y - (H - h)) : (y);
}

var door_ticks      = 0;
var door_ticking    = false;
var door_limit      = 7;
var door_off        = 25;
var door_controller = new AbortController();

function door_tick() {
    if (scroll_off() >= door_off) {
        door_ticking = true;

        if (++door_ticks >= door_limit) return show_door();

        console.log(`door_ticks = ${door_ticks}`);

        setTimeout(door_tick, 500);
    } else {
        door_ticking = false;
        door_ticks   = 0;
    }
}

function door_scroll(e) {
    if (!door_ticking) setTimeout(door_tick, 20);
}

function show_door() {
    let door_link = document.getElementById("door-link");
    
    door_link.style.display = "block";

    document.removeEventListener("scroll", door_scroll);
}

function door() { // init
    document.addEventListener("scroll", door_scroll);
}