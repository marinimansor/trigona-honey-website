document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. COPY PHONE NUMBER MICRO-INTERACTION
    // ==========================================
    const copyBtn = document.getElementById('copyBtn');
    const phoneNumberEl = document.getElementById('phoneNumber');
    const copyTextEl = document.getElementById('copyText');
    const copyIconEl = copyBtn ? copyBtn.querySelector('.copy-icon') : null;

    if (copyBtn && phoneNumberEl) {
        copyBtn.addEventListener('click', () => {
            const rawPhone = phoneNumberEl.textContent.trim();
            
            // Clipboard writing
            navigator.clipboard.writeText(rawPhone).then(() => {
                showCopiedFeedback();
            }).catch(err => {
                // Fallback for older browsers
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = rawPhone;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                try {
                    document.execCommand('copy');
                    showCopiedFeedback();
                } catch (e) {
                    console.error('Failed to copy text: ', e);
                }
                document.body.removeChild(tempTextArea);
            });
        });
    }

    function showCopiedFeedback() {
        copyBtn.classList.add('copied');
        copyTextEl.textContent = 'Copied!';
        
        // Revert feedback state after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyTextEl.textContent = 'Copy Number';
        }, 2000);
    }

    // ==========================================
    // 2. IMAGE GALLERY LIGHTBOX
    // ==========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const zoomableImages = document.querySelectorAll('.zoomable');

    if (lightbox && lightboxImg && lightboxClose) {
        zoomableImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt || 'Trigona Bee Honey';
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Disable scroll under modal
            });
        });

        // Close lightbox via close button
        lightboxClose.addEventListener('click', closeLightbox);

        // Close lightbox by clicking backdrop
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close lightbox via ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                closeLightbox();
            }
        });
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable body scroll
    }

    // ==========================================
    // 3. INTERSECTION OBSERVER FOR FADE-IN
    // ==========================================
    const revealElements = document.querySelectorAll('.benefit-card, .product-card, .timeline-step, .contact-card');
    
    // Inject dynamic CSS class styles for animations
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .reveal-hidden {
            opacity: 0;
            transform: translateY(25px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleSheet);

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });

    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        revealObserver.observe(el);
    });

    // ==========================================
    // 4. LOG DOMAIN NAME INTERACTION
    // ==========================================
    const domainTag = document.getElementById('domainTag');
    if (domainTag) {
        domainTag.addEventListener('click', () => {
            navigator.clipboard.writeText('trigonabeehoney.malaysia.com').then(() => {
                const span = domainTag.querySelector('span');
                const originalText = span.textContent;
                span.textContent = 'Link copied!';
                setTimeout(() => {
                    span.textContent = originalText;
                }, 1500);
            });
        });
    }
});
