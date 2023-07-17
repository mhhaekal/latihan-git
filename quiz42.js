function getWays(squares, d, m){
    var ways = 0,
        i = 0,
        sum = 0,
        j = 0,
        index = 0;
    if(squares.length === 1 && squares[0] === d){
      return 1;
    }
    for(i = 0; i < squares.length - (m -1); i++){
      sum = 0;
      index = i;
      for(j = 0; j < m; j++){
        sum += squares[index++]
      }
      if(sum === d){
        ways++;
      }
    }
    return ways;
}

console.log(getWays([2,2,1,3,2],3,2))

function birthday(s, d, m) {
  let result = 0;
  for (var i = 0; i <= s.length - m; i++) {
      let total = 0;
      for (let j = i; j < i + m; j++) {
          total += s[j];
      }
      if (total === d) {
         result++;
      }
  }
  return result;

}

function findElementRank(ranked, player) {
  let ranked2 = [...new Set(ranked)];
  let elementRank = [];
  for (let element of player) {
      let count = 1;
      for (let rankElement of ranked2) {
          if (element < rankElement ) {
              count++
          } else if (element === rankElement ) {
              break
          }
      }
      elementRank.push(count);
  }
  return elementRank;
}

console.log(findElementRank([100,90,90,80],[70,80,105]))




let aa = "aaaaa"
let bb = [1,2,1,2,1]
console.log(aa.length)
console.log(bb.length)