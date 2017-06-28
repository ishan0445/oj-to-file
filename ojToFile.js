const parser    = require('./parsers/parsers.js');

const fs        = require('fs');
const request   = require('request');
const _         = require('lodash');
const loading   = require('loading-indicator');
const presets   = require('loading-indicator/presets');
const argv      = require('yargs')
                .option('url',{
                        desc: "url of the problem",
                        alias: 'u',
                        require: true
                    })
                .option('lang',{
                        desc: "file format (c, cpp, java, py...)",
                        alias: 'l',
                        default: 'cpp'
                    })
                .option('config',{
                    desc: 'path to the config file',
                    alias: 'c',
                    string: true
                })
                .option('save-path',{
                    desc: 'path to save the output file',
                    alias: 's',
                    string: true
                })
                .option('template-file-path',{
                    desc: 'path of template file',
                    alias: 't',
                    string: true
                })
                .help()
                .argv;

const extension = argv.lang;
const url       = argv.url;
const timer     = loading.start('Fetching Problem, Please wait..', {
  frames: presets.dots
});

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
            loading.stop(timer);
            console.log('Feature comming soon..');
            return;
            //json = parser.hackerrank(html);
        }else if(url.includes('leetcode')){
            json = parser.leetcode(html);
        }else if(url.includes('hackerearth')){
            json = parser.hackerearth(html);
        }else if(url.includes('spoj')){
            json = parser.spoj(html);
        }else if(url.includes('codechef')){
            loading.stop(timer);
            console.log('Feature comming soon..');
            return;
            //json = parser.codechef(html);
        }else if(url.includes('topcoder')){
            json = parser.topcoder(html);
        }else {
            return console.error('Un-Identified Online Judge Url');
        }

        json.url = url;
        var data = `/*\nurl: ${json.url}\nTitle: ${json.title}\n${json.body}\n*/\n`;
        var fileName = json.title;
        fileName = _.kebabCase(fileName);
        fileName = fileName + '.' + extension;

        fs.writeFile(fileName, data, {flag: 'wx' },(err) => {
            if(!err){
                loading.stop(timer);
                return console.log("The file was saved!");
            }else if(err.code === 'EEXIST') {
                loading.stop(timer);
                console.error(`Error: File with name \"${err.path}\" already exists!`);
            }
        });
    }else {
        loading.stop(timer);
        console.error("Error: Website not found!");
    }
});
