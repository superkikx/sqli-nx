
/* 
    Javascript
    * Imperatif
    * fonctionnel
    * Objet - Protoptypal
*/

/* const modele = Object.freeze({
    name: 'MODEL',
    greet(){
        console.log(this.name)
    }
})

const user1 = {
    __proto__:modele,
    name: 'Bob',
}

const user2 = {
    __proto__:modele,
    name: 'Ben',
    greet(){
        console.log('BAZINGA',this.name)
    } 
} */


/* function User(name){
    // new -> this = {constuctor:User, __proto__:User.prototype}
    this.name = name;
}
User.prototype.greet = function(){
    console.log(this.name)
} */

class Basic{
    greet(){
        console.log(this.name)
    }
}

class User extends Basic{
    constructor(name){
        super();
        this.name = name;
    }
}


const user1 = new User('Ben')
const user2 = new User('Bob')

console.log(user1,user2.constructor)
console.log(User.prototype.greet)

user1.greet()
user2.greet() 
console.log(user2.toString() )

// console.log(user1.greet === user2.greet)