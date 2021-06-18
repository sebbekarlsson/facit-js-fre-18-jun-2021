// del 1
function myFunction() {
  return 5;
}

//console.log(myFunction());


// del 2
function getSecond(myArr) {
  return myArr[1];
}

/*console.log(getSecond([
  "apple",
  "pear",
  "banana",
  "strawberry"
]));*/

// del 3
function logCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

//logCharacters("Hello");

function logCharacters2(str) {
  Array.from(str).forEach(ch => console.log(ch));
}

//logCharacters2("Hello");


// 4

function everyOther(str) {
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      console.log(str[i]);
    }
  }
}

// everyOther("Hello");

const everyOther2 = str => Array.from(str)
                                  .filter((b, i) => i % 2 == 0)
                                  .forEach(b => console.log(b));


everyOther2("Hello");
