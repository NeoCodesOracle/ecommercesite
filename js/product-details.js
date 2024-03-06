// product-details.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Aqui você buscaria os detalhes do produto com base no productId
    // Para este exemplo, vamos supor que os detalhes estejam hardcoded ou venham de alguma fonte de dados
    const productDetails = {
        id: productId,
        name: "Coffee Machine",
        description: "Experience the perfect blend of convenience and quality with our Electric Coffee Maker. Engineered for the coffee aficionado, this sleek and modern coffee maker is designed to brew rich, flavorful coffee with the push of a button. Its compact design makes it a perfect fit for any kitchen, while the user-friendly interface ensures a seamless brewing experience. Whether you're rushing out the door or enjoying a lazy Sunday morning, our Electric Coffee Maker promises a delicious cup of coffee, every time.",
        imageUrl: "img/coffee.webp"
    };

    document.getElementById('product-image').src = productDetails.imageUrl;
    document.getElementById('product-name').innerText = productDetails.name;
    document.getElementById('product-description').innerText = productDetails.description;
    // Adicione aqui a lógica para adicionar ao carrinho
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = { id: productId, name: "Nome do Produto", price: "$100", imageUrl: "img/product.jpg" };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
        // window.location.href = 'cart.html'; // Redireciona para a página do carrinho
    ttq.track('AddToCart', {
        content_id: 'prod0001',
        content_type: 'product',
        content_name: 'Coffee Machine',
        price: '100',
        currency: 'USD',
        quantity: '1',
        value: '100',
    })
    ttq.identify({
        email: "customeremail@test.com", 
        phone_number: "+5512345678",
        external_id: "customerexternalId", 
})
}
