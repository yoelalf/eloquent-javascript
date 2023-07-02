
TriangleHash = () =>{
    let row = 7;
    let hash = '';
    for(let i = 0; i < row;i++){
        hash += '#'
        console.log(hash)
    }
}
TriangleHashCustom = () =>{
    let row = 5;
    let col = 3;
    let hash = [``];
    for(let i = 0; i < row;i++){
        for(let j=0; j<col;j++){
            hash.push(`#`)
        }
        let hashNew = hash.join('')
        console.log(hashNew)
        hash = [``]
    }
}

FizzBuzz = () =>{
    for(let i = 1;i<=100;i++){
        if((i % 3 === 0) && (i % 5 === 0))
        {
            console.log("FizzBuzz")
        }
        else if(i % 3 === 0)
        {
            console.log('Fizz')
        }
        else if(i % 5 === 0 )
        {
            console.log('Buzz')
        }
        else
        {
            console.log(i)
        }
    }
}

ChessBoard = () =>{
    let row = 8;
    let hash = [];
    for(let i =0; i< row;i++){
        for(let j=0;j<row;j++){
            if((i+1) % 2 == 0){
                if((j+1) % 2 == 0){
                    hash[j] = ``
                }else{
                    hash[j] = '#'
                }
                
            }else{
                if((j+1) % 2 == 0){
                    hash[j] = `#`
                }else{
                    hash[j] = ''
                }
            }
        }
        console.log(hash.join(" "))
        hash = []
        
    }  

}