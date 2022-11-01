window.addEventListener("scroll", () => {
    var header = document.getElementById("header");

    if (this.scrollY >= 1) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }

});


