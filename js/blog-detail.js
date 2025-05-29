document.addEventListener('DOMContentLoaded', function() {
    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            title: "How To Care for a Hand-Woven Bag",
            image: "images/article1.webp",
            date: "May 15, 2025",
            author: "Aprilia Tri Anggraeni",
            content: "blog-detail.html" // This is the default content already in the HTML
        },
        {
            id: 2,
            title: "Recommended Shopping Bags to Replace Plastic Bags",
            image: "images/article2.jpg",
            date: "May 2, 2025",
            author: "Aprilia Tri Anggraeni",
            content: `
                <h2>Article 2: Recommended Shopping Bags to Replace Plastic Bags</h2>
                
                <p>Currently, the use of plastic bags in several shopping centers has been banned by the government. The appeal to use plastic bags as a substitute for paper bags is not half-hearted. The ban on the use of plastic bags is enforced in supermarkets to convenience stores that are spread out without providing plastic shopping bags. The ban on the use of plastic bags is the government's effort to reduce plastic waste that is difficult to decompose, so it hurts the environment and damages sustainable ecosystems.</p>
                
                <p>This requires us to find alternatives to plastic bags for shopping. If we only shop for one or two items, we may not need a shopping bag. However, what if we shop for quite a lot of monthly needs? We need a shopping bag that is big enough to accommodate our groceries. Here are recommendations for those of you who are looking for alternative shopping bags to replace plastic bags at affordable prices, and that can be used every day.</p>
                
                <h3>Canvas Bags</h3>
                <p>Canvas bags or commonly called tote bags, can be used as a substitute for plastic shopping bags. Canvas bags have medium to large sizes. Canvas bags are not only used for shopping but can be used for other purposes, such as going to campus or as everyday bags. However, canvas bags are not recommended for wet shopping items.</p>
                
                <h3>Paper Bag</h3>
                <p>Currently, most minimarkets, supermarkets, and shopping centers now provide paper bags for shopping bags as a substitute for plastic bags. This is because paper bags are made of recyclable materials that can reduce the negative impact on the environment ecosystem. Paper bags can be reused as long as they are not torn or damaged in any other way. The disadvantage of paper bags is that they cannot be used for wet shopping items.</p>
                
                <h3>Wheel Shopping Bags</h3>
                <p>Wheeled shopping bags are most widely used when shopping for many needs. Mothers often use this shopping bag to shop in large quantities at wholesale markets and supermarkets. Shopping bags with wheels are quite large. As the name implies, this shopping bag has wheels on the bottom that you can also pull like a suitcase, so that doesn't need to carry a heavy shopping bag anymore. Wheeled shopping bags have the disadvantage that they are difficult to carry by vehicle because they take up space, especially when using a motorbike.</p>
                
                <h3>Parachute Folding Bag</h3>
                <p>The parachute folding shopping bag is a super practical substitute for plastic bags. This bag is made of thin parachute material so it is easy to fold so it is easy to carry anywhere. When this parachute bag is folded, yes, you can store it in your bag so you don't have to worry if your bag is full. This parachute bag has a drawback, namely, it is easily damaged or torn because the material is made of thin parachute material.</p>
                
                <h3>Woven Bag</h3>
                <p>Woven shopping bags are made from various types of materials, from bamboo to water hyacinth. The lightweight material and spacious design make this woven bag a favorite of many people. In addition, this bag is fairly durable, so it can be used many times. Jami woven bags can be obtained at affordable prices, but have good quality. This bag has various sizes from small to large, so it can hold a lot of items. Woven bags are strong and elastic, so they can withstand heavy loads. In addition, this environmentally friendly bag looks aesthetic with a unique design, so that it still looks stylish when shopping at supermarkets or traditional markets.</p>
                
                <p>For those of you who want to find woven bags as an alternative to plastic shopping bags, you can visit our website. The affordable price starts from IDR 15 thousand at the Tas Anyaman Mba' Ratna store.</p>
            `
        },
        {
            id: 3,
            title: "Cheap and Functional Wedding Souvenir Bag Recommendations",
            image: "images/article3.jpg",
            date: "April 20, 2025",
            author: "Aprilia Tri Anggraeni",
            content: `
                <h2>Article 3: Cheap and Functional Wedding Souvenir Bag Recommendations</h2>
                
                <p>Wedding souvenirs are not just souvenirs, but also one of the most important factors that will give a deep impression to the guests. One of the most popular souvenirs is bags. Not only are bags practical and functional, but they also adapt to the wedding theme, give an elegant impression, and, of course, help the guests who receive them.</p>
                
                <p>Here are some recommendations for wedding souvenir bags that can be an option:</p>
                
                <h3>1. Shopping Bags</h3>
                <p>Woven shopping bags have the benefit of replacing environmentally unfriendly plastic shopping bags. Woven bags are durable because the material is durable and versatile. You can choose a shopping bag with a design that is adjusted to your wedding theme, such as embroidered names of the bride and groom or the wedding date. This bag can also be printed with a typical wedding design, such as a flower motif or a monogram of the bride and groom.</p>
                
                <h3>2. Small Pouch Bag</h3>
                <p>Small pouch bags made of premium plastic are perfect as a place to store jewelry, chocolate, candy, or even other miniature souvenirs. The simple yet elegant design makes pouch bags an excellent choice.</p>
                
                <h3>3. Mini Woven Bag</h3>
                <p>If you want to give a modern and minimalist impression, a mini woven bag can be an interesting choice. You can fill it with various fillings, such as snacks and drinks, or others. This type of bag can also be personalized with screen printing or stickers of the bride and groom's names.</p>
                
                <h3>4. Woven Goodie Bag for Souvenir Packages</h3>
                <p>If you plan to give more than one souvenir, a goodie bag is the right choice. This bag can be filled with various items such as snacks, drinks, or other small items. You can choose a woven goodie bag that has a simple but attractive appearance.</p>
                
                <h3>5. Premium Woven Bag</h3>
                <p>Premium woven bags can be used as wedding souvenirs that give a luxurious and elegant impression. This bag is suitable for use as a souvenir for special guests who attend your wedding. The simple and exclusive design is suitable for weddings with formal or luxurious themes.</p>
                
                <p>If you are interested in woven bags as wedding souvenirs at affordable prices but have good quality, you can get them at the Mba' Ratna Woven Bag store or visit our website.</p>
            `
        }
    ];

    // Get blog ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id')) || 1; // Default to first blog if no ID provided
    
    // Find the blog post
    const blogPost = blogPosts.find(post => post.id === blogId);
    
    if (blogPost) {
        // Update page title
        document.title = `${blogPost.title} - Tas Anyaman Mba Ratna`;
        
        // Update blog content
        document.getElementById('blog-detail-img').src = blogPost.image;
        document.getElementById('blog-detail-img').alt = blogPost.title;
        document.getElementById('blog-date').textContent = blogPost.date;
        document.getElementById('blog-author').textContent = blogPost.author;
        document.getElementById('blog-title').textContent = blogPost.title;
        
        // If it's not the default blog post (ID 1), replace the content
        if (blogId !== 1) {
            document.querySelector('.blog-detail-content').innerHTML = `<h1 id="blog-title">${blogPost.title}</h1>${blogPost.content}`;
        }
    }
    
    // Generate related posts (excluding current post)
    const relatedPostsContainer = document.querySelector('.related-posts-grid');
    if (relatedPostsContainer) {
        relatedPostsContainer.innerHTML = '';
        
        // Get 2 random posts that are not the current post
        const relatedPosts = blogPosts
            .filter(post => post.id !== blogId)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);
        
        relatedPosts.forEach(post => {
            const relatedPostElement = document.createElement('div');
            relatedPostElement.className = 'related-post';
            relatedPostElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h4>${post.title}</h4>
                <a href="blog-detail.html?id=${post.id}" class="read-more">Read More</a>
            `;
            relatedPostsContainer.appendChild(relatedPostElement);
        });
    }
});
