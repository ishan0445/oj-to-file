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
    // console.log(html);
    var json = { title : "", body: "", code: ""};

    json.title = $('div.question-title.clearfix').text().trim();
    json.body = $('div.question-description').text().trim();

    // console.log(json.title);
    // console.log(json.body);
    return json;
}

var hackerearth = (html) => {
    var $ = cheerio.load(html);
    // console.log(html);
    var json = { title : "", body: "", code: ""};

    json.title = $('div#problem-title').text().trim();
    json.body = $('div.problem-description.line-height-18.less-margin-2.darker.content').text().trim();
    json.body = json.body.replace(/ +/g, ' ');

    console.log(json.title);
    console.log(json.body);
    return json;
}

var spoj = (html) => {
    var $ = cheerio.load(html);
    // console.log(html);
    var json = { title : "", body: "", code: ""};

    json.title = $('h2#problem-name').text().trim();
    json.body = $('div#problem-body').text().trim();

    console.log(json.title);
    console.log(json.body);
    return json;
}

module.exports = {
    interviewbit,
    hackerrank,
    leetcode,
    hackerearth,
    spoj
}
