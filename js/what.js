var what_main = document.querySelector(".what_main");
var what_pict = document.querySelector(".what_main_left_pict");
var what_nav = document.querySelectorAll(".what_main_navigation_elem");
what_nav[0].style.background = "rgb(116,235,246)";
var teamworkers = ['team0.png','team1.png','team2.png','team3.png'];
for (i=0;i<4;i++){
	what_nav[i].picture = 'pictures/' + teamworkers[i];
	what_nav[i].number = i;
}
var prev = what_nav[0];
what_pict.style.backgroundImage = "url(pictures/team0.png)";
what_main.onclick = function navigate(event){
	var target = event.target;
	if(target.className == "what_main_navigation_elem"){
		prev.style.background = "rgb(208,208,208)";
		target.style.background = "rgb(116,235,246)";
		what_pict.style.backgroundImage = "url(" + target.picture +")";
		prev = target;
	}
	if((target.className=="what_main_buttons_elem" && 
		target.childNodes[1].className=="what_main_buttons_elem_arrow left") ||
		target.className=="what_main_buttons_elem_arrow left"){
		if(prev.number!=0){
			what_nav[prev.number].style.background = "rgb(208,208,208)";
			what_nav[prev.number - 1].style.background = "rgb(116,235,246)";
			prev = what_nav[prev.number - 1];
		}
		else{
			what_nav[0].style.background = "rgb(208,208,208)";
			what_nav[teamworkers.length - 1].style.background = "rgb(116,235,246)";
			prev = what_nav[teamworkers.length - 1];
		}
		what_pict.style.backgroundImage = "url(" + prev.picture +")";	
	}
	if((target.className=="what_main_buttons_elem" && 
		target.childNodes[1].className=="what_main_buttons_elem_arrow right") ||
		target.className=="what_main_buttons_elem_arrow right"){
		if(prev.number!=teamworkers.length - 1){
			what_nav[prev.number].style.background = "rgb(208,208,208)";
			what_nav[prev.number + 1].style.background = "rgb(116,235,246)";
			prev = what_nav[prev.number + 1];
		}
		else{
			what_nav[teamworkers.length - 1].style.background = "rgb(208,208,208)";
			what_nav[0].style.background = "rgb(116,235,246)";
			prev = what_nav[0];
		}
		what_pict.style.backgroundImage = "url(" + prev.picture +")";	
	}
}