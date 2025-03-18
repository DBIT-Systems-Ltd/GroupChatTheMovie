// wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
	// get the current year
	const currentYear = new Date().getFullYear();

	// add the current year to the footer span tag
	const footer = document.getElementById("footer");
	const span = footer.getElementsByTagName("span")[0];
	span.innerHTML = currentYear;

	// apply bg-green-900 and animate-pulse classes to the link with the current page
	let path = window.location.pathname;
	path = path.replace(".html", "");
	if (path === "/") path = "/index";
	const links = document.querySelectorAll("a");
	links.forEach((link) => {
		if (link.pathname === path) link.classList.add("bg-green-900", "animate-pulse");
	});
});
