let products = [
    {
        img: {
            src: 'Assets/banana.png',
            alt: 'Yellow and brown soft candy in an oval shape',
            width: 300,
            height: 300
        },
        name: 'Banana Bubs',
        category: 'Sweet',
        price: 10,
        rating: 5,
        amount: 0
    },
    {
        img: {
            src: 'Assets/bubblegum.png',
            alt: 'Pink and blue soft candy in a skull shape',
            width: 300,
            height: 300
        },
        name: 'Bubblegum Skull',
        category: 'Sour',
        price: 15,
        rating: 4,
        amount: 0
    },
    {
        img: {
            src: 'Assets/cola.png',
            alt: 'White and brown soft candy in a skull shape',
            width: 300,
            height: 300
        },
        name: 'Cola Skull',
        category: 'Sour',
        price: 15,
        rating: 3,
        amount: 0
    },
    {
        img: {
            src: 'Assets/passionfruit-pineapple.png',
            alt: 'White and yellow soft candy in a skull shape',
            width: 300,
            height: 300
        },
        name: 'Passion Pineapple Skull',
        category: 'Sour',
        price: 15,
        rating: 3,
        amount: 0
    },
    {
        img: {
            src: 'Assets/raspberry-blueberry.png',
            alt: 'Pink and blue soft candy in an oval shape',
            width: 300,
            height: 300
        },
        name: 'Raspberry Blueberry Bubs',
        category: 'Sweet',
        price: 10,
        rating: 5,
        amount: 0
    },
    {
        img: {
            src: 'Assets/raspberry-salty-liquorice.png',
            alt: 'Black and red soft candy in a skull shape',
            width: 300,
            height: 300
        },
        name: 'Raspberry Liquorice Skull',
        category: 'Mixed',
        price: 15,
        rating: 4,
        amount: 0
    },
    {
        img: {
            src: 'Assets/sour-squid.png',
            alt: 'Three soft candy squids in yellow, green and pink',
            width: 300,
            height: 300
        },
        name: 'Sour Squids',
        category: 'Sour',
        price: 5,
        rating: 3,
        amount: 0
    },
    {
        img: {
            src: 'Assets/tutti-frutti.png',
            alt: 'Green and Yellow soft candy in a rhombus shape',
            width: 300,
            height: 300
        },
        name: 'Tutti Frutti Rhombus',
        category: 'Sour',
        price: 15,
        rating: 4,
        amount: 0
    },
    {
        img: {
            src: 'Assets/watermelon.png',
            alt: 'Pink and green soft candy in an oval shape',
            width: 300,
            height: 300
        },
        name: 'Watermelon Bubs',
        category: 'Sweet',
        price: 10,
        rating: 5,
        amount: 0
    },
    {
        img: {
            src: 'Assets/wild-strawberry-pomegranate.png',
            alt: 'Light and dark pink soft candy in an oval shape',
            width: 300,
            height: 300
        },
        name: 'Pomegranate Bubs',
        category: 'Sweet',
        price: 10,
        rating: 4,
        amount: 0
    }

]


const sortNameBtn = document.querySelector('#sortNameBtn');
const sortCategoryBtn = document.querySelector('#sortCategoryBtn');
const sortPriceBtn = document.querySelector('#sortPriceBtn');
const sortRatingBtn = document.querySelector('#sortRatingBtn');

sortNameBtn.addEventListener('click', sortName);
sortCategoryBtn.addEventListener('click', sortCategory);
sortPriceBtn.addEventListener('click', sortPrice);
sortRatingBtn.addEventListener('click', sortRating);

let lastSortedBy;

function sortName() {
    if (lastSortedBy != 'name') {
        products.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        generateProductContainer();
        lastSortedBy = 'name';
    }
    else if (lastSortedBy == 'name') {
        products.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        });
        generateProductContainer();
        lastSortedBy = null;
    }
}
function sortCategory() {
    if (lastSortedBy != 'category') {
        products.sort((a, b) => {
            const categoryA = a.category.toUpperCase();
            const categoryB = b.category.toUpperCase();
            if (categoryA < categoryB) {
                return -1;
            }
            if (categoryA > categoryB) {
                return 1;
            }
            return 0;
        });
        generateProductContainer();
        lastSortedBy = 'category';
    }
    else if (lastSortedBy == 'category') {
        products.sort((a, b) => {
            const categoryA = a.category.toUpperCase();
            const categoryB = b.category.toUpperCase();
            if (categoryA < categoryB) {
                return 1;
            }
            if (categoryA > categoryB) {
                return -1;
            }
            return 0;
        });
        generateProductContainer();
        lastSortedBy = null;
    }
}
function sortPrice() {
    if (lastSortedBy != 'price') {
        products.sort((a, b) => a.price - b.price);
        generateProductContainer();
        lastSortedBy = 'price';
    }
    else if (lastSortedBy == 'price') {
        products.sort((a, b) => b.price - a.price);
        generateProductContainer();
        lastSortedBy = null;
    }

}
function sortRating() {
    if (lastSortedBy != 'rating') {
        products.sort((a, b) => b.rating - a.rating);
        generateProductContainer();
        lastSortedBy = 'rating';
    }
    else if (lastSortedBy == 'rating') {
        products.sort((a, b) => a.rating - b.rating);
        generateProductContainer();
        lastSortedBy = null;
    }
}




const productContainer = document.querySelector('#productContainer');

function generateProductContainer() {

    productContainer.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        let imgSrc = products[i].img.src;
        let imgAlt = products[i].img.alt;
        let imgWidth = products[i].img.width;
        let imgHeight = products[i].img.height;
        let amount = products[i].amount;

        productContainer.innerHTML += `

        <div id="product${[i]}" class="products">
            <div class="products-info">
                <img src="${imgSrc}" alt="${imgAlt}" width="${imgWidth}" height="${imgHeight}"></img>

                <span class="products-name">${products[i].name}</span>
                <span class="products-category">${products[i].category}</span>
                <span class="products-rating">Rating: ${products[i].rating}/5</span>
                <span class="products-price">${products[i].price} SEK</span>

                <div class="btn-container">
                    <button id="decreaseBtn${[i]}" class="decreaseAmount">-</button>
                    <span id="productAmount${[i]}" class="displayAmount"> ${amount} </span>
                    <button id="increaseBtn${[i]}" class="increaseAmount">+</button>
                </div>
             </div>

        </div>
        `
    }

    const decreaseBtns = Array.from(document.querySelectorAll('.decreaseAmount'));
    for (let i = 0; i < decreaseBtns.length; i++) {
        decreaseBtns[i].addEventListener('click', decreaseAmount)
    }
    function decreaseAmount(e) {
        const index = e.target.id.replace('decreaseBtn', '')
        if (products[index].amount > 0) {
            products[index].amount -= 1;
            productContainer.innerHTML = '';
            generateProductContainer();
            generateSum();
            generateShoppingCartContainer();
        }

    }

    const increaseBtns = Array.from(document.querySelectorAll('.increaseAmount'));
    for (let i = 0; i < increaseBtns.length; i++) {
        increaseBtns[i].addEventListener('click', increaseAmount)
    }

    function increaseAmount(e) {
        const index = e.target.id.replace('increaseBtn', '')
        products[index].amount += 1;
        productContainer.innerHTML = '';
        generateProductContainer();
        generateSum();
        generateShoppingCartContainer();
    }

}

generateProductContainer();
sortName();

let mondayDiscount;
let timer;
let shipping;
let sum = 0;
let productCount;

function clearTimer() {
    clearTimeout(timer);
}

function spinShoppingCart() {
    document.querySelector("#cartAnimation1").beginElement();
    document.querySelector("#cartAnimation2").beginElement();
}

function generateSum() {
    sum = 0;
    productCount = 0;
    for (let i = 0; i < products.length; i++) {
        productCount += products[i].amount;
        products[i].productSum = products[i].amount * products[i].price;
        if (products[i].amount >= 10) {
            products[i].productSum = products[i].amount * products[i].price * 0.9;
        }
        sum += products[i].productSum;
        if (sum >= 800) { //If order value (shipping not included) is more than 799SEK
            payByCardOnly();
        }
        if (sum < 800) {
            addInvoice();//If order value changes after invoice is removed, add again if under 800SEK
        }
    }
    getMondayDeal();
    getWeekendFee();
    addShipping();
    generateSumDisplay();
    spinShoppingCart();
    clearTimer(timer);
    timer = setTimeout(outOfTime, 9000000);
}

function createDate() {
    return new Date();}

function getMondayDeal() {
    const today = createDate();
    if (today.getDay() === 1 && today.getHours() < 10) {
        sum *= 0.9;
        mondayDiscount = true;
    }
}

function getWeekendFee() {
    const today = createDate();
    const day = today.getDay();
    const hour = today.getHours();
    if ((day === 5 && hour >= 15) || (day === 6) || (day === 0 && hour < 3)) {
        sum *= 1.15;
    }
}

function addShipping() {
    if (productCount > 0 && productCount < 15) {
        shipping = sum * 0.1 + 25;
        sum += shipping
    }
}

function generateSumDisplay() {
    const sumDisplay = document.querySelector('#sumDisplay');
    sumDisplay.innerHTML = '';
    sumDisplay.innerHTML = `
    <span>${Math.round(sum * 10) / 10} SEK</span>`;
}

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

function generateShoppingCartContainer() {

    shoppingCartContainer.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        let imgSrc = products[i].img.src;
        let imgAlt = products[i].img.alt;
        let imgWidth = products[i].img.width;
        let imgHeight = products[i].img.height;
        let multiValueDiscount = '';

        if (products[i].amount >= 10) {
            multiValueDiscount = '<span class="multi-value-discount">10% multi value discount on this item!</span>';
        }
        if (products[i].amount > 0) {

            shoppingCartContainer.innerHTML += `

            <div id="cartProduct${[i]}" class="shopping-cart-products">
    
                <img class="products-img-in-cart" src="${imgSrc}" alt="${imgAlt}" width="${imgWidth}" height="${imgHeight}"></img>
            
                 <div class="products-info-in-cart">
                    <span class="products-name-in-cart">${products[i].name}</span>
                    <span class="products-amount-in-cart">${products[i].amount} PCS</span>
                    <span class="products-sum-in-cart">${products[i].productSum} SEK</span>
                    ${multiValueDiscount}
                 </div>
    
            </div>
            `
        }

    }

    if (mondayDiscount === true && sum > 0) {
        shoppingCartContainer.innerHTML += `
        <span class="monday-discount">Monday Discount 10% off order value!</span>
        `
    }
}

const cartBtn = document.querySelector('#cartBtn');
const closeCartBtn = document.querySelector('#closeCartBtn');

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

function openCart() {
    shoppingCartContainer.classList.add('open');
    closeCartBtn.classList.remove('hidden');
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

function closeCart() {
    shoppingCartContainer.classList.remove('open');
    closeCartBtn.classList.add('hidden');
}


const payByInvoice = document.querySelector('#payByInvoice');
const paymentMethodBtns = document.querySelector('#paymentMethodBtns');
const payByCard = document.querySelector('#payByCard');
const cardRadioBtn = document.querySelector('#cardRadioBtn');
const invoiceRadioBtn = document.querySelector('#invoiceRadioBtn');

const cardNumberInput = document.querySelector('#cardNumber');
const cardHolderInput = document.querySelector('#cardHolder');
const creditCardMonthInput = document.querySelector('#creditCardMonth')
const creditCardYearInput = document.querySelector('#creditCardYear');
const cvcInput = document.querySelector('#cvc');
const socialSecurityInput = document.querySelector('#socialSecurity');
const discountInput = document.querySelector('#discount');

function payByCardOnly() {
    cardRadioBtn.click();
    invoiceRadioBtn.disabled = true;
}

function addInvoice() {
    invoiceRadioBtn.disabled = false;
}

cardRadioBtn.addEventListener('change', disableInvoice);
invoiceRadioBtn.addEventListener('change', disableCard);

function disableInvoice() {
    payByInvoice.classList.add('hidden');
    payByCard.classList.remove('hidden');
    socialSecurityInput.value = '';
}

function disableCard() {
    payByInvoice.classList.remove('hidden');
    payByCard.classList.add('hidden');
    cardNumberInput.value = '';
    cardHolderInput.value = '';
    creditCardYearInput.value = '';
    creditCardMonthInput.value = '';
    cvcInput.value = '';
}
const addDiscountCode = document.querySelector('#addDiscountCode');
const discountMessage = document.querySelector('#discountMessage');

addDiscountCode.addEventListener('click', showDiscountMessage);

function showDiscountMessage() {
    discountMessage.classList.remove('hideError');
    setTimeout(hideMessage, 3000)
}

function hideMessage() {
    discountMessage.classList.add('hideError');
}

const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const streetInput = document.querySelector('#street');
const doorCodeInput = document.querySelector('#doorCode');
const zipCodeInput = document.querySelector('#zipCode');
const cityInput = document.querySelector('#city');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const newsletterCheckbox = document.querySelector('#newsletter');
const gdprCheckbox = document.querySelector('#gdpr');

// Literals chosen over constructors due to less code.
const onlyLettersRegEx = /^[\p{L}\-\s]+$/u;
const onlyNumbersRegEx = /^[0-9]+$/;
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegEx = /[\+\-\d\(\) ]+/;
const socialSecurityRegEx = /\d{6}-?\d{4}/;

function isOnlyLetters(input) {
    return onlyLettersRegEx.exec(input.value);
}

function isOnlyNumbers(input) {
    return onlyNumbersRegEx.exec(input.value);
}

function displayError(e, input) {
    if (e.target === input) {
        input.parentNode.classList.remove('hideError');
    }
}

function activateSendButton(e) {
    let valid = true;
    sendForm.setAttribute('disabled', '');
    inputArray.forEach(input => {
        input.parentNode.classList.add('hideError'
        )});
    if (sum == 0) {
        valid = false;
    }
    if (isOnlyLetters(firstNameInput) === null) {
        displayError(e, firstNameInput);
        valid = false;
    }
    if (isOnlyLetters(lastNameInput) === null) {
        displayError(e, lastNameInput);
        valid = false;
    }
    if (streetInput.value.length < 2) {
        displayError(e, streetInput);
        valid = false;
    }
    if (onlyNumbersRegEx.exec(zipCodeInput.value) === null) {
        displayError(e, zipCodeInput);
        valid = false;
    }
    if (isOnlyLetters(cityInput) === null) {
        displayError(e, cityInput);
        valid = false;
    }
    if (emailRegEx.exec(emailInput.value) === null) {
        displayError(e, emailInput);
        valid = false;
    }
    if (phoneRegEx.exec(phoneInput.value) === null) {
        displayError(e, phoneInput);
        valid = false;
    }

    if (cardRadioBtn.checked) {
        if (isOnlyNumbers(cardNumberInput) === null || cardNumberInput.value.length < 16) { //Possible to write with or without white spaces
            displayError(e, cardNumberInput);
            valid = false;
        }
        if (isOnlyLetters(cardHolderInput) === null) {
            displayError(e, cardHolderInput);
            valid = false;
        }
        if (creditCardMonthInput.value.length != 2 || creditCardMonthInput.value > 12 || creditCardMonthInput.value < 1) {
            displayError(e, creditCardMonthInput);
            valid = false;
        }
        if (creditCardYearInput.value.length != 2 || creditCardYearInput.value < 23) {
            displayError(e, creditCardYearInput);
            valid = false;
        }
        if (cvcInput.value.length != 3) {
            displayError(e, cvcInput);
            valid = false;
        }
    }

    if (invoiceRadioBtn.checked) {
        if (socialSecurityRegEx.exec(socialSecurityInput.value) === null) {
            displayError(e, socialSecurityInput);
            valid = false;
        }
    }

    if (gdprCheckbox.checked === false) {
        valid = false;
    }
    if (valid) {
        sendForm.removeAttribute('disabled');
    }
}

const inputArray = [
    firstNameInput,
    lastNameInput,
    streetInput,
    doorCodeInput,
    zipCodeInput,
    cityInput,
    emailInput,
    phoneInput,
    invoiceRadioBtn,
    cardRadioBtn,
    cardNumberInput,
    cardHolderInput,
    creditCardMonthInput,
    creditCardYearInput,
    cvcInput,
    socialSecurityInput,
    newsletterCheckbox,
    gdprCheckbox
];

inputArray.forEach(input => {
    input.addEventListener('focusout', activateSendButton);
    input.addEventListener('change', activateSendButton);
});

const informationForm = document.querySelector('#informationForm');
const clearOrder = document.querySelector('#clearOrder');
const dialog = document.querySelector('#dialog');
const dialogBtn = document.querySelector('#dialogBtn');
const orderSummary = document.querySelector('#orderSummary');
const orderSummaryBtn = document.querySelector('#orderSummaryBtn');

const resetForm = document.querySelector('#resetForm');
const yesClear = document.querySelector('#yesClear');
const noReturn = document.querySelector('#noReturn');
const sendForm = document.querySelector('#sendForm');

dialogBtn.addEventListener('click', closeDialog);
resetForm.addEventListener('click', areYouSure);
yesClear.addEventListener('click', clearAll);
noReturn.addEventListener('click', hideReset);
sendForm.addEventListener('click', displayOrderSummary);
orderSummaryBtn.addEventListener('click', closeOrderSummary);



function areYouSure() {
    clearOrder.showModal();
}

function clearAll() {
    for (let i = 0; i < products.length; i++) {
        products[i].amount = 0;
        generateProductContainer();
        generateSum();
        generateShoppingCartContainer();
        informationForm.reset();
        hideReset();
    }
}

function hideReset() {
    clearOrder.close();
}

function outOfTime() {
    dialog.showModal();
    clearAll();
}

function closeDialog() {
    dialog.close();
}

const orderSummaryContainer = document.querySelector('#orderSummaryContainer');
const shippingInfoContainer = document.querySelector('#shippingInfoContainer');

function displayOrderSummary() {
    orderSummaryContainer.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        let imgSrc = products[i].img.src;
        let imgAlt = products[i].img.alt;

        if (products[i].amount > 0) {

            orderSummaryContainer.innerHTML += `

            <div id="product${[i]}" class="products">
    
                <img src="${imgSrc}" alt="${imgAlt}" width="${50}" height="${50}"></img>
            
                 <div class="product-info">
                    <span>${products[i].name}</span>
                    <span>${products[i].amount}</span>
                 </div>
    
            </div>
            `
        }

    }

    shippingInfoContainer.innerHTML = '';
    shippingInfoContainer.innerHTML += `
    <span class="order-sum">Summa: ${Math.round((sum - shipping) * 10) / 10}</span>
    <span class="shipping-info">Frakt: ${Math.round(shipping * 10) / 10}</span>
    <span class="delivery-info">Din order levereras om ca 30min</span>
    `;

    orderSummary.showModal();
    clearAll();
}

function closeOrderSummary() {
    orderSummary.close();
}

