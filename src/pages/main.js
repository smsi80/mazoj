
"use strict";
    // گرفتن گزینه‌ها
    const options = document.querySelectorAll('.option');
    const confirmBtn = document.getElementById('confirmBtn');
    const formContainer = document.getElementById('formContainer');
    const navbar = document.getElementById('navbar');
    let selected = null;

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
    formContainer.classList.add('animate__animated', 'animate__fadeOutUp');
    setTimeout(() => {
    formContainer.classList.add('hidden');
    navbar.classList.remove('hidden');
}, 700);
});
