// Products Data
const products = [
    {
        id: 1,
        name: "Souvenir Bag",
        name_id: "Tas Souvenir",
        description: "This custom-woven souvenir bag is perfect for weddings. Free request! You can choose a combination of natural or bright colors according to your taste, including colorful woven motifs. Flexible size and can be adjusted to the needs of the items to be put into the souvenir bag.",
        description_id: "Tas souvenir anyaman custom ini cocok untuk pernikahan. Permintaan gratis! Anda bisa memilih kombinasi warna sendiri, termasuk motif anyaman warna-warni. Ukuran fleksibel dan dapat disesuaikan dengan kebutuhan barang yang akan dimasukkan ke dalam tas souvenir.",
        price: "Rp 4.000 - Rp 10.000",
        price_id: "Rp 4.000 - Rp 10.000",
        image: "images/souvenirbag.png",
        category: "bags",
        size: "Customizable",
        material: "Plastic Woven Material"
    },
    {
        id: 2,
        name: "Premium Woven Bag",
        name_id: "Tas Anyaman Premium",
        description: "This premium woven bag is perfect for looking stylish when hanging out or at casual events. It is available in various contemporary models, such as a tote, sling, and bucket bag, with sizes and colors that can be adjusted. Made from plastic, this bag is lightweight, strong, and environmentally friendly. It makes your appearance more stylish.",
        description_id: "Tas anyaman premium ini cocok untuk tampil stylish saat hangout atau acara santai. Tersedia berbagai model kekinian seperti tote, sling, dan bucket bag, dengan ukuran dan warna yang bisa disesuaikan. Terbuat dari plastik, tas ini ringan, kuat, dan ramah lingkungan. Membuat penampilan Anda semakin stylish.",
        price: "Rp 55.000 - Rp 75.000",
        price_id: "Rp 55.000 - Rp 75.000",
        image: "images/premiumbag.png",
        category: "bags",
        size: "Various (Tote, Sling, Bucket)",
        material: "Eco-friendly Plastic Weave"
    },
    {
        id: 3,
        name: "Shopping Bag",
        name_id: "Tas Belanja",
        description: "This market woven shopping bag is practical, strong, and environmentally friendly, ideal for carrying daily shopping. This bag is durable and easy to clean because it is made of plastic. Available in various sizes and colors, it can be adjusted according to your needs. Suitable for shopping activities in markets, supermarkets, or for daily household needs.",
        description_id: "Tas belanja anyaman ini praktis, kuat, dan ramah lingkungan, ideal untuk membawa belanjaan harian. Tas ini tahan lama dan mudah dibersihkan karena terbuat dari plastik. Tersedia dalam berbagai ukuran dan warna, dapat disesuaikan dengan kebutuhan Anda. Cocok untuk aktivitas belanja di pasar, supermarket, atau kebutuhan rumah tangga sehari-hari.",
        price: "Rp 5.000 - Rp 10.000",
        price_id: "Rp 5.000 - Rp 10.000",
        image: "images/shoppingbag.png",
        category: "bags",
        size: "Various",
        material: "Durable Plastic Weave"
    },
    {
        id: 4,
        name: "Goodie Bag",
        name_id: "Goodie Bag",
        description: "The elegant and functional woven design makes this bag the right choice for various purposes. This bag is perfect for use as a goodie bag, whether for birthdays, weddings, seminars, or various other events. You can request a bag design according to the theme of the event or personal needs, according to the items inside.",
        description_id: "Desain anyaman yang elegan dan fungsional membuat tas ini menjadi pilihan tepat untuk berbagai keperluan. Tas ini sangat cocok digunakan sebagai goodie bag, baik untuk ulang tahun, pernikahan, seminar, atau berbagai acara lainnya. Anda dapat meminta desain tas sesuai tema acara atau kebutuhan pribadi, sesuai dengan barang di dalamnya.",
        price: "Rp 10.000 - Rp 15.000",
        price_id: "Rp 10.000 - Rp 15.000",
        image: "images/goodiebag.png",
        category: "bags",
        size: "Customizable",
        material: "Plastic Woven Material"
    },
    {
        id: 5,
        name: "Mini Bag",
        name_id: "Mini Bag",
        description: "This woven mini bag comes with the latest compact and elegant design, made of high-quality materials that are durable and long-lasting. Although its size is small, this bag is wide enough to store various important items such as wallets, cellphones, cosmetics, or even small snacks. A trendy and unique woven design provides a stylish touch, making it the perfect accessory for casual and formal events.",
        description_id: "Mini bag anyaman ini hadir dengan desain compact dan elegan terbaru, terbuat dari bahan berkualitas tinggi yang tahan lama. Meski ukurannya kecil, tas ini cukup luas untuk menyimpan berbagai barang penting seperti dompet, ponsel, kosmetik, atau bahkan camilan kecil. Desain anyaman yang trendi dan unik memberikan sentuhan stylish, menjadikannya aksesori sempurna untuk acara santai maupun formal.",
        price: "Rp 17.000 - Rp 20.000",
        price_id: "Rp 17.000 - Rp 20.000",
        image: "images/miniebag.png",
        category: "bags",
        size: "Mini",
        material: "High-quality Woven Material"
    },
    {
        id: 6,
        name: "Woven Basket Bag",
        name_id: "Mini Bag",
        description: "Woven basket made of flexible and durable plastic, suitable for storing candy, small snacks, accessories, souvenirs, or aesthetic displays. Available in various attractive colors & motifs. You can request models and sizes according to your needs!",
        description_id: "Anyaman keranjang terbuat dari plastik fleksibel dan tahan lama, cocok untuk menyimpan permen, camilan kecil, aksesori, souvenir, atau tampilan estetik. Tersedia dalam berbagai warna & motif yang menarik. Anda dapat meminta model dan ukuran sesuai kebutuhan Anda!",
        price: "Rp 2.000 - Rp 5.000",
        price_id: "Rp 2.000 - Rp 5.000",
        image: "images/miniebag.png",
        category: "bags",
        size: "Mini",
        material: "High-quality Woven Material"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Load all products initially
    loadProducts('all');
    // Ensure initial language matches flag
    const currentFlag = document.getElementById('current-flag');
    const lang = currentFlag ? currentFlag.getAttribute('data-lang') : 'en';
    updateProductLanguage(lang);
    
    // Filter button click event
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load filtered products
            loadProducts(filter);
        });
    });
    
    // Close modal handler function
    function closeModalHandler() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Setup modal close listeners
    function setupModalCloseListeners() {
        const closeModal = document.querySelector('.close-modal');
        if (closeModal) {
            console.log('Setting up close modal listener'); // Debug log
            // Remove existing listener to prevent duplicates
            closeModal.removeEventListener('click', closeModalHandler);
            closeModal.addEventListener('click', closeModalHandler);
        } else {
            console.log('Close modal button not found'); // Debug log
        }
    }
    
    // Initial setup
    setupModalCloseListeners();
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalHandler();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
    
    // Function to load products based on filter
    function loadProducts(filter) {
        if (!productsGrid) return;
        productsGrid.innerHTML = '';
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        const currentFlag = document.getElementById('current-flag');
        const lang = currentFlag ? currentFlag.getAttribute('data-lang') : 'en';
        filteredProducts.forEach(product => {
            let desc = '';
            if (lang === 'id') {
                desc = product.description_id ? product.description_id : product.description;
            } else {
                desc = product.description ? product.description : product.description_id;
            }
            if (desc && desc.length > 80) desc = desc.substring(0, 80) + '...';
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 id="product-title-${product.id}">${lang === 'id' ? (product.name_id || product.name) : product.name}</h3>
                    <p id="product-desc-${product.id}">${desc}</p>
                    <span class="product-price" id="product-price-${product.id}">${product.price}</span>
                    <button class="btn view-product" data-id="${product.id}" id="view-btn-${product.id}">${lang === 'id' ? 'Lihat Detail' : 'View Details'}</button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        // Add event listeners to view product buttons
        document.querySelectorAll('.view-product').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                openProductModal(productId);
            });
        });
        // Always update language after rendering
        if (typeof updateProductLanguage === 'function') {
            updateProductLanguage(lang);
        }
    }
    
    // Function to open product modal
    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product || !modal) return;
        const currentFlag = document.getElementById('current-flag');
        const lang = currentFlag ? currentFlag.getAttribute('data-lang') : 'en';
        // Set modal content bilingual
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-title').textContent = lang === 'id' ? product.name_id : product.name;
        document.getElementById('modal-product-description').textContent = lang === 'id' ? product.description_id : product.description;
        document.getElementById('modal-product-size').textContent = product.size;
        document.getElementById('modal-product-material').textContent = product.material;
        document.getElementById('modal-product-price').textContent = product.price;
        
        // Update buy button text
        const modalBuyButton = document.getElementById('modal-buy-button');
        if (modalBuyButton) {
            modalBuyButton.textContent = lang === 'id' ? 'Beli Sekarang' : 'Buy Now';
        }
        
        // Set up WhatsApp buy button
        const buyButton = document.getElementById('modal-buy-button');
        if (buyButton) {
            const newBuyButton = buyButton.cloneNode(true);
            buyButton.parentNode.replaceChild(newBuyButton, buyButton);
            newBuyButton.addEventListener('click', function(e) {
                e.preventDefault();
                let message = '';
                if (lang === 'id') {
                    message = `Halo, saya tertarik dengan produk: *${product.name_id}* (${product.price}). Bisakah Anda memberi saya informasi lebih lanjut?`;
                } else {
                    message = `Hello, I'm interested in the product: *${product.name}* (${product.price}). Could you provide me with more information?`;
                }
                const phone = '6285608980005';
                const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            });
        }
        // Show modal
        modal.setAttribute('data-product-id', productId); // Track which product is open
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Make sure close listeners are set up
        setupModalCloseListeners();
    }
    
    // Update product prices based on language
    function updateProductPrices(newLang) {
        document.querySelectorAll('.product-card').forEach(card => {
            const button = card.querySelector('.view-product');
            if (!button) return;
            
            const productId = parseInt(button.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const priceElement = card.querySelector('.product-price');
            if (priceElement) {
                priceElement.textContent = product.price;
            }
        });
        
        // Update modal price if open
        if (modal && modal.style.display === 'block') {
            const modalPriceElement = document.getElementById('modal-product-price');
            if (modalPriceElement) {
                const productTitle = document.getElementById('modal-product-title').textContent;
                const product = products.find(p => p.name === productTitle);
                if (product) {
                    modalPriceElement.textContent = product.price;
                }
            }
        }
    }
    
    // Make updateProductLanguage globally accessible
    window.updateProductLanguage = function(lang) {
        // Reload products to update language
        loadProducts('all');
        
        // Re-setup modal close listeners after reload
        setupModalCloseListeners();
        
        // Update other page elements
        // Update page titles and filter button
        const productsTitle = document.getElementById('products-title');
        const productsSubtitle = document.getElementById('products-subtitle');
        const filterBtn = document.querySelector('.filter-btn');
        
        if (productsTitle) {
            productsTitle.textContent = lang === 'id' ? 'Produk Kami' : 'Our Products';
        }
        if (productsSubtitle) {
            productsSubtitle.textContent = lang === 'id' ? 'Jelajahi koleksi tas anyaman tradisional buatan tangan kami' : 'Explore our collection of handcrafted woven bags and accessories';
        }
        if (filterBtn) {
            filterBtn.textContent = lang === 'id' ? 'Semua Produk' : 'All Products';
        }
        
        // Update individual products
        products.forEach(product => {
            const titleEl = document.getElementById(`product-title-${product.id}`);
            const descEl = document.getElementById(`product-desc-${product.id}`);
            const priceEl = document.getElementById(`product-price-${product.id}`);
            const btnEl = document.getElementById(`view-btn-${product.id}`);
            
            if (titleEl) titleEl.textContent = lang === 'id' ? (product.name_id || product.name) : product.name;
            if (descEl) {
                let desc = '';
                if (lang === 'id') {
                    desc = product.description_id ? product.description_id : product.description;
                } else {
                    desc = product.description ? product.description : product.description_id;
                }
                if (desc && desc.length > 80) desc = desc.substring(0, 80) + '...';
                descEl.textContent = desc;
            }
            if (priceEl) priceEl.textContent = product.price;
            if (btnEl) btnEl.textContent = lang === 'id' ? 'Lihat Detail' : 'View Details';
        });
        // Update modal content if open, but do NOT re-call openProductModal
        if (modal && modal.style.display === 'block') {
            const productId = parseInt(modal.getAttribute('data-product-id'));
            if (productId) {
                const product = products.find(p => p.id === productId);
                if (product) {
                    const currentFlag = document.getElementById('current-flag');
                    const lang = currentFlag ? currentFlag.getAttribute('data-lang') : 'en';
                    document.getElementById('modal-product-image').src = product.image;
                    document.getElementById('modal-product-title').textContent = lang === 'id' ? (product.name_id || product.name) : product.name;
                    document.getElementById('modal-product-description').textContent = lang === 'id' ? (product.description_id || product.description) : (product.description || product.description_id);
                    document.getElementById('modal-product-size').textContent = product.size;
                    document.getElementById('modal-product-material').textContent = product.material;
                    document.getElementById('modal-product-price').textContent = product.price;
                    
                    // Update modal buy button text
                    const modalBuyButton = document.getElementById('modal-buy-button');
                    if (modalBuyButton) {
                        modalBuyButton.textContent = lang === 'id' ? 'Beli Sekarang' : 'Buy Now';
                    }
                    // Set up WhatsApp buy button
                    const buyButton = document.getElementById('modal-buy-button');
                    if (buyButton) {
                        const newBuyButton = buyButton.cloneNode(true);
                        buyButton.parentNode.replaceChild(newBuyButton, buyButton);
                        newBuyButton.addEventListener('click', function(e) {
                            e.preventDefault();
                            let message = '';
                            if (lang === 'id') {
                                message = `Halo, saya tertarik dengan produk: *${product.name_id || product.name}* (${product.price}). Bisakah Anda memberi saya informasi lebih lanjut?`;
                            } else {
                                message = `Hello, I'm interested in the product: *${product.name}* (${product.price}). Could you provide me with more information?`;
                            }
                            const phone = '6285608980005';
                            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank');
                        });
                    }
                }
            }
        }
    };
});
