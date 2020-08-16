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
console.log("增加了一些小改动2");
console.log("增加了一些小改动3");
console.log("增加了一些小改动4");
console.log("增加了一些小改动5");
console.log("增加了一些小改动6");
