// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**

// - score - 숫자열

function grade(score) {
    if(score > 100 || score < 0) {
      console.log("잘못된 점수입니다")
    } else if(score >= 90) {
      console.log("A")
    } else if(score < 60) {
      console.log("F")
    } else if(score >= 80) {
      console.log("B")
    } else if(score >= 70) {
      console.log("C")
    } else if(score >= 60) {
      console.log("D")
    }
}
    
    grade(-10)
    grade(90)


    
// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.

// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 

// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze

// "3~4" ⇒ Silver

// 5이상 ⇒ Gold

const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price:10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
]

function myPage() {
let count = 0; // 구매한 총 횟수
let amount = 0; // 구매한 총 금액
let grade = ""; // 등급

for(let i = 0; i< myShopping.length; i++) {
  if(myShopping[i].category === "의류") {
    count++;
    amount += myShopping[i].price
    count++;
    count++
    count++
  }
}
if( count >= 5 ) {
  grade = "Gold";
} else if( count >= 3 ) {
  grade = "Sliver"
} else {
  grade = "Bronze"
}
return `의류를 구매한 횟수는 총 ${count} 회 금액은 ${amount} 원이며 등급은 ${grade} 입니다.`
}

myPage()