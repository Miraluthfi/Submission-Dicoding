window.addEventListener("scroll", function(){
 		var header = document.querySelector("header");
 		header.classList.toggle("funny", window.scrollY > 0);
 	})
 	function toggle(){
 		var header = document.querySelector("header");
 		header.classList.toggle("respon");
 	}