const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = function(name){
    return (cats.push("Ralph"))
}

const destructivelyPrependCat = function(name){
    return (cats.unshift("Bob"))
}

const destructivelyRemoveLastCat = function(){
    return (cats.pop())
}
  
const destructivelyRemoveFirstCat = function(){
    return (cats.shift())
}

const appendCat = function(name){
    const appendCat = [...cats, "Broom"]
    return appendCat
}


const prependCat = function(name){
    const  prependCat = ["Arnold", ...cats]
    return  prependCat
}
 
const removeLastCat = function(){
    const removeLastCat = [...cats, ]
    return (removeLastCat.splice(0, 2))
}
  
const removeFirstCat = function(){
    const  removeFirstCat = [...cats, ]
    return (removeFirstCat.splice(1))
}
  