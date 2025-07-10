document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.nav-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const popupContainer = document.getElementById('popup-container');
    const popupBody = document.getElementById('popup-body');
    const closeBtn = document.querySelector('.close-btn');
    const certificateGallery = document.getElementById('certificate-gallery');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal .close');

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
        }
    });

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';
        } else {
            darkModeToggle.textContent = '🌙';
        }
    });

    // Smooth scroll functionality
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Close mobile menu if open
                nav.classList.remove('active');
                
                // Smooth scroll to section
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add active state to menu item
                document.querySelectorAll('nav ul li a').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Highlight menu item based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 100; // Offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            const menuItem = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

            if (menuItem && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(item => {
                    item.classList.remove('active');
                });
                menuItem.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        popupContainer.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });

    // Function to add zoom functionality to images
    function addZoomFunctionality(img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.src;
            // Delay adding show class for transition effect
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    }

    // Function to close modal with animation
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match this with CSS transition duration
    }

    // Add zoom functionality to all certificate cards
    document.querySelectorAll('.certificate-card').forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            addZoomFunctionality(img);
        }
    });

    modalClose.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add keyboard support for closing modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Prevent scrolling when modal is open
    modal.addEventListener('show', function() {
        document.body.style.overflow = 'hidden';
    });

    modal.addEventListener('transitionend', function() {
        if (!modal.classList.contains('show')) {
            document.body.style.overflow = '';
        }
    });
});


