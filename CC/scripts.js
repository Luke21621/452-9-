document.getElementById('searchBox').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.page2-A');

    products.forEach(product => {
        const modelName = product.querySelector('.page2-B > p:first-child').textContent.toLowerCase();
        if (modelName.includes(query)) {
            // Scroll to the matching product
            product.scrollIntoView({ behavior: 'smooth' });
        }
    });
    if (query === '') {
        products.forEach(product => {
            product.style.display = '';
        });
    }
});