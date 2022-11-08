// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
    let answer = '';
    if(num % 2 === 0 || num === 0) {
        answer += "Even"
    } else {
        answer += "Odd"
    }
    return answer;
}

//다른풀이

function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}




// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
    let answer = 0;
    let result;
    arr.forEach(el => {
        answer = (answer + el)
    })
    result = answer / arr.length;
    return result;
}

//다른풀이 1

function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// 다른풀이 2

function solution(arr) {
    const sum =arr.reduce( (cu, el) => {
        return cu + el
    }, 0)
}




// 정답풀이

function solution(s) {
    var answer = '';
    const center = Math.floor(s.length / 2);
    let answer = s[center];

    if(s.length % 2 === 0) {
        answer = s[center-1] + answer;
    }
    return answer;
}

// 다른풀이  - slice

function solution(s) {
    const center = Math.floor(s.length / 2);
    const answer = s.length % 2 === 1
        ? s[center]
        : s.slice( center -1, center +1);
    return answer;
 
}