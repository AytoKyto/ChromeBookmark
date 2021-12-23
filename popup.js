var bookmarkTreeNodes = chrome.bookmarks.getTree(
  function (bookmarkTreeNodes) {
    //console.log(bookmarkTreeNodes);
    //console.log(bookmarkTreeNodes[0].children[0].children);
    for (var i = 0; i < bookmarkTreeNodes.length; i++) {
      //console.log(bookmarkTreeNodes[i].children[i].children[i].title);
      //console.log(bookmarkTreeNodes[i].children[i].children[i].url);


      for (var element of bookmarkTreeNodes[i].children[i].children) {
        console.log(element);
        document.getElementById("bookmark_list").innerHTML += "<li><a href=" + element.url + " >" + element.title + "</a><iframe frameborder="+0+"  src=" + element.url + "></iframe></li>";
        document.querySelectorAll("#bookmark_list li a").forEach(function (a) {
          a.setAttribute('target', '_blank');
        })
      }


    }
  });
