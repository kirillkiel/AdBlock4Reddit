var a = setInterval(s, 1000);


function s () {
    console.log("AdBlock4Reddit checking");
    
    var items = document.getElementsByClassName("scrollerItem");

    for(var i = 0; i < items.length; i++)
    {
        var item = items[i];
        var titleitem = item.children[1].firstElementChild.firstElementChild.firstElementChild.firstElementChild;

        if(titleitem.innerHTML == "promoted")
            item.style.display = "none";
    }
}