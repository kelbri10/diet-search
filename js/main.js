$(document).ready(function(){
	
	// initialize select for materialize framework
    $('select').material_select();
    
    // smooth scroll to anchor function
    function scrollTo(id) {
	    $('html,body').animate({scrollTop: $('#' + id).offset().top},'fast');
	}
    
    // info for restrictions
    var restrictions = {
		dairy: {
			name: 'Dairy-Free',
			icon: '<i class="fal fa-cheese-swiss"></i>',
			recipe: '&health=dairy-free',
			menu: ''
		},
		egg: {
			name: 'Egg-Free',
			icon: '<i class="fal fa-egg"></i>',
			recipe: '&health=egg-free',
			menu: ''
		},
		gluten: {
			name: 'Gluten-Free',
			icon: '<i class="fal fa-bread-loaf"></i>',
			recipe: '&health=gluten-free',
			menu: ''
		},
		keto: {
			name: 'Keto',
			icon: '<i class="fal fa-meat"></i>',
			recipe: '&health=keto-friendly',
			menu: ''
		},
		paleo: {
			name: 'Paleo',
			icon: '<i class="fal fa-apple-alt"></i>',
			recipe: '&health=paleo',
			menu: ''
		},
		peanut: {
			name: 'Peanut-Free',
			icon: '<i class="fal fa-acorn"></i>',
			recipe: '&health=peanut-free',
			menu: ''
		},
		pescatarian: {
			name: 'Pescatarian',
			icon: '<i class="fal fa-fish-cooked"></i>',
			recipe: '&health=pescatarian',
			menu: ''
		},
		pork: {
			name: 'Pork-Free',
			icon: '<i class="fal fa-pig"></i>',
			recipe: '&health=pork-free',
			menu: ''
		},
		redMeat: {
			name: 'Red Meat-Free',
			icon: '<i class="fal fa-steak"></i>',
			recipe: '&health=red-meat-free',
			menu: ''
		},
		shellfish: {
			name: 'Shellfish-Free',
			icon: '<i class="fal fa-fish"></i>',
			recipe: '&health=shellfish-free',
			menu: ''
		},
		soy: {
			name: 'Soy-Free',
			icon: '<i class="fal fa-seedling"></i>',
			recipe: '&health=soy-free',
			menu: ''
		},
		treeNut: {
			name: 'Tree-Nut-Free',
			icon: '<i class="fal fa-tree-alt"></i>',
			recipe: '&health=tree-nut-free',
			menu: ''
		},
		vegan: {
			name: 'Vegan',
			icon: '<i class="fal fa-carrot"></i>',
			recipe: '&health=vegan',
			menu: ''
		},
		vegetarian: {
			name: 'Vegetarian',
			icon: '<i class="fal fa-salad"></i>',
			recipe: '&health=vegetarian',
			menu: ''
		},
		wheat: {
			name: 'Wheat-Free',
			icon: '<i class="fal fa-wheat"></i>',
			recipe: '&health=wheat-free',
			menu: ''
		}
    };
    console.log(restrictions);
  
	// recipe API carousel
	$('#recipes .owl-carousel').owlCarousel({

		margin: 20,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        575:{
	            items:2
	        },
	        767:{
	            items:3
	        },
	        1199:{
	            items:4,
	            loop:true
	        }
	    },
		loop: true,
		nav:true,
		navText: ['',''],
		dots: false,
		lazyLoad: false,
		autoplay: false,
		navSpeed: 500
	});
	
	// menu API carousel
	$('#menus .owl-carousel').owlCarousel({
		margin: 20,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        575:{
	            items:2
	        },
	        767:{
	            items:3
	        },
	        1199:{
	            items:4,
	            loop:true
	        }
	    },
		loop: true,
		nav:true,
		navText: ['',''],
		dots: false,
		lazyLoad: false,
		autoplay: false,
		navSpeed: 500
	});
	
	// on form submit...
	$('#hero form').on('submit', function(event) {
	   event.preventDefault();	   
	   scrollTo('content'); 
    });
    
    // on menu item button click...
    $('#menus .btn-floating').on('click', function(event) {
	   event.preventDefault();
	   scrollTo('map');
    });

    // on footer button click...
    $('footer a.btn-large').on('click', function(event) {
	   event.preventDefault();
	   scrollTo('hero');
    });

});