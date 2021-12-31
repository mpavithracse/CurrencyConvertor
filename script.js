var currency1=document.getElementById("currency1");
var currency2=document.getElementById("currency2");



//to get currecny 
var getcurrencies =async ()=>{
var rep = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json");
var data = await rep.json();
var currencies1=Object.entries(data);
for (let[currencykey,currencyvalue] of currencies1)
{
    var currencyoption = document.createElement("option")
    currencyoption.text=currencyvalue;
    currencyoption.value=currencykey;
    currency1.appendChild(currencyoption);
}

var currencies2=Object.entries(data);
for (let[currencykey,currencyvalue] of currencies2)
{
    var currencyoption = document.createElement("option")
    currencyoption.text=currencyvalue;
    currencyoption.value=currencykey;
    currency2.appendChild(currencyoption);
}
}

getcurrencies();

//convert currency values
let convertcurrency= async()=>{
    let selectedcurrency1=document.getElementById("currency1").value;
    let selectedcurrency2=document.getElementById("currency2").value;
    let amount1= document.getElementById("amount1").value;
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedcurrency1}/${selectedcurrency2}.json`
    let resp = await fetch(url);
    let data = await resp.json();
    let result = data[selectedcurrency2];

    console.log(amount1*result);
    var ptag = document.getElementById("result");
    ptag.innerText =    `Result is ${amount1*result} ${selectedcurrency2}`;

}
