function loading(){
var tl = gsap.timeline()
tl.to("#yellow1" ,{
    top: "-100%",
    delay: 0.5,
    duration: 1,
    ease: "expo.out"
})
tl.from("#yellow2" ,{
     top: "100%",
    delay: 2,
    duration: 1,
    ease: "expo.out"
}, "anim")
tl.from("h1",{
    delay: 2.5,
    opacity: 0,
    ease: "expo.out"
}, "anim")
}
loading()

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})
