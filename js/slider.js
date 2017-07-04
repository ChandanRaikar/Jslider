/* 
  ************FreeSlider(Non-responsive)*************
	Author: Chandan Raikar	
	License: Free to use and modify
	Version: v1.1.0
	Note: All images used and code written has not been taken by any website or any reference, 
	images and any assets used in this plugin is owned by the author of this plugin. 
	And please don't forget to rate this plugin(this would make my life easier to develop more and free plugins).	 
	Website: http://www.devraikar.in
  ************************************
*/

var autoSlideTime = 3000;
var sliderWidth = document.getElementById('slider_content').offsetWidth;
var currentSlide = 0;
var slider = document.getElementById('slides');
var slides = document.querySelectorAll('#slides li');
var prev = document.getElementById('previous_slide');
var next = document.getElementById('next_slide');
var imglength = slides.length - 1;
var slidebox = document.querySelectorAll('#slides li');

var nextSlide = function(){ 	
 	if(currentSlide >= imglength){
 		currentSlide = 0; 		 		
 		slider.style.left = 0;
 	} else {
 		currentSlide = currentSlide + 1;
 		slider.style.left = "-"+sliderWidth * currentSlide +"px";
 	}
}

var previousSlide = function(){	
	if(currentSlide < 1){
 		currentSlide = imglength; 
 		slider.style.left = "-"+sliderWidth * currentSlide +"px";	
 	} else {
 		currentSlide = currentSlide - 1;
 		slider.style.left = "-"+sliderWidth * currentSlide +"px";
 	}
}

prev.addEventListener('click',function(){
	previousSlide();
})

next.addEventListener('click',function(){
	nextSlide();	
})

setInterval(nextSlide,autoSlideTime);


window.load = function(){
	nextSlide()
	previousSlide();	
}