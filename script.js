// let homePage = document.querySelector(".homePage")
// homePage.addEventListener("click", () => {
//     window.location.href = "index.html"
//     // alert();
//     console.log(window.screen.width)

// })
if (window.screen.width >= "1280") {

    gsap.to(".logo2 img", {
        // trigger:'.homePage2',
        // delay:1,
        opacity: 1,
        x: 850,
        y: 150,
        scrollTrigger: {
            trigger: ".homePage",
            scroller: "body",
            // markers: true,
            start: "top 0%",
            end: "top 20%",
            scrub: 1
        }
    })
    gsap.to(".upper img", {
        // trigger:'.homePage2',
        // delay:1,
        opacity: 1,
        x: 700,
        y: 120,
        // width:2,
        height: 10,
        scrollTrigger: {
            trigger: ".homePage",
            scroller: "body",
            // markers: true,
            start: "top 0%",
            end: "top 20%",
            scrub: 1
        }
    })

}

let playBtn = document.querySelector(".page2 .playIcon");
let video = document.querySelector(".page2 video");

playBtn.addEventListener("click", () => {
    video.play()
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        borderRadius: 0
    })
})
video.addEventListener("click", function () {
    video.load()
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius: "50px"
    })
})








// function page3VideoAnimation(){
//     
// }