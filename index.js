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

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Who is the fastest player in the NFL this season (2023)?\n",
    choices: [
      "Chris Johnson",
      "Tyreek Hill",
      "Tariq Woolen",
      "Maruise Goodwin",
    ],
  });

  return handleAnswer(answers.question_1 === "Tyreek Hill");
}

async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "Who is the tallest player in the NFL this season (2023)?\n",
    choices: ["Walker Little", "Orlando Brown", "Deuce Vaughn", "Dan Skipper"],
  });

  return handleAnswer(answers.question_2 === "Dan Skipper");
}

async function question3() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "Who led the NBA in scoring in the 2017-18 season?\n",
    choices: [
      "James Harden",
      "Russell Westbrook",
      "LeBron James",
      "Anthony Davis",
    ],
  });

  return handleAnswer(answers.question_3 === "James Harden");
}

async function question4() {
  const answers = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "Who is the greatest NBA player of all time?\n",
    choices: [
      "Kareem Abdul-Jabbar",
      "Michael Jordan",
      "LeBron James",
      "Kobe Bryant",
    ],
  });

  return handleAnswer(answers.question_4 === "Michael Jordan");
}

async function question5() {
  const answers = await inquirer.prompt({
    name: "question_5",
    type: "list",
    message: "Who led the NFL in passing yards in the 2021-22 season?\n",
    choices: ["Tom Brady", "Patrick Mahomes", "Joe Burrow", "Justin Herbert"],
  });

  return handleAnswer(answers.question_5 === "Tom Brady");
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({
      text: `Nice work ${playerName}. That is the correct answer.`,
    });
  } else {
    spinner.error({ text: `Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
