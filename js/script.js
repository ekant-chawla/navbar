$(document).ready(()=>{

	$(document).on('click',hideMenuDropdowns)
	$('.dropdown-container a').on('click',toggleMenuDropdown);
	$('.nav-collapse-btn').on('click',()=>{$('.nav-link-container').slideToggle();})
})


let toggleMenuDropdown = (event)=> {
	event.preventDefault();
	event.stopPropagation();

	let target = $($(event.target).attr('href'));
	
	if(target.css('display')=='none'){
		hideMenuDropdowns();
		$(event.target).addClass('active');
		target.slideDown();
	} else{
		hideMenuDropdowns();
	}
}//this function opens/closes the clicked menu and close any other menus open.

let hideMenuDropdowns = ()=>{
	$('.dropdown').slideUp().prev().removeClass('active');
}//this funtion closes all menus