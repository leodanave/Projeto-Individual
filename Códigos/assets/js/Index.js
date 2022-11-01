var imageSelector = document.querySelectorAll('.slider')
var c1 = 0
var c2 = 1
var c3 = 2
var c4 = 3
var c5 = 4

function trocarSlide() {
    imageSelector[c1].classList.remove('i1')
    imageSelector[c1].classList.add('i2')
    c1--

    imageSelector[c2].classList.remove('i2')
    imageSelector[c2].classList.add('i3')
    c2--

    imageSelector[c3].classList.remove('i3')
    imageSelector[c3].classList.add('i4')
    c3--

    imageSelector[c4].classList.remove('i4')
    imageSelector[c4].classList.add('i5')
    c4--

    imageSelector[c5].classList.remove('i5')
    imageSelector[c5].classList.add('i1')
    c5--

    if (c1 < 0) {
        c1 = 4
    }

    if (c2 < 0) {
        c2 = 4
    }

    if (c3 < 0) {
        c3 = 4
    }

    if (c4 < 0) {
        c4 = 4
    }

    if (c5 < 0) {
        c5 = 4
    }
}

setInterval(trocarSlide, 2500);