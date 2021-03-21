function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                return rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return null;
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
    let text = readTextFile(index_path);
    if (text === null) {
        return
    }

    let index = text.split('\n');

    let html = [];
    for (let i = 0; i < index.length; i++) {
        let [file_path, file_date] = index[i].split(' ');
        html.push(loadPicture(`${path}/${index[i]}`, timeConverter(file_date)));
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