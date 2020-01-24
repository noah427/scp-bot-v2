const request = require("async-request");

module.exports = async (number) => {
    let html = await request(`http://www.scp-wiki.net/scp-${number}`)
    return html.body
}