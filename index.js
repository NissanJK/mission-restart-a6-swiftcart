const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');
showSection('home');

function showSection(id) {
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove("hidden");

    links.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-target="${id}"]`).classList.add('active');
}

links.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.dataset.target;
        showSection(target);
    });
});
const products = fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => {
    const productContainer = document.getElementById("products");
    data.forEach(product => {
        if (product.id > 3) return;
        const productCard = document.createElement("div");
        productCard.classList.add("card", "bg-base-100", "shadow-xl");
        productCard.innerHTML =`
        <figure class="">
           <img src="${product.image}" alt="${product.title}"
            class="rounded-t-lg w-full h-48 object-contain bg-gray-100 p-5" />
        </figure>
        <div class="flex justify-between items-center">
        <span
            class="badge badge-xs badge-warning mx-5 mt-5 text-blue-700 bg-blue-50 border-0">${product.category}</span>
        <div class="text-xs text-[#00000080] font-medium mx-5 mt-5"><i
                class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
            (${product.rating.count})</div>
        </div>
        <div class="card-body">
            <h2 class="text-sm truncate">${product.title}</h2>
            <p class="text-base font-bold">$${product.price}</p>
            <div class="flex justify-between items-center gap-5 mt-3"> 
                <button onclick="showProductDetails(${product.id})" id="details" class="btn flex-1 text-xs">
                <i class="fa-solid fa-eye"></i> Details
                </button> 
                <button class="btn btn-primary flex-1 text-xs">
                <i class="fa-solid fa-cart-shopping"></i> Add
                </button> 
            </div>
        </div>   
                
        `;
        productContainer.appendChild(productCard);
    });
}).catch(err => {
    console.error("Error fetching products:", err);
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "<p class='text-red-500'>Failed to load products. Please try again later.</p>";
});


const productDetailsModal = document.getElementById("product-details-modal");
function showProductDetails(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            productDetailsModal.querySelector(".modal-title").textContent = product.title; 
            productDetailsModal.querySelector(".modal-body").innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-contain mb-4">
                <p class="text-sm mb-2"><strong>Category:</strong> ${product.category}</p>
                <p class="text-sm mb-2"><strong>Price:</strong> $${product.price}</p>
                <p class="text-sm mb-2"><strong>Rating:</strong> <i
                class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count} reviews)</p>
                <p class="text-sm"><strong>Description:</strong> ${product.description}</p>
            `;
            productDetailsModal.showModal();
        })
        .catch(err => {
            console.error("Error fetching product details:", err);
            productDetailsModal.querySelector(".modal-body").innerHTML = "<p class='text-red-500'>Failed to load product details. Please try again later.</p>";
            productDetailsModal.showModal();
        });
}