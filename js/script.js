// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileNav && mobileNav.classList.contains('active') && 
            !mobileNav.contains(event.target) && 
            !mobileMenuToggle.contains(event.target)) {
            mobileNav.classList.remove('active');
        }
    });

    // Language Selector
    const languageSelector = document.getElementById('language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            const currentFlag = document.getElementById('current-flag');
            
            if (!currentFlag) {
                console.error('Element with ID "current-flag" not found');
                return;
            }
            
            const lang = currentFlag.getAttribute('data-lang');

            if (lang === 'en') {
                // Switch to Bahasa Indonesia
                currentFlag.src = 'images/flag-id.png';
                currentFlag.setAttribute('data-lang', 'id');
                
                // Change text to Bahasa Indonesia
                translateToIndonesian();
            } else {
                // Switch to English
                currentFlag.src = 'images/flag-en.png';
                currentFlag.setAttribute('data-lang', 'en');
                
                // Change text to English
                translateToEnglish();
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.width = '50px';
    scrollTopBtn.style.height = '50px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.backgroundColor = '#8aa07b';
    scrollTopBtn.style.color = 'white';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.justifyContent = 'center';
    scrollTopBtn.style.alignItems = 'center';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.zIndex = '99';
    scrollTopBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    scrollTopBtn.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    scrollTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') || 
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Helper function to change element text with checking
function changeElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    } else {
        console.warn(`Element with ID "${id}" not found: ${id}`);
    }
}

// Helper function to change element HTML with checking
function changeElementHTML(id, html) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = html;
    } else {
        console.warn(`Element with ID "${id}" not found: ${id}`);
    }
}

// Translation functions
function translateToIndonesian() {
    // Common elements across pages
    changeElementText('site-title', 'Tas Anyaman Mba Ratna');
    changeElementText('nav-home', 'Beranda');
    changeElementText('nav-about', 'Tentang Kami');
    changeElementText('nav-products', 'Produk');
    changeElementText('nav-gallery', 'Galeri');
    changeElementText('nav-blog', 'Blog');
    changeElementText('nav-contact', 'Kontak');
    
    // Mobile navigation
    changeElementText('mobile-nav-home', 'Beranda');
    changeElementText('mobile-nav-about', 'Tentang Kami');
    changeElementText('mobile-nav-products', 'Produk');
    changeElementText('mobile-nav-gallery', 'Galeri');
    changeElementText('mobile-nav-blog', 'Blog');
    changeElementText('mobile-nav-contact', 'Kontak');
    
    // Footer elements
    changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
    changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil. Setiap produk menceritakan kisah warisan budaya dan kerajinan yang luar biasa.');
    changeElementText('footer-quick-links-title', 'Tautan Cepat');
    changeElementText('footer-link-home', 'Beranda');
    changeElementText('footer-link-about', 'Tentang Kami');
    changeElementText('footer-link-products', 'Produk');
    changeElementText('footer-link-gallery', 'Galeri');
    changeElementText('footer-link-blog', 'Blog');
    changeElementText('footer-link-contact', 'Kontak');
    changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
    changeElementText('footer-left', 'Lihat lokasi di Google Maps');
    
    // Page specific translations
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === '/' || currentPage === 'index.html') {
        // Home page translations
        changeElementText('hero-title', 'Kerajinan Tangan Tradisional');
        changeElementText('hero-button', 'Jelajahi Koleksi Kami');
    }
    
    else if (currentPage === 'products.html') {
        // Products page translations
        changeElementText('products-title', 'Produk Kami');
        changeElementText('products-subtitle', 'Jelajahi koleksi tas dan aksesori anyaman buatan tangan kami');
    }
    
    else if (currentPage === 'blog.html') {
        // Blog page translations
        changeElementText('blog-page-title', 'Blog Kami');
        changeElementText('blog-page-subtitle', 'Temukan tips, cerita, dan wawasan tentang kerajinan tenun tradisional');
    }
    
    else if (currentPage === 'gallery.html') {
        // Gallery page translations
        changeElementText('gallery-page-title', 'Galeri Kami');
        changeElementText('gallery-page-subtitle', 'Jelajahi keahlian kami melalui gambar produk dan proses kami');
    }
    
    else if (currentPage === 'contact.html') {
        // Contact page translations
        changeElementText('contact-page-title', 'Hubungi Kami');
        changeElementText('contact-page-subtitle', 'Kami senang mendengar dari Anda. Hubungi kami!');
        changeElementText('contact-get-in-touch', 'Hubungi Kami');
        changeElementText('contact-address-title', 'Alamat');
        changeElementHTML('contact-address', 'Depan KUD Sri Among Tani, No. 97<br>Brenggolo, Plosoklaten, Kabupaten Kediri<br>Jawa Timur 64175');
        changeElementText('contact-phone-title', 'Telepon');
        changeElementText('contact-tiktok-title', 'TikTok');
        changeElementText('contact-instagram-title', 'Instagram');
        changeElementText('contact-hours-title', 'Jam Buka');
        changeElementHTML('contact-hours', 'Senin - Jumat: 9am - 5pm<br>Sabtu: 10am - 4pm<br>Minggu: Tutup');
        changeElementText('contact-form-title', 'Kirim Pesan kepada Kami');
        changeElementText('label-name', 'Nama Kamu');
        changeElementText('label-email', 'Email Kamu');
        changeElementText('label-subject', 'Subjek');
        changeElementText('label-message', 'Pesan Kamu');
        changeElementText('btn-send-message', 'Kirim Pesan');
        changeElementText('location-title', 'Lokasi Kami');
    }
    
    else if (currentPage === 'about.html') {
        // About page translations
        changeElementText('about-page-title', 'Tentang Kami');
        changeElementText('about-page-subtitle', 'Pelajari tentang cerita, misi, dan pengrajin di balik produk kami');
        changeElementText('about-subtitle', 'Cerita Kami');
        changeElementText('about-paragraph-1', 'Tas anyaman Mba Ratna didirikan pada tahun 2020 oleh Dwi Ratnasari. Dengan misi melestarikan dan memajukan teknik tenun tradisional sederhana yang telah diwariskan dari generasi ke generasi.');
        changeElementText('about-paragraph-2', 'Tas anyaman yang dihasilkan dibuat dengan cermat menggunakan metode tenun tradisional. Hal ini dapat melestarikan keterampilan tradisional yang telah diwariskan dan akan terus berkembang di dunia modern. Bekerja sama langsung dengan perajin lokal sebagai mata pencaharian yang berkelanjutan dengan memberikan upah yang layak sebagai bentuk apresiasi terhadap bakat seni para perajin yang luar biasa.');
        changeElementText('about-paragraph-3', 'Komitmen kami terhadap hasil yang berkualitas, autentik, dan berkelanjutan membuat UMKM tas anyaman ini menghasilkan kepercayaan dan kepuasan pelanggan. Saat ini dengan membeli produk tas anyaman kami, Anda tidak hanya membeli barang tradisional dari tangan-tangan cantik tetapi juga mendukung pelestarian budaya dan kerajinan tradisional yang berkelanjutan.');
        changeElementText('mission-title', 'Misi Kami');
        changeElementText('process-title', 'Proses Kami');
        changeElementText('team-title', 'Tim Kami');
    }
    
    else if (currentPage === 'faq.html') {
        // FAQ page translations
        changeElementText('faq-title', 'Pertanyaan yang Sering Diajukan');
        changeElementText('faq-subtitle', 'Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami');
        
        // FAQ intro
        changeElementText('faq-intro-text', 'Kami telah menyusun daftar pertanyaan yang sering diajukan untuk membantu Anda menemukan informasi yang Anda butuhkan. Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda, jangan ragu untuk menghubungi kami.');
        
        // FAQ questions
        changeElementText('faq-q1', 'Berapa lama waktu pengiriman?');
        changeElementText('faq-q2', 'Bagaimana cara melacak status pesanan saya?');
        changeElementText('faq-q3', 'Bagaimana cara mengembalikan atau menukar produk?');
        changeElementText('faq-q4', 'Bagaimana cara membatalkan pesanan?');
        changeElementText('faq-q5', 'Berapa lama waktu pre-order?');
        changeElementText('faq-q6', 'Berapa minimum pembelian grosir?');
        changeElementText('faq-q7', 'Metode pembayaran apa yang diterima?');
        changeElementText('faq-q8', 'Bisakah saya membayar dengan COD?');
        
        // FAQ answers
        changeElementText('faq-a1', 'Pengiriman biasanya memakan waktu sekitar 3-5 hari kerja untuk pengiriman domestik dan 7-14 hari kerja untuk pengiriman internasional.');
        changeElementText('faq-a2', 'Anda dapat melacak pesanan Anda melalui email konfirmasi atau WhatsApp.');
        changeElementText('faq-a3', 'Silakan hubungi kami melalui email atau telepon untuk informasi tentang pengembalian atau penukaran produk.');
        changeElementText('faq-a4', 'Anda dapat membatalkan pesanan Anda sebelum diproses. Silakan hubungi kami untuk informasi lebih lanjut.');
        changeElementText('faq-a5', 'Waktu pre-order biasanya tergantung pada produk dan penjualan (jumlah produk dan pengiriman).');
        changeElementText('faq-a6', 'Tidak ada minimum pembelian grosir.');
        changeElementText('faq-a7', 'Pembayaran dapat dilakukan dengan transfer ke rekening bank BRI.');
        changeElementText('faq-a8', 'Pembayaran COD saat ini tidak tersedia.');
        
        // Contact CTA
        changeElementText('contact-cta-title', 'Masih punya pertanyaan?');
        changeElementText('contact-cta-text', 'Kami siap membantu! Hubungi kami untuk informasi tambahan yang Anda butuhkan.');
        changeElementText('contact-cta-btn', 'Hubungi Kami');
    }
}

function translateToEnglish() {
    // Common elements across pages
    changeElementText('site-title', 'Tas Anyaman Mba Ratna');
    changeElementText('nav-home', 'Home');
    changeElementText('nav-about', 'About');
    changeElementText('nav-products', 'Products');
    changeElementText('nav-gallery', 'Gallery');
    changeElementText('nav-blog', 'Blog');
    changeElementText('nav-contact', 'Contact');
    
    // Mobile navigation
    changeElementText('mobile-nav-home', 'Home');
    changeElementText('mobile-nav-about', 'About');
    changeElementText('mobile-nav-products', 'Products');
    changeElementText('mobile-nav-gallery', 'Gallery');
    changeElementText('mobile-nav-blog', 'Blog');
    changeElementText('mobile-nav-contact', 'Contact');
    
    // Footer elements
    changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
    changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving crafts while providing sustainable livelihoods for skilled artisans. Each product tells a story of cultural heritage and exceptional craftsmanship.');
    changeElementText('footer-quick-links-title', 'Quick Links');
    changeElementText('footer-link-home', 'Home');
    changeElementText('footer-link-about', 'About');
    changeElementText('footer-link-products', 'Products');
    changeElementText('footer-link-gallery', 'Gallery');
    changeElementText('footer-link-blog', 'Blog');
    changeElementText('footer-link-contact', 'Contact');
    changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
    changeElementText('footer-left', 'View Location on Google Maps');
    
    // Page specific translations
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === '/' || currentPage === 'index.html') {
        // Home page translations
        changeElementText('hero-title', 'Tas Anyaman Mba Ratna');
        changeElementText('hero-button', 'Explore Our Collection');
    }
    
    else if (currentPage === 'products.html') {
        // Products page translations
        changeElementText('products-title', 'Our Products');
        changeElementText('products-subtitle', 'Explore our collection of handcrafted woven bags and accessories');
    }
    
    else if (currentPage === 'blog.html') {
        // Blog page translations
        changeElementText('blog-page-title', 'Our Blog');
        changeElementText('blog-page-subtitle', 'Discover tips, stories, and insights about traditional weaving crafts');
    }
    
    else if (currentPage === 'gallery.html') {
        // Gallery page translations
        changeElementText('gallery-page-title', 'Our Gallery');
        changeElementText('gallery-page-subtitle', 'Explore our craftsmanship through images of our products and process');
    }
    
    else if (currentPage === 'contact.html') {
        // Contact page translations
        changeElementText('contact-page-title', 'Contact Us');
        changeElementText('contact-page-subtitle', 'We\'d love to hear from you. Get in touch with us!');
        changeElementText('contact-get-in-touch', 'Get In Touch');
        changeElementText('contact-address-title', 'Address');
        changeElementHTML('contact-address', 'Front of KUD Sri Among Tani, No. 97<br>Brenggolo, Plosoklaten, Kediri Regency<br>East Java 64175');
        changeElementText('contact-phone-title', 'Phone');
        changeElementText('contact-tiktok-title', 'TikTok');
        changeElementText('contact-instagram-title', 'Instagram');
        changeElementText('contact-hours-title', 'Open Hours');
        changeElementHTML('contact-hours', 'Monday - Friday: 9am - 5pm<br>Saturday: 10am - 4pm<br>Sunday: Closed');
        changeElementText('contact-form-title', 'Send Us a Message');
        changeElementText('label-name', 'Your Name');
        changeElementText('label-email', 'Your Email');
        changeElementText('label-subject', 'Subject');
        changeElementText('label-message', 'Your Message');
        changeElementText('btn-send-message', 'Send Message');
        changeElementText('location-title', 'Our Location');
    }
    
    else if (currentPage === 'about.html') {
        // About page translations
        changeElementText('about-page-title', 'About Us');
        changeElementText('about-page-subtitle', 'Learn about the story, mission, and artisans behind our products');
        changeElementText('about-subtitle', 'Our Story');
        changeElementText('about-paragraph-1', 'Tas Anyaman Mba Ratna was founded in 2020 by Dwi Ratnasari. With a mission to preserve and promote traditional simple weaving techniques that have been passed down from generation to generation.');
        changeElementText('about-paragraph-2', 'The woven bags produced are carefully made using traditional weaving methods. This can preserve traditional skills passed down and will continue to develop in the modern world. Working directly with local craftsmen as a sustainable livelihood by providing decent wages as a form of appreciation for the extraordinary artistic talents of the craftsmen.');
        changeElementText('about-paragraph-3', 'Our commitment to quality, authenticity, and sustainability enables these woven bag MSMEs to generate trust and customer satisfaction. Currently buying our woven bag products, you are not only buying traditional goods from beautiful hands but also supporting the preservation of sustainable traditional culture and handicrafts.');
        changeElementText('mission-title', 'Our Mission');
        changeElementText('process-title', 'Our Process');
        changeElementText('team-title', 'Our Team');
    }
    
    else if (currentPage === 'faq.html') {
        // FAQ page translations
        changeElementText('faq-title', 'Frequently Asked Questions');
        changeElementText('faq-subtitle', 'Find answers to common questions about our products and services');
        
        // FAQ intro
        changeElementText('faq-intro-text', 'We\'ve compiled a list of frequently asked questions to help you find the information you need. If you can\'t find the answer to your question, please don\'t hesitate to contact us.');
        
        // FAQ questions
        changeElementText('faq-q1', 'How long does it take to ship?');
        changeElementText('faq-q2', 'How do I track my order status?');
        changeElementText('faq-q3', 'How do I return or exchange a product?');
        changeElementText('faq-q4', 'How do I cancel an order?');
        changeElementText('faq-q5', 'How long is the pre-order item?');
        changeElementText('faq-q6', 'What is the minimum wholesale order?');
        changeElementText('faq-q7', 'What payment methods are accepted?');
        changeElementText('faq-q8', 'Can I pay Cash On Delivery/COD?');
        
        // FAQ answers
        changeElementText('faq-a1', 'Shipping usually takes approximately 3-5 business days for domestic shipping and 7-14 business days for international shipping.');
        changeElementText('faq-a2', 'You can track your order via your confirmation email or WhatsApp.');
        changeElementText('faq-a3', 'Please contact us via email or phone for information on returning or exchanging products.');
        changeElementText('faq-a4', 'You can cancel your order before it is processed. Please contact us for more information.');
        changeElementText('faq-a5', 'The pre-order time usually depends on the product and sales (quantity of products and shipping).');
        changeElementText('faq-a6', 'There is no minimum wholesale purchase.');
        changeElementText('faq-a7', 'Payment can be made by transfer to a BRI bank account.');
        changeElementText('faq-a8', 'COD payments are currently not available.');
        
        // Contact CTA
        changeElementText('contact-cta-title', 'Still have questions?');
        changeElementText('contact-cta-text', 'We\'re here to help! Contact us for any additional information you may need.');
        changeElementText('contact-cta-btn', 'Contact Us');
    }
}
