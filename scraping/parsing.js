const cheerio = require("cheerio");
const scpC = require("./scp");

module.exports = async html => {
  let $ = cheerio.load(await html);

  const score = $(".prw54353").html();

  var rank = "not found";
  var description = "not found";
  var id = "SCP ?";

  $("strong").each((i, e) => {
    if (!e.next) return;

    if (i === 1) rank = e.next.data;
    if (i === 0) id = e.next.data;
    if (i === 3) description = e.next.data;
  });

  if (description === undefined ) description = "not found"

  if(description.length > 400){
    description = description.slice(0, 1017)
    description = description.concat(" - cut.")
  }

  return new scpC(id, rank, description, score);
};
