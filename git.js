/*
 * @Author: your name
 * @Date: 2020-08-16 21:02:36
 * @LastEditTime: 2020-08-16 21:07:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myNodejs\git.js
 */
#!/usr/bin/env node

const {program} = require('commander')
const {spawn} = require('child_process')

program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese')
  .parse(process.argv);

const sauceStr = program.sauce ? 'sauce' : 'no sauce';
const cheeseStr = (program.cheese === false) ? 'no cheese' : `${program.cheese} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);
console.log("nihao");


console.log("增加了一些小改动");