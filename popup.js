var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function (bookmarkTreeNodes) {
        var imgUrl = "https://s2.googleusercontent.com/s2/favicons?domain=";


        for (var i = 0; i < bookmarkTreeNodes.length; i++) {
            for (var element of bookmarkTreeNodes[i].children[i].children) {
                // console.log(element);
                if (element.url !== undefined) {
                    document.getElementById("bookmark_list").innerHTML += "<li><img src="+imgUrl+element.url+"><a href=" + element.url + " >" + element.title + "</a></li>";
                }
            }
        }
    });