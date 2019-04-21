var nav = document.querySelector(".about_main");
var pict = document.querySelector(".about_main_example_item");
var navigation_elem = document.querySelectorAll(".about_main_example_navigation_elem");
navigation_elem[0].style.background = "rgb(116,235,246)";
var array = ['computer.png','computer1.png','computer2.png','computer3.png'];
for (i=0;i<4;i++){
	navigation_elem[i].picture = 'pictures/' + array[i];
	navigation_elem[i].number = i;
}
var result;
var previous = navigation_elem[0];
nav.onclick = function navigation(event){
	var target = event.target;
	if(target.className == "about_main_example_navigation_elem"){
		previous.style.background = "rgb(208,208,208)";
		target.style.background = "rgb(116,235,246)";
		pict.style.backgroundImage = "url(" + target.picture +")";
		previous = target;
	}
	if(target.className=="about_main_example_leftshadow"){
		if(previous.number!=0){
			navigation_elem[previous.number].style.background = "rgb(208,208,208)";
			navigation_elem[previous.number - 1].style.background = "rgb(116,235,246)";
			previous = navigation_elem[previous.number - 1];
		}
		else{
			navigation_elem[0].style.background = "rgb(208,208,208)";
			navigation_elem[array.length - 1].style.background = "rgb(116,235,246)";
			previous = navigation_elem[array.length - 1];
		}
		pict.style.backgroundImage = "url(" + previous.picture +")";	
	}
	if(target.className=="about_main_example_rightshadow"){
		if(previous.number!=array.length-1){
			navigation_elem[previous.number].style.background = "rgb(208,208,208)";
			navigation_elem[previous.number + 1].style.background = "rgb(116,235,246)";
			previous = navigation_elem[previous.number + 1];
		}
		else{
			navigation_elem[array.length-1].style.background = "rgb(208,208,208)";
			navigation_elem[0].style.background = "rgb(116,235,246)";
			previous = navigation_elem[0];
		}
		pict.style.backgroundImage = "url(" + previous.picture +")";	
	}
}

