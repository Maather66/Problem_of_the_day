const countUpperAndLower=(S)=>{
    let counter = 0;
    for (let x=0; x < S.length ; x++)
    {
        let upper = 0;
        let lower = 0;
        for (let y=x; y < S.length; y++)
        {
            if(S[y] >= 'A' && S[y]<='Z')
            {
                upper++
            }
            else if(S[y] >= 'a' && S[y] <= 'z'){
                lower++
            }    
            if(upper === lower){
                counter++
                    console.log(`substring: ${S.substring(x,y+1)}`);
                }
            }
        }
        return counter;
    } 
let word = "WomensDAY";
console.log(countUpperAndLower(word))