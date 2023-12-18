const countdownDate = new Date('2024-01-07').getTime();
        const countdownElement = document.getElementById('countdown');
        setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            countdownElement.textContent = `Countdown to the special day: ${countdownString}`;
        }, 1000);

        // Virtual Gift Box script
        function revealGift() {
            const giftContent = document.getElementById('giftContent');
            giftContent.style.display = 'block';
        }

        // Love Letters script
        function submitLoveLetter() {
            const loveLetterContent = document.getElementById('loveLetter').value;
            alert(`Love Letter submitted:\n\n${loveLetterContent}`);
        }