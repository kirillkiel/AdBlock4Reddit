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
    
    
    
    var iframes = document.getElementsByTagName("iframe");
    
    for (var i = 0; i < iframes.length; i++)
        {
            var item = iframes[i];
            
            if(item.src.search("//redditad.com//"))
                if(item.parentElement.id.search("aax_sidebar") == 0)
                    item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        }
}

