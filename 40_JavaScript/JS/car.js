let totalTag; // 차량금액 표시할 HTML 태그 객체 저장
let totalValue; // 차량금액 + 옵션금액 저장
window.onload = function(){
    totalTag = document.getElementById("total");
    totalValue = parseInt(totalTag.value);

    // ID로 각각 찾아서 이벤트 연결
    //document.getElementById("opt1").onclick = compute;
    //document.getElementById("opt2").onclick = compute;
    //document.getElementById("opt3").onclick = compute;

    // class 속성으로 찾아서 이벤트 연결
    let opts = document.getElementsByClassName("opt");
    for (let opt of opts) {
        opt.onclick = compute;
    };
};

function compute() {
    console.log("this : " + this.id);
    let optValue = parseInt(this.value);
    console.log("optValue : " + optValue);
    if (this.checked) {
        totalValue += optValue;
    } else {
        totalValue -= optValue;
    }
    totalTag.value = totalValue;
};