#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Welcome to the ultimate sports quiz! \n"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}
    I am a process on your computer
    If you get any questions wrong I will be ${chalk.bgRed("killed")}
    So get all the questions right...
  
  `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
}

// await welcome();
// await askName();
