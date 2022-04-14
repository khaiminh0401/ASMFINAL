var arrsp = new Array();
function themvaogiohang(x) {
    var nodeSP = x.parentElement.parentElement;
    var id = nodeSP.children[2].id;
    var kt = false;
    var soluong = nodeSP.children[3].children[1].value;
    if (capnhat(id,soluong) == false) {
        var hinh = nodeSP.children[0].src;
        var giasp = nodeSP.children[3].children[0].innerText;
        var tensp = nodeSP.children[2].innerHTML;
        var sp = [id, hinh, tensp, soluong, giasp];
        arrsp.push(sp);
        sessionStorage.setItem("sp", JSON.stringify(arrsp));
        console.log(...arrsp);
        demgiohang();
    } else{
        soluong++;
        nodeSP.children[3].children[1].value= soluong;
    }
    nodeSP.children[3].children[1].value = 1;
}
function demgiohang() {
    var a = JSON.parse(sessionStorage.getItem("sp"));
    sessionStorage.setItem("countsp",a.length);
    document.getElementById("countsp").innerText = a.length;
}

function capnhat(x, y) {
    var t = false;
    for (var i = 0; i < arrsp.length; i++) {
        if (arrsp[i][0] == x) {
            arrsp[i][3] = Number(arrsp[i][3]);
            arrsp[i][3] +=Number(y);
            sessionStorage.setItem("sp", JSON.stringify(arrsp));
            console.log(...arrsp);
            return true;
        }
    }
    return t;
}