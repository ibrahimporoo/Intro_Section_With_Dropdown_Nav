// Dealing With Links Of The Header
let linksItems = document.querySelectorAll("#links > li");
linksItems.forEach(item => {
	item.addEventListener("click", _ => {
		let itemclasses = item.classList;
		if(itemclasses.contains("arrow-list") && itemclasses.contains("on")) {
			item.classList.toggle("on");
			item.getElementsByTagName("img")[0].src = "images/icon-arrow-down.svg";
		} else {
			item.classList.toggle("on");
			item.getElementsByTagName("img")[0].src = "images/icon-arrow-up.svg";
		}
	})
})
// Dealing With Menu Icon
let theHeader = document.querySelector("header");
let headerContent = document.querySelector("header .container .content");
let menuIcon = document.querySelector("span.menu-icon");
let closeIcon = document.querySelector("span.exit-icon");
let grayscale = document.querySelector("body .grayscale");


menuIcon.addEventListener("click", _ => {
	theHeader.style.overflow = "visible";
	headerContent.style.right = "0";
	grayscale.style.zIndex= "1";
})
closeIcon.addEventListener("click", _ => {
	theHeader.style.overflow = "hidden";
	headerContent.style.right = "-220px";
	grayscale.style.zIndex= "-1";
})
grayscale.addEventListener("click", _ => {
	theHeader.style.overflow = "hidden";
	headerContent.style.right = "-220px";
	grayscale.style.zIndex= "-1";
	console.log("Clicked");
})