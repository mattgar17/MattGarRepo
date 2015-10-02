/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */

var fetch = function() {
	//grab html element with the ID "year"
	var el = document.getElementById('year');
	
	//Access value of year and log to the console
	var value = el.value;
	console.log(value);
	
	vizController(value);
};


var toggle = function() {

	// Grab the html element with the ID “about”
    var el = document.getElementById('about');

   if (hasClass(el, 'show')){
   	removeClass( el, 'show');
   }
   else {
   	// Add the class “show” to the element.
    addClass(el, 'show');
   }
    
    
    
    console.log('About!');
};

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('about-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
    
    
     // Grab the 'Submit' button element, identified by the                                       
    // 'submit-btn' id.                                                                          
    button = document.getElementById('submit-btn');

    // From this point forward, when the button is clicked, the                                 
    // fetch function shall be invoked.                                                          
    button.onclick = fetch;


};


// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();