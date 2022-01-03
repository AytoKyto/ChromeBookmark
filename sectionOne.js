var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function (bookmarkTreeNodes) {
        var imgUrl = "https://s2.googleusercontent.com/s2/favicons?domain=";
        //console.log(bookmarkTreeNodes);
        //console.log(bookmarkTreeNodes[0].children[0].children);
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
          }

          
        for (var i = 0; i < bookmarkTreeNodes.length; i++) {
            //console.log(bookmarkTreeNodes[i].children[i].children[i].title);
            //console.log(bookmarkTreeNodes[i].children[i].children[i].url);


            for (var element of bookmarkTreeNodes[i].children[i].children) {
                // console.log(element);
                if (element.url !== undefined) {
                    document.getElementById("bookmark_list").innerHTML += "<li><a href=" + element.url + " >" + element.title + "</a><p>" + element.url + "</p></li>";
                    //   document.querySelectorAll("#bookmark_list li a").forEach(function (a) {
                    //     a.setAttribute('target', '_blank');
                    //   })
                }
                if (element.url == undefined) {
                    var divState = false;
                    var divClass = "bookmarkClassLi";
                    var envent = "onclick='openCity(event, \"" + element.title + "\")'";
                    document.getElementById("bookmark_list_folder_name").innerHTML += "<li><p onclick="+envent+">" + element.title + "</p></li>";
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





