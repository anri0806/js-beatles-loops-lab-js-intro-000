// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = []

  for (let i = 0; i < 4; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
 const array = []

 let i = 0
 while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
 return array
}

function iLoveTheBeatles(n) {
  let array = []
  
  do {
    array.push("I love the Beatles!");
    n++
  } while (n < 15)
  return array
}
