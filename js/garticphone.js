function timeConverter(UNIX_timestamp) {
    var a = new Date(~~(Number.parseFloat(UNIX_timestamp) * 1000));
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${a.getDate()} de ${months[a.getMonth()]} de ${a.getFullYear()}.`;
}

function readPictureIndex() {
    var rawFile = new XMLHttpRequest();
    console.log(`${window.location.href}/pictures/pictures.index`)
    rawFile.open("GET", `${window.location.href}/pictures/pictures.index`, true);
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
        console.log('Reading FAILED.')
        return
    }
    console.log('Reading OK.')

    let index = index_text.split('\n');
    let html = [];
    for (let i = 0; i < index.length; i++) {
        let [file_path, file_date] = index[i].split(' ');
        html.push(loadPicture(`./pictures/${file_path}`, timeConverter(file_date)));
    }
    document.getElementById("pictures").innerHTML = html.join(`
    `);
}

function buildPicture(path, date) {
    return `
    <div class="picture">
        <img alt="" src="${path}"></img>
        <p>${date}</p>
    </div>
    `;
}