// ==========================================
// Navigation, Scroll Effects & Utilities
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');

    function setNavbarState() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (!backToTop) return;
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', setNavbarState);
    setNavbarState();

    function toggleMobileMenu(forceOpen) {
        if (!navMenu || !navToggle) return;

        const nextState = typeof forceOpen === 'boolean' ? forceOpen : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', nextState);

        const spans = navToggle.querySelectorAll('span');
        if (spans.length < 3) return;

        if (nextState) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            toggleMobileMenu();
        });

        navToggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || !targetId.startsWith('#')) return;

            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;

            e.preventDefault();

            const offsetTop = targetEl.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            toggleMobileMenu(false);
        });
    });

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const sections = document.querySelectorAll('section[id], footer[id]');
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 120) {
                current = section.getAttribute('id') || '';
            }
        });

        if (!current) return;

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });

    // Fade-in observer
    if ('IntersectionObserver' in window) {
        const fadeInObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        const fadeElements = document.querySelectorAll(
            '.value-card, .research-item, .ecosystem-card, .contact-item, .stat-card'
        );

        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeInObserver.observe(el);
        });
    }

    // Consult form handling
    setupConsultForm();

    // Footer year
    const footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = String(new Date().getFullYear());
});

function setupConsultForm() {
    const consultForm = document.getElementById('consultForm');
    if (!consultForm) return;

    consultForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('consultName')?.value?.trim() || '';
        const email = document.getElementById('consultEmail')?.value?.trim() || '';
        const content = document.getElementById('consultContent')?.value?.trim() || '';

        if (!name || !email || !content) {
            showNotification('请完整填写表单信息。', 'info');
            return;
        }

        const subject = `蒙链社区留言 - ${name}`;
        const body = `姓名：${name}\n邮箱：${email}\n\n留言内容：\n${content}\n\n(来自 nmgbtc.com)`;

        const mailtoLink = `mailto:xw@nmgbtc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        showNotification('正在打开邮件客户端...', 'success');
        
        // Short delay to let the user see the notification
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 1000);
    });
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    // Simple sanitization
    const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${safeMessage}</span>
        </div>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        min-width: 280px;
        max-width: 420px;
    `;

    // Ensure keyframes exist (only needs to be added once, but safe to add if checking)
    if (!document.getElementById('notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(400px); opacity: 0; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .notification-content i {
                font-size: 1.4rem;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3500);
}

// Console Message
console.log('%c蒙链 Mengchain - 内蒙古区块链社群', 'color: #2563eb; font-size: 18px; font-weight: bold;');
console.log('%c致力于推动区域技术发展', 'color: #64748b; font-size: 13px;');
