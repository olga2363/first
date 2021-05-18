function myMap() 
							{
								var mapCanvas = document.getElementById("map");
								var mapOptions = {
									center: new google.maps.LatLng(50.427951414043925, 30.533590807133987), 
									zoom: 15};
								
								var map = new google.maps.Map(mapCanvas, mapOptions);
								var marker = new google.maps.Marker({
									position: mapOptions,
									map: myMap,
									icon:  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
									title: "Мы здесь"});
							}