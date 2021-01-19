export function expires(days=1) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}

function setCookie(json, days=1) {
  let keys = Object.keys(json);

  let pairs = [];
  for (let i=0; i<keys.length; i++) {
      let key = keys[i];
      let pair = `${key}=${json[key]}`;
      pairs.push(pair);
  }
  pairs.push(`expires=${expires(days)}`);
  pairs.push(`path=/`);
  
  document.cookie = pairs.join(";");
}
  
function getCookie(items) {
  let items = document.cookie.split(";");
  let json = {};

  for (let i=0; i<items.length; i++) {
    let [key, value] = items[i].split("=");
    json[key] = value;
  }
  return json;
}  

export { getCookie, setCookie };