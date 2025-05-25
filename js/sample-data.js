// Sample product data for Tas Anyaman Mba Ratna
document.addEventListener('DOMContentLoaded', function() {
    // Check if products already exist in localStorage
    if (!localStorage.getItem('mbaRatnacatalogs')) {
        // Sample product data
        const sampleProducts = [
            {
                id: 1,
                title: "Traditional Woven Basket",
                description: "Handcrafted with natural rattan and palm leaves",
                price: "$45.00",
                image: "images/Anyaman 1.jpg",
                category: "baskets"
            },
            {
                id: 2,
                title: "Decorative Wall Hanging",
                description: "Intricate design woven with cotton and jute fibers",
                price: "$35.00",
                image: "images/Anyaman 2.jpg",
                category: "decor"
            },
            {
                id: 3,
                title: "Handwoven Tote Bag",
                description: "Durable and stylish, made from sustainable materials",
                price: "$39.00",
                image: "images/Anyaman 3.jpg",
                category: "bags"
            },
            {
                id: 4,
                title: "Market Basket with Handles",
                description: "Perfect for shopping or home storage",
                price: "$42.00",
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
