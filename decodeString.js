// Write your code below this line

function decoder(code) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const num = code[0];
    let string = code.split("");
    let alphaArr = alpha.split("");
    string.shift();
    let answer = "";
    string.forEach((letter) => {
      let ltrIndex = alphaArr.findIndex((e) => e === letter);
      answer += alphaArr[ltrIndex + +num];
    });
    return answer;
  }
  
  console.log(decoder("8abcdef"));