// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = []

  for (let i = 0; i < 4; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
return Math.random() >= 0.5;
  while (johnLennonFacts()) {
    facts.push("!!!")
  }
return facts
}
