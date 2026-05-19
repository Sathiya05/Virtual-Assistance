// VirtuAssist - Virtual Personal Assistant & Admin Support Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-4 start-0 w-full z-[100] transition-all duration-500 px-4">
  <div class="max-w-[1200px] mx-auto bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-[#A78BFA]/10 border border-gray-100 dark:border-[#A78BFA]/20 rounded-full px-6 py-3 flex items-center justify-between">
    
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

    <div id="desktopNav" class="hidden xl:flex items-center justify-center gap-6 text-[14px] font-medium">
      
      <div class="relative group/home">
        <button id="homeBtn" class="nav-link flex items-center gap-1 text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">
          <span>Home</span>
          <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 text-gray-400"></i>
        </button>
        <div id="homeMenu" class="hidden absolute top-full start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-52 bg-white dark:bg-black shadow-xl rounded-2xl py-3 z-50 border border-gray-100 dark:border-gray-800 transition-all">
          <a href="index.html" class="dropdown-link block px-6 py-2.5 text-sm text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Home 1</a>
          <a href="home2.html" class="dropdown-link block px-6 py-2.5 text-sm text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Home 2</a>
        </div>
      </div>

      <a href="about.html" class="nav-link text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">About</a>
           <a href="services.html" class="nav-link text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">Services</a>
      <a href="industries.html" class="nav-link text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">Industries</a>

      <a href="pricing.html" class="nav-link text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">Pricing</a>
            <a href="faq.html" class="nav-link text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">FAQ</a>

      <a href="contact.html" class="nav-link text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">Contact</a>
    <div class="relative group/services">
        <button id="servicesBtn" class="nav-link flex items-center gap-1 text-black dark:text-white hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors py-2">
          <span>Dashboard</span>
          <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/services:rotate-180 text-gray-400"></i>
        </button>
        <div id="servicesMenu" class="hidden absolute top-full start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-60 bg-white dark:bg-black shadow-xl rounded-2xl py-3 z-50 border border-gray-100 dark:border-gray-800 transition-all">
          <a href="user.html" class="dropdown-link block px-6 py-2.5 text-sm text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">User</a>
          <a href="admin.html" class="dropdown-link block px-6 py-2.5 text-sm text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Admin</a>
        </div>
      </div>
       </div>

    <div class="hidden xl:flex items-center gap-4 shrink-0">
      <div class="flex items-center gap-2">
        <button id="rtlToggle" class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-[#A78BFA] hover:text-white dark:hover:bg-[#A78BFA] transition-colors" title="Toggle RTL">
          <i class="fa-solid fa-language text-sm"></i>
        </button>
        <button id="darkToggle" class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-[#A78BFA] hover:text-white dark:hover:bg-[#A78BFA]  transition-colors" title="Toggle Theme">
          <i id="darkIcon" class="fa-solid fa-moon text-sm"></i>
        </button>
      </div>
      
      <a href="login.html" class="px-6 py-2.5 rounded-full bg-[#A78BFA] dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-black dark:hover:bg-[#A78BFA] dark:hover:text-white transition-all shadow-md">Log In</a>
      <a href="signup.html" class="px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-[#A78BFA] dark:hover:bg-[#A78BFA] dark:hover:text-white transition-all shadow-md">Sign Up</a>
    </div>

    <button id="mobileBtn" class="xl:hidden w-10 h-10 flex items-center justify-center text-black dark:text-white bg-gray-100 dark:bg-gray-900 rounded-full focus:outline-none hover:bg-[#A78BFA] hover:text-white transition-colors">
      <i class="fa-solid fa-bars text-lg"></i>
    </button>
  </div>

  <div id="mobileOverlay" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] hidden opacity-0 transition-opacity duration-300"></div>
  
  <div id="mobileMenu" class="fixed top-0 end-0 w-[85%] max-w-sm h-[100dvh] bg-white dark:bg-black z-[100] transform translate-x-full rtl:-translate-x-full transition-transform duration-400 ease-in-out shadow-2xl flex flex-col border-s border-gray-100 dark:border-gray-800">
    
    <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-900">
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
      <button id="closeMobileBtn" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-red-500 hover:text-white transition-colors">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
      
      <div>
        <button id="mobileHomeBtn" class="w-full flex items-center justify-between p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
          <span>Home</span>
          <i id="mobileHomeIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden flex-col ps-4 mt-1 border-s-2 border-[#A78BFA]/30 ms-3">
          <a href="index.html" class="mobile-sublink block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#A78BFA] dark:hover:text-[#A78BFA]">Home 1</a>
          <a href="home2.html" class="mobile-sublink block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#A78BFA] dark:hover:text-[#A78BFA]">Home 2</a>
        </div>
      </div>
      
     

      <a href="about.html" class="mobile-link block p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">About</a>
           <a href="services.html" class="mobile-link block p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Services</a>
                 <a href="industries.html" class="mobile-link block p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Industries</a>


      <a href="pricing.html" class="mobile-link block p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Pricing</a>
           <a href="faq.html" class="mobile-link block p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">FAQ</a>

      <a href="contact.html" class="mobile-link block p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors">Contact</a>
     <div>
        <button id="mobileServicesBtn" class="w-full flex items-center justify-between p-3 rounded-xl text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
          <span>Dashboard</span>
          <i id="mobileServicesIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
        </button>
        <div id="mobileServicesMenu" class="hidden flex-col ps-4 mt-1 border-s-2 border-[#A78BFA]/30 ms-3">
          <a href="user.html" class="mobile-sublink block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#A78BFA] dark:hover:text-[#A78BFA]">User</a>
          <a href="admin.html" class="mobile-sublink block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#A78BFA] dark:hover:text-[#A78BFA]">Admin</a>
        </div>
      </div>
      </div>

    <div class="p-6 border-t border-gray-100 dark:border-gray-900 flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <button id="mobileRtlToggle" class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-medium hover:bg-[#A78BFA] hover:text-white transition-colors">
          <i class="fa-solid fa-language"></i> RTL
        </button>
        <button id="mobileDarkToggle" class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-medium hover:bg-[#A78BFA] hover:text-white transition-colors">
          <i id="mobileDarkIcon" class="fa-solid fa-moon"></i> Theme
        </button>
      </div>
      <a href="login.html" class="w-full flex items-center justify-center p-3 rounded-xl border-2 border-black dark:border-white text-black dark:text-white font-bold hover:border-[#A78BFA] hover:text-[#A78BFA] transition-colors">Log In</a>
      <a href="signup.html" class="w-full flex items-center justify-center p-3 rounded-xl bg-[#A78BFA] text-white font-bold shadow-lg shadow-[#A78BFA]/30 hover:opacity-90 transition-opacity">Sign Up</a>
    </div>
  </div>
</nav>
`;

  /* CSS STYLES */
  const style = document.createElement('style');
  style.textContent = `
    /* Active Link Colors */
    .nav-link.active, .dropdown-link.active { color: #A78BFA !important; font-weight: 600; }
    .mobile-link.active, .mobile-sublink.active { 
      color: #A78BFA !important; 
      background-color: rgba(167, 139, 250, 0.1); 
      font-weight: 600;
    }

    /* Mobile Sidebar Animations */
    .sidebar-open { transform: translateX(0) !important; }
    .overlay-open { display: block !important; opacity: 1 !important; }
    body.menu-open { overflow: hidden !important; }
  `;
  document.head.appendChild(style);

  /* DOM ELEMENTS */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");
  const servicesBtn = document.getElementById("servicesBtn");
  const servicesMenu = document.getElementById("servicesMenu");
  
  const mobileBtn = document.getElementById("mobileBtn");
  const closeMobileBtn = document.getElementById("closeMobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");
  
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  
  const mobileServicesBtn = document.getElementById("mobileServicesBtn");
  const mobileServicesMenu = document.getElementById("mobileServicesMenu");
  const mobileServicesIcon = document.getElementById("mobileServicesIcon");

  /* HIGHLIGHT CURRENT PAGE LOGIC */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');

      // Expand dropdowns if active link is inside them
      if (link.classList.contains('dropdown-link')) {
        if (homeMenu && homeMenu.contains(link)) {
            homeBtn?.classList.add('active');
        } else if (servicesMenu && servicesMenu.contains(link)) {
            servicesBtn?.classList.add('active');
        }
      }

      if (link.classList.contains('mobile-sublink')) {
        if (mobileHomeMenu && mobileHomeMenu.contains(link)) {
            mobileHomeBtn?.classList.add('active');
            mobileHomeMenu?.classList.remove('hidden');
            mobileHomeMenu?.classList.add('flex');
            if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(180deg)";
        } else if (mobileServicesMenu && mobileServicesMenu.contains(link)) {
            mobileServicesBtn?.classList.add('active');
            mobileServicesMenu?.classList.remove('hidden');
            mobileServicesMenu?.classList.add('flex');
            if (mobileServicesIcon) mobileServicesIcon.style.transform = "rotate(180deg)";
        }
      }
    }
  });

  /* DESKTOP DROPDOWNS */
  homeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    homeMenu?.classList.toggle("hidden");
    servicesMenu?.classList.add("hidden"); // Close sibling
  });

  servicesBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    servicesMenu?.classList.toggle("hidden");
    homeMenu?.classList.add("hidden"); // Close sibling
  });

  // Close desktop menus on outside click
  document.addEventListener("click", () => { 
      homeMenu?.classList.add("hidden");
      servicesMenu?.classList.add("hidden"); 
  });

  /* MOBILE SIDEBAR LOGIC */
  const toggleMobileMenu = () => {
    const isOpening = !mobileMenu.classList.contains("sidebar-open");
    
    if (isOpening) {
        mobileMenu.classList.add("sidebar-open");
        mobileOverlay.classList.remove("hidden");
        // small timeout to allow display:block to apply before animating opacity
        setTimeout(() => mobileOverlay.classList.add("overlay-open"), 10);
        document.body.classList.add("menu-open");
    } else {
        mobileMenu.classList.remove("sidebar-open");
        mobileOverlay.classList.remove("overlay-open");
        setTimeout(() => mobileOverlay.classList.add("hidden"), 300); // match transition duration
        document.body.classList.remove("menu-open");
    }
  };

  mobileBtn.addEventListener("click", toggleMobileMenu);
  closeMobileBtn.addEventListener("click", toggleMobileMenu);
  mobileOverlay.addEventListener("click", toggleMobileMenu);

  /* MOBILE SUBMENU TOGGLES */
  mobileHomeBtn?.addEventListener("click", () => {
    const isHidden = mobileHomeMenu.classList.contains("hidden");
    if (isHidden) {
        mobileHomeMenu.classList.remove("hidden");
        mobileHomeMenu.classList.add("flex");
        mobileHomeIcon.style.transform = "rotate(180deg)";
    } else {
        mobileHomeMenu.classList.add("hidden");
        mobileHomeMenu.classList.remove("flex");
        mobileHomeIcon.style.transform = "rotate(0deg)";
    }
  });

  mobileServicesBtn?.addEventListener("click", () => {
    const isHidden = mobileServicesMenu.classList.contains("hidden");
    if (isHidden) {
        mobileServicesMenu.classList.remove("hidden");
        mobileServicesMenu.classList.add("flex");
        mobileServicesIcon.style.transform = "rotate(180deg)";
    } else {
        mobileServicesMenu.classList.add("hidden");
        mobileServicesMenu.classList.remove("flex");
        mobileServicesIcon.style.transform = "rotate(0deg)";
    }
  });

  /* RTL LOGIC */
  const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];
  rtlToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isRtl = document.documentElement.dir === "rtl";
    document.documentElement.dir = isRtl ? "ltr" : "rtl";
  }));

  /* THEME LOGIC (Soft Lavender / Black / White) */
  const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];

  const updateIcons = (isDark) => {
    const desktopIcon = document.getElementById("darkIcon");
    const mobileIcon = document.getElementById("mobileDarkIcon");
    
    // Switch between moon and sun icons
    const iconClass = isDark ? "fa-solid fa-sun text-white" : "fa-solid fa-moon";
    
    if (desktopIcon) desktopIcon.className = iconClass;
    if (mobileIcon) mobileIcon.className = iconClass;
  };

  themeToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("virtuassist-theme", isDark ? "dark" : "light");
    updateIcons(isDark);
  }));

  // Check saved theme preference on load
  if (localStorage.getItem("virtuassist-theme") === "dark" || 
     (!localStorage.getItem("virtuassist-theme") && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add("dark");
    updateIcons(true);
  } else {
    updateIcons(false);
  }
});