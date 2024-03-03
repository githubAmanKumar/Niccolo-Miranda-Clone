const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function introAnim() {
    var tl = gsap.timeline();
    tl.to("#introAnimation", {
        y: "100vh",
        scale: 0.4,
        duration: 0
    })
    tl.to("#introAnimation", {
        y: "0vh",
        duration: 1,
        delay: 1
    })
    tl.to("#introAnimation", {
        rotate: -360,
        scale: 1,
        duration: 1
    })
}
introAnim();

const dabba1 = document.querySelector("#dabba1");
const dabba2 = document.querySelector("#dabba2");
const dabba3 = document.querySelector("#dabba3");
const dabba4 = document.querySelector("#dabba4");

dabba1.addEventListener("mouseenter",function(){
    dabba1.style.background = "#8e8e8e";
    dabba2.style.left = "45%";
    dabba3.style.left = "60%";
    dabba4.style.left = "75%";
})
dabba1.addEventListener("mouseleave",function(){
    dabba1.style.background = '#C3BCB2';
    dabba2.style.left = "20%";
    dabba3.style.left = "36%";
    dabba4.style.left = "52%";
})
dabba2.addEventListener("mouseenter",function(){
    dabba2.style.background = "#8e8e8e";
    dabba3.style.left = "60%";
    dabba4.style.left = "75%";
})
dabba2.addEventListener("mouseleave",function(){
    dabba2.style.background = '#C3BCB2';
    dabba3.style.left = "36%";
    dabba4.style.left = "52%";
})
dabba3.addEventListener("mouseenter",function(){
    dabba3.style.background = "#8e8e8e";
    dabba4.style.left = "75%";
})
dabba3.addEventListener("mouseleave",function(){
    dabba3.style.background = '#C3BCB2';
    dabba4.style.left = "52%";
})
dabba4.addEventListener("mouseenter",function(){
    dabba4.style.background = "#8e8e8e";
})
dabba4.addEventListener("mouseleave",function(){
    dabba4.style.background = '#C3BCB2';
})
