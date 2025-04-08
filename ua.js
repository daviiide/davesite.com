function openTab(tabId) {
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".content");

    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add("active");
    document.getElementById(tabId).classList.add("active");

    if (tabId === 'orders') {
        loadOrderHistory();
    }
}

function placeOrder() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = `Order #${orders.length + 1} - ${new Date().toLocaleString()}`;
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Order placed successfully!');
}



function loadOrderHistory() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    if (orders.length === 0) {
        orderList.innerHTML = '<li>No orders yet? Start your tasty journey now!</li>';
    } else {
        orders.forEach(order => {
            const li = document.createElement('li');
            li.textContent = order;
            orderList.appendChild(li);
        });
    }
}

window.onload = loadOrderHistory;
