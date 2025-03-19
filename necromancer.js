// wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
	// add the current year to the footer span tag
	const currentYear = new Date().getFullYear();
	const footer = document.getElementById("footer");
	const span = footer.getElementsByTagName("span")[0];
	span.innerHTML = currentYear;

	// apply bg-green-900 and animate-pulse classes to the link with the current page
	let path = window.location.pathname;
	console.log(path);
	path = path.replace(".html", "");
	const links = document.querySelectorAll("a");
	links.forEach((link) => {
		if (link.pathname === path) link.classList.add("bg-green-900", "animate-pulse");
	});
});
