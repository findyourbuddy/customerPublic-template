import config from "./config.json"

function getData() {
    let data = JSON.parse(config)
    console.log(data)
    return data
}