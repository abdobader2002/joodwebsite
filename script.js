// Global variables
let cart = [];
let products = [];

// Product data with Arabic and English names
const productData = [
    // Eastern Sweets
    {
        id: 1,
        name: "الكليجا القصيمية | Al-Klija Al-Qassimiya",
        description: "حلوى تقليدية من منطقة القصيم محشوة بدبس التمر ودبس الرمان",
        descriptionEn: "Traditional sweet from Qassim region, stuffed with date molasses and pomegranate molasses",
        price: 25,
        category: "eastern-sweets",
        image: "fas fa-cookie-bite"
    },
    {
        id: 2,
        name: "البقلاوة | Baklava",
        description: "معجنات محشوة بالمكسرات ومغموسة في العسل",
        descriptionEn: "Layered pastry with nuts and honey syrup",
        price: 35,
        category: "eastern-sweets",
        image: "fas fa-birthday-cake"
    },
    {
        id: 3,
        name: "الكنافة | Kunafa",
        description: "معجنات مفتتة محشوة بالجبن",
        descriptionEn: "Shredded pastry with cheese filling",
        price: 30,
        category: "eastern-sweets",
        image: "fas fa-cookie-bite"
    },
    {
        id: 4,
        name: "المعمول | Maamoul",
        description: "كعك تقليدي محشو بالتمر أو المكسرات",
        descriptionEn: "Traditional filled cookies with dates or nuts",
        price: 20,
        category: "eastern-sweets",
        image: "fas fa-cookie-bite"
    },
    
    // Western Sweets
    {
        id: 5,
        name: "كيك الشوكولاتة | Chocolate Cake",
        description: "كيك شوكولاتة غني مع كريمة التزيين",
        descriptionEn: "Rich chocolate cake with cream frosting",
        price: 45,
        category: "western-sweets",
        image: "fas fa-birthday-cake"
    },
    {
        id: 6,
        name: "تشيز كيك | Cheesecake",
        description: "تشيز كيك كريمي مع توت العلّيق",
        descriptionEn: "Creamy cheesecake with berry topping",
        price: 40,
        category: "western-sweets",
        image: "fas fa-birthday-cake"
    },
    {
        id: 7,
        name: "تيراميسو | Tiramisu",
        description: "حلوى إيطالية بالقهوة والمسكربون",
        descriptionEn: "Italian dessert with coffee and mascarpone",
        price: 35,
        category: "western-sweets",
        image: "fas fa-birthday-cake"
    },
    {
        id: 8,
        name: "كيك ريد فيلفت | Red Velvet Cake",
        description: "كيك ريد فيلفت كلاسيكي مع كريمة الجبن",
        descriptionEn: "Classic red velvet with cream cheese frosting",
        price: 42,
        category: "western-sweets",
        image: "fas fa-birthday-cake"
    },
    
    // Bread
    {
        id: 9,
        name: "خبز العجين المخمر | Sourdough Bread",
        description: "خبز حرفي بالعجين المخمر مع قشرة مقرمشة",
        descriptionEn: "Artisan sourdough with crispy crust",
        price: 15,
        category: "bread",
        image: "fas fa-bread-slice"
    },
    {
        id: 10,
        name: "خبز القمح الكامل | Whole Wheat Bread",
        description: "خبز صحي من القمح الكامل",
        descriptionEn: "Healthy whole wheat bread",
        price: 12,
        category: "bread",
        image: "fas fa-bread-slice"
    },
    {
        id: 11,
        name: "الخبز الفرنسي | French Baguette",
        description: "خبز فرنسي تقليدي",
        descriptionEn: "Traditional French baguette",
        price: 10,
        category: "bread",
        image: "fas fa-bread-slice"
    },
    {
        id: 12,
        name: "خبز البيتا | Pita Bread",
        description: "خبز بيتا شرقي ناعم",
        descriptionEn: "Soft Middle Eastern pita bread",
        price: 8,
        category: "bread",
        image: "fas fa-bread-slice"
    },
    
    // Pastries
    {
        id: 13,
        name: "الكرواسان | Croissant",
        description: "كرواسان فرنسي بالزبدة",
        descriptionEn: "Buttery French croissant",
        price: 8,
        category: "pastries",
        image: "fas fa-cookie-bite"
    },
    {
        id: 14,
        name: "فطيرة دانماركية | Danish Pastry",
        description: "فطيرة حلوة محشوة بالفواكه",
        descriptionEn: "Sweet pastry with fruit filling",
        price: 12,
        category: "pastries",
        image: "fas fa-cookie-bite"
    },
    {
        id: 15,
        name: "الإكلير | Eclair",
        description: "فطيرة محشوة بالكريمة مع طبقة شوكولاتة",
        descriptionEn: "Cream-filled pastry with chocolate glaze",
        price: 15,
        category: "pastries",
        image: "fas fa-cookie-bite"
    },
    {
        id: 16,
        name: "المافن | Muffin",
        description: "مافن طازج بنكهات متنوعة",
        descriptionEn: "Fresh baked muffin with various flavors",
        price: 6,
        category: "pastries",
        image: "fas fa-cookie-bite"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    products = productData;
    loadCartFromStorage();
    updateCartDisplay();
    setupEventListeners();
    
    // Check if we're on menu page
    if (document.getElementById('products-grid')) {
        renderProducts();
    }
    
    // Check if we're on cart page
    if (document.getElementById('cart-items')) {
        renderCartItems();
    }
    
    // Check if we're on order page
    if (document.getElementById('order-form')) {
        renderOrderSummary();
        setupOrderForm();
    }
});

// Event Listeners
function setupEventListeners() {
    // Navigation links for sections
    const aboutLink = document.querySelector('a[href="#about"]');
    const branchesLink = document.querySelector('a[href="#branches"]');
    const goalsLink = document.querySelector('a[href="#goals"]');
    const locationLink = document.querySelector('a[href="#location"]');
    
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('about');
        });
    }
    
    if (branchesLink) {
        branchesLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('branches');
        });
    }
    
    if (goalsLink) {
        goalsLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('goals');
        });
    }
    
    if (locationLink) {
        locationLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('location');
        });
    }
    
    // Filter buttons for menu page
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter products
            filterProducts(btn.dataset.category);
        });
    });
    
    // Product modal events
    const productModal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            productModal.style.display = 'none';
        });
    }
    
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.style.display = 'none';
            }
        });
    }
    
    // Quantity controls in modal
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const quantity = document.getElementById('quantity');
            const currentQty = parseInt(quantity.textContent);
            if (currentQty > 1) {
                quantity.textContent = currentQty - 1;
            }
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const quantity = document.getElementById('quantity');
            const currentQty = parseInt(quantity.textContent);
            quantity.textContent = currentQty + 1;
        });
    }
    
    // Add to cart from modal
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCartFromModal);
    }
    
    // View toggle button
    const viewToggleBtn = document.getElementById('view-toggle');
    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', toggleView);
    }
    
    // Order form submission
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmission);
    }
    
    // Settings button functionality
    const settingsBtn = document.querySelector('.settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            // Add settings functionality here
            console.log('Settings clicked');
        });
    }
}

// Show/hide sections
function showSection(sectionName) {
    const aboutSection = document.getElementById('about');
    const branchesSection = document.getElementById('branches');
    const goalsSection = document.getElementById('goals');
    const locationSection = document.getElementById('location');
    
    // Hide all sections first
    if (aboutSection) aboutSection.classList.remove('show');
    if (branchesSection) branchesSection.classList.remove('show');
    if (goalsSection) goalsSection.classList.remove('show');
    if (locationSection) locationSection.classList.remove('show');
    
    // Show selected section
    if (sectionName === 'about' && aboutSection) {
        aboutSection.classList.add('show');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'branches' && branchesSection) {
        branchesSection.classList.add('show');
        branchesSection.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'goals' && goalsSection) {
        goalsSection.classList.add('show');
        goalsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'location' && locationSection) {
        locationSection.classList.add('show');
        locationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle view function
function toggleView() {
    const productsGrid = document.getElementById('products-grid');
    const viewToggleBtn = document.getElementById('view-toggle');
    const viewIcon = document.getElementById('view-icon');
    
    if (!productsGrid || !viewToggleBtn || !viewIcon) return;
    
    if (productsGrid.classList.contains('list-view')) {
        // Switch to grid view
        productsGrid.classList.remove('list-view');
        viewIcon.className = 'fas fa-th';
        viewToggleBtn.classList.remove('active');
    } else {
        // Switch to list view
        productsGrid.classList.add('list-view');
        viewIcon.className = 'fas fa-list';
        viewToggleBtn.classList.add('active');
    }
}

// Menu page functions
function renderProducts(category = 'all') {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="product-image">
            <i class="${product.image}"></i>
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">${product.price} ريال</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-plus"></i>
                <span>أضف للسلة | Add to Cart</span>
            </button>
        </div>
    `;
    
    return card;
}

function filterProducts(category) {
    renderProducts(category);
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const quantity = document.getElementById('quantity');
    
    modalTitle.textContent = product.name;
    modalIcon.className = product.image;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `${product.price} ريال`;
    quantity.textContent = '1';
    
    // Store product ID for adding to cart
    modal.dataset.productId = productId;
    
    modal.style.display = 'block';
}

function addToCartFromModal() {
    const modal = document.getElementById('product-modal');
    const productId = parseInt(modal.dataset.productId);
    const quantity = parseInt(document.getElementById('quantity').textContent);
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Add to cart
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
    
    // Close modal
    modal.style.display = 'none';
    
    // Show success message
    showNotification('تم إضافة المنتج للسلة | Product added to cart!');
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    renderCartItems();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateCartDisplay();
        renderCartItems();
    }
}

function updateCartDisplay() {
    // Update cart count in navigation
    const cartCount = document.querySelector('.cart-count');
    const cartBadge = document.querySelector('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartBadge) cartBadge.textContent = totalItems;
}

function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">
                <i class="${item.image}"></i>
            </div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price} ريال</div>
                <div class="item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">حذف</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Update summary
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 15;
    const total = subtotal + deliveryFee;
    
    const subtotalEl = document.getElementById('subtotal');
    const deliveryFeeEl = document.getElementById('delivery-fee');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `${subtotal} ريال`;
    if (deliveryFeeEl) deliveryFeeEl.textContent = `${deliveryFee} ريال`;
    if (totalEl) totalEl.textContent = `${total} ريال`;
}

// Order page functions
function renderOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    if (!orderSummary) return;
    
    if (cart.length === 0) {
        orderSummary.innerHTML = '<p>لا توجد عناصر في السلة | No items in cart</p>';
        return;
    }
    
    orderSummary.innerHTML = '';
    
    cart.forEach(item => {
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <div class="item-info">
                <span class="item-name">${item.name}</span>
                <span class="item-quantity">x${item.quantity}</span>
            </div>
            <span class="item-total">${item.price * item.quantity} ريال</span>
        `;
        orderSummary.appendChild(summaryItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 15;
    const totalRow = document.createElement('div');
    totalRow.className = 'summary-total';
    totalRow.innerHTML = `
        <strong>المجموع الكلي | Total: ${total} ريال</strong>
    `;
    orderSummary.appendChild(totalRow);
}

function setupOrderForm() {
    const deliveryTypeRadios = document.querySelectorAll('input[name="delivery-type"]');
    const addressSection = document.getElementById('address-section');
    
    deliveryTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'delivery') {
                addressSection.style.display = 'block';
            } else {
                addressSection.style.display = 'none';
            }
        });
    });
}

function handleOrderSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const deliveryType = formData.get('delivery-type');
    const branch = formData.get('branch');
    const address = formData.get('address');
    const city = formData.get('city');
    const phone = formData.get('phone');
    const payment = formData.get('payment');
    
    // Validate form
    if (deliveryType === 'delivery' && (!address || !city || !phone)) {
        alert('يرجى ملء جميع الحقول المطلوبة | Please fill all required fields');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المعالجة...';
    submitBtn.disabled = true;
    
    // Simulate order processing
    setTimeout(() => {
        // Clear cart
        cart = [];
        saveCartToStorage();
        
        // Show success modal
        const successModal = document.getElementById('success-modal');
        if (successModal) {
            successModal.classList.add('show');
        }
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Storage functions
function saveCartToStorage() {
    localStorage.setItem('joodBakeryCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('joodBakeryCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .summary-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid var(--light-gray);
    }
    
    .summary-total {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 2px solid var(--primary-color);
        text-align: center;
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);