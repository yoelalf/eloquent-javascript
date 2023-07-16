const H2_RESULT = document.querySelector('#result');

//RESULT FUNCTION
//Chapter 2 - Program Structure
ShowResult = (result) =>{
    const initialElement = document.createElement("h2");
    const textNode = document.createTextNode(result);
    initialElement.appendChild(textNode);
    H2_RESULT.appendChild(initialElement);
}

ClearResult = () => {
    if(H2_RESULT.innerHTML != ''){
        H2_RESULT.innerHTML = ''
    }
}


TriangleHash = () =>{
    ClearResult();
    let row = 7;
    let hash = '';
    for(let i = 0; i < row;i++){
        hash += '#'
        ShowResult(hash)
    }
}
TriangleHashCustom = () =>{
    ClearResult();
    const row = parseInt(document.querySelector('#th-rows').value)
    const col = parseInt(document.querySelector('#th-cols').value)
    let hash = [``];
    for(let i = 0; i < row;i++){
        for(let j=0; j<col;j++){
            hash.push(`#`)
        }
        let hashNew = hash.join('')
        ShowResult(hashNew)
        hash = [``]
    }
    document.querySelector('#th-rows').value = ''
    document.querySelector('#th-cols').value = ''
}

FizzBuzz = () =>{
    ClearResult();
    for(let i = 1;i<=100;i++){
        if((i % 3 === 0) && (i % 5 === 0))
        {
            ShowResult(`${i} - Fizz Buzz`)
        }
        else if(i % 3 === 0)
        {
            ShowResult(`${i} - Fizz`)
        }
        else if(i % 5 === 0 )
        {
            ShowResult(`${i} - Buzz`)
        }
        else
        {
            ShowResult(`${i}`)
        }
    }
}

ChessBoard = () =>{
    ClearResult();
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

//More Concise Solutions to Chessboard
ChessBoardConcise = () =>{
    ClearResult();
    var size = 8; //this is the variable setting

    var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

    for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
    for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
        if ((x + y) % 2 == 0)
        board += " ";
        else
        board += "#";
    }
    board += "\n";
    }
}


//Chapter 3 - Functions
Power = () =>{
    ClearResult()
    const numPower = parseInt(document.querySelector('#num-pow').value)
    ShowResult(numPower * numPower)
}

Factorial = () =>{
    ClearResult()
    const numFact = parseInt(document.querySelector('#num-fact').value)
    let result = 0;
    const FactorialFuntion = (n) =>{
        if(n === 1) return 1;
        return n * FactorialFuntion(n - 1)
    }
    result = FactorialFuntion(numFact)
    ShowResult(result)
    
}