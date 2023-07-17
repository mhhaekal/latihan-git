
function encryption(s) {
    let value = Math.ceil(Math.sqrt([...s].length));
  
    return [...s]
      .reduce((target, item, index) => {
        target[index % value] += item;
  
        return target;
      }, new Array(value).fill(""))
      .join(" ");
  }

  console.log(encryption("haveaniceday"))

  function processData(input) {
    var height = parseInt(Math.ceil(Math.sqrt(input.length)), 10);
    var width = parseInt(Math.floor(Math.sqrt(input.length)), 10);
    var result = '';
    for(var i = 0; i < height; i++) {
        var j = i;
        while(j < input.length) {
            result += input[j];
            j += height;
        }
        result += ' ';
    }
    console.log(result);
}