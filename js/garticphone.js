var BASE_PATH = "https://pedromxavier.github.io/garticphone";

function readTextFile(file) {
    var text = null;
    var rawFile = new XMLHttpRequest();
    console.log(`GET ${BASE_PATH}/${file}`);
    rawFile.open("GET", `${BASE_PATH}/${file}`, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                text = rawFile.responseText;
                console.log(`GOT ${BASE_PATH}/${file}`);
            }
        }
    }
    rawFile.send(null);
    return text;
}

function timeConverter(UNIX_timestamp) {
    var a = new Date(~~(Number.parseFloat(UNIX_timestamp) * 1000));

    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = `${date} de ${month} de ${year}.`;
    return time;
}

function loadPictures(path, index_path, element) {
    console.log(`Reading ${index_path}.`);
    let text = readTextFile(index_path);
    if (text === null) {
        console.log('Reading FAILED.')
        return
    }
    console.log('Reading OK.')

    let index = text.split('\n');

    let html = [];
    for (let i = 0; i < index.length; i++) {
        let [file_path, file_date] = index[i].split(' ');
        console.log(`Loading ${path}/${file_path}`);
        html.push(loadPicture(`${path}/${file_path}`, timeConverter(file_date)));
    }
    element.innerHTML = html.join(`
    `);
}

function loadPicture(path, date) {
    return `
    <div class="picture">
        <img alt="" src="${path}"></img>
        <p>${date}</p>
    </div>
    `;
}