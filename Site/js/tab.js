
var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName("tabcontent");
    tab = document.getElementsByClassName("tab");
    hideTabsContent(1);

};

function hideTabsContent(a) {
    for (var i = a; i < tabContent.lenght; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("whiteborder");
    }
};


document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == "tab"){
        for (var i = 0; i < tab.length; i++){
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};

function showTabsContent(b) {
    if (tabContent[b].classList.contains("hide")) {
        hideTabContent(0);
        tab[b].classList.add("whiteborder");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
};
