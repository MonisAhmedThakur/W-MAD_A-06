var backgroundImage = "";

function addPost() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    if (title.value.trim() && description.value.trim()) {
        var posts = document.getElementById("posts");

        posts.innerHTML += `<div class="card mb-2">
            <div class="card-header">
                @post
            </div>
            <div style="background-image: url(${backgroundImage})" class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${title.value}</p>
                    <footer class="blockquote-footer">${description.value}</cite></footer>
                </blockquote>
            </div>
        </div>`

        title.value = "";
        description.value = "";

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter title & description!',
          })
    }
}

function selectImage(src){
    backgroundImage = src;
    var bgImage = document.getElementsByClassName("bg-image");
    for (var i = 0 ; i < bgImage.length ; i++){
        bgImage[i].className = "bg-image";
    }
    event.target.className += " images-list-selected";
}

function reDirection() {
    window.location.href = "./index.html"
}

function logOut() {
    localStorage.clear();

    setTimeout(reDirection, 2000)
}














