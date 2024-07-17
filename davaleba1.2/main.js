

function tem( Fahrenheit,Celsius){ 
    if(typeof Fahrenheit==='string' ) {return false}
    if(typeof Celsius ==='string' ) {return false}
    return Celsius
    



}


console.log(tem(1,180))
console.log(tem('dd',180))