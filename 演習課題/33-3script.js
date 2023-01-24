document.write("問１");
document.write("<br>");
//関数名をmensekiとつけ、引数に計算式の要素hankeiを入れる
function menseki ( hankei){
    //戻り値として円の面積を求める数式を指定
    return "面積は"+parseInt(hankei*hankei*3.14)+"㎠です。<br>";
}
document.write(menseki(5));
document.write(menseki(7));
document.write(menseki(10));
document.write("<br>");

document.write("問２");
document.write("<br>");
//関数名をryokinとし、引数はotona,kodomoの人数をそれぞれ計算式の要素とする
function ryokin(otona,kodomo){
    //戻り値として、引数とそれぞれの料金を結果として表示
    return "グループの合計金額"+((otona*500)+(kodomo*200))+"円です。<br>";
}
//Aのグループは大人２人、子供４人であるため、引数を2,4と処理
document.write("A"+ryokin(2,4));
document.write("B"+ryokin(1,5));
document.write("C"+ryokin(3,7));
