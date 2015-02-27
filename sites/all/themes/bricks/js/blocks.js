  jQuery(document).ready(function ($) {
     
	  $(".featured").orbit({timer: false});
	 
	  $(".recent_posts_wrap").live({
			mouseenter : function(){
				$(this).children("div.recent_post_info").stop().animate({left: "50%"}, 300 );
			},
			mouseleave : function(){
				$(this).children("div.recent_post_info").stop().animate({left: "0%"}, 300 );
			}
		});
	    
	  $(".services_content").hover(
      function(){
          $(this).children(".team_image_hover").fadeTo(400,.8).show();
      },
      function(){
          $(this).children(".team_image_hover").fadeTo(400,0);
      }
    );
    
    $(".carousel_item_wrapper").hover(
      function(){
          $(this).children(".carousel_item_hover").fadeTo(400,.9).show();
      },
      function(){
          $(this).children(".carousel_item_hover").fadeTo(400,0);
      }
    );
    
    $().UItoTop({ easingType: 'easeOutQuart' });
    
    $(".recent_post_photo a").replaceWith(function() {  return $(this).contents(); });
    
    $(window).load(function(){
     
      var $container = $('#isotope_test');

      $container.isotope({
        itemSelector : '.switch'
      });
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
    });  

	  $('#recent_projects').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#next",
	      key	: "right"
	    },
	    prev : {
	      button : "#prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: false
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 4
	      }
	    }
	  });
  
    $('#banner').oneByOne({
			className: 'oneByOne1',	             
			/* Please provide the width and height in the responsive 
			version, for the slider will keep the ratio when resize 
			depends on these size. */
			width: 1050,
			height: 420,
			easeType: 'random',
			slideShow: true,
			enableDrag: false, 
			responsive: true,
			minWidth: 480,
			pauseByHover: true, 
			autoHideButton: true
		});  
		
    $('input[type="submit"]').addClass('small button');
       
   	$('.has-dropdown ul').addClass('dropdown');
   	 
   	$('.top-bar ul').removeClass('menu');
   	 
   	$('.menu_wrap ul').addClass('right');

    $('#recent_projects').after('<div style="clear:both;"></div>');
   
   	$('.dropdown').prepend('<li class="title back js-generated"><h5><a href="#">Main Menu</a></h5></li>');
   	  
   	$('.menu_1 a').prepend('<i class="general foundicon-heart"></i>');
   	
   	$('.menu_2 a').prepend('<i class="general foundicon-smiley"></i>');
   	
   	$('.menu_3 a').prepend('<i class="general foundicon-mic"></i>');
   	
   	$('.menu_4 a').prepend('<i class="general foundicon-website"></i>');
   	
   	$('.menu_5 a').prepend('<i class="general foundicon-phone"></i>');
   	
	  $("#google_map").fitMaps( {w: '100%', h:'370px'} ); 
	 
	  jQuery("ul.faq li").each(function(){
	    if(jQuery(this).index() > 0){
	    jQuery(this).children(".faq-content").css('display','none');
	    }
	    else{
	    jQuery(this).find(".faq-head-image").addClass('active');
	    }
	
	    jQuery(this).children(".faq-head").bind("click", function(){
	    jQuery(this).children().addClass(function(){
	    if(jQuery(this).hasClass("active")) return "";
	      return "active";
	    });
	    jQuery(this).siblings(".faq-content").slideDown();
	    jQuery(this).parent().siblings("li").children(".faq-content").slideUp();
	    jQuery(this).parent().siblings("li").find(".active").removeClass("active");
	    });
	  });
	  
	});