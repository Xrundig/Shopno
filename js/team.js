var team_workers = document.querySelectorAll(".team_main_worker");
for (i=0;i<team_workers.length;i++){
	var counter = i;
	if(i==5){
		counter=0;
	}
	team_workers[i].style.backgroundImage = "url(pictures/team" + counter + ".png)";
}
var social_items = document.querySelectorAll(".box_social_item");
var counter = 0;
for (i=0;i<social_items.length;i++){
	if(counter==4){
		counter=0;
	}
	social_items[i].style.backgroundImage = "url(pictures/social" +counter+ ".png)";
	counter++;
}