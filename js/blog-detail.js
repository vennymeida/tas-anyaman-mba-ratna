document.addEventListener('DOMContentLoaded', function() {
    // Blog posts data with bilingual support
    const blogPosts = [
        {
            id: 1,
            title: "How To Care for a Hand-Woven Bag",
            title_id: "Cara Merawat Tas Anyaman Tangan",
            image: "images/article1.webp",
            date: "May 15, 2025",
            date_id: "15 Mei 2025",
            author: "Aprilia Tri Anggraeni",
            author_id: "Aprilia Tri Anggraeni",
            content: `
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article1-detail.png" alt="How To Care for a Hand-Woven Bag" id="blog-detail-img">
                
                <p>Woven bags are one of the fashion accessories made from traditional woven handicrafts that still have interest and competitiveness with modern bags. The results of woven bag crafts have unique and timeless designs and durable materials such as bamboo, plastic, rattan, pandan, or animal skin.

                However, caring for woven bags still needs to be considered so that these bags continue to look beautiful and durable. Starting from how to clean them to storing them. For those of you who don't know how to care for them properly, here are some tips you can follow! </p>
                
                <h2>Tips for Caring for Woven Bags to Stay Beautiful and Durable:</h2>

                <h3>Avoid Washing Bags, Clean Using a Cloth</h3>
                
                <p>To clean woven bags, you don't need to wash them with water directly,  just wipe the bag with a cloth. Dampen the cloth with a little water, then clean the part of the bag you want to clean. If there are stains that are difficult to remove, use a toothbrush with a soft brush so as not to damage the surface and motif of the woven bag. </p>
                
                <h3>Use Baking Soda to Remove Odors from Woven Bags</h3>

                <p>Bags that have not been used for a long time will produce a smelly aroma. Avoid spraying perfume on the bag because it can damage the bag, so that it does not last long. You can use another alternative,s such as putting baking soda in the bag and leaving it for 24 hours to remove the smell from the bag.</p>
                
                <h3>Avoid Woven Bags From Water</h3>
                
                <p>Woven bags that are often exposed to water can cause mold. Therefore, avoid water so that your woven bag remains durable with a beautiful design. If the woven bag has been exposed to water, then you should immediately dry the bag by wiping it, and immediately store it in a good place and avoid water that causes mold.</p>
                                                        
                <h3>Avoid Drying Woven Bags Under Hot Sunlight</h3>

                <p>If your woven bag is wet, you can also dry the woven bag by placing or hanging the bag in an open place and help dry it using a clean towel or tissue to remove moisture from the bag. Avoid drying the bag under direct hot sunlight because this can weaken the woven bag material.</p>
                
                <h3>Check and Clean Your Bag Regularly</h3>

                <p>The last and most important tip, you need to check the condition of your woven bag regularly to ensure the condition and cleanliness of your woven bag. If you see any signs of damage to the material and stains on the weave, immediately repair and clean the bag according to the tips you have received.

                If you are interested and want to try a woven bag made of premium plastic for fashion, souvenirs, and decoration needs, Mba' Ratna Woven Bags offers various woven bags with unique and charming motifs, designs, and sizes. Not only that, Mba' Ratna Woven Bags also provides design requests for the woven bag souvenirs you want. Find out information and choose a bag according to your taste right now.</p>
            `,
            content_id: `
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article1-detail.png" alt="Cara Merawat Tas Anyaman Tangan" id="blog-detail-img">
                
                <p>Tas anyaman merupakan salah satu aksesoris fashion yang terbuat dari kerajinan anyaman tradisional yang masih memiliki peminat dan daya saing dengan tas modern. Hasil kerajinan tas anyaman memiliki desain yang unik dan timeless serta material yang tahan lama seperti bambu, plastik, rotan, pandan, ataupun kulit hewan.

                Namun, merawat tas anyaman tetap perlu diperhatikan agar tas tersebut tetap terlihat cantik dan tahan lama. Mulai dari cara membersihkannya hingga penyimpanannya. Bagi kalian yang belum tahu cara merawatnya dengan baik, berikut beberapa tips yang bisa kalian ikuti! </p>
                
                <h2>Tips Merawat Tas Anyaman Agar Tetap Cantik dan Tahan Lama:</h2>

                <h3>Hindari Mencuci Tas, Bersihkan Menggunakan Kain</h3>
                
                <p>Untuk membersihkan tas anyaman, kalian tidak perlu mencucinya dengan air secara langsung, cukup dilap menggunakan kain. Basahi kain dengan sedikit air, kemudian bersihkan bagian tas yang ingin dibersihkan. Jika ada noda yang sulit hilang, gunakan sikat gigi dengan bulu sikat yang lembut agar tidak merusak permukaan dan motif tas anyaman. </p>
                
                <h3>Gunakan Baking Soda untuk Menghilangkan Bau pada Tas Anyaman</h3>

                <p>Tas yang sudah lama tidak digunakan akan mengeluarkan aroma yang tidak sedap. Hindari menyemprotkan parfum pada tas karena dapat merusak tas sehingga tidak bertahan lama. Kalian bisa menggunakan alternatif lain seperti memasukkan baking soda ke dalam tas dan membiarkannya selama 24 jam untuk menghilangkan bau pada tas.</p>
                
                <h3>Hindarkan Tas Anyaman Dari Air</h3>
                
                <p>Tas anyaman yang sering terkena air dapat menyebabkan jamur. Oleh karena itu, hindarkan dari air agar tas anyaman kalian tetap awet dengan desain yang cantik. Jika tas anyaman sudah terlanjur terkena air, maka kalian harus segera mengeringkan tas dengan cara melapnya, dan segera simpan di tempat yang baik serta hindarkan dari air yang menyebabkan jamur.</p>
                                                        
                <h3>Hindari Mengeringkan Tas Anyaman di Bawah Sinar Matahari yang Panas</h3>

                <p>Jika tas anyaman kalian basah, kalian juga bisa mengeringkan tas anyaman dengan cara meletakkan atau menggantung tas di tempat terbuka dan bantu keringkan menggunakan handuk bersih atau tisu untuk menghilangkan kelembaban pada tas. Hindari mengeringkan tas di bawah sinar matahari langsung yang panas karena hal ini dapat melemahkan material tas anyaman.</p>
                
                <h3>Periksa dan Bersihkan Tas Secara Rutin</h3>

                <p>Tips terakhir dan yang paling penting, kalian perlu memeriksa kondisi tas anyaman secara rutin untuk memastikan kondisi dan kebersihan tas anyaman kalian. Jika kalian melihat ada tanda-tanda kerusakan pada material dan noda pada anyaman, segera perbaiki dan bersihkan tas sesuai dengan tips yang sudah kalian dapatkan.

                Jika kalian tertarik dan ingin mencoba tas anyaman berbahan plastik premium untuk kebutuhan fashion, souvenir, dan dekorasi, Tas Anyaman Mba' Ratna menawarkan berbagai tas anyaman dengan motif, desain, dan ukuran yang unik dan menarik. Tidak hanya itu, Tas Anyaman Mba' Ratna juga menyediakan permintaan desain untuk souvenir tas anyaman yang kalian inginkan. Cari tahu informasi dan pilih tas sesuai selera kalian sekarang juga.</p>
            `
        },
        {
            id: 2,
            title: "Recommended Shopping Bags to Replace Plastic Bags",
            title_id: "Rekomendasi Tas Belanja Pengganti Kantong Plastik",
            image: "images/article2.jpg",
            date: "May 2, 2025",
            date_id: "2 Mei 2025",
            author: "Aprilia Tri Anggraeni",
            author_id: "Aprilia Tri Anggraeni",
            content: `
                <p>Currently, the use of plastic bags in several shopping centers has been banned by the government. The appeal to use plastic bags as a substitute for paper bags is not half-hearted. The ban on the use of plastic bags is enforced in supermarkets to convenience stores that are spread out without providing plastic shopping bags. The ban on the use of plastic bags is the government's effort to reduce plastic waste that is difficult to decompose, so it hurts the environment and damages sustainable ecosystems.</p>
                
                <p>This requires us to find alternatives to plastic bags for shopping. If we only shop for one or two items, we may not need a shopping bag. However, what if we shop for quite a lot of monthly needs? We need a shopping bag that is big enough to accommodate our groceries. Here are recommendations for those of you who are looking for alternative shopping bags to replace plastic bags at affordable prices, and that can be used every day.</p>
                
                <h3>Canvas Bags</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-detail1.png" alt="Recommended Shopping Bags to Replace Plastic Bags">
                <p>Canvas bags or commonly called tote bags, can be used as a substitute for plastic shopping bags. Canvas bags have medium to large sizes. Canvas bags are not only used for shopping but can be used for other purposes, such as going to campus or as everyday bags. However, canvas bags are not recommended for wet shopping items.</p>
                
                <h3>Paper Bag</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-detail2.png" alt="Recommended Shopping Bags to Replace Plastic Bags">
                <p>Currently, most minimarkets, supermarkets, and shopping centers now provide paper bags for shopping bags as a substitute for plastic bags. This is because paper bags are made of recyclable materials that can reduce the negative impact on the environment ecosystem. Paper bags can be reused as long as they are not torn or damaged in any other way. The disadvantage of paper bags is that they cannot be used for wet shopping items.</p>
                
                <h3>Wheel Shopping Bags</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-detail3.png" alt="Recommended Shopping Bags to Replace Plastic Bags">
                <p>Wheeled shopping bags are most widely used when shopping for many needs. Mothers often use this shopping bag to shop in large quantities at wholesale markets and supermarkets. Shopping bags with wheels are quite large. As the name implies, this shopping bag has wheels on the bottom that you can also pull like a suitcase, so that doesn't need to carry a heavy shopping bag anymore. Wheeled shopping bags have the disadvantage that they are difficult to carry by vehicle because they take up space, especially when using a motorbike.</p>
                
                <h3>Parachute Folding Bag</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-image4.png" alt="Recommended Shopping Bags to Replace Plastic Bags">
                <p>The parachute folding shopping bag is a super practical substitute for plastic bags. This bag is made of thin parachute material so it is easy to fold so it is easy to carry anywhere. When this parachute bag is folded, yes, you can store it in your bag so you don't have to worry if your bag is full. This parachute bag has a drawback, namely, it is easily damaged or torn because the material is made of thin parachute material.</p>
                
                <h3>Woven Bag</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image5.png" alt="Recommended Shopping Bags to Replace Plastic Bags">
                <p>Woven shopping bags are made from various types of materials, from bamboo to water hyacinth. The lightweight material and spacious design make this woven bag a favorite of many people. In addition, this bag is fairly durable, so it can be used many times. Jami woven bags can be obtained at affordable prices, but have good quality. This bag has various sizes from small to large, so it can hold a lot of items. Woven bags are strong and elastic, so they can withstand heavy loads. In addition, this environmentally friendly bag looks aesthetic with a unique design, so that it still looks stylish when shopping at supermarkets or traditional markets.</p>
                
                <p>For those of you who want to find woven bags as an alternative to plastic shopping bags, you can visit our website. The affordable price starts from IDR 15 thousand at the Tas Anyaman Mba' Ratna store.</p>
            `,
            content_id: `
                <p>Saat ini, penggunaan kantong plastik di beberapa pusat perbelanjaan sudah dilarang oleh pemerintah. Himbauan penggunaan kantong plastik diganti dengan kantong kertas bukan main-main. Larangan penggunaan kantong plastik diberlakukan di supermarket hingga toko kelontong yang tersebar tanpa menyediakan kantong belanja plastik. Larangan penggunaan kantong plastik merupakan upaya pemerintah untuk mengurangi sampah plastik yang sulit terurai sehingga melukai lingkungan dan merusak ekosistem berkelanjutan.</p>
                
                <p>Hal tersebut mengharuskan kita untuk mencari alternatif pengganti kantong plastik untuk berbelanja. Jika kita hanya berbelanja satu atau dua barang, mungkin kita tidak memerlukan kantong belanja. Namun, bagaimana jika kita berbelanja cukup banyak untuk kebutuhan bulanan? Kita memerlukan kantong belanja yang cukup besar untuk menampung belanjaan kita. Berikut rekomendasi bagi kalian yang sedang mencari alternatif kantong belanja pengganti kantong plastik dengan harga terjangkau, dan yang bisa digunakan setiap hari.</p>
                
                <h3>Tas Kanvas</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-detail1.png" alt="Rekomendasi Tas Belanja Pengganti Kantong Plastik">
                <p>Tas kanvas atau yang biasa disebut tote bag, bisa digunakan sebagai pengganti kantong belanja plastik. Tas kanvas memiliki ukuran sedang hingga besar. Tas kanvas tidak hanya digunakan untuk berbelanja tetapi bisa digunakan untuk keperluan lain, seperti ke kampus atau sebagai tas sehari-hari. Namun, tas kanvas tidak direkomendasikan untuk barang belanjaan yang basah.</p>
                
                <h3>Kantong Kertas</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-detail2.png" alt="Rekomendasi Tas Belanja Pengganti Kantong Plastik">
                <p>Saat ini, sebagian besar minimarket, supermarket, dan pusat perbelanjaan kini menyediakan kantong kertas untuk kantong belanja sebagai pengganti kantong plastik. Hal ini karena kantong kertas terbuat dari bahan yang dapat didaur ulang yang dapat mengurangi dampak negatif pada ekosistem lingkungan. Kantong kertas dapat digunakan kembali selama tidak robek atau rusak dengan cara lain. Kekurangan kantong kertas adalah tidak dapat digunakan untuk barang belanjaan yang basah.</p>
                
                <h3>Tas Belanja Beroda</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-detail3.png" alt="Rekomendasi Tas Belanja Pengganti Kantong Plastik">
                <p>Tas belanja beroda paling banyak digunakan saat berbelanja untuk banyak kebutuhan. Ibu-ibu sering menggunakan tas belanja ini untuk berbelanja dalam jumlah banyak di pasar grosir dan supermarket. Tas belanja beroda ukurannya cukup besar. Seperti namanya, tas belanja ini memiliki roda di bagian bawah yang juga bisa ditarik seperti koper, sehingga tidak perlu lagi membawa tas belanja yang berat. Tas belanja beroda memiliki kekurangan yaitu sulit dibawa dengan kendaraan karena memakan tempat, terutama saat menggunakan sepeda motor.</p>
                
                <h3>Tas Lipat Parasut</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article2-image4.png" alt="Rekomendasi Tas Belanja Pengganti Kantong Plastik">
                <p>Tas belanja lipat parasut merupakan pengganti kantong plastik yang super praktis. Tas ini terbuat dari bahan parasut tipis sehingga mudah dilipat sehingga mudah dibawa kemana-mana. Saat tas parasut ini dilipat, kalian bisa menyimpannya di dalam tas sehingga tidak perlu khawatir jika tas kalian penuh. Tas parasut ini memiliki kekurangan yaitu mudah rusak atau robek karena bahannya terbuat dari bahan parasut tipis.</p>
                
                <h3>Tas Anyaman</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image5.png" alt="Rekomendasi Tas Belanja Pengganti Kantong Plastik">
                <p>Tas belanja anyaman terbuat dari berbagai jenis bahan, mulai dari bambu hingga eceng gondok. Bahan yang ringan dan desain yang luas membuat tas anyaman ini menjadi favorit banyak orang. Selain itu, tas ini cukup tahan lama sehingga dapat digunakan berkali-kali. Tas anyaman bisa didapatkan dengan harga terjangkau, namun memiliki kualitas yang baik. Tas ini memiliki berbagai ukuran dari kecil hingga besar, sehingga dapat menampung banyak barang. Tas anyaman kuat dan elastis, sehingga dapat menahan beban berat. Selain itu, tas ramah lingkungan ini terlihat estetik dengan desain yang unik, sehingga tetap terlihat stylish saat berbelanja di supermarket atau pasar tradisional.</p>
                
                <p>Bagi kalian yang ingin mencari tas anyaman sebagai alternatif kantong belanja plastik, kalian bisa mengunjungi website kami. Harga terjangkau mulai dari IDR 15 ribu di toko Tas Anyaman Mba' Ratna.</p>
            `
        },
        {
            id: 3,
            title: "Cheap and Functional Wedding Souvenir Bag Recommendations",
            title_id: "Rekomendasi Tas Souvenir Pernikahan yang Murah dan Fungsional",
            image: "images/article3.jpg",
            date: "April 20, 2025",
            date_id: "20 April 2025",
            author: "Aprilia Tri Anggraeni",
            author_id: "Aprilia Tri Anggraeni",
            content: `
                <p>Wedding souvenirs are not just souvenirs, but also one of the most important factors that will give a deep impression to the guests. One of the most popular souvenirs is bags. Not only are bags practical and functional, but they also adapt to the wedding theme, give an elegant impression, and, of course, help the guests who receive them.</p>
                
                <p>Here are some recommendations for wedding souvenir bags that can be an option:</p>
                
                <h3>1. Shopping Bags</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image1.jpeg" alt="Cheap and Functional Wedding Souvenir Bag Recommendations">
                <p>Woven shopping bags have the benefit of replacing environmentally unfriendly plastic shopping bags. Woven bags are durable because the material is durable and versatile. You can choose a shopping bag with a design that is adjusted to your wedding theme, such as embroidered names of the bride and groom or the wedding date. This bag can also be printed with a typical wedding design, such as a flower motif or a monogram of the bride and groom.</p>
                
                <h3>2. Small Pouch Bag</h3>
                <p>Small pouch bags made of premium plastic are perfect as a place to store jewelry, chocolate, candy, or even other miniature souvenirs. The simple yet elegant design makes pouch bags an excellent choice.</p>
                
                <h3>3. Mini Woven Bag</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image3.jpeg" alt="Cheap and Functional Wedding Souvenir Bag Recommendations">
                <p>If you want to give a modern and minimalist impression, a mini woven bag can be an interesting choice. You can fill it with various fillings, such as snacks and drinks, or others. This type of bag can also be personalized with screen printing or stickers of the bride and groom's names.</p>
                
                <h3>4. Woven Goodie Bag for Souvenir Packages</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image4.jpeg" alt="Cheap and Functional Wedding Souvenir Bag Recommendations">
                <p>If you plan to give more than one souvenir, a goodie bag is the right choice. This bag can be filled with various items such as snacks, drinks, or other small items. You can choose a woven goodie bag that has a simple but attractive appearance.</p>
                
                <h3>5. Premium Woven Bag</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image5.png" alt="Cheap and Functional Wedding Souvenir Bag Recommendations">
                <p>Premium woven bags can be used as wedding souvenirs that give a luxurious and elegant impression. This bag is suitable for use as a souvenir for special guests who attend your wedding. The simple and exclusive design is suitable for weddings with formal or luxurious themes.</p>
                
                <p>If you are interested in woven bags as wedding souvenirs at affordable prices but have good quality, you can get them at the Mba' Ratna Woven Bag store or visit our website.</p>
            `,
            content_id: `
                <p>Souvenir pernikahan bukan hanya sekedar kenang-kenangan, tetapi juga salah satu faktor penting yang akan memberikan kesan mendalam kepada para tamu. Salah satu souvenir yang populer adalah tas. Tas tidak hanya praktis dan fungsional, tetapi juga menyesuaikan dengan tema pernikahan, memberikan kesan elegan, dan tentunya membantu para tamu yang menerimanya.</p>
                
                <p>Berikut beberapa rekomendasi tas souvenir pernikahan yang bisa menjadi pilihan:</p>
                
                <h3>1. Tas Belanja</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image1.jpeg" alt="Rekomendasi Tas Souvenir Pernikahan yang Murah dan Fungsional">
                <p>Tas belanja anyaman memiliki manfaat menggantikan kantong belanja plastik yang tidak ramah lingkungan. Tas anyaman tahan lama karena bahannya awet dan serbaguna. Kalian bisa memilih tas belanja dengan desain yang disesuaikan dengan tema pernikahan kalian, seperti bordir nama mempelai atau tanggal pernikahan. Tas ini juga bisa dicetak dengan desain khas pernikahan, seperti motif bunga atau monogram mempelai.</p>
                
                <h3>2. Tas Pouch Kecil</h3>
                <p>Tas pouch kecil berbahan plastik premium sangat cocok sebagai tempat menyimpan perhiasan, cokelat, permen, atau bahkan souvenir miniatur lainnya. Desain yang sederhana namun elegan membuat tas pouch menjadi pilihan yang sangat baik.</p>
                
                <h3>3. Mini Tas Anyaman</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image3.jpeg" alt="Rekomendasi Tas Souvenir Pernikahan yang Murah dan Fungsional">
                <p>Jika kalian ingin memberikan kesan modern dan minimalis, mini tas anyaman bisa menjadi pilihan yang menarik. Kalian bisa mengisinya dengan berbagai isian, seperti snack dan minuman, atau lainnya. Jenis tas ini juga bisa dipersonalisasi dengan sablon atau stiker nama mempelai.</p>
                
                <h3>4. Tas Anyaman Goodie Bag untuk Paket Souvenir</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image4.jpeg" alt="Rekomendasi Tas Souvenir Pernikahan yang Murah dan Fungsional">
                <p>Jika kalian berencana memberikan lebih dari satu souvenir, goodie bag adalah pilihan yang tepat. Tas ini bisa diisi dengan berbagai barang seperti snack, minuman, atau barang kecil lainnya. Kalian bisa memilih tas anyaman goodie bag yang memiliki tampilan sederhana namun menarik.</p>
                
                <h3>5. Tas Anyaman Premium</h3>
                <img style="width: 30%; height: auto; display: block; margin: 0 auto; margin-bottom: 20px;" src="images/article3-image5.png" alt="Rekomendasi Tas Souvenir Pernikahan yang Murah dan Fungsional">
                <p>Tas anyaman premium bisa digunakan sebagai souvenir pernikahan yang memberikan kesan mewah dan elegan. Tas ini cocok digunakan sebagai souvenir untuk tamu khusus yang hadir di pernikahan kalian. Desain yang sederhana dan eksklusif cocok untuk pernikahan dengan tema formal atau mewah.</p>
                
                <p>Jika kalian tertarik dengan tas anyaman sebagai souvenir pernikahan dengan harga terjangkau namun memiliki kualitas yang baik, kalian bisa mendapatkannya di toko Tas Anyaman Mba' Ratna atau kunjungi website kami.</p>
            `
        }
    ];

    // Get blog ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id')) || 1; // Default to first blog if no ID provided
    
    // Find the blog post
    const blogPost = blogPosts.find(post => post.id === blogId);
    
    // Function to update blog detail language
    window.updateBlogDetailLanguage = function(lang) {
        if (blogPost) {
            console.log('Updating blog detail language to:', lang); // Debug log
            
            // Update blog content elements
            document.getElementById('blog-date').textContent = lang === 'id' ? blogPost.date_id : blogPost.date;
            document.getElementById('blog-author').textContent = lang === 'id' ? blogPost.author_id : blogPost.author;
            document.getElementById('blog-title').textContent = lang === 'id' ? blogPost.title_id : blogPost.title;
            
            // Update page title
            document.title = `${lang === 'id' ? blogPost.title_id : blogPost.title} - Tas Anyaman Mba Ratna`;
            
            // Update content
            const contentContainer = document.querySelector('.blog-detail-content');
            if (contentContainer) {
                const currentContent = lang === 'id' ? blogPost.content_id : blogPost.content;
                contentContainer.innerHTML = `<h1 id="blog-title">${lang === 'id' ? blogPost.title_id : blogPost.title}</h1>${currentContent}`;
            }
            
            // Update back to blog button
            const backButton = document.querySelector('.back-to-blog');
            if (backButton) {
                backButton.innerHTML = `<i class="fas fa-arrow-left"></i> ${lang === 'id' ? 'Kembali ke Blog' : 'Back to Blog'}`;
            }
        }
    };
    
    if (blogPost) {
        // Get current language from flag
        const currentFlag = document.getElementById('current-flag');
        const lang = currentFlag ? currentFlag.getAttribute('data-lang') : 'en';
        
        // Update initial content based on current language
        updateBlogDetailLanguage(lang);
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
