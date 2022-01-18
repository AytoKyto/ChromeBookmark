var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function (bookmarkTreeNodes) {
        var imgUrl = "https://s2.googleusercontent.com/s2/favicons?domain=";


        for (var i = 0; i < bookmarkTreeNodes.length; i++) {
            for (var element of bookmarkTreeNodes[i].children[i].children) {
                // console.log(element);
                if (element.url !== undefined) {
                    fetch("http://api.linkpreview.net/?key=06a1c44c88292c68a372aa1248da6394&fields=image_x,icon_type,locale&q=" + element.url, {
                        method: 'GET',
                    })
                        .then(function (response) {
                            return response.json();
                        }
                        )
                        .then(function (data) {
                           // return data;
                        //    console.log(data); 
                    // let style = " style='background-image: url(" + data.image + ");background-size: containt;'";
                     //  console.log(data.image);
                            // for (var i = 0; i < data.length; i++) {
                            //     document.getElementById("bookmark_list").innerHTML += "<li><a target='_blank' href=" + data[i].url + " ><img src=" + imgUrl + data[i].url + ">" + data[i].title + "</a></li>";
                            // }
                        }
                        )
                        .catch(function (error) {
                            console.log(error);
                        }
                        );
                      //  console.log(data);
                    document.getElementById("bookmark_list").innerHTML += "<li ><a href=" + element.url + " >" + element.title + "</a><p>" + element.url + "</p></li>";
                }
                if (element.url == undefined) {
                    var divState = false;
                    var divClass = "bookmarkClassLi";
                    var urlId = "#" + element.title;
                    let length = element.children.length;
                    document.getElementById("bookmark_list_folder_name").innerHTML += "<li><a href="+urlId+"><p class='length'>"+length+"</p><p class='titreFolder'>"+element.title+"</p></a></li>";
                    if (divState == false) {
                        document.getElementById("bookmark_list_folder").innerHTML += "<div class=" + divClass + " ><p id=" + element.title + " class='folderTitle titreFolderName'>" + element.title + "</p></div>";
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





