# oj-to-file
A node application to create a code file from onlile judge url.

### Online Judges Supported
 * [InterviewBit](https://www.interviewbit.com)
 * [LeetCode](https://www.leetcode.com)
 * [HackerEarth](https://www.hackerearth.com)
 * [SPOJ](https://www.spoj.com)
 * [TopCoder](https://www.topcoder.com)
### Installation
ojToFile requires [NodeJS 6+](https://nodejs.org/en/) to work.
clone the project to your system and run below command to install all the dependencies.
```sh
npm install
```
### Usage
```sh
node ojToFile.js -u "https://community.topcoder.com/stat?c=problem_statement&pm=14591"
```
### Options
| Flag | Description | Remarks |
| --------- |--------------|----------------|
| --url, -u |  url of the problem | [required] |
| --lang, -l | file format (c , cpp , java , py) | [default: "cpp"] |
| --save-path, -s | path to save the output file | [string] [default: "./"] |
| --help | Show help | [boolean] |
