/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// 함수 선언

function getRandomValue() {
    return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언
// parameter
function calcPrice(
    priceA,
    priceB,
    priceC = getRandomValue(),
    priceD = getRandomValue()
) {
    // if(!priceD) priceD = 0;

    // priceD = priceD || 0;
    // priceD ||= 0;

    // priceD = priceD ?? 0;
    priceD ??= 0;

    // validation 확인

    if (!priceA || !priceB) {
        throw new Error(
            'calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.'
        );
    }

    console.log(priceA + priceB + priceC + priceD);
}

calcPrice(3000, 300); // argument

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 14) {
    if (!pxValue || !base) {
        throw new Error(
            'rem 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.'
        );
    }
    if (typeof base === 'string') {
        pxValue = parseInt(pxValue, 10);
    }
    return parseInt(pxValue, 10) / base + 'rem';
}

console.log(rem(20));
console.log(rem('25px'));

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
