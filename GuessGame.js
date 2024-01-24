let rannum=Math.floor(Math.random() *20) +1;
     let score=20;
     function guessing(){
        const numberinput=document.getElementById('number').value;
        let Highscore;
        if(numberinput==rannum){
            Score=score-1;
            document.getElementById('result').innerHTML='You Win';
            document.getElementById('number').style.backgroundColor='green'
            document.getElementById('qm').innerHTML=`${rannum}`;
            document.getElementById('score').innerHTML=`score : ${score}`;
            document.getElementsByTagName("body")[0].style.backgroundColor='green';
            Highscore=score;
            if(Highscore>score)
            {
                document.getElementById('hscore').innerHTML=`highscore : ${score}`;
            }
            else
            {
                document.getElementById('hscore').innerHTML=`highscore : ${Highscore}`;

            }

        }
        else if(numberinput<1 || numberinput>20){
            document.getElementById('result').innerHTML='Please Enter the Number between 1 to 20'
            score=score-1;
            document.getElementById('score').innerHTML=`score : ${score}`;

        }
        else if(numberinput>rannum)
        {
            document.getElementById('result').innerHTML='Too High';
            score=score-1;
            document.getElementById('score').innerHTML=`score : ${score}`;
        }
        else if(numberinput<rannum)
        {
            document.getElementById('result').innerHTML='Too Low';
            score=score-1;
            document.getElementById('score').innerHTML=`score : ${score}`;
        }
        else
        {
            document.getElementById('result').innerHTML='Please Enter a Valid Number';
        }
        if(score<=0){
            document.getElementById('result').innerHTML='You Lost';
            Highscore=math.max(Highscore,score);
            score=20
        }
        
     }
     const newgame=document.getElementById('reset');
     function reset() {
        rannum= Math.floor(Math.random() *20) +1;
         score=20;
         document.getElementById('result').innerHTML='please check number';
         document.getElementById('score').innerHTML=`score : ${score}`;
         document.getElementById('qm').innerHTML='?';
         document.getElementsByTagName("body")[0].style.backgroundColor='black';
         document.getElementById('number').style.backgroundColor='black'
         document.getElementById('number').value='';  
     }
    