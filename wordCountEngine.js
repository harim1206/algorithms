function wordCountEngine(str) {
  const words = str.trim().split(' ');
  console.log('words: ', words);
  const arr = words.map((word) => {
    return word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  });
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    dict[word] ? dict[word]++ : (dict[word] = 1);
  }

  const sortedDict = Object.keys(dict).sort((a, b) => dict[b] - dict[a]);

  return sortedDict.map((key) => [key, `${dict[key]}`]);
}

console.log(
  wordCountEngine(
    `Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. `
  )
);
