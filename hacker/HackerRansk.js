function plusMinus(arr) {
  let array = [0, 0, 0];

  arr.forEach((element) => {
    if (element > 0) array[0]++;
    if (element < 0) array[1]++;
    if (element === 0) array[2]++;
  });

  for (const e in array) {
    let element = (array[e] / arr.length).toFixed(6);
    return element;
  }
}

plusMinus([-4, 3, -9, 0, 4, 1]);

function miniMaxSum(arr) {
  let numberMax = 0;
  let numberMin = 0;
  const elementos = arr.sort((a, b) => a - b);
  for (let i = 0; i <= elementos.length - 2; i++) {
    numberMin += elementos[i];
  }
  for (let i = 1; i < elementos.length; i++) {
    numberMax += elementos[i];
  }

  return numberMin, numberMax;
}
miniMaxSum([7, 69, 2, 221, 8974]);

function timeConversion(s) {
  const meridian = 12;
  const format = s.slice(8);
  const hh = parseInt(s.slice(0, -8)) + meridian;
  let arrayHour = s.split(":");
  if (s.slice(8) === "PM" && s.slice(0, 2) != "12") {
    console.log(
      (arrayHour[0] = hh + ":" + arrayHour[1] + ":" + arrayHour[2].slice(0, 2))
    );
  }
  if (s.slice(8) === "PM" && s.slice(0, 2) === "12") {
    console.log(
      (arrayHour[0] =
        "12" + ":" + arrayHour[1] + ":" + arrayHour[2].slice(0, 2))
    );
  } else if (s.slice(0, 2) === "12") {
    console.log(
      (arrayHour[0] =
        "00" + ":" + arrayHour[1] + ":" + arrayHour[2].slice(0, 2))
    );
  } else {
    console.log(s.slice(0, 8));
  }
}
timeConversion("04:59:59AM");

function lonelyinteger(a) {
  const orderNumber = a.sort((a, b) => a - b);
  // const n = orderNumber.reduce((prev,curren)=>{
  //     prev[curren] = (prev[curren] || 0) +1
  //     return prev
  // },{})
  // console.log(n)
  // for(const e in n){
  //     if(n[e]===1){
  //         return parseInt(e)
  //     }
  // }
}

lonelyinteger([
  34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31
]);


function diagonalDifference(arr) {
    const maxIterado = arr.length-2
    let oneDiagonal = 0 
    let towDiagonal = 0
    for(let i= 0; i<arr.length; i= i+4){
        oneDiagonal+= arr[i]
    }
    for(let i=2; i<maxIterado; i= i+2){
        towDiagonal+=arr[i]
    }
    console.log(Math.abs(oneDiagonal-towDiagonal)) 

}
diagonalDifference([11, 2, 4, 4 ,5, 6, 10, 8, -12])