function build_cv(target) {
    fetch("/cv/cv.json").then(
        (res) => {
            let data = JSON.parse(res.text());

            let start_date = new Date(data["start"]);

            console.log(`Start date: '${start_date}'`)

            for (let event of data["events"]) {
                console.log(event);   
            }
        }
    )
}