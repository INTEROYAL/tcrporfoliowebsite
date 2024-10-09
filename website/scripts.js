
    

    // <!-- __________________________________________________________________________________________________________________________________________________________________________________ -->
    // <!-- JS for Sticky Header and Smooth Scroll -->

 
document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
    var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');
    var navLinks = document.querySelectorAll('nav a');
    var menuButton = document.getElementById('menuButton');
    var menuText = document.getElementById('menuText');
    var discoverMoreBtn = document.getElementById('discoverMoreBtn');
    var emailLink = document.getElementById('emailLink');
    var emailAddress = 'interoyal20@gmail.com';
    var originalText = 'EMAIL';
    var lastScrollTop = 0;
    var menuContent = document.querySelector('.menu-content'); // Adjust this selector to your menu content

    function handleScroll() {
        page.classList.remove('menuopen');
        var currentScrollTop = window.scrollY;

        if (currentScrollTop >= 700) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
            removeNavLinks();
        }

        if (currentScrollTop > lastScrollTop) {
            removeNavLinks();
            if (menuButton.classList.contains('open')) {
                menuButton.classList.remove('open');
                menuText.textContent = "MENU";
            }
        }
        lastScrollTop = currentScrollTop;
    }

    window.addEventListener('scroll', handleScroll);

    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.toggle('menuopen');
        page.classList.toggle('tent');
        toggleNavLinks();
    });

    function toggleNavLinks() {
        navLinks.forEach(function(link) {
            link.classList.toggle('show');
        });
    }

    function removeNavLinks() {
        navLinks.forEach(function(link) {
            link.classList.remove('show');
        });
    }

    function toggleMenu() {
        page.classList.toggle('menuopen');
        page.classList.toggle('tent');
        toggleNavLinks();
    }

    menuButton.addEventListener('click', function(event) {
        event.preventDefault();
        toggleMenu();
        this.classList.toggle('open');
        if (this.classList.contains('open')) {
            menuText.textContent = "CLOSE";
        } else {
            menuText.textContent = "MENU";
        }
    });

    discoverMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        var currentScrollTop = window.scrollY;
        var halfPageHeight = document.documentElement.scrollHeight / 2;

        if (currentScrollTop >= halfPageHeight) {
            stickyMenuButton.click();
        } else {
            header.classList.remove('sticky');
            window.removeEventListener('scroll', handleScroll);
            window.scrollTo({ top: 0, behavior: 'smooth' });

            setTimeout(function() {
                menuButton.click();
                window.addEventListener('scroll', handleScroll);
            }, 500);
        }
    });

    emailLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (emailLink.textContent === originalText) {
            emailLink.textContent = emailAddress;
            emailLink.href = `mailto:${emailAddress}`;
        } else {
            emailLink.textContent = originalText;
            emailLink.href = `mailto:${emailAddress}`;
        }
        window.location.href = emailLink.href;
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });





















    /*_________________________________________________________
     * Click Outside Menu to Close
     * Closes the menu if clicking outside of it
     __________________________________________________________*/

    document.addEventListener('click', function(event) {
        if (page.classList.contains('menuopen')) {
            if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
                menuButton.click(); // Close the menu by triggering a click on the menu button
            }
        }
    });

    // Prevent clicks inside the menu content from closing the menu
    if (menuContent) {
        menuContent.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent closing when clicking inside the menu content
        });
    }

});




    // <!-- __________________________________________________________________________________________CAROUSEL 2________________________________________________________________________________________ -->
  
    
  
    
   // jQuery for the custom carousel
$(document).ready(function(){
    // Initialize the first carousel
    $('.carousel-item--1').addClass('active');

    // Left arrow click handler for Project1
    $('#moveLeft1').click(function(){
        var activeItem = $('#About .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project1
    $('#moveRight1').click(function(){
        var activeItem = $('#About .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
  
  
  // Initialize the second carousel
    $('#Resume .carousel-item--1').addClass('active');
$(document).ready(function(){
   var images = [
               
                './images/resumecvr1.png',
                './images/Resumep2.png',
                './images/Resumep3.png'
            ];
            
            var currentIndex = 0;

            function updateImage(index) {
                $('#carousel .carousel-item__image').css('background-image', 'url(' + images[index] + ')');
            }

            $('#moveLeft2').click(function(){
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateImage(currentIndex);
            });

            $('#moveRight2').click(function(){
                currentIndex = (currentIndex + 1) % images.length;
                updateImage(currentIndex);
            });

            // Initialize with the first image
            updateImage(currentIndex);
        });

    // Initialize the second carousel
    $('#Projects .carousel-item--1').addClass('active');

    // Left arrow click handler for Project2
    $('#moveLeft3').click(function(){
        var activeItem = $('#Projects .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project2
    $('#moveRight3').click(function(){
        var activeItem = $('#Projects .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
  
   // Initialize the second carousel
    $('#Cloud .carousel-item--1').addClass('active');

    // Left arrow click handler for Project2
    $('#moveLeft4').click(function(){
        var activeItem = $('#Cloud .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project2
    $('#moveRight4').click(function(){
        var activeItem = $('#Cloud .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
  
   // Initialize the second carousel
    $('#DevOps .carousel-item--1').addClass('active');

    // Left arrow click handler for Project2
    $('#moveLeft5').click(function(){
        var activeItem = $('#DevOps .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project2
    $('#moveRight5').click(function(){
        var activeItem = $('#DevOps .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
  
  // Initialize the third carousel
    $('#Frontend .carousel-item--1').addClass('active');

    // Left arrow click handler for Project2
    $('#moveLeft6').click(function(){
        var activeItem = $('#Frontend .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project2
    $('#moveRight6').click(function(){
        var activeItem = $('#Frontend .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
  // Initialize the fourth carousel
    $('#Education .carousel-item--1').addClass('active');

    // Left arrow click handler for Project2
    $('#moveLeft7').click(function(){
        var activeItem = $('#Education .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project2
    $('#moveRight7').click(function(){
        var activeItem = $('#Education .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
  // Initialize the fifth carousel
    $('#Solutions .carousel-item--1').addClass('active');

    // Left arrow click handler for Project2
    $('#moveLeft8').click(function(){
        var activeItem = $('#Solutions .carousel-item.active');
        var prevItem = activeItem.prev('.carousel-item');
        if (prevItem.length) {
            activeItem.removeClass('active');
            prevItem.addClass('active');
        }
    });

    // Right arrow click handler for Project2
    $('#moveRight8').click(function(){
        var activeItem = $('#Solutions .carousel-item.active');
        var nextItem = activeItem.next('.carousel-item');
        if (nextItem.length) {
            activeItem.removeClass('active');
            nextItem.addClass('active');
        }
    });
});

    