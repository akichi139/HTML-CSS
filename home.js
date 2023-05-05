function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function changebg() {
    document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/003/076/244/non_2x/white-gray-abstract-luxury-background-designed-with-golden-lines-vector.jpg')";
}

changebg();