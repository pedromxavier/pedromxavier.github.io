function expires(days = 1) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  return date.toUTCString();
}

function setCookie(json, days = 1) {
  let COOKIE_JSON = {
    'SameSite': 'Lax',
    'expires': expires(days),
    'path': '/'
  }

  let pairs = [];

  let keys = Object.keys(json);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let pair = `${key}=${json[key]}`;
    pairs.push(pair);
  }

  let COOKIE_KEYS = Object.keys(COOKIE_JSON);
  for (let i = 0; i < COOKIE_KEYS.length; i++) {
    let key = COOKIE_KEYS[i];
    let pair = `${key}=${COOKIE_JSON[key]}`;
    pairs.push(pair);
  }

  document.cookie = pairs.join(";");
}

function getCookie() {
  let items = document.cookie.split(";");
  let json = {};

  for (let i = 0; i < items.length; i++) {
    let [key, value] = items[i].split("=");
    json[key] = value;
  }
  return json;
}

export { getCookie, setCookie };