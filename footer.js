// VirtuAssist - Executive Virtual Assistant Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="relative w-full bg-gray-200 dark:bg-black border-t border-gray-100 dark:border-gray-900 transition-colors duration-500 overflow-hidden">
  
  <div class="absolute top-0 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A78BFA]/5 dark:bg-[#A78BFA]/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
      
      <div class="lg:col-span-7 pe-0 lg:pe-12">
         <a href="index.html" class="flex items-center gap-3 group shrink-0">
      <div class="w-10 h-10 rounded-full bg-[#A78BFA] flex items-center justify-center shadow-md shadow-[#A78BFA]/30 group-hover:scale-105 transition-transform">
        <i class="fa-solid fa-headset text-white text-lg"></i>
      </div>
      <div class="flex flex-col">
        <span class="text-xl font-bold tracking-tight text-black dark:text-white transition-colors">
          Virtu<span class="text-[#A78BFA]">Assist</span>
        </span>
        <span class="text-[8px] tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400 font-semibold leading-none mt-1">
          Executive Support
        </span>
      </div>
    </a>
    <br>
        
        <h3 class="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white leading-snug mb-6">
          Reclaim your time. <br>
          <span class="text-[#A78BFA] italic font-light">Join the executive briefing.</span>
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base mb-8 max-w-md leading-relaxed">
          Receive curated insights on delegation, executive productivity, and workflow automation directly to your inbox every fortnight.
        </p>

        <form id="vaNewsletterForm" class="relative max-w-md flex items-center">
          <input type="email" required placeholder="Enter your email address" class="w-full pl-6 pr-32 py-4 rounded-full bg-gray-50 dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-[#A78BFA] dark:focus:border-[#A78BFA] transition-all font-medium text-sm shadow-sm placeholder:text-gray-400">
          <button type="submit" class="absolute end-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full font-bold text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-[#A78BFA] dark:hover:bg-[#A78BFA] dark:hover:text-white transition-all shadow-md flex items-center gap-2">
            Subscribe
          </button>
        </form>
      </div>

      <div class="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12 pt-4">
        
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-6">Expertise</h4>
          <ul class="space-y-4 text-sm font-light">
            <li><a href="admin-support.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Admin Support</a></li>
            <li><a href="inbox-management.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Inbox & Calendar</a></li>
            <li><a href="data-entry.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Data & Research</a></li>
            <li><a href="travel.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Travel Planning</a></li>
            <li><a href="personal-errands.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Lifestyle Concierge</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-black dark:text-white mb-6">Company</h4>
          <ul class="space-y-4 text-sm font-light">
            <li><a href="about.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">About Me</a></li>
            <li><a href="pricing.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Pricing & Packages</a></li>
            <li><a href="faq.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Client FAQ</a></li>
            <li><a href="portal.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Client Portal</a></li>
            <li><a href="contact.html" class="va-footer-link flex items-center gap-2 text-gray-600 dark:text-gray-400">Contact</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row gap-6 justify-between items-center">
      
      <p class="text-xs font-medium text-gray-500 dark:text-gray-500 order-2 md:order-1">
        © ${new Date().getFullYear()} VirtuAssist. All rights reserved. Designed for Executives.
      </p>

      <div class="flex gap-4 order-1 md:order-2">
        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-black dark:text-white hover:bg-[#A78BFA] hover:text-white hover:border-[#A78BFA] dark:hover:bg-[#A78BFA] dark:hover:border-[#A78BFA] transition-all shadow-sm">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-black dark:text-white hover:bg-[#A78BFA] hover:text-white hover:border-[#A78BFA] dark:hover:bg-[#A78BFA] dark:hover:border-[#A78BFA] transition-all shadow-sm">
          <i class="fa-brands fa-x-twitter text-sm"></i>
        </a>
        <a href="#" class="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-black dark:text-white hover:bg-[#A78BFA] hover:text-white hover:border-[#A78BFA] dark:hover:bg-[#A78BFA] dark:hover:border-[#A78BFA] transition-all shadow-sm">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>

    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    /* Elegant line-through hover effect for links */
    .va-footer-link {
      position: relative;
      transition: color 0.3s ease;
      width: fit-content;
    }
    
    .va-footer-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      start: 0;
      width: 0;
      height: 1px;
      background-color: #A78BFA;
      transition: width 0.3s ease;
    }

    .va-footer-link:hover {
      color: #A78BFA !important;
    }

    .va-footer-link:hover::after {
      width: 100%;
    }

    /* Input overrides for theme blending */
    #vaNewsletterForm input:focus {
      box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.1);
    }
  `;
  document.head.appendChild(footerStyles);

  /* ===============================
     FORM LOGIC
  =============================== */
  const form = document.getElementById('vaNewsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button');
      const originalText = btn.innerHTML;
      
      // Visual feedback loop
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Subscribed`;
      btn.classList.add('bg-[#A78BFA]', 'text-white');
      btn.classList.remove('bg-black', 'dark:bg-white', 'text-white', 'dark:text-black');
      
      setTimeout(() => {
        alert('Welcome to the Executive Briefing! Check your inbox for the welcome guide.');
        form.reset();
        btn.innerHTML = originalText;
        btn.classList.remove('bg-[#A78BFA]', 'text-white');
        btn.classList.add('bg-black', 'dark:bg-white', 'text-white', 'dark:text-black');
      }, 500);
    });
  }
});