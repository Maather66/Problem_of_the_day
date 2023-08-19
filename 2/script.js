var a = [2,1,6,8,3,9,3,4,6];
function Sum(n){
for(i=0;i<=8;i++){
    for(j=0;j<=8;j++){
    if(a[i]+a[j] == n){
        console.log(a[i]+" and "+a[j])
    }
}
}
}

Sum(4)