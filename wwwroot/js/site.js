// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Nav
/*const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));*/

// Water Drop
$(document).ready(function () {
    try {
        $('div.blog-post__img').ripples({
            dropRadius: 20, //px
            perturbance: 0.04,
        });
    }
    catch (e) {
        $('.error').show().text(e);
    }
});

$("#dropid").click(function () {
    $('.drop').toggleClass('drop-active')
});


// Skill
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills() {
    let itemClass = this.parentNode.className
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
});


// Qualification
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents => {
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Nav-Link Active
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container-fluid ul li");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset + 2 >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    if ((window.innerHeight + window.scrollY + 100) >= document.body.offsetHeight) {
        current = "contact";
    }

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};