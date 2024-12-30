const form = document.querySelector("form");
//This usecase will consider empty values.
//const height= parseInt(document.getElementById('height').value)

form.addEventListener('submit', function(e){
    e.preventDefault() 

    const height= parseInt(document.getElementById('height').value)
    const weight= parseInt(document.getElementById('weight').value)

    const results= document.getElementById('results')
    let bmi;

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML= "Please enter valid Height"
    }

    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML= "Please enter valid Weight"
    }
    else{
        bmi= (weight/((height*height)/10000)).toFixed(2);
        //show the result 
        results.innerHTML= `<span>${bmi}</span>`
    }
    const final= document.getElementById('final')
    if (bmi<18.6){
        final.innerHTML= "UnderWeight"
    }
    else if(bmi>=18.6 && bmi<=24.9){
        final.innerHTML = "Normal Range"
    }
    else{
        final.innerHTML= "OverWeight"
    }
})