let pawn_black=document.createElement("img");
    pawn_black.src="./chessimage/pawnblack.png";
    pawn_black.alt="blackPawn";
    pawn_black.style.width="90%"
    pawn_black.style.height="100%"

// let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

//     let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

//     let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

//     let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

//     let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

//     let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

// let pawn_black=document.createElement("img");
//     pawn_black.src="./chessimage/pawnblack.png";
//     pawn_black.alt="blackPawn";
//     pawn_black.style.width="90%"
//     pawn_black.style.height="100%"

let kinght_black_L=document.createElement("img");
    kinght_black_L.src="./chessimage/Knightblack.png";
    kinght_black_L.alt="knightblack";
    kinght_black_L.style.width="90%"
    kinght_black_L.style.height="100%"

let kinght_black_R=document.createElement("img");
    kinght_black_R.src="./chessimage/Knightblack.png";
    kinght_black_R.alt="knightblack";
    kinght_black_R.style.width="90%"
    kinght_black_R.style.height="100%";

let rook_black_L=document.createElement("img");
    rook_black_L.src="./chessimage/Rookblack.png";
    rook_black_L.alt="rookblack";
    rook_black_L.style.width="90%"
    rook_black_L.style.height="100%";

let rook_black_R=document.createElement("img");
    rook_black_R.src="./chessimage/Rookblack.png";
    rook_black_R.alt="rookblack";
    rook_black_R.style.width="90%"
    rook_black_R.style.height="100%";

let bishop_black_L=document.createElement("img");
    bishop_black_L.src="./chessimage/bishopblack.png";
    bishop_black_L.alt="bishopblack";
    bishop_black_L.style.width="90%"
    bishop_black_L.style.height="100%";

let bishop_black_R=document.createElement("img");
    bishop_black_R.src="./chessimage/bishopblack.png";
    bishop_black_R.alt="bishopblack";
    bishop_black_R.style.width="90%"
    bishop_black_R.style.height="100%";

let queen_black=document.createElement("img");
    queen_black.src="./chessimage/queenblack.png";
    queen_black.alt="queenblack";
    queen_black.style.width="90%"
    queen_black.style.height="100%"

let king_black=document.createElement("img");
    king_black.src="./chessimage/kingblack.png";
    king_black.alt="kingblack";
    king_black.style.width="90%"
    king_black.style.height="100%"

    
document.getElementById("a1").append(rook_black_L);
document.getElementById("b1").append(kinght_black_L);
document.getElementById("c1").append(bishop_black_L);
document.getElementById("d1").append(king_black);
document.getElementById("e1").append(queen_black);
document.getElementById("f1").append(bishop_black_R);
document.getElementById("g1").append(kinght_black_R);
document.getElementById("h1").append(rook_black_R);


let temp;

let a1=document.getElementById("a1");
    a1.addEventListener("click",()=>{
        temp=a1.innerHTML;
        console.log(temp)
    })

let a2=document.getElementById("a2");

    a2.addEventListener("click",()=>{
        a1.innerHTML=null;
        a2.innerHTML=temp;
    })



