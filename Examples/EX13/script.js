function cardgenerator(title,cname,views,monthsold,duration,thumbnail){
    document.querySelector(".duration").insertAdjacentText("beforeend",duration)
    document.querySelector(".duration").setAttribute("class","pos")
    document.querySelector(".img").setAttribute("class","img1")
    document.querySelector(".channelname").insertAdjacentText("beforeend","Code With Harry")
    document.querySelector(".views").insertAdjacentText("beforeend",viewcounter(views)+" views")
    document.querySelector(".older").insertAdjacentText("beforeend",monthcounter(monthsold))
    document.querySelector(".video").insertAdjacentText("beforeend",title)
    document.querySelector(".video").setAttribute("class","titlesize")
}
function viewcounter(views) {
    if (views >= 1_000_000) {
        return Math.floor(views / 1_000_000) + "M";
    } else if (views >= 1_000) {
        return Math.floor(views / 1_000) + "K";
    } else {
        return String(views);
    }
}
function monthcounter(monthsold){
    if (monthsold<12){
        return monthsold + " months old";
    }
    else {
        return  Math.floor(monthsold/12) + " year old"
    }
}

cardgenerator("Sigma web development course tutorial","CodeWithHarry",1000000,14,"6:13","https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ")
viewcounter(164000)
monthcounter(11)