"use strict";

// arrow function:
const randomDamage = () => {
  return Math.ceil(Math.random() * 10);
};

// arrow function:
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  //   if (randNum) {
  //     return opt2;
  //   } else {
  //     return opt1;
  //   }
  return randNum ? opt2 : opt1;
};

// function expression:
const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};
//ternerary
// const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Marissa", "Patrick", 100, 100);

// const getGrade = (grade) => {
//   if (grade >= 90) {
//     return `A=90+`;
//   } else if (grade >= 80 && grade < 90) {
//     return `B=80+`;
//   } else if (grade >= 70 && grade < 80) {
//     return `C=70+`;
//   } else if (grade >= 60 && grade < 70) {
//     return `D=60+`;
//   } else if (grade < 60) {
//     return `F=below 60`;
//   }
// };
// getGrade(70);

//else & if wont be all will go through individual and then move on to else
const getGrade = (number) => {
  if (number >= 90) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));

// 3 things to check when working with functions:
// 1. parameters (how many and what data type(s) -sometimes none)
//2. return (what does this function return, if anything, what is data type?)
//3. what is the purpose of this function? (could be answered with the return question)
//* when calling, arguments must match parameters (in amount, and data type(s)) --sometimes none

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (!urgent && important) {
    return 2;
  } else if (urgent && !important) {
    return 3;
  } else {
    return 4;
  }
};

console.log(prioritize(true, true));
console.log(prioritize(false, true));
console.log(prioritize(true, false));
console.log(prioritize(false, false));

const calculatePay = (wage, hours) => {
  if (hours > 40) {
    //ot logic
    const otHours = hours - 40;
    const otPay = otHours * wage * 1.5;
    return wage * 40 + otPay;
  } else {
    return wage * hours;
  }
};
console.log(calculatePay(10, 20));
console.log(calculatePay(10, 40));
console.log(calculatePay(10, 50));
console.log(calculatePay(12, 60));
