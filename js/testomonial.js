
jQuery(document).ready(function() {

    jQuery("#testimonial-slider").owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [600,1],
        itemsMobile : [479,1],
        pagination : true,
        autoHeight:true,
        autoPlay : 9000
    });

});
