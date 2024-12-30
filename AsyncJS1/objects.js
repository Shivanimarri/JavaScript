function multiply(num){
    return num*6
}
multiply.power= 3 //Object behaviour
console.log(multiply(4))
console.log(multiply.power)
console.log(multiply.prototype)



function drinks(drink_name, price){
    this.drink_name= drink_name
    this.price= price
}

drinks.prototype.increment= function(){
    this.price++
}
drinks.prototype.display= function(){
    console.log(`The price is:${this.price}`)
}

dr1= new drinks('juice',65)
dr2= drinks('coffee',36)

dr1.display()
dr2.display() //Error



