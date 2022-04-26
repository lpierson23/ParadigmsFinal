/* script for quiz functionality */

// select and ask questions from pool

const questionCombos = ["012", "013", "014", "123", "124", "134", "023", "024", "034", "234"];

let questions = questionCombos[Math.floor(Math.random() * 9)];

for (let i = 0; i < 3; i++) {
  q = questions.charAt(i);
  switch(q) {
    case '0':
      console.log("dog ?");
      break;
    case '1':
      console.log("dorm ?");
      break;
    case '2':
      console.log("food ?");
      break;
    case '3':
      console.log("ND trad ?");
      break;
    case '4':
      console.log("swift ?");
      break;
  }
}

// get answer
let answers = "abc";

// compute score
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;

for (let j = 0; j < 3; j++) {
  if (answers.charAt(j) == 'a') {
    aCount++;
  }
  else if (answers.charAt(j) == 'b') {
    bCount++;
  }
  else if (answers.charAt(j) == 'c') {
    cCount++;
  }
  else if (answers.charAt(j) == 'd') {
    dCount++;
  }
  else {
    console.log("invalid input");
  }
}

// display results
let winner = Math.max(aCount, bCount, cCount, dCount);
if (winner == aCount) {
  console.log("you are most like becca");
}

else if (winner == bCount) {
  console.log("you are most like bridget");
}

else if (winner == cCount) {
  console.log("you are most like lily");
}

else if (winner == dCount) {
  console.log("you are most like dom");
}

else {
  console.log("we don't know who you are");
}
