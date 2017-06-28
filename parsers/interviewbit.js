const cheerio = require('cheerio');

var interviewbit = (html) => {
  var $ = cheerio.load(html);
  var json = { title : "", body: "", code: ""};

  json.title = $('h1.panel-title.pull-left').text().trim();
  json.body = $('div#problem-content.markdown-content').text().trim();

  // console.log(json.title);
  // console.log(json.body);
  return json;
}


module.exports = {
  interviewbit
}
