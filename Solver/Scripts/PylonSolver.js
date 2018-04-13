function gRotate(pT, gT) {
    var turns = gT - pT;
    if (turns > 3) {
        turns = turns - 6;
    }
    if (turns < -3) {
        turns = turns + 6;
    }
    return turns;
}

function gDir(n) {
    var text = "";
    if (n == 0) {
        return "ERROR";
    }
    else if (n < 0) {
        n *= -1;
        text = n + "x Right";
    } else {
        text = n + "x Left";
    }
    return text;
}
function solve() {
    var s1 = gRotate($("#l1").val(), $("#m1").val());
    var s2 = gRotate($("#l2").val(), $("#m2").val());
    var s3 = gRotate($("#l3").val(), $("#m3").val());
    var s4 = gRotate($("#l4").val(), $("#m4").val());

    $("#s1").val(gDir(s1));
    $("#s2").val(gDir(s2));
    $("#s3").val(gDir(s3));
    $("#s4").val(gDir(s4));

    $("#sAll").val($("#s4").val() + ", " + $("#s3").val() + ", " + $("#s2").val() + ", " + $("#s1").val());
}