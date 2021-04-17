// reading json
let URL = "https://manpreet-kaur-01.github.io/COMP1073-M3/weird-deals.json";
let request = new XMLHttpRequest(); 
request.open('GET', URL);
request.responseType='json';
request.send();

request.onload = function() {
  let weirdDeals = request.response;
  // body to add data 
	let body=document.body;
  // loop to create elements and add to the data
  for (let i = 0; i < weirdDeals['deals'].length; i++) {
	  
    let div = document.createElement('div');
    let hTag = document.createElement('h1');
    let imgTag = document.createElement('img');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    
	// adding data to tags
    hTag.textContent = weirdDeals['deals'][i].name;
    imgTag.setAttribute('src', weirdDeals['deals'][i].image);
    imgTag.setAttribute('width', '20%' );    
    imgTag.setAttribute('height', '20%' );
    h2.textContent = 'Price is ' + weirdDeals['deals'][i].price;
    h3.textContent = weirdDeals['deals'][i].description;
    h4.textContent = 'Main Feature : ' + weirdDeals['deals'][i].feature;
    // adding data ro body
    div.appendChild(imgTag); 
    div.appendChild(hTag);
    div.appendChild(h2); 
    div.appendChild(h3);
    div.appendChild(h4);
    body.appendChild(div); 
     
  }
}

// Press Enter to toggle full screen
document.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    toggleFullScreen();
  }
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function setLocation() {
	var latLng = new google.maps.LatLng(44.411487, -79.666953);
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 4,
	  center: latLng,
	});
	const marker = new google.maps.Marker({
	  position: latLng,
	  title: 'Deals Store',
	  map: map,
	});
}
