const orderToken = sessionStorage.getItem('orderToken');
        const countdownElement = document.querySelector('.countdown');

        if (orderToken) {
            document.getElementById('order-token').textContent = orderToken;
            let countdown = 15;
            const countdownInterval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    sessionStorage.removeItem('orderToken');
                    window.location.href = 'index.html'; // Redirect to homepage
                }
            }, 1000);
        } else {
            document.getElementById('direct-access-warning').style.display = 'block';
            let countdown = 5;
            countdownElement.textContent = countdown;
            const countdownInterval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    window.location.href = 'https://yourtopupcenter.github.io/home'; // Redirect to homepage
                }
            }, 1000);
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            const checkmarkContainer = document.querySelector('.checkmark-container');
            checkmarkContainer.classList.add('active');
        });
