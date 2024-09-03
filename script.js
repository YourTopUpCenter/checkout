


        
        
        function toggleMenu() {
    var menu = document.getElementById("navMenu");
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.getElementById("navbar");

    menu.classList.toggle("show");
    
    if(menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        navbar.style.background = "rgba(0, 0, 0, 0.8)"; // Background appears when toggled
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        navbar.style.background = "transparent"; // Background becomes transparent again
    }
}

        
        
        
        
        
        
        
        // Add 3D floating effect to footer items
        const footerSections = document.querySelectorAll('.footer-section h2');

        footerSections.forEach(section => {
            section.addEventListener('mouseover', () => {
                section.style.transform = 'rotateX(15deg) rotateY(15deg)';
            });

            section.addEventListener('mouseout', () => {
                section.style.transform = 'rotateX(0) rotateY(0)';
            });
        });
        
        
        
        let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // নিচের দিকে স্ক্রল করলে navbar হাইড হবে
        navbar.style.top = "-80px"; 
    } else {
        // উপরের দিকে স্ক্রল করলে navbar শো হবে
        navbar.style.top = "0"; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



function goBack() {
            window.history.back();
        }

        function goHome() {
            window.location.href = 'https://yourtopupcenter.github.io/home';
        }
        
        
        
        
        
        const supportIcon = document.getElementById('supportIcon');
    const callIcon = document.getElementById('callIcon');
    const whatsappIcon = document.getElementById('whatsappIcon');
    const telegramIcon = document.getElementById('telegramIcon');
    const messengerIcon = document.getElementById('messengerIcon');
    const upButton = document.getElementById('upButton');

    let isOpen = false;

    supportIcon.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            supportIcon.classList.add('rotate');
            callIcon.classList.add('show');
            whatsappIcon.classList.add('show');
            telegramIcon.classList.add('show');
            messengerIcon.classList.add('show');
        } else {
            supportIcon.classList.remove('rotate');
            callIcon.classList.remove('show');
            whatsappIcon.classList.remove('show');
            telegramIcon.classList.remove('show');
            messengerIcon.classList.remove('show');
        }
    });

    // Show the Up Button when scrolling down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            upButton.style.display = "flex";
        } else {
            upButton.style.display = "none";
        }
    };

    // Scroll to top when Up Button is clicked
    upButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    
    window.onload = function() {
        const popup = document.getElementById('popup');
        const closePopup = document.getElementById('closePopup');

        // Show the popup after 1 second
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);

        // Hide the popup when the close button is clicked
        closePopup.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }
    
    
    
    
    
    
    
    
    
    
    // Retrieve data from localStorage (you can use sessionStorage as well)
        const productName = localStorage.getItem('productName') || 'Products Name';
        const itemName = localStorage.getItem('itemName') || 'Not Specified';
        const price = localStorage.getItem('price') || '0';
        const uid = localStorage.getItem('uid') || 'N/A';

        // Display data on the checkout page
        document.getElementById('checkout-product-name').textContent = productName;
        document.getElementById('checkout-item-name').textContent = itemName;
        document.getElementById('checkout-price').textContent = price;
        document.getElementById('checkout-uid').textContent = uid;

        // Confirm Purchase button event listener
        document.getElementById('confirm-purchase-btn').addEventListener('click', function() {
            document.getElementById('customer-form-section').style.display = 'block';
            this.style.display = 'none';
        });

        // Next Process button event listener
        document.getElementById('next-process-btn').addEventListener('click', function() {
            document.getElementById('payment-section').style.display = 'block';
            document.getElementById('payment-amount').textContent = price;
            document.getElementById('payment-amount-step').textContent = price;
            document.getElementById('customer-form-section').style.display = 'none';
        });

        // Payment method selection event listener
        document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
            radio.addEventListener('change', function() {
                const selectedMethod = this.value;
                let paymentNumber;

                switch (selectedMethod) {
                    case 'bkash':
                        paymentNumber = '01992944769';
                        break;
                    case 'nagad':
                        paymentNumber = '01781146747';
                        break;
                    case 'rocket':
                        paymentNumber = '01992944769';
                        break;
                }

                document.getElementById('payment-number').textContent = paymentNumber;
                document.getElementById('payment-steps').style.display = 'block';
            });
        });

        // Show Order button after entering TrxID
        document.getElementById('trx-id').addEventListener('input', function() {
            if (this.value.trim() !== "") {
                document.getElementById('order-btn').style.display = 'block';
            } else {
                document.getElementById('order-btn').style.display = 'none';
            }
        });

        // Copy number to clipboard
        function copyNumber() {
            const numberText = document.getElementById('payment-number').textContent;
            navigator.clipboard.writeText(numberText).then(() => {
                alert('Number copied to clipboard');
            });
        }

        // Order button click event listener with loading indicator
        document.getElementById('order-btn').addEventListener('click', function() {
            const orderToken = generateOrderToken();
            sessionStorage.setItem('orderToken', orderToken);
            document.getElementById('loading-overlay').classList.add('active'); // Show loading spinner

            const orderData = {
                productName: document.getElementById('checkout-product-name').textContent,
                itemName: document.getElementById('checkout-item-name').textContent,
                price: document.getElementById('checkout-price').textContent,
                uid: document.getElementById('checkout-uid').textContent,
                customerName: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phoneNumber: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                paymentMethod: document.querySelector('input[name="payment-method"]:checked').value,
                trxId: document.getElementById('trx-id').value,
                orderToken: orderToken
            };

            fetch('https://script.google.com/macros/s/AKfycbxLsr_eB6YyRwA48Jeo0_vuOOppEa16Q0t5jJ3lfGW_Nxh5LZlCn8EGfd_G9SbM20MxSA/exec', {
                method: 'POST',
                body: JSON.stringify(orderData)
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('loading-overlay').classList.remove('active'); // Hide loading spinner
                if (data.status === 'success') {
                    window.location.href = `https://yourtopupcenter.github.io/checkout/success?token=${data.orderToken}`;
                } else {
                    alert('Server Error');
                }
            })
            .catch(error => {
                document.getElementById('loading-overlay').classList.remove('active'); // Hide loading spinner
                alert('Server Error');
                console.error('Error:', error);
            });
        });

        // Function to generate a unique order token
        function generateOrderToken() {
            return 'ORDER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        }





    
    
    document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const nextProcessBtn = document.getElementById('next-process-btn');

    function toggleNextButton() {
        if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "") {
            nextProcessBtn.style.display = "block";
        } else {
            nextProcessBtn.style.display = "none";
        }
    }

    // Hide the button initially
    nextProcessBtn.style.display = "none";

    // Add event listeners to input fields
    nameInput.addEventListener('input', toggleNextButton);
    phoneInput.addEventListener('input', toggleNextButton);
});

    
    
    document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const answer = faqItem.querySelector('.faq-answer');

                faqItem.classList.toggle('open');
                answer.classList.toggle('open');
            });
        });
    
    


// আগের পেজের URL পেতে document.referrer ব্যবহার করা হয়
  var referrer = document.referrer;

  // অনুমোদিত URL গুলোর তালিকা
  var allowedReferrers = [
    "https://google.com/aliho/gjsh",
    "https://facebook.com/gskg/hkshd/gjd",
    "https://yourtopupcenter.github.io/products/cat_games-topup/pubg/",
      "https://yourtopupcenter.github.io/products/cat_games-topup/free-fire-bd/"
  ];

  // যদি আগের পেজের URL অনুমোদিত তালিকায় না থাকে তাহলে রিডাইরেক্ট করবে
  var isAllowed = allowedReferrers.some(function(url) {
    return referrer.startsWith(url);
  });

  if (!isAllowed) {
    alert("You are being redirected because you did not come from an authorized page.");
    window.location.href = "https://yourtopupcenter.github.io";
            }
