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

var hackerrank = (html) => {
    var $ = cheerio.load(html);
    // console.log(html);
    var json = { title : "", body: "", code: ""};

    json.title = $('h2.hr_tour-challenge-name.pull-left.mlT').text().trim();
    json.body = $('div.content-text.challenge-text.mlB').text().trim();

    // console.log(json.title);
    // console.log(json.body);
    return json;
}

var leetcode = (html) => {
    var $ = cheerio.load(html);
    console.log(html);
    var json = { title : "", body: "", code: ""};

    json.title = $('div.question-title.clearfix').text().trim();
    json.body = $('div.question-description').text().trim();
    json.code = $('div.ace_layer.ace_text-layer').text().trim();

    console.log(json.title);
    console.log(json.body);
    console.log(json.code);
    return json;
}

module.exports = {
    interviewbit,
    hackerrank,
    leetcode
}
