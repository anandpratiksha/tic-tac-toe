var count = 1; //Initial value for moves will be starting from 1
var current="X"; 
var sp1 = 0;
var sp2 = 0;
function Main(fill){
    player(); //player function will show the turn of the player.
    if(count <= 9){ //when count will less than equals to 9 then do the following things.
        if(fill.innerHTML == ""){ //If the box is empty
            fill.innerHTML = (current == "X") ? "X" : "O"; //Then the ternary operator will check if the current value is X then put the value in box
            count++;
            changeplayer();
            if(checkWinner()){ //Conditions to find our winner
                if(fill.innerHTML == "X"){ //if the value of box is 'X'
                    let name1 = document.getElementById("demo1").value;
                    document.getElementById("win").innerHTML = name1 +" is the winner !!";
                    score1(); //Score function will display points of winner
                    count = 10; //alters and assigns count value to be 10, which is end of total count and end of game.
                    return fill ; //when a person wins a game he/she cannot play unless & until they reset or restart the game(In short the box will get disable)
                } else if (fill.innerHTML == "O"){
                    let name2 = document.getElementById("demo2").value;
                    document.getElementById("win").innerHTML = name2 +" is the winner !!";
                    score2();
                    count = 10;
                    return fill;
                } 
            } 
            if (count === 10) {
                document.getElementById("win").innerHTML = "Its a tie !!";
            }
        }
    } 
}    

//function to change the player from 'X' to 'O'
function changeplayer(){ 
        current = (current == "X") ? "O" : "X";
    }

    //function to get the name/turn of the player
function player(){ 
    if(count % 2 == 0){
        let name1 = document.getElementById("demo1").value;
        document.getElementById("player").innerHTML = name1 +"'s Turn !!";
    }else{
        let name2 = document.getElementById("demo2").value;
        document.getElementById("player").innerHTML = name2 +"'s Turn !!";
    }
    }

    //getdata function is used to retrieve data.
function getdata(get){ 
    return document.getElementById(get).innerHTML;
    }

    //checkCondition function will check values that whether they are same or not ,if same then return true.
function checkCondition(s1,s2,s3){
    if(getdata(s1)!="" && getdata(s2)!="" && getdata(s3)!="" && getdata(s1)==getdata(s2) && getdata(s2)==getdata(s3) && getdata(s3)==getdata(s1)){
        return true;
    }
}

//checkwinner function will check all the possibility in the box to get a winner
function checkWinner(){
    if(checkCondition('s1','s2','s3') || checkCondition('s4','s5','s6') || checkCondition('s7','s8','s9') || checkCondition('s1','s4','s7') || checkCondition('s2','s5','s8') || checkCondition('s3','s6','s9') || checkCondition('s1','s5','s9') || checkCondition('s3','s5','s7')){
        return true;    
    }
}

//reset1 function to reset the values of board
function reset1(){
    for(let i=1; i<=9; i++){
        document.getElementById('s'+i).innerHTML="";
        document.getElementById('win').innerText="Winner:";
        document.getElementById('player').innerHTML="'s Turn !!";
        current="X";
}count = 1;
}

//reset2 function to reset the whole game
function reset2(){
    for(let i=1; i<=9; i++){
        document.getElementById('s'+i).innerHTML="";
        document.getElementById('win').innerText="Winner:";
        current="X";
        document.getElementById('player').innerHTML="'s Turn !!";
        document.getElementById('box1').innerHTML="0";
        document.getElementById('box2').innerHTML="0";
        document.getElementById('demo1').value = '';
        document.getElementById('demo2').value = '';
    } count = 1 ;
}

//demo function will store the name of player's in  local storage
function demo() {
    let n1=document.getElementById("demo1").value ;
    localStorage.setItem("name1",n1);
    let n2=document.getElementById("demo2").value  ;
    localStorage.setItem("name2",n2);
    let name1 = document.getElementById("demo1").value;
    document.getElementById("player").innerHTML = name1 +"'s Turn !!";
}

//Score function will display the points of game after he/she wins the game
function score1(){
    document.getElementById('box1').innerHTML = sp1 + 1;
     sp1++;
}
function score2(){
    document.getElementById('box2').innerHTML = sp2 + 1;
     sp2++;
}
