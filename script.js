{
    let patterns=[[11,12,13],[11,22,33],[11,21,31],[12,22,32],[13,22,31],[13,23,33],[21,22,23],[31,32,33]];
    let selected=document.querySelectorAll('.col-4');
    let first_player=[];
    let second_player=[];
    let flag=1;
    let count=0;
    let containor=document.getElementById('containor');
    let players=document.getElementsByClassName('col-5');
    let message=document.getElementById('end');
    let mss=document.getElementById('mss');
    players[0].classList.add('col-6');
    for(let i=0;i<selected.length;i++){
        selected[i].addEventListener('click',function(){
          
           
            if(flag){
                players[1].classList.add('col-6');
                selected[i].classList.add('disabled');
                players[0].classList.remove('col-6');
                flag=0;
                let first=parseInt(selected[i].innerHTML);
                first_player.push(first);
                selected[i].innerHTML=`<img src='tick.png'>`;
               
            }else{
                players[1].classList.remove('col-6');
                players[0].classList.add('col-6');
                selected[i].classList.add('disabled');
                let second=selected[i].innerHTML;
                second_player.push(second);
                selected[i].innerHTML=`<img src='cross.webp'>`;
                flag=1;
            }
            check();
            ++count;
            if(count==9 && containor.style.visibility!='hidden'){
              message.style.visibility='visible';
              containor.style.visibility='hidden';
              mss.innerHTML='Game draw:';
             }
        })
    }



    //checking the inputs of players....
    function check(){
        patterns.forEach((item)=>{
          let a=0;
         for(let i=0;i<item.length;i++){
            if(!flag){
             for(let j=0;j<first_player.length;j++){
                if(item[i]==first_player[j]){
                  a++;
                  if(a==3){
                 visibl();
                  mss.innerHTML='Player-1 has won the game:';}
                }  
              }
            }else{
                for(let j=0;j<second_player.length;j++){
                   if(item[i]==second_player[j]){
                     a++;
                     if(a==3){
                     visibl();
                      mss.innerHTML='Player-2 has won the game:';
                     }
                   }  
                 }
               }
          }   
        })
       }
       //visivility function ..
       function visibl(){
        message.style.visibility='visible';
        containor.style.visibility='hidden';
       }
}