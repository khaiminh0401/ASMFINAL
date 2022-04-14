var x = sessionStorage.getItem("sp");
var a = JSON.parse(x);
var arrkh = new Array();
function ss() {
    var nf = new Intl.NumberFormat();
    var tongtt = 0;
    var ttgh = "";
    var n = a.length;
    if(n==0){
        document.getElementById("myBtn").disabled = true;
    }
    for (var i = 0; i < n; i++) {
        var x = a[i][4].split(".").join("");
        var tt = Number(a[i][3]) * Number(x);
        tongtt += tt;
        ttgh += `
<tr align="center">
<td id="stt">${i + 1}</td>
<td><img src='${a[i][1]}' width="100px" height="100px"></td>
<td id="${a[i][0]}">${a[i][2]}</td>
<td><input type="number" min="1" max="10" value="${a[i][3]}" onchange="doisl(this);"></td>
<td>${a[i][4]}</td>
 <td id="tt">${nf.format(tt)}</td>
 <td><button type="button" onclick="xoa(this)">Xóa</button></td>
</tr>
`
    }
    ttgh += `
<tr id="tongtt" align="center">
<td colspan="5">Tổng đơn hàng</td>
<td id="ttt" colspan="2">${nf.format(tongtt)}</td>
</tr>
`;
    document.getElementById("mycart").innerHTML = ttgh;
}



function doisl(x) {
    var sl = x.value;
    var id = x.parentElement.parentElement.children[2].id;
    var gia = Number(x.parentElement.parentElement.children[4].innerText.split(".").join(""));
    for (var i = 0; i < a.length; i++) {
        if (a[i][0] == id) {
            a[i][3] = Number(a[i][3]);
            a[i][3] = sl;
        }
    }
    sessionStorage.setItem("sp", JSON.stringify(a));
    var nf = new Intl.NumberFormat();
    var tt = x.parentElement.parentElement.children[5];
    tt.innerText = nf.format(sl * gia);
    var ttt = document.getElementById("ttt");
    var soluong = document.querySelectorAll("#tt");
    var z = 0;
    for (var i = 0; i < soluong.length; i++) {
        z += Number(soluong[i].innerText.split(".").join(""));
    }
    ttt.innerText = nf.format(z);
}
function xoa(x) {
    var id = x.parentElement.parentElement.children[2].id;
    var hang = x.parentElement.parentElement;
    var x = hang.children[3].children[0];
    console.log(x);
    for (var i = 0; i < a.length; i++) {
        if (a[i][0] == id) {
            a.splice(i, 1);
        }
    }
    sessionStorage.setItem("sp", JSON.stringify(a));
    hang.remove();
    var stt = document.querySelectorAll("#stt");
    for (var i = 0; i < stt.length; i++) {
        stt[i].innerText = (i + 1);
    }
    if (a.length == 0) {
        document.getElementById("ttt").parentElement.remove();
    }
    doisl(x);
}
function hoadon() {
    var kh = document.querySelectorAll("#ttkh");
    for (var i = 0; i < kh.length - 1; i++) {
        kh[i].innerHTML = arrkh[i];
    }
    var ttgh = "";
    var tongtt = 0;
    var nf = new Intl.NumberFormat();
    for (var i = 0; i < a.length; i++) {
        var x = a[i][4].split(".").join("");
        var tt = Number(a[i][3]) * Number(x);
        tongtt += Number(tt);
        ttgh += `
        <tr align="center">
        <td id="stt">${i + 1}</td>
        <td><img src='${a[i][1]}' width="30px" height="30px"></td>
        <td id="${a[i][0]}">${a[i][2]}</td>
        <td>x${a[i][3]}</td>
        <td>${a[i][4]}</td>
         <td id="tt">${nf.format(tt)}</td>
        </tr>
        `
    }
    ttgh += `
            <tr id="tongtt" align="center">
            <td colspan="5">Tổng đơn hàng</td>
            <td id="ttt" colspan="2">${nf.format(tongtt)}</td>
            </tr>
            `;
    kh[kh.length - 1].innerHTML = ttgh;
}





