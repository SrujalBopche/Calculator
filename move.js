function solve(val) {
    var res = document.getElementById("txt");
    res.value += val;
}
function Clear() {
    var c = document.getElementById('txt');
    c.value = '';
}

function result() {
    var n1 = document.getElementById("txt").value;
    var n2 = eval(n1);
    document.getElementById("txt").value = n2;
}

function backspace(){
    var val = document.getElementById("txt");
    val.value = val.value.slice(0, -1);
}