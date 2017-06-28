const fs        = require('fs');
const request   = require('request');
const parser    = require('./parsers/interviewbit.js');
const argv      = require('yargs')
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
const url       = argv.url;

request(url, function(error, response, html){
    if(!error){
    if(url.includes('interviewbit')){
        json = parser.interviewbit(html);
    }

    json.url = url;
    var data = `/*\nurl: ${json.url}\nTitle: ${json.title}\n${json.body}\n*/\n`;
    var fileName = json.title+'.'+extension;
    fileName = fileName.replace(/ /g,'-')
    fileName = fileName.toLowerCase();

    fs.writeFile(fileName, data, {flag: 'wx' },(err) => {
        if(!err){
            return console.log("The file was saved!");
        }
        else if(err.code === 'EEXIST') {
            console.error(`Error: File with name \"${err.path}\" already exists!`);
        }

    });
    }else {
        console.error("Error: Website not found!");
    }
});
