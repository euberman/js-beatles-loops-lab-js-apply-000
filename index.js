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
  var i = 0, fList = [];
  while (i < facts.length) {
    i = i++;
    fList.push(facts[i] + "!!!");
  }
  return fList;
}

function iLoveTheBeatles(n){
  var rList = [], i = 0;
  do {
    i = i += 1;
    rList.push("I love theBeatles!");
  } while (n < 15);
  return rList;
}