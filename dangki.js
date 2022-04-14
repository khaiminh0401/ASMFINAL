
function date() {
    var a = document.getElementById("nam");
    var b = document.getElementById("thang");
    var c = document.getElementById("ngay");
    for (let i = 52; i >= 0; i--) {
        var sl = document.createElement("option");
        sl.value = (i + 1970)
        sl.textContent = (i + 1970);
        a.appendChild(sl);
    }
    for (let i = 12; i >= 1; i--) {
        var sl = document.createElement("option");
        sl.id = "opthang";
        sl.textContent = i;
        sl.value = i;
        b.appendChild(sl);
    }
    for (let i = 1; i <= 31; i++) {
        var sl = document.createElement("option");
        sl.id = "opngay";
        sl.textContent = i;
        sl.value = i;
        c.appendChild(sl);
    }
    if(a.value==""){
        b.disabled = true;
        c.disabled = true;
    }
}
function changeSN() {
    var a = document.getElementById("nam");
    var b = document.getElementById("thang");
    var c = document.getElementById("ngay");
    var ngay = document.querySelectorAll("#opngay");
    if(a.value!=""){
        b.disabled = false;
    }
    if(b.value!=""){
        c.disabled = false;
    }
    if (a.value % 400 == 0 || (a.value % 4 == 0 && a.value != 100)) {
        if(b.value==2){
            for (var z = ngay.length - 1; z >= 29; z--) {
                ngay[z].style.display = "none";
            }
        } else if (b.value == 1 || b.value == 3 || b.value == 5 || b.value == 7 || b.value == 8 || b.value == 10 || b.value == 12) {
            for (var z = ngay.length - 1; z >= 1; z--) {
                ngay[z].style.display = "";
            }
        } else if (b.value == 4 || b.value == 6 || b.value == 9 || b.value == 11) {
            for (var z = ngay.length - 1; z >= 30; z--) {
                ngay[z].style.display = "none";
            }
        } 
    } else if (a.value % 400 != 0 || (a.value % 4 != 0 && a.value == 100) && b.value == 2) {
        if(b.value==2){
            for (var z = ngay.length - 1; z >= 28; z--) {
                ngay[z].style.display = "none";
            }  
        } else if (b.value == 1 || b.value == 3 || b.value == 5 || b.value == 7 || b.value == 8 || b.value == 10 || b.value == 12) {
            for (var z = ngay.length - 1; z >= 1; z--) {
                ngay[z].style.display = "";
            }
        } else if (b.value == 4 || b.value == 6 || b.value == 9 || b.value == 11) {
            for (var z = ngay.length - 1; z >= 30; z--) {
                ngay[z].style.display = "none";
            }
        }     
    }

}