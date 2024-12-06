// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
	let id = check.checked;
	if (id == true) {
		location.href = "/Home/IndexEN";
	} else {
		location.href = "/Home/Index";
	}
}

type = "text/javascript" >
	window.addEventListener("scroll", function () {
		var header = document.querySelector("header");
		header.classList.toggle("abajo", window.scrollY > 0);
	})

typeidioma = "text/javascript" >
	window.addEventListener("scroll", function () {
		var idiomas = document.querySelector(".idiomas");
		idiomas.classList.toggle("abajo", window.scrollY > 0);
	})