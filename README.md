# oj-to-file
A node application to create a code file from onlile judge url.

### Online Judges Supported
 * [InterviewBit](www.interviewbit.com)
 * [LeetCode](leetcode.com)
 * [HackerEarth](hackerearth.com)
 * [SPOJ](spoj.com)
 * [TopCoder](topcoder.com)
### Installation
ojToFile requires [NodeJS 6+](https://nodejs.org/en/) to work.
clone the project to your system and run below command to install all the dependencies.
```sh
npm init
```
### Usage
```sh
node ojToFile.js -u https://community.topcoder.com/stat?c=problem_statement&pm=14591
```
### Options
| flag | descriptio | remarks |
| --------- |--------------|----------------|
| --url, -u |  url of the problem | [required] |
| --lang, -l | file format (c , cpp , java , py) | [default: "cpp"] |
| --help | Show help | [boolean] |
