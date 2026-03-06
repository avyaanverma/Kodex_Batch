// BMI=height(m)2weight(kg)​

const $ = (cls)=>{
    return document.querySelector(cls);
}


const form = $("#calculator-form")
const resultEl = $("#result")
const bmiNo = $("#bmi-no")
const status = $("#status")
const risk = $("#risk")
const bar = $("#bar")
const heightInput = $("#height")
const weightInput = $("#weight")

function calcBmi(height, weight){
    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    return bmi;
}

function getStatus(bmi){
    if(bmi < 18.5) return {status:"Underweight", risk:"Malnutrition risk" , class: "status-under"};

    if(bmi < 25) return {status:"Normal", risk:"Low risk", class: "status-normal"};

    if(bmi < 30) return {status:"Overweight", risk:"Enhanced risk", class: "status-over"};

    return {status:"Obese", risk:"High risk", class: "status-obese"};
}

function renderResult(bmi){

    const result = getStatus(bmi);


    resultEl.innerHTML = `<div id="bmi-no">${bmi}</div>
                <div id="status" class="${result.class}">${result.status}</div>
                <div id="risk">Health Risk: ${result.risk}</div>
                <div id="bar">
                    <div id="bar-progress"></div>
                </div>`
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let height =Number(heightInput.value);
    let weight = Number(weightInput.value);

    if(!height || !weight)  return;
    const bmi = calcBmi(height, weight);

    renderResult(bmi);

})

