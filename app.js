Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(e1)=>{
        if(e.value.length >0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";
        }
        else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";
        }
    })
})
var card = document.
querySelectorAll('.card');
var btn=document.querySelector
('.btn');
var currenting=4
btn.addEventListener('click',function(){
    for(var i=currenting; i<currenting+4;i++){
        if(card[i]){
            card[i].style.display='inline-block';
        }
    }
    currenting+=4;
})