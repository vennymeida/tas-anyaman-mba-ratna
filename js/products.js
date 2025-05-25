// Products Data
const products = [
    {
        id: 1,
        name: "Souvenir Bag",
        description: "This custom-woven souvenir bag is perfect for weddings. Free request! You can choose a combination of natural or bright colors according to your taste, including colorful woven motifs. Flexible size and can be adjusted to the needs of the items to be put into the souvenir bag.",
        price: "Rp 4.000 - Rp 10.000",
        priceUSD: "$0.30 - $0.70",
        image: "images/souvenirbag.png",
        category: "bags",
        size: "Customizable",
        material: "Plastic Woven Material"
    },
    {
        id: 2,
        name: "Premium Woven Bag",
        description: "This premium woven bag is perfect for looking stylish when hanging out or at casual events. It is available in various contemporary models, such as a tote, sling, and bucket bag, with sizes and colors that can be adjusted. Made from plastic, this bag is lightweight, strong, and environmentally friendly. It makes your appearance more stylish.",
        price: "Rp 55.000 - Rp 75.000",
        priceUSD: "$3.70 - $5.00",
        image: "images/premiumbag.png",
        category: "bags",
        size: "Various (Tote, Sling, Bucket)",
        material: "Eco-friendly Plastic Weave"
    },
    {
        id: 3,
        name: "Shopping Bag",
        description: "This market woven shopping bag is practical, strong, and environmentally friendly, ideal for carrying daily shopping. This bag is durable and easy to clean because it is made of plastic. Available in various sizes and colors, it can be adjusted according to your needs. Suitable for shopping activities in markets, supermarkets, or for daily household needs.",
        price: "Rp 5.000 - Rp 10.000",
        priceUSD: "$0.30 - $0.70",
        image: "images/shoppingbag.png",
        category: "bags",
        size: "Various",
        material: "Durable Plastic Weave"
    },
    {
        id: 4,
        name: "Goodie Bag",
        description: "The elegant and functional woven design makes this bag the right choice for various purposes. This bag is perfect for use as a goodie bag, whether for birthdays, weddings, seminars, or various other events. You can request a bag design according to the theme of the event or personal needs, according to the items inside.",
        price: "Rp 5.000 - Rp 10.000",
        priceUSD: "$0.30 - $0.70",
        image: "images/goodiebag.png",
        category: "bags",
        size: "Customizable",
        material: "Plastic Woven Material"
    },
    {
        id: 5,
        name: "Mini Bag",
        description: "This woven mini bag comes with the latest compact and elegant design, made of high-quality materials that are durable and long-lasting. Although its size is small, this bag is wide enough to store various important items such as wallets, cellphones, cosmetics, or even small snacks. A trendy and unique woven design provides a stylish touch, making it the perfect accessory for casual and formal events.",
        price: "Rp 17.000 - Rp 20.000",
        priceUSD: "$1.15 - $1.35",
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
    
    // Close modal when clicking on X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Function to load products based on filter
    function loadProducts(filter) {
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description.substring(0, 80)}...</p>
                    <span class="product-price">${product.price}</span>
                    <button class="btn view-product" data-id="${product.id}">View Details</button>
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
    }
    
    // Function to open product modal
    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product || !modal) return;
        
        // Set modal content
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-title').textContent = product.name;
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-product-size').textContent = product.size;
        document.getElementById('modal-product-material').textContent = product.material;
        document.getElementById('modal-product-price').textContent = product.price;
        
        // Set up WhatsApp buy button
        const buyButton = document.getElementById('modal-buy-button');
        if (buyButton) {
            buyButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get current language
                const currentFlag = document.getElementById('current-flag');
                const lang = currentFlag ? currentFlag.getAttribute('data-lang') : 'en';
                
                // Create WhatsApp message
                let message = '';
                if (lang === 'id') {
                    message = `Halo, saya tertarik dengan produk: *${product.name}* (${product.priceID}). Bisakah Anda memberi saya informasi lebih lanjut?`;
                } else {
                    message = `Hello, I'm interested in the product: *${product.name}* (${product.price}). Could you provide me with more information?`;
                }
                
                // Create WhatsApp URL
                const phone = '6285608980005'; // Replace with the actual phone number
                const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                
                // Open WhatsApp in a new tab
                window.open(whatsappUrl, '_blank');
            });
        }
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Language translation for product page
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            const currentFlag = document.getElementById('current-flag');
            if (!currentFlag) return;
            
            const lang = currentFlag.getAttribute('data-lang');
            updateProductPrices(lang === 'en' ? 'id' : 'en');
        });
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
                priceElement.textContent = newLang === 'id' ? product.price : product.priceUSD;
            }
        });
        
        // Update modal price if open
        if (modal && modal.style.display === 'block') {
            const modalPriceElement = document.getElementById('modal-product-price');
            if (modalPriceElement) {
                const productTitle = document.getElementById('modal-product-title').textContent;
                const product = products.find(p => p.name === productTitle);
                if (product) {
                    modalPriceElement.textContent = newLang === 'id' ? product.price : product.priceUSD;
                }
            }
        }
    }
});
