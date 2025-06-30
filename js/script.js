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
    const currentFlag = document.getElementById('current-flag');
    
    // Set default language to English when page loads
    if (currentFlag) {
        currentFlag.src = 'images/flag-en.png';
        currentFlag.setAttribute('data-lang', 'en');
        setEnglishLanguage();
        updateGalleryPrices('en');
        if (typeof updateProductLanguage === 'function') updateProductLanguage('en');
        if (typeof updateBlogLanguage === 'function') updateBlogLanguage('en');
        if (typeof updateBlogDetailLanguage === 'function') updateBlogDetailLanguage('en');
        if (typeof updateFaqLanguage === 'function') updateFaqLanguage('en');
    }
    
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            const currentFlag = document.getElementById('current-flag');
            if (!currentFlag) {
                console.error('Element with ID "current-flag" not found');
                return;
            }
            const lang = currentFlag.getAttribute('data-lang');
            if (lang === 'en') {
                currentFlag.src = 'images/flag-id.png';
                currentFlag.setAttribute('data-lang', 'id');
                setIndonesianLanguage();
                updateGalleryPrices('id');
                // Add delay for products page to ensure DOM is ready
                setTimeout(() => {
                    if (typeof updateProductLanguage === 'function') updateProductLanguage('id');
                }, 50);
                if (typeof updateBlogLanguage === 'function') updateBlogLanguage('id');
                if (typeof updateBlogDetailLanguage === 'function') updateBlogDetailLanguage('id');
                if (typeof updateFaqLanguage === 'function') updateFaqLanguage('id');
            } else {
                currentFlag.src = 'images/flag-en.png';
                currentFlag.setAttribute('data-lang', 'en');
                setEnglishLanguage();
                updateGalleryPrices('en');
                // Add delay for products page to ensure DOM is ready
                setTimeout(() => {
                    if (typeof updateProductLanguage === 'function') updateProductLanguage('en');
                }, 50);
                if (typeof updateBlogLanguage === 'function') updateBlogLanguage('en');
                if (typeof updateBlogDetailLanguage === 'function') updateBlogDetailLanguage('en');
                if (typeof updateFaqLanguage === 'function') updateFaqLanguage('en');
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
function setIndonesianLanguage() {
    // Navigation and Hero (all pages)
    changeElementText('site-title', 'Tas Anyaman Mba Ratna');
    changeElementText('nav-home', 'Beranda');
    changeElementText('nav-about', 'Tentang Kami');
    changeElementText('nav-products', 'Produk');
    changeElementText('nav-gallery', 'Galeri');
    changeElementText('nav-blog', 'Blog');
    changeElementText('nav-contact', 'Kontak');
    changeElementText('nav-faq', 'FAQ');
    
    // Mobile Navigation
    changeElementText('mobile-nav-home', 'Beranda');
    changeElementText('mobile-nav-about', 'Tentang Kami');
    changeElementText('mobile-nav-products', 'Produk');
    changeElementText('mobile-nav-gallery', 'Galeri');
    changeElementText('mobile-nav-blog', 'Blog');
    changeElementText('mobile-nav-contact', 'Kontak');
    changeElementText('mobile-nav-faq', 'FAQ');
    changeElementText('mobile-nav-shop', 'Belanja Sekarang');
    // Page-specific translations
    const page = window.location.pathname.split('/').pop();
    if (page === '' || page === 'index.html') {
        // Home page
        changeElementText('hero-title', 'Tas Anyaman Mba Ratna');
        changeElementText('hero-description', 'Tas Anyaman Mba Ratna menawarkan tas kerajinan dengan kualitas terbaik dan menarik bagi semua pelanggan. Cari dan temukan tas pilihan Anda!');
        changeElementText('hero-button', 'Jelajahi Koleksi Kami');
        // Update gallery prices
        updateGalleryPrices('id');
        // Featured products section title
        changeElementText('featured-products-title', 'Produk Unggulan');
        changeElementText('featured-products-subtitle', 'Temukan koleksi kerajinan anyaman tradisional buatan tangan kami');
        // Featured products (index)
        changeElementText('featured-title-1', 'Tas Souvenir');
        changeElementText('featured-desc-1', 'Tas souvenir anyaman custom ini cocok untuk pernikahan. Permintaan gratis! Anda bisa memilih kombinasi warna sendiri.');
        changeElementText('featured-title-2', 'Tas Anyaman Premium');
        changeElementText('featured-desc-2', 'Tas anyaman premium ini cocok untuk tampil stylish saat hangout atau acara santai. Tersedia berbagai pilihan warna.');
        changeElementText('featured-title-3', 'Tas Belanja');
        changeElementText('featured-desc-3', 'Tas belanja anyaman ini praktis, kuat, dan ramah lingkungan, ideal untuk belanja harian.');
        // Harga featured products
        changeElementText('featured-price-1', 'Rp 4.000 - Rp 10.000');
        changeElementText('featured-price-2', 'Rp 55.000 - Rp 75.000');
        changeElementText('featured-price-3', 'Rp 5.000 - Rp 10.000');
        // View all products button
        changeElementText('view-all-products-button', 'Lihat Semua Produk');
        // About button (Learn More)
        changeElementText('about-button', 'Pelajari Lebih Lanjut');
        // Contact section on index page
        changeElementText('contact-title', 'Hubungi Kami');
        changeElementText('home-contact-get-in-touch', 'Hubungi Kami');
        changeElementText('contact-address-title', 'Alamat');
        changeElementHTML('contact-address', 'Depan KUD Sri Among Tani, No. 97<br>Brenggolo, Plosoklaten, Kabupaten Kediri<br>Jawa Timur 64175');
        changeElementText('contact-phone-title', 'Telepon');
        changeElementText('contact-phone', '(62) 856-0898-0005');
        changeElementText('contact-tiktok-title', 'TikTok');
        changeElementText('contact-tiktok', '@tas_anyaman_mba_ratna');
        changeElementText('contact-instagram-title', 'Instagram');
        changeElementText('contact-instagram', '@tas_anyaman_ratna');
        changeElementText('contact-hours-title', 'Jam Buka');
        changeElementHTML('contact-hours', 'Senin - Jumat: 9am - 5pm<br>Sabtu: 10am - 4pm<br>Minggu: Tutup');
        changeElementText('contact-form-title', 'Kirim Pesan kepada Kami');
        // Footer
        changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
        changeElementText('footer-quick-links-title', 'Tautan Cepat');
        changeElementText('footer-link-home', 'Beranda');
        changeElementText('footer-link-about', 'Tentang Kami');
        changeElementText('footer-link-products', 'Produk');
        changeElementText('footer-link-gallery', 'Galeri');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Kontak');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
        changeElementText('footer-left', 'Lihat Lokasi di Google Maps');
        if (typeof updateFeaturedProductsLanguage === 'function') updateFeaturedProductsLanguage('id');
    } else if (page === 'about.html') {
        changeElementText('about-page-title', 'Tentang Kami');
        changeElementText('about-page-subtitle', 'Pelajari tentang cerita, misi, dan pengrajin di balik produk kami');
        changeElementText('about-subtitle', 'Cerita Kami');
        changeElementText('about-paragraph-1', 'Tas Anyaman Mba Ratna didirikan pada tahun 2020 oleh Dwi Ratnasari. Dengan misi melestarikan dan memajukan teknik tenun tradisional sederhana yang telah diwariskan dari generasi ke generasi.');
        changeElementText('about-paragraph-2', 'Tas anyaman yang dihasilkan dibuat dengan cermat menggunakan metode tenun tradisional. Hal ini dapat melestarikan keterampilan tradisional yang telah diwariskan dan akan terus berkembang di dunia modern.');
        changeElementText('about-paragraph-3', 'Komitmen kami terhadap kualitas, keaslian, dan keberlanjutan memungkinkan UMKM tas anyaman ini menghasilkan kepercayaan dan kepuasan pelanggan.');
        // About page gallery captions
        changeElementText('about-gallery-title', 'Galeri Foto');
        changeElementText('about-gallery-caption-1', "Pemilik Tas Anyaman Mba’ Ratna: Dwi Ratnasari seorang guru TK yang aktif dan kreatif");
        changeElementText('about-gallery-caption-2', 'Proses pembuatan: Proses pembuatan tas anyaman dilakukan secara tradisional dengan tangan');
        changeElementText('about-gallery-caption-3', 'Produk tas souvenir: tas souvenir grosir yang dapat digunakan untuk souvenir pernikahan');
        changeElementText('about-gallery-caption-4', 'Bahan tas anyaman: Bahan utama tas anyaman ini berasal dari limbah plastik daur ulang');
        // About page mission
        changeElementText('mission-title', 'Misi Kami');
        changeElementText('mission-1-title', 'Melestarikan Tradisi');
        changeElementText('mission-1-desc', 'Kami berdedikasi untuk melestarikan teknik tenun tradisional dan memastikan keterampilan berharga ini terus diwariskan dari generasi ke generasi.');
        changeElementText('mission-2-title', 'Keberlanjutan');
        changeElementText('mission-2-desc', 'Kami menggunakan bahan alami yang berkelanjutan dan praktik ramah lingkungan dalam semua aspek proses produksi kami.');
        changeElementText('mission-3-title', 'Mendukung Pengrajin');
        changeElementText('mission-3-desc', 'Kami memberikan upah yang adil dan mata pencaharian yang berkelanjutan bagi para pengrajin terampil kami, memberdayakan komunitas lokal melalui praktik bisnis yang etis.');
        // About page process
        changeElementText('process-title', 'Proses Kami');
        changeElementText('process-1-title', 'Pemilihan Bahan');
        changeElementText('process-1-desc', 'Kami dengan cermat memilih bahan alami dan berkelanjutan seperti rotan, daun palma, dan serat alami untuk produk kami.');
        changeElementText('process-2-title', 'Persiapan');
        changeElementText('process-2-desc', 'Bahan-bahan dipersiapkan secara manual, termasuk pembersihan, pemotongan, dan kadang-kadang pewarnaan menggunakan pewarna alami.');
        changeElementText('process-3-title', 'Proses Menenun');
        changeElementText('process-3-desc', 'Pengrajin terampil menenun setiap produk dengan tangan menggunakan teknik tradisional yang diwariskan turun-temurun.');
        changeElementText('process-4-title', 'Finishing');
        changeElementText('process-4-desc', 'Setiap produk yang dihasilkan diperhatikan dengan cermat untuk memastikan daya tahan dan estetika.');
        changeElementText('process-5-title', 'Pemeriksaan Kualitas');
        changeElementText('process-5-desc', 'Setiap produk menjalani pemeriksaan kualitas menyeluruh untuk memastikan memenuhi standar tinggi kami sebelum ditawarkan kepada pelanggan.');
        // Footer
        changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
        changeElementText('footer-quick-links-title', 'Tautan Cepat');
        changeElementText('footer-link-home', 'Beranda');
        changeElementText('footer-link-about', 'Tentang Kami');
        changeElementText('footer-link-products', 'Produk');
        changeElementText('footer-link-gallery', 'Galeri');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Kontak');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
        changeElementText('footer-left', 'Lihat Lokasi di Google Maps');
    } else if (page === 'products.html') {
        changeElementText('products-page-title', 'Produk Kami');
        changeElementText('products-page-subtitle', 'Jelajahi koleksi tas anyaman tradisional buatan tangan kami');
        // All Products button
        changeElementText('all-products-btn', 'Semua Produk');
        // Modal buy button
        changeElementText('modal-buy-button', 'Beli Sekarang');
        // Product prices
        convertFeaturedProductPrices('id');
        // Delay product language update to ensure products are loaded
        setTimeout(() => {
            if (typeof updateProductLanguage === 'function') updateProductLanguage('id');
        }, 100);
        // Footer
        changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
        changeElementText('footer-quick-links-title', 'Tautan Cepat');
        changeElementText('footer-link-home', 'Beranda');
        changeElementText('footer-link-about', 'Tentang Kami');
        changeElementText('footer-link-products', 'Produk');
        changeElementText('footer-link-gallery', 'Galeri');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Kontak');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
        changeElementText('footer-left', 'Lihat Lokasi di Google Maps');
    } else if (page === 'gallery.html') {
        changeElementText('gallery-page-title', 'Galeri Kami');
        changeElementText('gallery-page-subtitle', 'Jelajahi keahlian kami melalui gambar produk dan proses kami');
        changeElementText('gallery-videos-title', 'Video Kami');
        changeElementText('promo-video-title', 'Video Promosi');
        changeElementText('promo-video-subtitle', 'Tas Anyaman Premium Mba Ratna');
        changeElementText('promo-video-desc', 'Unik, stylish, dan terjangkau! Terbuat dari plastik sintetis berkualitas tinggi, produk ini ringan dan tahan lama. Bisa kustomisasi warna dan desain sesuai gaya Anda.');
        changeElementText('promo-video-price', '💸 Harga: Rp 55.000 – Rp 75.000');
        changeElementText('promo-video-note', 'Cocok untuk tampilan harian, OOTD, atau hadiah spesial!');
        changeElementText('manufacturing-video-title', 'Video Produksi');
        changeElementText('manufacturing-video-subtitle', 'Proses Produksi Tas Anyaman Mba Ratna');
        changeElementText('manufacturing-video-desc', 'Dari memotong plastik, menyusun, hingga proses anyaman oleh 4-5 pengrajin kreatif. Dalam sehari, bisa diproduksi 50-75 tas dengan berbagai model. Pelanggan bisa request warna, ukuran, dan aksesoris. Hasilnya tas yang kuat, estetik, dan multifungsi—cocok untuk souvenir acara atau fashion premium.');
        // Footer
        changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
        changeElementText('footer-quick-links-title', 'Tautan Cepat');
        changeElementText('footer-link-home', 'Beranda');
        changeElementText('footer-link-about', 'Tentang Kami');
        changeElementText('footer-link-products', 'Produk');
        changeElementText('footer-link-gallery', 'Galeri');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Kontak');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
        changeElementText('footer-left', 'Lihat Lokasi di Google Maps');
    } else if (page === 'blog.html') {
        changeElementText('blog-page-title', 'Blog Kami');
        changeElementText('blog-page-subtitle', 'Temukan tips, cerita, dan wawasan tentang kerajinan anyaman tradisional');
        if (typeof updateBlogLanguage === 'function') updateBlogLanguage('id');
    } else if (page === 'contact.html') {
        changeElementText('contact-page-title', 'Hubungi Kami');
        changeElementText('contact-page-subtitle', 'Kami senang mendengar dari Anda. Hubungi kami!');
        changeElementText('location-title', 'Lokasi Kami');
        changeElementText('contact-get-in-touch', 'Hubungi Kami');
        changeElementText('contact-page-address-title', 'Alamat');
        changeElementHTML('contact-page-address', 'Depan KUD Sri Among Tani, No. 97<br>Brenggolo, Plosoklaten, Kabupaten Kediri<br>Jawa Timur 64175');
        changeElementText('contact-page-phone-title', 'Whatsapp');
        changeElementText('contact-page-phone', '0856-0898-0005');
        changeElementText('contact-page-tiktok-title', 'TikTok');
        changeElementText('contact-page-tiktok', '@tas_anyaman_ratna');
        changeElementText('contact-page-instagram-title', 'Instagram');
        changeElementText('contact-page-instagram', '@Tas_anyaman_mba_ratna');
        changeElementText('contact-page-form-title', 'Kirim Pesan kepada Kami');
        // Footer
        changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
        changeElementText('footer-quick-links-title', 'Tautan Cepat');
        changeElementText('footer-link-home', 'Beranda');
        changeElementText('footer-link-about', 'Tentang Kami');
        changeElementText('footer-link-products', 'Produk');
        changeElementText('footer-link-gallery', 'Galeri');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Kontak');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
        changeElementText('footer-left', 'Lihat Lokasi di Google Maps');
    } else if (page === 'faq.html') {
        changeElementText('faq-title', 'Pertanyaan yang Sering Diajukan');
        changeElementText('faq-subtitle', 'Temukan jawaban atas pertanyaan umum tentang produk dan layanan kami');
        if (typeof updateFaqLanguage === 'function') updateFaqLanguage('id');
        // Footer
        changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
        changeElementText('footer-quick-links-title', 'Tautan Cepat');
        changeElementText('footer-link-home', 'Beranda');
        changeElementText('footer-link-about', 'Tentang Kami');
        changeElementText('footer-link-products', 'Produk');
        changeElementText('footer-link-gallery', 'Galeri');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Kontak');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
        changeElementText('footer-left', 'Lihat Lokasi di Google Maps');
    }
    
    // Gallery Section
    changeElementText('gallery-item-1', 'Proses Tenun');
    changeElementText('gallery-item-2', 'Pengrajin Sedang Bekerja');
    changeElementText('gallery-item-3', 'Produk Jadi');
    changeElementText('gallery-item-4', 'Persiapan Bahan');
    changeElementText('gallery-item-5', 'Workshop Kami');
    changeElementText('gallery-item-6', 'Tampilan Produk');
    
    // Form labels (common across pages)
    changeElementText('label-name', 'Nama Anda');
    changeElementText('label-email', 'Email Anda');
    changeElementText('label-subject', 'Subjek');
    changeElementText('label-message', 'Pesan Anda');
    changeElementText('btn-send-message', 'Kirim Pesan');
    
    // Gallery page translations
    changeElementText('gallery-page-title', 'Galeri Kami');
    changeElementText('gallery-page-subtitle', 'Jelajahi keahlian kami melalui gambar produk dan proses kami');
    changeElementText('gallery-videos-title', 'Video Kami');
    changeElementText('promo-video-title', 'Video Promosi');
    changeElementText('promo-video-subtitle', 'Tas Anyaman Premium Mba Ratna');
    changeElementText('promo-video-desc', 'Unik, stylish, dan terjangkau! Terbuat dari plastik sintetis berkualitas tinggi, produk ini ringan dan tahan lama. Bisa kustomisasi warna dan desain sesuai gaya Anda.');
    changeElementText('promo-video-price', '💸 Harga: Rp 55.000 – Rp 75.000');
    changeElementText('promo-video-note', 'Cocok untuk tampilan harian, OOTD, atau hadiah spesial!');
    changeElementText('manufacturing-video-title', 'Video Produksi');
    changeElementText('manufacturing-video-subtitle', 'Proses Produksi Tas Anyaman Mba Ratna');
    changeElementText('manufacturing-video-desc', 'Dari memotong plastik, menyusun, hingga proses anyaman oleh 4-5 pengrajin kreatif. Dalam sehari, bisa diproduksi 50-75 tas dengan berbagai model. Pelanggan bisa request warna, ukuran, dan aksesoris. Hasilnya tas yang kuat, estetik, dan multifungsi—cocok untuk souvenir acara atau fashion premium.');
    
    // Footer Section
    changeElementText('footer-about-title', 'Tentang Tas Anyaman Mba Ratna');
    changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna berdedikasi untuk melestarikan kerajinan tenun tradisional sambil memberikan mata pencaharian yang berkelanjutan bagi pengrajin terampil.');
    changeElementText('footer-quick-links-title', 'Tautan Cepat');
    changeElementText('footer-link-home', 'Beranda');
    changeElementText('footer-link-products', 'Produk');
    changeElementText('footer-link-gallery', 'Galeri');
    changeElementText('footer-link-blog', 'Blog');
    changeElementText('footer-link-contact', 'Kontak');
    changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. Semua Hak Dilindungi.');
    changeElementText('footer-left', 'Lihat Lokasi di Google Maps');

    // About Us section on home
    changeElementText('about-title-home', 'Tentang Kami');
    changeElementText('about-subtitle-home', 'Melestarikan Tradisi Kerajinan Tangan');
    changeElementText('about-paragraph-home-1', 'Tas Anyaman Mba Ratna didirikan pada tahun 2020 oleh Dwi Ratnasari. Misinya adalah melestarikan dan memajukan teknik anyaman tradisional sederhana yang telah diwariskan dari generasi ke generasi.');
    changeElementText('about-paragraph-home-2', 'Tas anyaman yang dihasilkan dibuat dengan cermat menggunakan metode tenun tradisional. Hal ini dapat melestarikan keterampilan tradisional yang telah diwariskan dan akan terus berkembang di dunia modern. Bekerja langsung dengan pengrajin lokal sebagai mata pencaharian berkelanjutan dengan memberikan upah layak sebagai bentuk apresiasi atas bakat seni luar biasa para pengrajin.');
    changeElementText('about-paragraph-home-3', 'Komitmen kami terhadap kualitas, keaslian, dan keberlanjutan memungkinkan UMKM tas anyaman ini menghasilkan kepercayaan dan kepuasan pelanggan. Dengan membeli produk kami.');
}

function setEnglishLanguage() {
    // Navigation and Hero (all pages)
    changeElementText('site-title', 'Tas Anyaman Mba Ratna');
    changeElementText('nav-home', 'Home');
    changeElementText('nav-about', 'About');
    changeElementText('nav-products', 'Products');
    changeElementText('nav-gallery', 'Gallery');
    changeElementText('nav-blog', 'Blog');
    changeElementText('nav-contact', 'Contact');
    changeElementText('nav-faq', 'FAQ');
    
    // Mobile Navigation
    changeElementText('mobile-nav-home', 'Home');
    changeElementText('mobile-nav-about', 'About');
    changeElementText('mobile-nav-products', 'Products');
    changeElementText('mobile-nav-gallery', 'Gallery');
    changeElementText('mobile-nav-blog', 'Blog');
    changeElementText('mobile-nav-contact', 'Contact');
    changeElementText('mobile-nav-faq', 'FAQ');
    changeElementText('mobile-nav-shop', 'Shop Now');
    // Page-specific translations
    const page = window.location.pathname.split('/').pop();
    if (page === '' || page === 'index.html') {
        // Home page
        changeElementText('hero-title', 'Tas Anyaman Mba Ratna');
        changeElementText('hero-description', 'Tas Anyaman Mba Ratna offers the best quality and attractive craft bags to all customers. Search and find the bag of your choice!');
        changeElementText('hero-button', 'Explore Our Collection');
        // Update gallery prices
        updateGalleryPrices('en');
        // Featured products section title
        changeElementText('featured-products-title', 'Featured Products');
        changeElementText('featured-products-subtitle', 'Discover our handcrafted collection of traditional woven items');
        // Featured products (index)
        changeElementText('featured-title-1', 'Souvenir Bag');
        changeElementText('featured-desc-1', 'This custom-woven souvenir bag is perfect for weddings. Free request! You can choose a combination of colors.');
        changeElementText('featured-title-2', 'Premium Woven Bag');
        changeElementText('featured-desc-2', 'This premium woven bag is perfect for looking stylish when hanging out or at casual events. It is available in various colors.');
        changeElementText('featured-title-3', 'Shopping Bag');
        changeElementText('featured-desc-3', 'This market woven shopping bag is practical, strong, and environmentally friendly, ideal for carrying groceries.');
        // Harga featured products
        changeElementText('featured-price-1', 'Rp 4.000 - Rp 10.000');
        changeElementText('featured-price-2', 'Rp 55.000 - Rp 75.000');
        changeElementText('featured-price-3', 'Rp 5.000 - Rp 10.000');
        // View all products button
        changeElementText('view-all-products-button', 'View All Products');
        // About button (Learn More)
        changeElementText('about-button', 'Learn More');
        // Contact section on index page
        changeElementText('contact-title', 'Contact Us');
        changeElementText('home-contact-get-in-touch', 'Get In Touch');
        changeElementText('contact-address-title', 'Address');
        changeElementHTML('contact-address', 'Front of KUD Sri Among Tani, No. 97<br>Brenggolo, Plosoklaten, Kediri Regency<br>East Java 64175');
        changeElementText('contact-phone-title', 'Phone');
        changeElementText('contact-phone', '(62) 856-0898-0005');
        changeElementText('contact-tiktok-title', 'TikTok');
        changeElementText('contact-tiktok', '@tas_anyaman_mba_ratna');
        changeElementText('contact-instagram-title', 'Instagram');
        changeElementText('contact-instagram', '@tas_anyaman_ratna');
        changeElementText('contact-hours-title', 'Open Hours');
        changeElementHTML('contact-hours', 'Monday - Friday: 9am - 5pm<br>Saturday: 10am - 4pm<br>Sunday: Closed');
        changeElementText('contact-form-title', 'Send Us a Message');
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
        if (typeof updateFeaturedProductsLanguage === 'function') updateFeaturedProductsLanguage('en');
    } else if (page === 'about.html') {
        changeElementText('about-page-title', 'About Us');
        changeElementText('about-page-subtitle', 'Learn about our story, mission, and the artisans behind our products');
        changeElementText('about-subtitle', 'Our Story');
        changeElementText('about-paragraph-1', 'Tas Anyaman Mba Ratna was founded in 2020 by Dwi Ratnasari. With a mission to preserve and promote traditional simple weaving techniques that have been passed down from generation to generation.');
        changeElementText('about-paragraph-2', 'The woven bags produced are carefully made using traditional weaving methods. This can preserve traditional skills passed down and will continue to develop in the modern world.');
        changeElementText('about-paragraph-3', 'Our commitment to quality, authenticity, and sustainability enables these woven bag MSMEs to generate trust and customer satisfaction.');
        // About page gallery captions
        changeElementText('about-gallery-title', 'Photo Gallery');
        changeElementText('about-gallery-caption-1', "Owner of Tas Anyaman Mba’ Ratna: Dwi Ratnasari an active and creative kindergarten teacher");
        changeElementText('about-gallery-caption-2', 'Manufacturing process: The process of making woven bags is traditionally done by hand');
        changeElementText('about-gallery-caption-3', 'Souvenir bag product: wholesale souvenir bags that can be used for wedding souvenirs');
        changeElementText('about-gallery-caption-4', 'Woven bag material: The main material of this woven bag comes from recycled plastic waste');
        // About page mission
        changeElementText('mission-title', 'Our Mission');
        changeElementText('mission-1-title', 'Preserving Tradition');
        changeElementText('mission-1-desc', 'We are dedicated to preserving traditional weaving techniques and ensuring these valuable skills continue to be passed down through generations.');
        changeElementText('mission-2-title', 'Sustainability');
        changeElementText('mission-2-desc', 'We use natural, sustainable materials and environmentally friendly practices in all aspects of our production process.');
        changeElementText('mission-3-title', 'Supporting Artisans');
        changeElementText('mission-3-desc', 'We provide fair wages and sustainable livelihoods for our skilled artisans, empowering local communities through ethical business practices.');
        // About page process
        changeElementText('process-title', 'Our Process');
        changeElementText('process-1-title', 'Material Selection');
        changeElementText('process-1-desc', 'We carefully select natural, sustainable materials like rattan, palm leaves, and natural fibers for our products.');
        changeElementText('process-2-title', 'Preparation');
        changeElementText('process-2-desc', 'Materials are prepared by hand, including cleaning, cutting, and sometimes dyeing using natural colorants.');
        changeElementText('process-3-title', 'Weaving');
        changeElementText('process-3-desc', 'Skilled artisans weave each piece by hand using traditional techniques passed down through generations.');
        changeElementText('process-4-title', 'Finishing');
        changeElementText('process-4-desc', 'Each product is carefully finished with attention to detail, ensuring durability and aesthetic appeal.');
        changeElementText('process-5-title', 'Quality Check');
        changeElementText('process-5-desc', 'Every product undergoes a thorough quality check to ensure it meets our high standards before being offered to customers.');
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
    } else if (page === 'products.html') {
        changeElementText('products-page-title', 'Our Products');
        changeElementText('products-page-subtitle', 'Explore our collection of handcrafted woven bags and accessories');
        // All Products button
        changeElementText('all-products-btn', 'All Products');
        // Modal buy button
        changeElementText('modal-buy-button', 'Buy Now');
        // Update gallery prices only
        updateGalleryPrices('en');
        // Delay product language update to ensure products are loaded
        setTimeout(() => {
            if (typeof updateProductLanguage === 'function') updateProductLanguage('en');
        }, 100);
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
    } else if (page === 'gallery.html') {
        changeElementText('gallery-page-title', 'Our Gallery');
        changeElementText('gallery-page-subtitle', 'Explore our craftsmanship through images of our products and process');
        changeElementText('gallery-videos-title', 'Our Videos');
        changeElementText('promo-video-title', 'Promotional Video');
        changeElementText('promo-video-subtitle', "Mba Ratna's Premium Woven Bag");
        changeElementText('promo-video-desc', 'Unique, stylish, and affordable! Made of high-quality synthetic plastic, this product is lightweight and durable. Can customize the color and design to suit your style.');
        changeElementText('promo-video-price', '💸 Price: Rp 55.000 – Rp 75.000');
        changeElementText('promo-video-note', 'Suitable for a daily look, OOTD, or a special gift!');
        changeElementText('manufacturing-video-title', 'Manufacturing Video');
        changeElementText('manufacturing-video-subtitle', "Mba Ratna's Woven Bag Production Process");
        changeElementText('manufacturing-video-desc', 'From cutting the plastic, arranging, to the weaving process by 4-5 creative craftsmen. In one day, 50-75 bags with various models can be produced. Customers can request colors, sizes, and accessories. The result is a strong, aesthetic, and multifunctional bag—suitable for event souvenirs or premium fashion.');
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
    } else if (page === 'blog.html') {
        changeElementText('blog-page-title', 'Our Blog');
        changeElementText('blog-page-subtitle', 'Discover tips, stories, and insights about traditional weaving crafts');
        if (typeof updateBlogLanguage === 'function') updateBlogLanguage('en');
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
    } else if (page === 'contact.html') {
        changeElementText('contact-page-title', 'Contact Us');
        changeElementText('contact-page-subtitle', "We'd love to hear from you. Get in touch with us!");
        changeElementText('location-title', 'Our Location');
        changeElementText('contact-get-in-touch', 'Get In Touch');
        changeElementText('contact-page-address-title', 'Address');
        changeElementHTML('contact-page-address', 'Front of KUD Sri Among Tani, No. 97<br>Brenggolo, Plosoklaten, Kediri Regency<br>East Java 64175');
        changeElementText('contact-page-phone-title', 'Whatsapp');
        changeElementText('contact-page-phone', '0856-0898-0005');
        changeElementText('contact-page-tiktok-title', 'TikTok');
        changeElementText('contact-page-tiktok', '@tas_anyaman_ratna');
        changeElementText('contact-page-instagram-title', 'Instagram');
        changeElementText('contact-page-instagram', '@Tas_anyaman_mba_ratna');
        changeElementText('contact-page-form-title', 'Send Us a Message');
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
    } else if (page === 'faq.html') {
        changeElementText('faq-title', 'Frequently Asked Questions');
        changeElementText('faq-subtitle', 'Find answers to common questions about our products and services');
        if (typeof updateFaqLanguage === 'function') updateFaqLanguage('en');
        // Footer
        changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
        changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
        changeElementText('footer-quick-links-title', 'Quick Links');
        changeElementText('footer-link-home', 'Home');
        changeElementText('footer-link-about', 'About');
        changeElementText('footer-link-products', 'Products');
        changeElementText('footer-link-gallery', 'Gallery');
        changeElementText('footer-link-blog', 'Blog');
        changeElementText('footer-link-contact', 'Contact');
        changeElementText('footer-link-faq', 'FAQ');
        changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
        changeElementText('footer-left', 'View Location on Google Maps');
    }
    
    // Gallery Section
    changeElementText('gallery-item-1', 'Weaving Process');
    changeElementText('gallery-item-2', 'Artisan at Work');
    changeElementText('gallery-item-3', 'Finished Products');
    changeElementText('gallery-item-4', 'Material Preparation');
    changeElementText('gallery-item-5', 'Our Workshop');
    changeElementText('gallery-item-6', 'Product Display');
    
    // Form labels (common across pages)
    changeElementText('label-name', 'Your Name');
    changeElementText('label-email', 'Your Email');
    changeElementText('label-subject', 'Subject');
    changeElementText('label-message', 'Your Message');
    changeElementText('btn-send-message', 'Send Message');
    
    // Footer Section
    changeElementText('footer-about-title', 'About Tas Anyaman Mba Ratna');
    changeElementText('footer-about-description', 'Tas Anyaman Mba Ratna is dedicated to preserving traditional weaving craftsmanship while providing sustainable livelihoods for skilled artisans.');
    changeElementText('footer-quick-links-title', 'Quick Links');
    changeElementText('footer-link-home', 'Home');
    changeElementText('footer-link-products', 'Products');
    changeElementText('footer-link-gallery', 'Gallery');
    changeElementText('footer-link-blog', 'Blog');
    changeElementText('footer-link-contact', 'Contact');
    changeElementText('footer-rights', '© 2025 Tas Anyaman Mba Ratna. All Rights Reserved.');
    changeElementText('footer-left', 'View Location on Google Maps');

    // About Us section on home
    changeElementText('about-title-home', 'About Us');
    changeElementText('about-subtitle-home', 'Preserving Handcraft Traditions');
    changeElementText('about-paragraph-home-1', 'Tas anyaman Mba Ratna was founded in 2020 by Dwi Ratnasari. The mission is to preserve and promote traditional, simple weaving techniques that have been passed down from generation to generation.');
    changeElementText('about-paragraph-home-2', 'The woven bags produced are carefully made using traditional weaving methods. This can preserve traditional skills passed down and will continue to develop in the modern world. Working directly with local craftsmen as a sustainable livelihood by providing decent wages as a form of appreciation for the extraordinary artistic talents of the craftsmen.');
    changeElementText('about-paragraph-home-3', 'Our commitment to quality, authenticity, and sustainability enables these woven bag MSMEs to generate trust and customer satisfaction. Currently buying our products does not only mean buying traditional goods from beautiful hands but also supporting the preservation of sustainable traditional culture and handicrafts.');
}

// Helper to convert featured product prices
function convertFeaturedProductPrices(lang) {
    const productPrices = document.querySelectorAll('.product-price');
    productPrices.forEach(price => {
        let text = price.textContent;
        if (lang === 'id') {
            // Convert $ to Rp
            if (text.includes('$')) {
                const matches = text.match(/\$([\d.,]+)(\s*-\s*\$([\d.,]+))?/);
                if (matches) {
                    let min = parseFloat(matches[1].replace(/,/g, ''));
                    let max = matches[3] ? parseFloat(matches[3].replace(/,/g, '')) : null;
                    let minRp = min * 15000;
                    let maxRp = max ? max * 15000 : null;
                    price.textContent = maxRp ? `Rp ${minRp.toLocaleString('id-ID')} - Rp ${maxRp.toLocaleString('id-ID')}` : `Rp ${minRp.toLocaleString('id-ID')}`;
                }
            }
        } else {
            // Convert Rp to $
            if (text.includes('Rp')) {
                const matches = text.match(/Rp\s*([\d.]+)(\s*-\s*Rp\s*([\d.]+))?/);
                if (matches) {
                    let min = parseFloat(matches[1].replace(/\./g, ''));
                    let max = matches[3] ? parseFloat(matches[3].replace(/\./g, '')) : null;
                    let minUsd = min / 15000;
                    let maxUsd = max ? max / 15000 : null;
                    price.textContent = maxUsd ? `$${minUsd.toFixed(2)} - $${maxUsd.toFixed(2)}` : `$${minUsd.toFixed(2)}`;
                }
            }
        }
    });
}

// Helper to update gallery prices (always in Rupiah)
function updateGalleryPrices(lang) {
    const galleryPriceElement = document.getElementById('promo-video-price');
    if (galleryPriceElement) {
        if (lang === 'id') {
            changeElementText('promo-video-price', '💸 Harga: Rp 55.000 – Rp 75.000');
        } else {
            changeElementText('promo-video-price', '💸 Price: Rp 55.000 – Rp 75.000');
        }
    }
}

// FAQ Language Update Function
function updateFaqLanguage(lang) {
    if (lang === 'id') {
        // Indonesian FAQ translations
        changeElementText('faq-title', 'Pertanyaan yang Sering Diajukan');
        changeElementText('faq-subtitle', 'Temukan jawaban atas pertanyaan umum tentang produk dan layanan kami');
        changeElementText('faq-intro-text', 'Kami telah mengumpulkan daftar pertanyaan yang sering diajukan untuk membantu Anda menemukan informasi yang Anda butuhkan. Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda, jangan ragu untuk menghubungi kami.');
        
        // FAQ Questions and Answers
        changeElementText('faq-q1', 'Berapa lama waktu pengiriman?');
        changeElementText('faq-a1', 'Pengiriman biasanya memakan waktu sekitar 3-5 hari kerja untuk pengiriman domestik dan 7-14 hari kerja untuk pengiriman internasional.');
        
        changeElementText('faq-q2', 'Bagaimana cara melacak status pesanan saya?');
        changeElementText('faq-a2', 'Anda dapat melacak pesanan Anda melalui email konfirmasi atau WhatsApp.');
        
        changeElementText('faq-q3', 'Bagaimana cara mengembalikan atau menukar produk?');
        changeElementText('faq-a3', 'Silakan hubungi kami melalui email atau telepon untuk informasi tentang pengembalian atau penukaran produk.');
        
        changeElementText('faq-q4', 'Bagaimana cara membatalkan pesanan?');
        changeElementText('faq-a4', 'Anda dapat membatalkan pesanan sebelum diproses. Silakan hubungi kami untuk informasi lebih lanjut.');
        
        changeElementText('faq-q5', 'Berapa lama waktu pre-order?');
        changeElementText('faq-a5', 'Waktu pre-order biasanya tergantung pada produk dan penjualan (kuantitas produk dan pengiriman).');
        
        changeElementText('faq-q6', 'Berapa pesanan minimum untuk grosir?');
        changeElementText('faq-a6', 'Tidak ada pembelian minimum untuk grosir.');
        
        changeElementText('faq-q7', 'Metode pembayaran apa yang diterima?');
        changeElementText('faq-a7', 'Pembayaran dapat dilakukan dengan transfer ke rekening bank BRI.');
        
        changeElementText('faq-q8', 'Bisakah saya bayar Cash On Delivery/COD?');
        changeElementText('faq-a8', 'Pembayaran COD saat ini tidak tersedia.');
        
        // Contact CTA
        changeElementText('contact-cta-title', 'Masih ada pertanyaan?');
        changeElementText('contact-cta-text', 'Kami di sini untuk membantu! Hubungi kami untuk informasi tambahan yang Anda butuhkan.');
        changeElementText('contact-cta-btn', 'Hubungi Kami');
    } else {
        // English FAQ translations
        changeElementText('faq-title', 'Frequently Asked Questions');
        changeElementText('faq-subtitle', 'Find answers to common questions about our products and services');
        changeElementText('faq-intro-text', "We've compiled a list of frequently asked questions to help you find the information you need. If you can't find the answer to your question, please don't hesitate to contact us.");
        
        // FAQ Questions and Answers
        changeElementText('faq-q1', 'How long does it take to ship?');
        changeElementText('faq-a1', 'Shipping usually takes approximately 3-5 business days for domestic shipping and 7-14 business days for international shipping.');
        
        changeElementText('faq-q2', 'How do I track my order status?');
        changeElementText('faq-a2', 'You can track your order via your confirmation email or WhatsApp.');
        
        changeElementText('faq-q3', 'How do I return or exchange a product?');
        changeElementText('faq-a3', 'Please contact us via email or phone for information on returning or exchanging products.');
        
        changeElementText('faq-q4', 'How do I cancel an order?');
        changeElementText('faq-a4', 'You can cancel your order before it is processed. Please contact us for more information.');
        
        changeElementText('faq-q5', 'How long is the pre-order time?');
        changeElementText('faq-a5', 'The pre-order time usually depends on the product and sales (quantity of products and shipping).');
        
        changeElementText('faq-q6', 'What is the minimum wholesale order?');
        changeElementText('faq-a6', 'There is no minimum wholesale purchase.');
        
        changeElementText('faq-q7', 'What payment methods are accepted?');
        changeElementText('faq-a7', 'Payment can be made by transfer to a BRI bank account.');
        
        changeElementText('faq-q8', 'Can I pay Cash On Delivery/COD?');
        changeElementText('faq-a8', 'COD payments are currently not available.');
        
        // Contact CTA
        changeElementText('contact-cta-title', 'Still have questions?');
        changeElementText('contact-cta-text', 'We\'re here to help! Contact us for any additional information you may need.');
        changeElementText('contact-cta-btn', 'Contact Us');
    }
}

// Blog Language Update Function
function updateBlogLanguage(lang) {
    // Blog data
    const blogData = [
        {
            title_en: 'How To Care for a Hand-Woven Bag',
            excerpt_en: 'Learn how to properly maintain and care for your handwoven bags to ensure they last for years to come.',
            date_en: 'May 15, 2025',
            title_id: 'Cara Merawat Tas Anyaman',
            excerpt_id: 'Pelajari cara merawat dan menjaga tas anyaman Anda agar tahan lama dan awet.',
            date_id: '15 Mei 2025'
        },
        {
            title_en: 'Recommended Shopping Bags to Replace Plastic Bags',
            excerpt_en: 'Currently, the use of plastic bags in several shopping centres has been banned by the government.',
            date_en: 'May 2, 2025',
            title_id: 'Rekomendasi Tas Belanja Pengganti Kantong Plastik',
            excerpt_id: 'Saat ini, penggunaan kantong plastik di beberapa pusat perbelanjaan telah dilarang oleh pemerintah.',
            date_id: '2 Mei 2025'
        },
        {
            title_en: 'Affordable and Functional Wedding Souvenir Bag Recommendations',
            excerpt_en: 'Wedding souvenirs are not just souvenirs, but also one of the most important factors that will give a deep impression to the guests',
            date_en: 'April 20, 2025',
            title_id: 'Rekomendasi Tas Souvenir Pernikahan Murah dan Fungsional',
            excerpt_id: 'Souvenir pernikahan bukan hanya sekadar oleh-oleh, tetapi juga salah satu faktor penting yang akan memberikan kesan mendalam bagi para tamu.',
            date_id: '20 April 2025'
        }
    ];

    // Update blog articles
    for (let i = 0; i < blogData.length; i++) {
        const title = document.getElementById(`blog-title-${i+1}`);
        const excerpt = document.getElementById(`blog-excerpt-${i+1}`);
        const date = document.getElementById(`blog-date-${i+1}`);
        if (title) title.textContent = lang === 'id' ? blogData[i].title_id : blogData[i].title_en;
        if (excerpt) excerpt.textContent = lang === 'id' ? blogData[i].excerpt_id : blogData[i].excerpt_en;
        if (date) date.textContent = lang === 'id' ? blogData[i].date_id : blogData[i].date_en;
    }
    
    // Update Read More buttons
    for (let i = 1; i <= 3; i++) {
        const readMoreBtn = document.getElementById(`read-more-${i}`);
        if (readMoreBtn) readMoreBtn.textContent = lang === 'id' ? 'Baca Selengkapnya' : 'Read More';
    }
}
