// **`문제 설명`**

// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

// num은 1이상의 자연수가 들어옵니다.

// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

// **`입력 인자`**

// - num은 1이상의 자연수 입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.

function sum(num) {
	let count = 0;
  for(let i = 0; i <=num; i++) {
    count += i
  } return count;
} 

console.log(sum(5));
console.log(sum(3));



// **`문제 설명`**

// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

// **`입력 인자`**

// - str은 문자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.
// - 문자열도 배열입니다.
// - 대문자 "A" 문자열도 "a" 에 포함입니다.

function countLetter(str) {
	let count = 0;
  let str2 = str.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str2[i].includes("a")){
      count += 1
    } 
  } return count;
}

console.log(countLetter("I am from Korea"));
console.log(countLetter("A day without laughter is a day wasted."));




// **`문제 설명`**

// num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 

// num이 3일 경우에는 "1-2-3"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.


function makeNumber(num) {
	let str = '';
  for(let i=1; i <= num; i++) {
    if(i == 1) {
      str += i
    } else {
      str += "-" + i
    }
  } return str;
}

console.log(makeNumber(3));
console.log(makeNumber(5));




// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

// num이 5일 경우에는 "135"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.
// - 짝수를 제외하는 조건을 추가해야 합니다.

function makeOdd(num) { 
	let str = '';
  for(let i = 1; i <= num; i++) {
    if(i % 2 !== 0) {
      str += i
    }
  } return str;
}

console.log(makeOdd(5));
console.log(makeOdd(7));




// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.

// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다. 

// **`입력 인자`**

// - str은 문자열입니다.

// **`주의 사항`**

// - str에서 각각의 문자를 숫자로 바꿔서 계산해야 합니다.
// - 비교할 수 있는 기준값이 있어야 합니다.
// - 최댓값을 저장할 수 있는 변수가 있어야 합니다.


// 내 풀이
function bigNum(str) {
	let biggest = 1;
  for(let i = 0; i < str.length; i++) {
    for(let j = 1; j <str.length; j++) {
      if(Number(str[i]) > Number(str[j])) {
        biggest = Number(str[i]);
      } 
      if(Number(str[i]) < Number(str[j])) {
        biggest = Number(str[j]);
      }
    }
  } return biggest;
}

bigNum("87136");


// 정답 풀이
function bigNum(str) {
	let biggest = Number(str[0]);
  for(let i = 0; i < str.length; i++) {
      if(Number(str[i]) > biggest) {
        biggest = Number(str[i]);
      } 
  } return biggest;
}

// Spread 연산자를 
// 활용한 풀이도 가능.
