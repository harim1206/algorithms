function printHistogram(data) {
  const strArr = data.replace(/[\n^0-9]/g, " ").split(" ");
  const dict = {};

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if (word !== "") dict[word] ? dict[word]++ : (dict[word] = 1);
  }

  let result = "";
  for (const word in dict) {
    result += `${word} : ${dict[word]}\n`;
  }

  // console.log(data)
  console.log(result);

  return result;
}

printHistogram("123 hello world");

const re = /a-zA-Z/;
const str = "fee fi fo fum";
const myArray = str.match(re);
