function clearCart() {
    document.querySelector('.cart-items').innerHTML = '';
}

function performCheckout() {
    ttq.track('InitiateCheckout', {
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
