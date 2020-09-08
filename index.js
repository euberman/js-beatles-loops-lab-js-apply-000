// add solution here
function theBeatlesPlay(musicians,instruments){
  let firstArray = [], str='';
  for (let i = 0; i < musicians.length; i++) {
    str = musicians[i] + " plays " + instruments[i];
    firstArray.push(str);
  }
  return firstArray;
}

function johnLennonFacts(facts){
  let str = '', i = 0, factList = [];
  while (i < facts.length) {
    i = i++;
    str = facts[i] + "!!!";
    factList.push(str);
  }
  return factList;
}

function iLoveTheBeatles(n){
  let result = [], i = 0;
  do {
    i = i += 1;
    result.push("I love theBeatles!");
  } while (n < 15);
  return a;
}