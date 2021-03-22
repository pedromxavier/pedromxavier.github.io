function timeConverter(UNIX_timestamp) {
    var time = ~~Number.parseFloat(UNIX_timestamp);
    //console.log(`TIMESTAMP ${time}`);
    var a = new Date(time * 1000);
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${a.getDate()} de ${months[a.getMonth()]} de ${a.getFullYear()}.`;
}

function readPictureIndex() {
    var rawFile = new XMLHttpRequest();
    var fileUrl = `${window.location.href}/pictures.index`;
    fileUrl = fileUrl.replace(/^(\/\/)/g, '/');
    fileUrl = fileUrl.replace(/([^:])(\/\/)/g, '$1/');
    // console.log(`GET ${fileUrl}`);
    rawFile.open("GET", fileUrl, true);
    rawFile.onreadystatechange = function () {
        let text = null;
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                text = rawFile.responseText;
            }
        }
        buildPictures(text);
    }
    rawFile.send(null);
}

function loadPictures() {
    readPictureIndex();
}

function buildPictures(index_text) {
    if (index_text === null) {
        // console.log('Reading FAILED.')
        return;
    }
    // console.log('Reading OK.')

    let index = index_text.split('\n');
    let html = [];
    for (let i = 0; i < index.length; i++) {
        let [file_path, file_date] = index[i].split(' ');
        html.push(buildPicture(`./pictures/${file_path}`, timeConverter(file_date)));
    }
    document.getElementById("pictures").innerHTML = html.join(`
    `);
}

function buildPicture(path, date) {
    return `
    <div class="picture">
        <frame>
            <img alt="" src="${path}"></img>
            <p class="metal linear">${date}</p>
        </frame>
    </div>
    `;
}