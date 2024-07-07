document.addEventListener("DOMContentLoaded",function(){
    const counter3 = document.querySelector(".counter3 ");

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div")
            div.className="num"
            div.textContent= j;
            counter3.appendChild(div);
        }
    }
    const finalDiv = document.createElement("div")
    finalDiv.className="num"
    finalDiv.textContent= "0";
    counter3.appendChild(finalDiv)
    
    function animate(counter , duration , delay = 0){
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;
        
        gsap.to(counter,{
            y:-totalDistance,
            duration:duration,
            delay:delay,
            ease:"power2.inOut"
        });
    }
    animate(counter3,5);
    animate(document.querySelector(".counter2"),6);
    animate(document.querySelector(".counter1"),2,4);

    gsap.to(".websiteContent",{
        display:"none"
        // opacity:0
    })
    
    gsap.to(".digit",{
        top:"-150px",
        stagger:{
            amount:0.25
        },
        delay:6,
        duration:1,
        ease:"power4.inOut"
    });

    gsap.from(".loader1",{
        width:0,
        duration:5.8,
        ease:"power2.inOut"
    });
    gsap.from(".loader2",{
        width:0,
        duration:1.9,
        duration:2,
        ease:"power2.inOut"
    });
    gsap.to(".loader",{
        background:"none",
        delay:6,
        duration:0.1
    })
    gsap.to(".loader1",{
        rotate:90,
        y:-50,
        delay:6,
        duration:0.3,
        borderRadius:0
    })
    gsap.to(".loader2",{
        // rotate:90,
        x:-75,
        y:75,
        delay:6,
        duration:0.3,
        borderRadius:0
    });
    gsap.to(".loader",{
        rotate:90,
        scale:40,
        duration:1,
        delay:7,
        x:500,
        y:2000,
        duration:1,
        delay:7,
        ease:"power2.inOut"
    });
    let tl = gsap.timeline();
    tl.to(".loadingScreen",{
        // opacity:0,
        display:"none",
        duration:0.5,
        delay:7,
        ease:"power1.inOut",
    });
    tl.to(".websiteContent",{
        display:"block",
        duration:0.5
    })
    const loadingScreen = document.querySelector(".loadingScreeen");
    const websiteContent = document.querySelector(".websiteContent");
    if(loadingScreen.style.display=="none"){
        websiteContent.style.opacity=1;
    }
    
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// if (window.screen.width >= "1280") {

//     gsap.to(".logo2 img", {
//         // trigger:'.homePage2',
//         // delay:1,
//         opacity: 1,
//         x: 850,
//         y: 150,
//         scrollTrigger: {
//             trigger: ".page1",
//             scroller: "body",
//             // markers: true,
//             start: "top 0%",
//             end: "top 20%",
//             scrub: 1
//         }
//     })
//     gsap.to(".upper img", {
//         // trigger:'.homePage2',
//         // delay:1,
//         opacity: 1,
//         x: 700,
//         y: 120,
//         // width:2,
//         height: 10,
//         scrollTrigger: {
//             trigger: ".page1",
//             scroller: "body",
//             // markers: true,
//             start: "top 0%",
//             end: "top 20%",
//             scrub: 1
//         }
//     })

// }

// if (window.screen.width >= "720") {

//     gsap.to(".logo2 img", {
//         opacity: 1,
//         x: 650,
//         y: 350,
//         scrollTrigger: {
//             trigger: ".page1",
//             scroller: "body",
//             markers: true,
//             start: "top 0%",
//             end: "top 20%",
//             scrub: 1
//         }
//     })
//     gsap.to(".upper img", {
//         // trigger:'.homePage2',
//         // delay:1,
//         opacity: 1,
//         x: 490,
//         y: 80,
//         // width:2,
//         height: 10,
//         scrollTrigger: {
//             trigger: ".page1",
//             scroller: "body",
//             // markers: true,
//             start: "top 0%",
//             end: "top 20%",
//             scrub: 1
//         }
//     })

// }

let videoSection= document.querySelector(".videoSection")
let vsvideo = document.querySelectorAll(".vsection .video video")
vsvideo.forEach((e)=>{
    e.load();
    e.addEventListener("mouseenter",()=>{
        e.play();
    })
    e.addEventListener("click",()=>{
        e.play();
    })
    gsap.to(e,{
        transform:"translateY(0%)",
        duration:3,
        delay:3,
        opacity:1
    })
    gsap.to(".vsection h1",{
        transform:"translateY(0%)",
        duration:3,
        delay:3,
        opacity:1
    })
    gsap.to(".vsection h2",{
        transform:"translateY(0%)",
        duration:3,
        delay:3,
        opacity:1
    })
})


let playBtn = document.querySelector(".page4 .playIcon");
let video = document.querySelector(".page4 video");

playBtn.addEventListener("click", () => {
    video.play()
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        borderRadius: 0,
        zIndex:999
    })
})
video.addEventListener("click", function () {
    video.load()
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius: "50px",
        zIndex:1
    })
})






