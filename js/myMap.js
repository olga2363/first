const mapsDot = document.querySelectorAll(".contact-btn");
const tabItem = document.querySelectorAll(".map");

mapsDot.forEach(
    function (item){
        item.addEventListener ("click", function(){
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
	    	let currentTab = document.querySelector(tabId);
            
            mapsDot.forEach (function (item) {
                item.classList.remove('active-map');
            });
            
            tabItem.forEach (function (item) {
                item.classList.remove('active-map');
            });

            currentBtn.classList.add('active-map')
            currentTab.classList.add('active-map');
        });
    });
