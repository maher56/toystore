window.onload = () => {

function slideUl() {
    const toggler = document.querySelector(".toggler");
    const mainNav = document.querySelector(".mainNav ul");
    check();
    window.addEventListener('resize',()=>{check();});
    toggler.addEventListener("click" , () => {
        console.log(toggler);
    console.log(mainNav);
        mainNav.classList.toggle("active");
        toggler.classList.toggle("active");
    })    
    function check() {
        if(window.innerWidth > 767) {
            mainNav.classList.remove("active");
            toggler.classList.remove("active");
        }else {
            mainNav.classList.add("active");
            toggler.classList.remove("active");
        }
    }
}
        
function showWhenScroll() {
    const elements = document.querySelectorAll(".show-when-scroll");
    check();
    "scroll resize".split(" ").map(e=>{window.addEventListener(e ,()=>{check();});});
    // console.log(document.documentElement.scrollTop);
    function check() {
        elements.forEach((e,i) => {
            if(Math.abs(e.getBoundingClientRect().y+e.offsetHeight/2) < window.innerHeight) {
                e.classList.add("active");
            } 
        });
    }
}
              
function scrollToTop(){
    let toTop = document.querySelector(".scroll-to-top");
    toTop.addEventListener("click",()=>{window.scrollTo({top:0,});})
}
// to Show The Menu When Click On Toggler
slideUl();
                                
                                // // swhoing what i added to cart
                                // showcarts();
                                
                                
// adding The mainAnimation 
showWhenScroll();
                                
// scroll to Top
scrollToTop();
}