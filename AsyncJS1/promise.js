const prom1= new Promise(function(resolve, reject){
    //Any Async Operations like Db Calls, setTimeout, setInterval etc etc.
    setTimeout(function(){
        console.log("Prom1 Executed.")
        resolve();
    },1000)
})

prom1.then(function(){
    console.log("Prom1 Resolved.")
})

//End1

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Prom2 Executed")
        resolve();
    },1000)

}).then(function(){
    console.log("Prom2 Resolved.")})

//End2

// Inserting Parameters in resolve() and then()
const prom3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Prom3 Executed")
        resolve({username:"shivv", email:"marrishivani23@gmail.com"});
    },1000)
})

prom3.then(function(user){
    console.log(user.email)
})

//End3 

const prom4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"shivv", email:"marrishivani23@gmail.com"});
        }
        else{
            reject("ERROR: SOMETHING WENT WRONG")
        }
        
    },1000)
})

//  const myname= prom4.then((user) =>{
//     console.log(user);
//     return user.username
// })
// console.log(myname)

prom4.then((user) =>{
    console.log(user);
    return user.username
})
.then((myname) =>{
    console.log(myname)
})
.catch((error)=>{
    console.log(error)
})
.finally(() =>{
    console.log("The Promise is either resolved or rejected. But, This statement always gets executed.")
})

//End 4

const prom5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"JS", learning:"yes"});
        }
        else{
            reject("LEARNING STOPPED. SOMETHING WENT WRONG")
        }
        
    },1000)
})
//USAGE OF async AND await. Similar to then,catch.

// ******CHECK THIS******
// async function consumeProm5(){
//      const response= await prom5
//      console.log(response);
// }

async function consumeProm5(){
    try {
        const response= await prom5
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumeProm5()

//End5

//using async await

// async function getallUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log('My error')
//     }
// }
// getallUsers()


//using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    console.log('My Erroooor')
})



