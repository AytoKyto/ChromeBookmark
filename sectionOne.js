var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function (bookmarkTreeNodes) {
        var imgUrl = "https://s2.googleusercontent.com/s2/favicons?domain=";
        //console.log(bookmarkTreeNodes);
        //console.log(bookmarkTreeNodes[0].children[0].children);
        for (var i = 0; i < bookmarkTreeNodes.length; i++) {
            //console.log(bookmarkTreeNodes[i].children[i].children[i].title);
            //console.log(bookmarkTreeNodes[i].children[i].children[i].url);


            for (var element of bookmarkTreeNodes[i].children[i].children) {
                console.log(element);
                document.getElementById("bookmark_list").innerHTML += "<li><img src=" + imgUrl + element.url + "><a href=" + element.url + " >" + element.title + "</a></li>";
                //   document.querySelectorAll("#bookmark_list li a").forEach(function (a) {
                //     a.setAttribute('target', '_blank');
                //   })
            }


        }
    });




