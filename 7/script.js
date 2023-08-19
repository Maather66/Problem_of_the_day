a = [17,8,3,4];
A=[];
    if(a[0]>=a[1] && a[0]>=a[2] && a[0]>=a[3]){
        A.push(a[0]);
        console.log("num added 1 ");
        if(a[1]>=a[2] && a[1]>=a[3]){
                A.push(a[1]);
        console.log("num added 2 ");
        if(a[2]>=a[3]){
            A.push(a[2]);
            console.log("num added 3 "); 
    }
    }
}
    A.push(a[3])
    console.log(A)