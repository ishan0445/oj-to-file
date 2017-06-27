const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const argv = require('yargs')
  .option('url',{
    desc: "url of the problem",
    alias: 'u',
    require: true
  })
  .option('lang',{
    desc: "file format (c | cpp | java | py)",
    alias: 'l',
    default: 'cpp'
  })
  .help()
  .argv;

const extension = argv.lang;
const url = argv.url;

request(url, function(error, response, html){
  if(!error){
    var $ = cheerio.load(html);

    var json = { title : "", body: "", code: ""};

    json.title = $('h1.panel-title.pull-left').text().trim();
    json.body = $('div#problem-content.markdown-content').text().trim();

    // console.log(json.title);
    // console.log(json.body);

    var data = '/*\nTitle: ' + json.title + '\n' + json.body + '\n*/\n';
    var fileName = json.title+extension;
      fs.writeFileSync(fileName, data, { flag: 'wx' }, (err) =>{
        if(!err)
          console.log('Done!');
        else {
          console.error(err);
        }
      });
    }else {
    console.error("Error: Website not found!");
  }
})
