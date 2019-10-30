

# JavaScript

> ON considere un projet comme étaant ES5 ou ES6/2015

## ES2015

* `import` / `export`
* `let, const, class, =>`

Dans ce cas ne plus utiliser `var`

### Destructuration 

Extraire des clé d'un tableau ou objet

```js

const colors = ['blue','red','green'];
const user = {
    age:43,
    name:'Bob'
}

//const background = colors[2]
const [,,background] = colors;

// const age = user.age;
const {age} = user;

```

## Tips JavaScript

* `debugger`
* Scope : `global(window), module ,function, block`
* keyword `this` : Evaluer dnamiquer a chaque exécution de `function` mais pas pour les `=>`
* `callback` - Asynchronicité - (perf, monostack, monothread, callback queue)
    * Event
    * Promise
    * Observable (Communauté)