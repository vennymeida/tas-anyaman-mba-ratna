// Sample product data for Tas Anyaman Mba Ratna
document.addEventListener('DOMContentLoaded', function() {
    // Check if products already exist in localStorage
    if (!localStorage.getItem('mbaRatnacatalogs')) {
        // Sample product data
        const sampleProducts = [
            {
                id: 1,
                title: "Traditional Woven Basket",
                title_id: "Keranjang Anyaman Tradisional",
                description: "Handcrafted with natural rattan and palm leaves",
                description_id: "Dibuat tangan dengan rotan alami dan daun palem",
                price: "$45.00",
                price_id: "Rp 675.000",
                image: "images/Anyaman 1.jpg",
                category: "baskets"
            },
            {
                id: 2,
                title: "Decorative Wall Hanging",
                title_id: "Hiasan Dinding Dekoratif",
                description: "Intricate design woven with cotton and jute fibers",
                description_id: "Desain rumit dianyam dengan serat katun dan goni",
                price: "$35.00",
                price_id: "Rp 525.000",
                image: "images/Anyaman 2.jpg",
                category: "decor"
            },
            {
                id: 3,
                title: "Handwoven Tote Bag",
                title_id: "Tas Tote Anyaman Tangan",
                description: "Durable and stylish, made from sustainable materials",
                description_id: "Tahan lama dan stylish, terbuat dari bahan ramah lingkungan",
                price: "$39.00",
                price_id: "Rp 585.000",
                image: "images/Anyaman 3.jpg",
                category: "bags"
            },
            {
                id: 4,
                title: "Market Basket with Handles",
                title_id: "Keranjang Pasar dengan Pegangan",
                description: "Perfect for shopping or home storage",
                description_id: "Sempurna untuk belanja atau penyimpanan di rumah",
                price: "$42.00",
                price_id: "Rp 630.000",
                image: "images/Anyaman 4.jpg",
                category: "baskets"
            }
        ];
        
        // Store sample products in localStorage
        localStorage.setItem('mbaRatnacatalogs', JSON.stringify(sampleProducts));
        console.log('Sample product data loaded into localStorage');
    } else {
        console.log('Product data already exists in localStorage');
    }
});
