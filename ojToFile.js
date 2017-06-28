const fs        = require('fs');
const request   = require('request');
const _         = require('lodash');
const parser    = require('./parsers/parsers.js');
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

var options = {
    url,
    headers: {
        'User-Agent': 'Chrome/41.0.2228.0'
    }
};

request(options, (error, response, html) => {
    if(!error){
    if(url.includes('interviewbit')){
        json = parser.interviewbit(html);
    }else if(url.includes('hackerrank')){
        json = parser.hackerrank(html);
    }else if(url.includes('leetcode')){
        json = parser.leetcode(html);
    }else if(url.includes('hackerearth')){
        json = parser.hackerearth(html);
    }else if(url.includes('spoj')){
        json = parser.spoj(html);
    }else {
        return console.error('UnIdentified Online Judge Url');
    }

    json.url = url;
    var data = `/*\nurl: ${json.url}\nTitle: ${json.title}\n${json.body}\n*/\n`;
    var fileName = json.title;
    fileName = _.kebabCase(fileName);
    fileName = fileName + '.' + extension;

    fs.writeFile(fileName, data, {flag: 'wx' },(err) => {
        if(!err){
            return console.log("The file was saved!");
        }else if(err.code === 'EEXIST') {
            console.error(`Error: File with name \"${err.path}\" already exists!`);
        }
    });
    }else {
        console.error("Error: Website not found!");
    }
});
