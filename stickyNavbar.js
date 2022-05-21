window.addEventListener("scroll", function () {
	let navbar = document.getElementById("menu-bar");
	if (window.pageYOffset >= 171.1) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
});
