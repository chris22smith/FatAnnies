const now = new Date();

if (now.getHours() >= 17) {
    const orderButton = document.querySelector('#order-button');
    orderButton.setAttribute('href', 'https://www.ubereats.com/gb/store/fat-annies/1upHmJUbQWueLGzeMAbPTA');
}