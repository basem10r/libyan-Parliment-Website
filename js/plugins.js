$(document).ready(function() {



  


var owl1 = $("#owl1");
 
  owl1.owlCarousel({
      autoplay : true,
      items : 4, //10 items above 1000px browser width
      margin:30,
      nav:true,
      dots:false,
      ltr:true,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true,
            margin:30
        },
        600:{
            items:1,
            loop:true,
            margin:30
        },
        
        800:{
            items:1,
            loop:true
        },
        1200:{
            items:1,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });



var owl2 = $("#owl2");
 
  owl2.owlCarousel({
      autoplay : true,
      items : 4, //10 items above 1000px browser width
      margin:30,
      dots:true,
      ltr:true,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true,
            margin:40
        },
        600:{
            items:1,
            loop:true,
            margin:30
        },
        
        800:{
            items:1,
            loop:true
        },
        1200:{
            items:1,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });

var owl3 = $("#owl3");
 
  owl3.owlCarousel({
      autoplay : true,
      items : 5, //10 items above 1000px browser width
      nav:true,
      ltr:true,
      dots:false,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true
        },
        600:{
            items:2 ,
            loop:true
        },
        
        800:{
            items:3,
            loop:true
        },
        1200:{
            items:3,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });


var owl4 = $("#owl4");
 
  owl4.owlCarousel({
      autoplay : true,
      items : 5, //10 items above 1000px browser width
      margin:30,
      dots:true,
      ltr:true,
      nav:true,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true,
            margin:30
        },
        600:{
            items:2 ,
            loop:true,
            margin:30
        },
        
        800:{
            items:3,
            loop:true
        },
        1200:{
            items:4,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });


 

var owl6 = $("#owl6");
 
  owl6.owlCarousel({
      autoplay : true,
      items : 4, //10 items above 1000px browser width
      margin:30,
      nav:true,
      dots:false,
      ltr:true,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true,
            margin:30
        },
        600:{
            items:1,
            loop:true,
            margin:30
        },
        
        800:{
            items:1,
            loop:true
        },
        1200:{
            items:1,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });


var owl7 = $("#owl7");
 
  owl7.owlCarousel({
      autoplay : true,
      items : 6, //10 items above 1000px browser width
      margin:30,
      dots:true,
      ltr:true,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true,
            margin:30
        },
        600:{
            items:1,
            loop:true,
            margin:30
        },
        
        800:{
            items:1,
            loop:true
        },
        1200:{
            items:1,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });

  $(document).ready(function() {
  $('#fullpage').fullpage({
    //options here
    
    navigation: true,
    autoScrolling:true,
    navigationPosition: 'left',
    scrollHorizontally: true,
    scrollBar: true,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(false);
});

});






 


