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

function buildMeets(path) {
    loadJSON(path, function( data ) {
        let element = document.getElementById("workarea");
        let innerHTML = []
        for (let i=0; i<data.length; i++) {
            let json = data[i];
            innerHTML.push(`
            <div>
            <h1>${json['title']}</h1>
            <h2>${json['teacher']}</h2>
            <div class="position">
			  <!--start button, nothing above this is necessary -->
			  <div class="svg-wrapper">
				<svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
				  <rect id="shape" height="40" width="150" />
				  <div id="text">
					<a href="${json['meet']}"><span class="spot"></span>Meet</a>
				  </div>
				</svg>
              </div>
            </div>
            </div>
            `)
        }
        element.innerHTML = innerHTML.join("");
    }, function ( error ){
        console.log(error)
    });

}