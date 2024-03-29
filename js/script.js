let cart = [];

function showCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

function hideCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function showProductModal(productName) {
    document.getElementById('modal-product-name').innerText = productName;
    // Set price and description based on the product
    document.getElementById('modal-product-price').innerText = "Price: $XX";
    document.getElementById('modal-product-description').innerText = "Description of " + productName;
    document.getElementById('product-details-modal').style.display = 'block';
}

function hideProductModal() {
    document.getElementById('product-details-modal').style.display = 'none';
}

function addToCartFromModal() {
    let productName = document.getElementById('modal-product-name').innerText;
    cart.push(productName);
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-icon').setAttribute('data-count', cart.length); // Atualiza o contador no ícone do carrinho
    alert(`${productName} added to cart`);
    hideProductModal();
}

function checkout() {
    // Implement checkout functionality
    alert("Checkout not implemented yet.");
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = { id: productId, name: "Nome do Produto", price: "$100", imageUrl: "img/product.jpg" };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html'; // Redireciona para a página do carrinho
}

function openProductPage(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}