function setLanguage(language) {
  document.getElementById("languageCard").style.display = "none"; // إغلاق الكارد عند اختيار اللغة
  document.getElementById("overlay").style.display = "none"; // إخفاء الخلفية المغبشة عند اختيار اللغة

  if (language === "ar") {
    window.location.href = "Arabic.html"; // إعادة توجيه المستخدم إلى صفحة Arabic.html عند اختيار العربية
  }
}

// إظهار الكارد عند تحميل الصفحة
window.onload = function() {
  document.getElementById("overlay").style.display = "block"; // إظهار الخلفية المغبشة
  document.getElementById("languageCard").style.display = "block"; // إظهار الكارد
}

// فتح قائمة اللغة
function openLanguageCard() {
  document.getElementById('languageCard').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.classList.add('overlay-active'); // تعطيل التفاعل مع الصفحة
}

// غلق قائمة اللغة
function closeLanguageCard() {
  document.getElementById('languageCard').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.classList.remove('overlay-active'); // إعادة التفاعل مع الصفحة
}



setTimeout(function () {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 3000); // 2 seconds


const projectWrappers = document.querySelectorAll('.project__image-wrapper');

projectWrappers.forEach(wrapper => {
  wrapper.addEventListener('mouseenter', () => {
    wrapper.classList.add('hovered');
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.classList.remove('hovered');
  });
});

// No additional JavaScript is needed for this effect to work