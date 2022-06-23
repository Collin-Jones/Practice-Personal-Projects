'use strict';

//Global Scope
function calcAge(birthYear){
    const age = 2037 - birthYear

    function printAge(){
        let output = `${firstName},you are ${age}, born in ${birthYear}`
        console.log(output)

        //Inner scope
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Collin'
            const str = `Oh, and you're a millenial, ${firstName}`

            function add(a, b){
                return a + b
            }
            output = 'NEW OUTPUT'
        }
        console.log(output)
    }
    printAge();

    return age;
}


//Global Variable
const firstName = 'Jonas';
calcAge(1997);