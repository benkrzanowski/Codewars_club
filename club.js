function openOrSenior(data) {
  let arr = [];
  data.forEach(el => {
    if (el[0] >= 55 && el[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  });
  return arr;
}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);
openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]);
openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]);
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);
