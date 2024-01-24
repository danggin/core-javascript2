/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(String(YEAR)); // 명시적 형 변환
console.log(YEAR + ""); // 암시적 형 변환
// console.log( YEAR + "      ".trim() );

// undefined, null

let days = null;
let weekend;

console.log(days + "");
console.log(weekend + "");

// boolean

let isClicked = false;

console.log(isClicked + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(Number(friend));

// null

let money = null;

console.log(Number(money));

// boolean

let cutie = true;

console.log(Number(cutie));

// string

let num = "250";

console.log(Number(num)); // 명시적
console.log(num * 1); // 암시적
console.log(num / 1); // 암시적
console.log(+num); // 암시적

// numeric string

const width = "105.3px";

console.log(Number(width)); // NaN
console.log(parseInt(width)); // 정수
console.log(parseFloat(width)); // 소수

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean("")); // 빈 문자 = flase
console.log(Boolean(" ")); // 공백 문자 = true
console.log(Boolean(0));
console.log(Boolean("0")); // true

// Boolean의 암시적 형 변환 → !!

// 위에 나열한 것 이외의 것들

const value = prompt("값을 입력해 주세요.");
const numberValue = +value;

console.log(numberValue + 50);
