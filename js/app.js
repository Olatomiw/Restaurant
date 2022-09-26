// Checking for selector function
const getElement =(selector)=>{
    const element = document.querySelector(selector)
    if(element) return element
    throw Error(`please double check your class names, there is no  ${selector} class`);
};
// Getting element from the dom
const links= getElement('.nav-links');
const navDom = getElement('.nav-btn');
let nav_links = document.getElementById("navl");
let link = document.getElementsByClassName("links")
// Toggle function for small screen menu
navDom.addEventListener("click" , function(e){
    links.classList.toggle("show-links")
    // if(e.target !== navDom){
    //     links.classList.remove('show-links')
    // }
})

// end of toggle function
// Addind active to the nav-links
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click" , function(){
        var current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace("active", "");
        this.className +=" active";
        console.log(current[0]);
    })
    
}

// Ending of active
// onscroll function
window.onscroll = function(){myScroll()};
function myScroll (){
    if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
        document.getElementById("nav-cent").className="nav-background" + " nav-center";
    } 
    else{
        document.getElementById("nav-cent").className="nav-center";
    }
}


// End of Onscroll

// Owl-carousel'
$(document).ready(function(){
    $(".special-box").owlCarousel({
        margin: 10,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }

    })
    $(".dish").owlCarousel({
        responsive:{
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 1,
                nav: false,
            },
            1000:{
                items: 1,
                nav: false,
            }
        }
    })
})

// Modal Class

let modal = document.getElementById("myModal")

// get all images
let modalImg = document.querySelectorAll(".modal-item");
let mainModal = document.getElementById("img02");
let img_modal = document.querySelectorAll(".modal-item .overlay a");
console.log(modalImg)
let imgSrc ;
// console.log(modal_img)


    modalImg.forEach((img)=>{
            // if(img.target.clicked){
            // img_modal.addEventListener("click" , (e)=>{
            //     e.preventDefault()
            // })
            let modalText= document.getElementsByClassName("modal-text")
            let modal_img = img.children[0];
            img.addEventListener("click", ()=>{
                imgSrc = modal_img.src;
                console.log(imgSrc);
                modal.style.display = "flex"
                mainModal.src = imgSrc
                modalText.innerHTML = modal_img.alt;
            });

            let close = document.querySelector(".close")
            close.addEventListener("click" , ()=>{
                modal.style.display = "none"
            })
            modal.style.display = "none"
        
    });























// let arr1 = ["./Images/gallery_01.jpg", "./Images/gallery_02.jpg", "./Images/gallery_03.jpg"]
// let our_img = img_modal[1].src;
// console.log(our_img);
// modalImg.forEach((item) => {
//     item.addEventListener("click", function(){
        

            // modal.style.display = "block"
            //     mainModal.src = our_img.src;
            //     console.log("great")
            // console.log(mainModal)
            // console.log(arr1[i] + "images");   
        
    // })
// });
