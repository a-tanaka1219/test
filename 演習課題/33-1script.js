// 変数aに１を代入する
document.write("問１");
document.write("<br>");
var a =1;
while(a <= 5){
    document.write("★");
    a++;
}
document.write("<br>");
document.write("<br>");

//変数star1を宣言し、１を代入し、３未満までループ、変数は１つづつ増加
document.write("問２");
document.write("<br>");
for(var star1 = 0; star1 < 2 ; star1++){
    //変数star2を宣言し、１を代入、2以下（2を含む）までループ、変数は１つづつ増加
    for(var star2 = 0; star2 <=2; star2++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//
document.write("問３");
document.write("<br>");
//変数star3に１を代入、２以下（２を含む）までループ、変数を１つづつ増加
for(var star3 = 0; star3 <= 1; star3++){
    //変数star4に１を代入、５以下（５を含む）までループ、変数を１づつ増加
    for(var star4 = 0; star4 <= 4; star4++){
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問４");
document.write("<br>");
for (var star5 = 0; star5 < 4; star5++){
    for (var star6 = 0; star6 <= 4; star6++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問５");
document.write("<br>");
for (var star7 =0; star7 <= 3; star7++ ){
    for (var star8 =0; star8 < 3; star8++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問６");
document.write("<br>");
for(var no1 =0; no1 < 3; no1++){
    for(var no2 = 0; no2 < 3 ; no2++){
        //no2を２で割った時あまりが０だった場合のみ☆を表示
        if(no2 % 2 ==0){
            document.write("★");
        }
        //割り切れなかった場合★を表示
        else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問７");
document.write("<br>");
for (var no3 = 0; no3 < 4; no3++){
    for (var no4 =0; no4 <= 4; no4++){
        //no4を２で割り切れた場合のみ☆を表示
        if(no4 % 2 ==0){
            document.write("★");
        }
        //割り切れなかった場合★を表示
        else{
            document.write("☆");
        }
    }document.write("<br>");
}
document.write("<br>");

document.write("問８");
document.write("<br>");
//変数zに１を代入、６以下までループ、変数は１つづつ増加
for(var z=0; z <= 4; z++){
    for(var y=0; y <= z; y++){
        //変数zが変数yより大きかった場合★を表示
       document.write("★");
    }
    document.write("<br>");
}
