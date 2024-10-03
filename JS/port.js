window.onscroll = function() {scrollFunction(),animateActive()};

function scrollFunction() {
    var con = document.getElementById("conNavbar");
    var b = document.getElementById("secNavbar");
    var box = document.getElementById("boxNavbar");
    var img = document.getElementById("imgNavbar");
    const a = document.getElementsByClassName("linkNavbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        con.classList.add('conNavbarHeight');
        box.style.height = "100%";
        box.style.marginLeft = "35%";
        b.classList.add('secNavbarFont');
        b.style.right = "60%";
        img.style.opacity = "0";
        for (let i = 0;i<a.length;i++){
            a[i].classList.add('linkNavbarFont');
        }
        
        document.getElementById("spaceNavbar").classList.add("space");

    } else {
        con.classList.remove('conNavbarHeight');
        b.classList.remove('secNavbarFont');
        b.style.right = "50%";
        box.style.height = "10%";
        box.style.marginLeft = "0";
        img.style.opacity = "1";
        for (let i = 0;i<a.length;i++){
            a[i].classList.remove('linkNavbarFont');
        }

        document.getElementById("spaceNavbar").classList.remove("space");
    }
}

let sections = document.querySelectorAll('section');

function animateActive() {
    sections.forEach(sec => {
        let scrollPos = window.scrollY + (window.innerHeight / 2);
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let sectionMidPoint = offset + (height / 2); 

        if (scrollPos >= offset && scrollPos < offset + height) {
            sec.classList.add('Active');
        } else {
            sec.classList.remove('Active');
        }
    }
);
}

