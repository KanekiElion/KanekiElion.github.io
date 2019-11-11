/*Изменение сторон блока CSS generator*/
function BRad() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');
    
    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;
    
    var sidebar = document.getElementById('sidebar');

    sidebar.style.borderRadius = rtl+'px ' +rtr +'px ' +rbr +'px ' +rbl +'px ';
};




