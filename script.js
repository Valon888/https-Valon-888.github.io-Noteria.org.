// script.js - Funksione të përbashkëta për të gjitha faqet

document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle (nëse ekziston butoni me id darkToggle)
  var darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Mesazhe suksesi/gabimi (mund të zgjerohet për çdo faqe)
  var successMsg = document.getElementById('successMsg');
  if (successMsg) {
    setTimeout(function() {
      successMsg.style.display = 'none';
    }, 4000);
  }
});
