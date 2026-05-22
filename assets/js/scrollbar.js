const offerScroll = document.getElementById("offerScroll");
const customScrollBar = document.getElementById("custom-scroll-bar");
const customThumbButton = document.getElementById("custom-scroll-button");

let isDraging= false;

customThumbButton.addEventListener("mousedown",function(){
    isDraging = true;
    customThumbButton.classList.add("dragging");
})

document.addEventListener("mouseup",function(){
    isDraging = false;
    customThumbButton.classList.remove("dragging");
})

document.addEventListener("mousemove",function(event){
    if (!isDraging){
        return;
    }

    const scrollBarRect = customScrollBar.getBoundingClientRect();

    const maxThumbLeft = customScrollBar.clientWidth -  customThumbButton.clientWidth;

    const maxScrollLeft = offerScroll.scrollWidth - offerScroll.clientWidth;

    let newThumbLeft = event.clientX - scrollBarRect.left - customThumbButton.clientWidth / 2;

    if (newThumbLeft <0){
        newThumbLeft = 0;
    }

    if (newThumbLeft > maxThumbLeft){
        newThumbLeft = maxThumbLeft;
    }

    const scrollRatio = newThumbLeft/maxThumbLeft;

    offerScroll.scrollLeft = scrollRatio * maxScrollLeft;

    customThumbButton.style.transform = `translateX(${newThumbLeft}px)`;
})

offerScroll.addEventListener("scroll",function(){
    const maxScrollLeft = offerScroll.scrollWidth - offerScroll.clientWidth;
    const maxThumbLeft = customScrollBar.clientWidth -  customThumbButton.clientWidth;

    if (maxScrollLeft<=0){
        customThumbButton.style.transform = "translateX(0px)";
        return
    }

    const scrollRatio= offerScroll.scrollLeft /maxScrollLeft;

    customThumbButton.style.transform = `translateX(${scrollRatio*maxThumbLeft}px)`;
})
