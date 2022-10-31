/*
input:  dict = {
  "Key1" : "1",
  "Key2" : {
      "a" : "2",
      "b" : "3",
      "c" : {
          "d" : "3",
          "e" : {
              "" : "1"
          }
      }
  }
}

output: {
  "Key1" : "1",
  "Key2.a" : "2",
  "Key2.b" : "3",
  "Key2.c.d" : "3",
  "Key2.c.e" : "1"
}

dict = {
  "c": 3
}

res = {
  "c": 3
}

dict = {
  "a": {
    "b": 3
  }
}

res = {
  "a.b": 3
}

res = {
  `${dict[key]}
}



*/

const dict = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: {
        '': '1',
      },
    },
  },
};

// const dict = {
//   a: {
//     b: 1,
//     c: 2,
//   },
// };

// function flattenDictionary(dict) {
//   // const go = (dict, initialKey, flatDict) => {
//   //   for (const key of Object.keys(dict)) {
//   //     const value = dict[key];
//   //     const flatKey = initialKey ? `${initialKey}.${key}` : key;
//   //     // When the value is a primitive
//   //     if (typeof value !== "object") flatDict[flatKey] = value;
//   //     // When value is a object, flatten it
//   //     else go(value, flatKey, flatDict);
//   //   }
//   //   return flatDict;
//   // };
//   // return go(dict, null, {});

//   function recurse(dict, initialKey, ans) {
//     // Object.keys(dict).forEach((key) => {
//     for (const key of Object.keys(dict)) {
//       const flatKey = initialKey ? `${initialKey}.${key}` : key;

//       // When the value is a primitive
//       if (typeof dict[key] !== 'object') ans[flatKey] = dict[key];
//       else recurse(dict[key], flatKey, ans);
//     }

//     return ans;
//   }

//   return recurse(dict, null, {});
// }

// console.log(flattenDictionary(dict));

function flattenDictionary(dict) {
  /*
    input:  dict = {
              "Key1" : "1",
              "Key2" : {
                  "a" : "2",
                  "b" : "3",
                  "c" : {
                      "d" : "3",
                      "e" : {
                          "" : "1"
                      }
                  }
              }
          }

    output: {
              "Key1" : "1",
              "Key2.a" : "2",
              "Key2.b" : "3",
              "Key2.c.d" : "3",
              "Key2.c.e" 
  */

  const ans = {};

  function recurse(dict, flatKey = '') {
    for (const key in dict) {
      if (typeof dict[key] !== 'object') {
        ans[`${flatKey}${key}`] = dict[key];
      } else {
        let newKey;
        key.length > 0 ? (newKey = `${flatKey}${key}.`) : (newKey = key);
        recurse(dict[key], newKey);
      }
    }
  }

  recurse(dict);

  return ans;
}

console.log(flattenDictionary(dict));
