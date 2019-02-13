{[ jsx js array]}

Map
// Runs the fxn on each item of the array and gives you a new array
{myFruits.map(function(name) {
    return <BlankComponent name={name} key=(`fruit-component-${name}`)/>
})}


.join('')