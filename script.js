// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Review Analyzer Logic
const analyzeBtn = document.getElementById('analyzeBtn');
const productUrl = document.getElementById('productUrl');

const emptyState = document.getElementById('emptyState');
const detailedResult = document.getElementById('analysisResultDetailed');
const productTitle = document.getElementById('productTitle');

const scoreGauge = document.getElementById('scoreGauge');
const scoreValue = document.getElementById('scoreValue');

const botProgress = document.getElementById('botProgress');
const botVal = document.getElementById('botVal');
const langProgress = document.getElementById('langProgress');
const langVal = document.getElementById('langVal');

const originalRating = document.getElementById('originalRating');
const adjustedRating = document.getElementById('adjustedRating');

if (analyzeBtn && productUrl) {
    analyzeBtn.addEventListener('click', () => {
        const url = productUrl.value.trim();
        
        // Check if empty
        if (!url) {
            alert('Please paste a valid product URL to analyze.');
            return;
        }

        // Validate it's an actual URL
        try {
            new URL(url);
        } catch (e) {
            alert('Invalid format. Please paste a complete URL starting with http:// or https://');
            return;
        }

        // Reset state
        analyzeBtn.innerText = 'Analyzing...';
        analyzeBtn.disabled = true;
        emptyState.style.display = 'block';
        detailedResult.style.display = 'none';
        emptyState.innerHTML = '<h3>Analyzing URL...</h3><p>Checking for bot activity and suspicious language patterns.</p>';

        // Reset values
        scoreGauge.style.transform = 'rotate(45deg)';
        botProgress.style.width = '0%';
        langProgress.style.width = '0%';
        scoreValue.innerText = '0%';
        botVal.innerText = '0%';
        langVal.innerText = '0%';
        originalRating.innerText = '0.0';
        adjustedRating.innerText = '0.0';

        // Simulate an API call
        setTimeout(() => {
            analyzeBtn.innerText = 'Analyze Reviews';
            analyzeBtn.disabled = false;
            
            emptyState.style.display = 'none';
            detailedResult.style.display = 'block';

            // Simple hash function to generate consistent results for the same URL
            let hash = 0;
            for (let i = 0; i < url.length; i++) {
                hash = ((hash << 5) - hash) + url.charCodeAt(i);
                hash |= 0;
            }
            
            // Pseudo-random generator based on the hash
            const pseudoRandom = () => {
                const x = Math.sin(hash++) * 10000;
                return x - Math.floor(x);
            };

            // Generate Consistent Mock Data
            const authScore = Math.floor(pseudoRandom() * 80) + 10; // 10% to 90%
            const botScore = Math.floor(pseudoRandom() * 50) + 20; // 20-70%
            const langScore = Math.floor(pseudoRandom() * 50) + 30; // 30-80%
            
            const origRate = (pseudoRandom() * 1.5 + 3.5).toFixed(1); // 3.5 - 5.0
            const adjRate = (pseudoRandom() * 2.5 + 1.0).toFixed(1); // 1.0 - 3.5

            // Extract basic domain/product mock name
            let domainName = "Product";
            try {
                const urlObj = new URL(url);
                domainName = urlObj.hostname.replace('www.', '').split('.')[0];
                domainName = domainName.charAt(0).toUpperCase() + domainName.slice(1) + ' Product';
            } catch (e) { }
            productTitle.innerText = domainName;

            // Animate values
            setTimeout(() => {
                // Gauge rotation: 45deg is 0%, 225deg is 100%
                // Range is 180 degrees.
                const rotation = 45 + (authScore / 100) * 180;
                scoreGauge.style.transform = `rotate(${rotation}deg)`;
                
                botProgress.style.width = `${botScore}%`;
                langProgress.style.width = `${langScore}%`;

                // Animate Numbers
                animateValue(scoreValue, 0, authScore, 1000, '%');
                animateValue(botVal, 0, botScore, 1000, '%');
                animateValue(langVal, 0, langScore, 1000, '%');
                
                originalRating.innerText = origRate;
                adjustedRating.innerText = adjRate;

            }, 100);

        }, 2000);
    });
}

function animateValue(obj, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentVal = Math.floor(progress * (end - start) + start);
        obj.innerHTML = currentVal + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = end + suffix;
        }
    };
    window.requestAnimationFrame(step);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Contact Form Mock
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerText = 'Message Sent! ✔️';
            submitBtn.style.background = '#10b981';
            submitBtn.style.boxShadow = '0 0 15px #10b981';
            submitBtn.style.opacity = '1';
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.background = '';
                submitBtn.style.boxShadow = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
