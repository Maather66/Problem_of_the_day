const array=[];
const a =(n)=>{

for ( let i = 0 ; i < n ; i++){
    const element = prompt("Enter item "+ (i+1) + " :");
    array.push(element)
}
const reverse = array.reverse();

console.log(reverse)
}

a(3)