const startGame=()=>{
document.getElementById("a1").append(rook_black_L);
document.getElementById("b1").append(kinght_black_L);
document.getElementById("c1").append(bishop_black_L);
document.getElementById("d1").append(king_black);
document.getElementById("e1").append(queen_black);
document.getElementById("f1").append(bishop_black_R);
document.getElementById("g1").append(kinght_black_R);
document.getElementById("h1").append(rook_black_R);
document.getElementById("a2").append(pawn_black_1);
document.getElementById("b2").append(pawn_black_2);
document.getElementById("c2").append(pawn_black_3);
document.getElementById("d2").append(pawn_black_4);
document.getElementById("e2").append(pawn_black_5);
document.getElementById("f2").append(pawn_black_6);
document.getElementById("g2").append(pawn_black_7);
document.getElementById("h2").append(pawn_black_8);

//-------------------------------------------white----------------
document.getElementById("a8").append(rook_white_L);
document.getElementById("b8").append(kinght_white_L);
document.getElementById("c8").append(bishop_white_L);
document.getElementById("d8").append(king_white);
document.getElementById("e8").append(queen_white);
document.getElementById("f8").append(bishop_white_R);
document.getElementById("g8").append(kinght_white_R);
document.getElementById("h8").append(rook_white_R);
document.getElementById("a7").append(pawn_white_1);
document.getElementById("b7").append(pawn_white_2);
document.getElementById("c7").append(pawn_white_3);
document.getElementById("d7").append(pawn_white_4);
document.getElementById("e7").append(pawn_white_5);
document.getElementById("f7").append(pawn_white_6);
document.getElementById("g7").append(pawn_white_7);
document.getElementById("h7").append(pawn_white_8);
}
startGame()

let arr=['a','b','c','d','e','f','g','h'];

let prevId;
let prevHtml;
let currentId;

for(let i=1; i<=8; i++){
    for(let j=0; j<arr.length; j++){
        document.getElementById(`${arr[j]}${i}`).addEventListener('click', ()=>{
            currentId=`${arr[j]}${i}`

            if(prevId==undefined){
                prevId=`${arr[j]}${i}`;
                prevHtml=document.getElementById(prevId).innerHTML;
            }
            else{
              document.getElementById(prevId).innerHTML=null;
              document.getElementById(currentId).innerHTML=prevHtml; 
              prevId=undefined; 
            }
            
        });
        
    }
}


