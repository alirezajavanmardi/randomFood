const clearConsole = require('clear-any-console');
const chalk = require("chalk")
const fs = require("fs")

let i: number = 0, appTimer: any, timer: any;

const foods: Array<string> = JSON.parse(fs.readFileSync("./foods.json", "utf-8")) as any

/**
 * generate random string
 * @param length 
 * @returns 
 */
const randomString = (length: number): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


const loader = (): void => {
  foods.forEach(() => {
    clearConsole()
    console.log(
      `what to eat, what not to eat? ${i % 2 == 0 ?
        chalk.blue(randomString(Math.round(Math.random() * 10))) :
        chalk.red(randomString(Math.round(Math.random() * 10)))}`
    );
    if (i >= 500) {
      clearConsole()
      clearInterval(timer);
      clearInterval(appTimer);
      console.log(`your food choice is ready! ? ${chalk.blue(foods[Math.floor(Math.random() * foods.length)])}`)
    }
    i++;
  });
};

clearConsole()
console.log("starting app ...");
appTimer = setTimeout(() => {
  timer = setInterval(loader, 25);
}, 10000);
