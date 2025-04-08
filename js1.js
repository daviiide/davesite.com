document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.categories button');
    const searchInput = document.getElementById('searchInput');
    const restaurantList = document.querySelectorAll('#restaurantList li');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            filterRestaurants(button.getAttribute('data-category'));
        });
    });

    searchInput.addEventListener('keyup', searchRestaurant);

    function filterRestaurants(category) {
        restaurantList.forEach(item => {
            item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
        });
    }

    function searchRestaurant() {
        const query = searchInput.value.toLowerCase();
        restaurantList.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });
    }
});