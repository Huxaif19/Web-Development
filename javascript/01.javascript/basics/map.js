//map data type


var maps = new Map(); 
maps.set(0, "Zero")
maps.set(1, "one")
maps.set(2, "two")
maps.set(3, "three")
maps.set(4, "four")

console.log(maps)



//accessing the values
for(let value of maps.values())
{
    console.log(value)
}
for(let [key, value] of maps)
{
    console.log(key + ":" + value)
}

maps.forEach((element) => {
    console.log(element)  // gives the values not the keys
});
maps.forEach((v,k) => {
    console.log(v + k)  
});


maps.delete(2)   // key with the value 2 
console.log(maps)