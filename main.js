// Hello Challenger!
// I often never know when I should wear my jacket, I always wear it at the wrong time! So please help me by writing called `coatOrNoCoat`
// It should take in a single number argument of `temp`.
// The function should be able to handle any numbers no matter how big or small.
// If the temp is less than 20, return "it's cold out you should wear a coat"
// If the temp is greater than or equal 20 return "it's warm out you don't need a coat"
// If temp is missing input or not a number then return "undefined".

export default function coatOrNoCoat(temp) {
  if (typeof temp !== "number" || isNaN(temp)) {
    return "undefined";
  } else if (temp < 20) {
    return "it's cold out you should wear a coat";
  } else if (temp >= 20) {
    return "it's warm out you don't need a coat";
  }
}
