var grid_example = document.querySelectorAll(".works_main_grid_example");
for(i=0;i<6;i++){
	grid_example[i].style.backgroundImage = "url(pictures/works" + i +".png)"; 
}
var service_example = document.querySelectorAll(".service_main_grid_example");
for(i=0;i<6;i++){
	service_example[i].style.gridArea = "g" + i;
	service_example[i].style.backgroundImage = "url(pictures/service" +i +".png)"; 
	var service_example_shadow = document.createElement('div');
	service_example_shadow.className = "service_main_grid_example_shadow";
	service_example[i].appendChild(service_example_shadow);
	var service_example_text = document.createElement('div');
	service_example_text.className = "service_main_grid_example_text";
	service_example[i].appendChild(service_example_text);
	if((i+1)%3==0 || i==0){
		service_example_text.innerHTML = "DESIGNING IS LOVE FOR <br> <br>" +
		"<span class='service_example_RalewayRegular'>Our most popular service is our Virtual Receptionist. We know that</span>";
	}
	if(i==1 || i==4){
		service_example_text.innerHTML = "COOL PSD DESIGN <br> <br>" +
		"<span class='service_example_RalewayRegular'>Our most popular service is our we know sometimes it's something mostly</span>";
	}
	if(i==3){
		service_example_text.innerHTML = "PSD TO HTML KORI <br> <br>" +
		"<span class='service_example_RalewayRegular'>We know that sometimes it's something and you middle most</span>";
	}
	var e = document.createElement('a');
	e.onclick = ( function(df) {df.preventDefault(); addinfo() } );
	e.href = "#";
	e.number = i;
	e.className = "service_main_grid_example_shadow_refer";
	e.innerHTML = "KNOW MORE";
	var rarrow = document.createElement('div');
	rarrow.className = "service_main_grid_example_shadow_refer_rarrow";
	/*rarrow.innerHTML = "&rarr";*/
	e.appendChild(rarrow);
	service_example_text.appendChild(e);
}
var that;
function addinfo(){
	console.log(that);
	if(that==event.target.number){
		return;
	}
	if(that!=null){
		that.style.display = "none";
	}
	var service_example_details = document.createElement('div');
	service_example_details.className = "service_main_grid_example_details";
	service_example[event.target.number].appendChild(service_example_details);
	if((event.target.number+1)%3==0 || event.target.number==0){
		service_example_details.innerHTML = "DESIGNING IS THE COOL LOVE FOR <br> <br>" +
		"<span class='service_example_RalewayRegular'>Our most popular service is our Virtual Receptionist. We know that it's something and you middle most this job was posted less than 5 minutes ago</span>";
	}
	if(event.target.number==1 || event.target.number==4){
		service_example_details.innerHTML = "COOL PSD DESIGN <br> <br>" +
		"<span class='service_example_RalewayRegular'>Our most popular service is our Virtual Receptionist. We know that it's something and you middle most this job was posted less than 5 minutes ago</span>";
	}
	if(event.target.number==3){
		service_example_details.innerHTML = "PSD TO HTML KORI <br> <br>" +
		"<span class='service_example_RalewayRegular'>Our most popular service is our Virtual Receptionist. We know that it's something and you middle most this job was posted less than 5 minutes ago</span>";
	}
	that = service_example_details;
	var cclose = document.createElement('div');
	cclose.onclick = (function(){
		that.style.display = "none";
	})
	cclose.className = "service_main_grid_example_details_cclose";
	cclose.innerHTML = "&times";
	service_example_details.appendChild(cclose);
	return false;	
}


