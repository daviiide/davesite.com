const menuItems = [
    { id: 1, branch: "Jollibee", name: "Chickenjoy", price: 150, image: "c1.jfif" },
    { id: 2, branch: "Jollibee", name: "Jolly Spaghetti", price: 100, image: "c2.jfif" },
    { id: 3, branch: "Jollibee", name: "Burger Steak", price: 120, image: "c3.jfif" },
    { id: 4, branch: "Jollibee", name: "Yumburger", price: 90, image: "c4.jfif" },
    { id: 5, branch: "Jollibee", name: "Jolly Hotdog", price: 110, image: "c5.jfif" },

    { id: 6, branch: "Mang Inasal", name: "Pecho (Chicken Breast)", price: 140, image: "m1.jfif" },
    { id: 7, branch: "Mang Inasal", name: "Paa (Chicken Leg)", price: 130, image: "m2.jfif" },
    { id: 8, branch: "Mang Inasal", name: "Pork BBQ", price: 100, image: "m3.jfif" },
    { id: 9, branch: "Mang Inasal", name: "Bangus Sisig", price: 150, image: "m4.jfif" },
    { id: 10, branch: "Mang Inasal", name: "Halo-Halo", price: 90, image: "m5.jfif" },

    { id: 11, branch: "McDonald's", name: "Big Mac", price: 180, image: "md1.jfif" },
    { id: 12, branch: "McDonald's", name: "McChicken", price: 170, image: "md2.jfif" },
    { id: 13, branch: "McDonald's", name: "Fries (Large)", price: 90, image: "md3.jfif" },
    { id: 14, branch: "McDonald's", name: "McFloat", price: 70, image: "md4.jfif" },
    { id: 15, branch: "McDonald's", name: "ChickenMcdo", price: 120, image: "md5.jfif" },

    
    { id: 16, branch: "Thirdy's", name: "Brewed Coffee", price: 200,image: "t1.jpg" },
    { id: 17, branch: "Thirdy's", name: "Chicharong Bulaklak", price: 150,image: "t2.jpg"  },
    { id: 18, branch: "Thirdy's", name: "Sandwich", price: 80,image: "t3.jpg"  },
    { id: 19, branch: "Thirdy's", name: "Sisig", price: 180,image: "t4.jpg"  },
    { id: 20, branch: "Thirdy's", name: "Crispy Pata", price: 190,image: "t5.jpg"  },

    { id: 21, branch: "Nice & Spice", name: "Garlic Parmesan Wings", price: 250,image: "n1.jpg"  },
    { id: 22, branch: "Nice & Spice", name: "Halo-Halo", price: 220,image: "n2.jpg"  },
    { id: 23, branch: "Nice & Spice", name: "Pancit Palabok", price: 180,image: "n3.jpg"  },
    { id: 24, branch: "Nice & Spice", name: "Lechon Rice", price: 240,image: "n4.jpg"  },
    { id: 25, branch: "Nice & Spice", name: "Sisig", price: 150,image: "n5.jpg"  },

    { id: 26, branch: "Rotonda Cafe", name: "Milktea (Buy 1 Take 1)", price: 170,image: "r1.jpg" },
    { id: 27, branch: "Rotonda Cafe", name: "Churros", price: 180,image: "r2.jpg" },
    { id: 28, branch: "Rotonda Cafe", name: "Pizza", price: 160,image: "r3.jpg" },
    { id: 29, branch: "Rotonda Cafe", name: "Ramen", price: 150,image: "r4.jpg" },
    { id: 30, branch: "Rotonda Cafe", name: "Special Bingsu", price: 90,image: "r5.jpg" },

    { id: 31, branch: "MikeCafe", name: "Mini Cream Puff", price: 140,image: "p1.jpg" },
    { id: 32, branch: "MikeCafe", name: "Croissant (with dark chocolate and cashew nuts)", price: 150,image: "p2.jpg" },
    { id: 33, branch: "MikeCafe", name: "Frappe", price: 160,image: "p3.jpg" },
    { id: 34, branch: "MikeCafe", name: "Cupcakes", price: 130,image: "p4.jpg" },
    { id: 35, branch: "MikeCafe", name: "Pastry Combo", price: 80,image: "p5.jpg" },
];

// DOM Elements
const menuDiv = document.getElementById("menu");
const viewCartBtn = document.getElementById("viewCartBtn");
const cartModal = document.getElementById("cartModal");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const confirmOrderBtn = document.getElementById("confirmOrderBtn");
const animationContainer = document.getElementById("animation-container");

let cart = [];

// Display Menu
menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
        <h3>${item.branch}</h3>
        <img src="${item.image}" alt="${item.name}" class="product-image">
        <p>${item.name}</p>
        <p>₱${item.price}</p>
        <button onclick="addToCart(${item.id}, event)">Add to Cart</button>
    `;
    menuDiv.appendChild(menuItem);
});

// Add to Cart with Animation
function addToCart(itemId, event) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    // Animation
    const anim = document.createElement("div");
    anim.classList.add("add-animation");
    anim.textContent = "🛒";
    anim.style.position = "absolute";
    anim.style.left = `${event.clientX}px`;
    anim.style.top = `${event.clientY}px`;
    animationContainer.appendChild(anim);

    setTimeout(() => {
        anim.remove();
    }, 1000);
}


viewCartBtn.addEventListener("click", () => {
    cartModal.style.display = "block";
    updateCart(); // Ensure cart is updated when view cart is clicked
});

// Remove Item 
function removeFromCart(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(i => i.id !== itemId);
    }
    updateCart();
}

// Void Item 
function voidItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}


function updateCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>₱${item.price} x ${item.quantity}</p>
                <div class="cart-actions">
                    <button onclick="removeFromCart(${item.id})" class="delete-btn">➖ Remove</button>
                    <button onclick="voidItem(${item.id})" class="void-btn">❌ Void</button>
                </div>
            `;

            cartItemsDiv.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }

    cartTotal.innerText = `Total: ₱${total}`;
}





function printReceipt() {
    let receiptContent = `
        <h2>Receipt</h2>
        <p>Date: ${new Date().toLocaleString()}</p>
        <hr>
        <table border="1" width="100%" cellspacing="0" cellpadding="5">
            <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
            </tr>
    `;

    let total = 0;
    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        total += subtotal;
        receiptContent += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>₱${item.price}</td>
                <td>₱${subtotal}</td>
            </tr>
        `;
    });

    receiptContent += `
        </table>
        <h3>Total: ₱${total}</h3>
        <hr>
        <p>Thank you for your order!</p>
        <button onclick="goBackHome()" style="padding:10px; font-size:16px;">🏠 </button>
    `;

    let receiptWindow = window.open("", "_blank");
    receiptWindow.document.write(`
        <html>
            <head>
                <title>Receipt</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                    button { margin-top: 20px; background-color: #28a745; color: white; border: none; cursor: pointer; }
                    button:hover { background-color: #218838; }
                </style>
            </head>
            <body>
                ${receiptContent}
                <script>
                    function goBackHome() {
                        window.location.href = 'index.html'; // Redirect to home page
                    }
                    window.print();
                </script>
            </body>
        </html>
    `);
    receiptWindow.document.close();
}













// Checkout Process
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }
    cartModal.style.display = "none";
    checkoutModal.style.display = "block";
    document.getElementById("checkout-total").innerText = `Total: ₱${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`;
});

// Confirm Order and Auto Print Receipt
confirmOrderBtn.addEventListener("click", () => {
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    printReceipt(); // Automatically prints the receipt

    alert(`Order confirmed! Payment method: ${paymentMethod}`);

    cart = [];  // Clear cart after printing
    updateCart();
    checkoutModal.style.display = "none";
});


// Close Modals
document.querySelectorAll(".close").forEach(btn => {
    btn.onclick = () => {
        cartModal.style.display = "none";
        checkoutModal.style.display = "none";
    };
});
