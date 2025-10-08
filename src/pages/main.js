"use strict";

// گرفتن عناصر
const options = document.querySelectorAll('.option');
const confirmBtn = document.getElementById('confirmBtn');
const formContainer = document.getElementById('formContainer');
const navbar = document.getElementById('navbar');
const navbarExtra = document.getElementById('navbarExtra');
const toggleBtn = document.getElementById('toggleMenu');
const menu = document.getElementById('mazojMenu');

let selected = null;
let menuOpen = false;

// رفتار انتخاب گزینه‌ها
options.forEach(option => {
    const checkbox = option.querySelector('input[type="checkbox"]');
    option.addEventListener('click', () => {
        options.forEach(opt => {
            const cb = opt.querySelector('input');
            cb.checked = false;
            opt.classList.remove('border-[#6F4FBF]', 'bg-[#F3ECFF]');
        });
        checkbox.checked = true;
        selected = checkbox.id;
        option.classList.add('border-[#6F4FBF]', 'bg-[#F3ECFF]');
    });
});

// دکمه تأیید
confirmBtn.addEventListener('click', () => {
    if (!selected) {
        alert('لطفاً یکی از گزینه‌ها را انتخاب کنید.');
        return;
    }

    // مخفی کردن فرم
    formContainer.classList.add('animate__animated', 'animate__fadeOutUp');

    setTimeout(() => {
        formContainer.classList.add('hidden');
        navbar.classList.remove('hidden');
        navbarExtra.classList.remove('hidden');

        // 👇 نمایش منوی مازوج بعد از فرم
        menu.classList.remove('opacity-0', 'invisible', 'translate-x-20');
        menu.classList.add('opacity-100', 'visible', 'translate-x-0');
    }, 700);
});

// باز و بسته کردن منوی مازوج در موبایل
toggleBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.classList.remove('translate-x-20', 'opacity-0', 'invisible');
        menu.classList.add('translate-x-0', 'opacity-100', 'visible');
    } else {
        menu.classList.add('translate-x-20', 'opacity-0', 'invisible');
        menu.classList.remove('translate-x-0', 'opacity-100', 'visible');
    }
});
