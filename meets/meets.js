function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function subtemplate( links ) {
    let html = []
    for (let i = 0; i<links.length; i++) {
        html.push(`
        <div class="svg-wrapper">
            <a target="_blank" href="${links[i]["link"]}">
                <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150"></rect>
                </svg><div id="text">
                    <p><span class="spot"></span>${links[i]["title"]}</p>
                </div>
            </a>
        </div>
        `);
    }

    return html.join("");
}

function template( data ) {
    let html = []
    for (let i=0; i<data.length; i++){
        html.push(`
        <div class="position">
            <h1>${data[i]["title"]}</h1>
            <h2>${data[i]["teacher"]}</h2>
            ${subtemplate( data[i]["links"] )}
            <h3>${data[i]["time"]}</h3>
        </div>
        `);
    }
    return html.join("");
}

function buildMeets(path) {
    loadJSON(path, function( data ) {
        $('#workarea').html(`
            <div class="position">
                <h2>2020.1</h2>
            </div>
            ${template( data )}
        `);
    }, function ( error ){
        console.log(error)
    });
}