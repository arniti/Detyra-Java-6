let count = 0;
let allNews;
let a = 0;
function shtoLajmin() {
    var newTitle = document.getElementById("titulli-new").value;
    var newPermbajtja = document.getElementById("permbajtja-new").value;
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var data = day + "/" + month + "/" + "/" + year;
    var photo = document.createElement("img");
    photo.src= "image/UBT.png";
    photo.className = "foto-lajmi";
    var title = document.createElement("h3");
    title.innerHTML = newTitle;
    var paragrafi = document.createElement("p");
    paragrafi.innerHTML = newPermbajtja
    var dataAktuale = document.createElement("h6");
    dataAktuale.innerHTML = data;
    var newNews = document.createElement("div");
    newNews.style.backgroundColor = "blue";
   if(count < 4) {
       document.getElementById("news-container").appendChild(newNews);
       newNews.className = "form-group";
       newNews.appendChild(photo);
       newNews.appendChild(title);
       newNews.appendChild(paragrafi);
       newNews.appendChild(dataAktuale);
   }
    if(count >= 4) {
        allNews = document.getElementsByClassName("form-group");
            var child = allNews[a].childNodes;
            child[1].textContent = newTitle;
            child[2].textContent = newPermbajtja;
            child[3].textContent = data;
            a++;
            if(a===4) {
                a = 0;
            }
    }
    count++;
}