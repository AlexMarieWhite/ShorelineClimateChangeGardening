document.getElementById("myBtn").addEventListener("click", function() {ScrollToTop()});
window.onscroll = function() {ShowHideBackToTop()};

function ShowHideBackToTop() {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function ScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}