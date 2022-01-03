var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function (bookmarkTreeNodes) {
        var imgUrl = "https://s2.googleusercontent.com/s2/favicons?domain=";


        for (var i = 0; i < bookmarkTreeNodes.length; i++) {
            for (var element of bookmarkTreeNodes[i].children[i].children) {
                // console.log(element);
                if (element.url !== undefined) {
                    document.getElementById("bookmark_list").innerHTML += "<li><a href=" + element.url + " >" + element.title + "</a><p>" + element.url + "</p></li>";
                }
                if (element.url == undefined) {
                    var divState = false;
                    var divClass = "bookmarkClassLi";
                    var urlId = "#" + element.title;
                    document.getElementById("bookmark_list_folder_name").innerHTML += "<li><p></p><a href="+urlId+">" + element.title + "</a></li>";
                    if (divState == false) {
                        document.getElementById("bookmark_list_folder").innerHTML += "<div class="+divClass+" id=" + element.title + "></div>";
                        divState = true;
                    }
                    for (var element2 of element.children) {
                        //console.log(element2);
                        if (element2.url !== undefined) {
                            document.getElementById(element.title).innerHTML += "<li><a href=" + element2.url + " >" + element2.title + "</a><p>" + element2.url + "</p></li></div>";
                        }
                    }
                }
            }
        }
    });





