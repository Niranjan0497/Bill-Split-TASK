function billSplit(){
const inputvalue = document.getElementById('inputvalue').value;
const noofpersons = document.getElementById('noofpersons').value;
const centralGST = document.getElementById('centralGST')
const stateGST = document.getElementById('stateGST')
const discountOnBill=document.getElementById('discountOnBill').checked
const outputValue = document.getElementById('outputValue')

    if(inputvalue==="" || noofpersons===""){
        alert("Enter a input fileds")
    }else if(inputvalue <=0 || isNaN(inputvalue)){
       
        document.getElementById('inputvalue_alret').style.visibility = "visible"
    }else if(noofpersons <=1 || isNaN(noofpersons)){
        document.getElementById('noofpersons_alret').style.visibility = "visible"
    }else if(inputvalue <= 100){
        centralGST.innerHTML = "CGST: ZERO TAX";
        stateGST.innerHTML = "SGST: ZERO TAX";
        let originalOutput = Math.round(inputvalue / noofpersons);
        if (discountOnBill) {
            outputValue.value = Math.round(originalOutput * 0.95); // Applying 5% discount
        } else {
            outputValue.value = originalOutput;
        }
    }
    else{
        let cgst = inputvalue * 0.1;
        centralGST.innerHTML = `CGST: ${cgst}`;
        let sgst = inputvalue * 0.1;
        stateGST.innerHTML = `SGST: ${sgst}`;
        let originalOutput = Math.round(inputvalue / noofpersons);
        if (discountOnBill) {
            outputValue.value = Math.round(originalOutput * 0.95); // Applying 5% discount
        } else {
            outputValue.value = originalOutput;
        }
        
    }
    document.getElementById('inputvalue').value="";
    document.getElementById('noofpersons').value="";

}
