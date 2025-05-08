document.addEventListener("DOMContentLoaded", function() {
    
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const barIcon = document.getElementById("bar-icon");
    const closeIcon = document.getElementById("close-icon");

    console.log(menuToggle);

    menuToggle.addEventListener("click", function (){
        
        mobileNav.classList.toggle("active");

        if(mobileNav.classList.contains("active")){
            barIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else{
            barIcon.style.display = "block";
            closeIcon.style.display = "none";
        }




    });


    // -----------------------------backTop--------------------------------
    $(window).scroll(function(){
        if($(this).scrollTop()){
          $('#backtop').fadeIn();
        } else{
          $('#backtop').fadeOut();
        }
      });
  
      $("#backtop").click(function(){
        $('html, body').animate({scrollTop:0}, 500);  //500: toc do back
      });

});






