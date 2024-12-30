//Generate Random Colors 
const randomColor= function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0; i<6; i++){
        color+= hex[Math.round(Math.random() * 16)]
    }
    return color;
}


let startOpr;

const startChangingColor= function(){
   if(!startOpr)
    {
        startOpr= setInterval(changeBgColor,1000)
        console.log("Operation Started.")
    }
   
   function changeBgColor()
   {document.body.style.backgroundColor = randomColor()}
};

const stopChangingColor= function(){
    clearInterval(startOpr)
    startOpr = null;
    console.log("Operation Stopped.")
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)