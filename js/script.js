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
            '.value-card, .research-item, .ecosystem-card, .contact-item, .consult-records'
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

// ==========================================
// Consult Form Storage & Mailto
// ==========================================

const CONSULT_STORAGE_KEY = 'monchain_consult_records_v1';

function safeJsonParse(value, fallback) {
    try {
        return JSON.parse(value);
    } catch {
        return fallback;
    }
}

function readConsultRecords() {
    const raw = localStorage.getItem(CONSULT_STORAGE_KEY);
    const parsed = safeJsonParse(raw, []);
    return Array.isArray(parsed) ? parsed : [];
}

function writeConsultRecords(records) {
    localStorage.setItem(CONSULT_STORAGE_KEY, JSON.stringify(records));
}

function formatDateTime(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function buildConsultMailto(record) {
    const subject = `蒙链 MonChain 信息技术咨询申请 - ${record.type}`;

    const bodyLines = [
        '【蒙链 MonChain 信息技术咨询申请】',
        '',
        `提交时间：${formatDateTime(record.submittedAt)}`,
        `姓名：${record.name}`,
        `邮箱：${record.email}`,
        `咨询类型：${record.type}`,
        '',
        '咨询内容：',
        record.content,
        '',
        '—',
        '本邮件由 nmgbtc.com 网站表单生成。'
    ];

    const body = bodyLines.join('\n');

    return `mailto:xw@nmgbtc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderConsultRecords() {
    const tbody = document.getElementById('consultRecordsBody');
    if (!tbody) return;

    const records = readConsultRecords();

    if (records.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty">暂无记录</td></tr>';
        return;
    }

    tbody.innerHTML = records
        .slice(0, 20)
        .map(r => {
            return `
                <tr>
                    <td>${escapeHtml(formatDateTime(r.submittedAt))}</td>
                    <td>${escapeHtml(r.name)}</td>
                    <td>${escapeHtml(r.email)}</td>
                    <td>${escapeHtml(r.type)}</td>
                </tr>
            `;
        })
        .join('');
}

function setupConsultForm() {
    const consultForm = document.getElementById('consultForm');
    if (!consultForm) return;

    const downloadBtn = document.getElementById('downloadRecordsBtn');
    const clearBtn = document.getElementById('clearRecordsBtn');

    renderConsultRecords();

    consultForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('consultName')?.value?.trim() || '';
        const email = document.getElementById('consultEmail')?.value?.trim() || '';
        const type = document.getElementById('consultType')?.value || '';
        const content = document.getElementById('consultContent')?.value?.trim() || '';

        if (!name || !email || !type || !content) {
            showNotification('请完整填写表单信息。', 'info');
            return;
        }

        const record = {
            id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
            submittedAt: new Date().toISOString(),
            name,
            email,
            type,
            content
        };

        const records = readConsultRecords();
        records.unshift(record);
        writeConsultRecords(records.slice(0, 200));

        renderConsultRecords();
        consultForm.reset();

        showNotification('已保存记录，正在生成邮件草稿…', 'success');
        window.location.href = buildConsultMailto(record);
    });

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const records = readConsultRecords();
            if (!records.length) {
                showNotification('暂无可下载记录。', 'info');
                return;
            }

            const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json;charset=utf-8' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `monchain-consult-records-${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            a.remove();

            URL.revokeObjectURL(url);
            showNotification('已开始下载记录。', 'success');
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            const hasRecords = readConsultRecords().length > 0;
            if (!hasRecords) {
                showNotification('暂无需要清空的记录。', 'info');
                return;
            }

            const ok = window.confirm('确认清空当前浏览器的所有咨询记录？（此操作不可撤销）');
            if (!ok) return;

            localStorage.removeItem(CONSULT_STORAGE_KEY);
            renderConsultRecords();
            showNotification('已清空本地记录。', 'success');
        });
    }
}

function escapeHtml(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

// ==========================================
// Notification
// ==========================================

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${escapeHtml(message)}</span>
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

    const style = document.createElement('style');
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

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3500);
}

// Console Message
console.log('%c蒙链 MonChain - 技术服务与信息站', 'color: #2563eb; font-size: 18px; font-weight: bold;');
console.log('%c信息技术咨询 · 软件与系统相关服务（第42类）', 'color: #64748b; font-size: 13px;');
console.log('%c联系邮箱: xw@nmgbtc.com', 'color: #10b981; font-size: 12px;');
