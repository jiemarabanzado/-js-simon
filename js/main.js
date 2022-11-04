//variabili globali
let says=[];
//functions
function Genera(){
    document.getElementById('Gen-Num').style.display='none';
    let NumRow=document.getElementById('Original');
    for (let index = 0; index <5; index++) {
        let here=true;
        while(here){
            let a= parseInt(Math.random()*100+1);
            if(says.includes(a)){
                here=true;
            }else{
                let element=document.createElement('div');
                says[index]=a;
                here=false;
                element.innerHTML=says[index];
                NumRow.append(element);
                element.classList.add('original-num');
            }
        }
        
    }
    console.log(says)
    StartCountDown();
}
function StartCountDown(){
    setTimeout(CountDown, 5000);
}
function CountDown(){
    document.getElementById('Original').style.display='none';
}


//Funzioni Generiche e comportamenti di base
document.getElementById('Gen-Num').addEventListener('click',Genera);

