function openNav() {
    document.getElementById("Sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleCategoryDropdown(e) {
    e.stopPropagation();
    const dropdown = document.getElementById("categoryDropdown");
    dropdown.classList.toggle("open");
}

function selectCategory(cat) {
    document.getElementById("categoryDropdown").classList.remove("open");

    // Update active state in dropdown
    document.querySelectorAll(".cat-option").forEach(el => el.classList.remove("active"));
    const activeEl = document.querySelector(`.cat-option[data-cat="${cat}"]`);
    if (activeEl) activeEl.classList.add("active");

    // Scroll to or highlight section
    if (window.filterGamesByCategory) window.filterGamesByCategory(cat);
}

function searchGames(query) {
    if (window.filterGamesBySearch) window.filterGamesBySearch(query);
}

document.addEventListener("click", () => {
    const dropdown = document.getElementById("categoryDropdown");
    if (dropdown) dropdown.classList.remove("open");
});

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <style>
      /* ===== HEADER STYLES ===== */
      .top-header {
        background: #0f0f1a;
        border-bottom: 2px solid #ff6b35;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 20px rgba(255,107,53,0.3);
      }

      .header-inner {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 16px;
        flex-wrap: wrap;
      }

      .logo-wrap img {
        height: 44px;
        display: block;
      }

      .site-title {
        font-family: 'Orbitron', 'Segoe UI', sans-serif;
        font-size: 1.5rem;
        font-weight: 900;
        color: #ff6b35;
        letter-spacing: 3px;
        text-shadow: 0 0 15px rgba(255,107,53,0.6);
        flex-shrink: 0;
      }

      /* Search Bar */
      .search-wrap {
        flex: 1;
        min-width: 160px;
        position: relative;
      }
      .search-wrap input {
        width: 100%;
        padding: 9px 38px 9px 14px;
        border-radius: 24px;
        border: 1.5px solid #333;
        background: #1a1a2e;
        color: #fff;
        font-size: 0.88rem;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }
      .search-wrap input:focus {
        border-color: #ff6b35;
        box-shadow: 0 0 8px rgba(255,107,53,0.3);
      }
      .search-wrap input::placeholder { color: #666; }
      .search-icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #ff6b35;
        font-size: 1rem;
        pointer-events: none;
      }

      /* Nav */
      .header-nav { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
      .header-nav a {
        color: #ccc;
        text-decoration: none;
        font-size: 0.78rem;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 6px;
        transition: color 0.2s, background 0.2s;
        white-space: nowrap;
      }
      .header-nav a:hover { color: #ff6b35; background: rgba(255,107,53,0.1); }

      /* Category Dropdown */
      .cat-dropdown-wrap {
        position: relative;
        flex-shrink: 0;
      }
      .cat-btn {
        background: linear-gradient(135deg, #ff6b35, #ff4500);
        color: #fff;
        border: none;
        padding: 9px 16px;
        border-radius: 24px;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: box-shadow 0.2s, transform 0.15s;
        letter-spacing: 0.5px;
      }
      .cat-btn:hover { box-shadow: 0 4px 14px rgba(255,107,53,0.5); transform: translateY(-1px); }
      .cat-btn .arrow { transition: transform 0.25s; display: inline-block; }
      #categoryDropdown.open ~ .cat-btn-ref .arrow,
      .cat-dropdown-wrap.open .arrow { transform: rotate(180deg); }

      .cat-menu {
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: #1a1a2e;
        border: 1.5px solid #333;
        border-radius: 12px;
        min-width: 180px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        z-index: 2000;
      }
      #categoryDropdown.open { display: block; animation: fadeDown 0.2s ease; }
      @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-8px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .cat-option {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 11px 18px;
        color: #ccc;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      .cat-option:last-child { border-bottom: none; }
      .cat-option:hover, .cat-option.active {
        background: rgba(255,107,53,0.15);
        color: #ff6b35;
      }
      .cat-option .icon { font-size: 1.1rem; }

      /* Hamburger */
      .openbtn {
        background: none;
        border: 1.5px solid #444;
        color: #ccc;
        padding: 7px 11px;
        border-radius: 8px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
      }
      .openbtn:hover { border-color: #ff6b35; color: #ff6b35; }

      /* Sidebar */
      .sidebar {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 9999;
        top: 0; left: 0;
        background: #0f0f1a;
        border-right: 2px solid #ff6b35;
        overflow-x: hidden;
        transition: width 0.3s;
        padding-top: 60px;
        box-shadow: 4px 0 20px rgba(0,0,0,0.5);
      }
      .sidebar a {
        padding: 12px 20px;
        text-decoration: none;
        font-size: 0.9rem;
        color: #ccc;
        display: block;
        transition: color 0.2s, background 0.2s;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
      }
      .sidebar a:hover { color: #ff6b35; background: rgba(255,107,53,0.1); }
      .sidebar .closebtn {
        position: absolute;
        top: 10px; right: 16px;
        font-size: 1.8rem;
        color: #ff6b35;
        padding: 0;
        background: none;
      }

      /* Category Pills (below header) */
      .cat-pills-bar {
        background: #0f0f1a;
        border-bottom: 1px solid #222;
        padding: 8px 16px;
        display: flex;
        gap: 8px;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .cat-pills-bar::-webkit-scrollbar { display: none; }
      .cat-pill {
        flex-shrink: 0;
        padding: 6px 16px;
        border-radius: 20px;
        border: 1.5px solid #333;
        background: #1a1a2e;
        color: #aaa;
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }
      .cat-pill:hover { border-color: #ff6b35; color: #ff6b35; }
      .cat-pill.active {
        background: linear-gradient(135deg, #ff6b35, #ff4500);
        border-color: transparent;
        color: #fff;
        box-shadow: 0 2px 10px rgba(255,107,53,0.4);
      }

      @media (max-width: 600px) {
        .header-nav { display: none; }
        .site-title { font-size: 1.1rem; }
      }
    </style>

    <div class="top-header">
      <div id="Sidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <a href="/play/index.html">🏠 Home</a>
        <a href="/play/about_us.html">ℹ️ About Us</a>
        <a href="/play/adsense_disclaimer.html">📢 Adsense Disclaimer</a>
        <a href="/play/privacy_policy.html">🔒 Privacy Policy</a>
        <a href="/play/terms_of_use.html">📄 Terms & Conditions</a>
        <a href="/play/contact_us.html">✉️ Contact Us</a>
      </div>

      <div class="header-inner">
        <div id="main">
          <button class="openbtn" onclick="openNav()">☰</button>
        </div>

        <div class="logo-wrap">
         <a href="/index.html">
          <img src="/assets/images/logo.png" alt="Quiztonic">
          </a>
        </div>

        <div class="search-wrap">
          <input type="text" id="gameSearchInput" placeholder="Search games..." oninput="searchGames(this.value)">
          <span class="search-icon">🔍</span>
        </div>

        <nav class="header-nav">
          <a href="/play/index.html">Home</a>
          <a href="/play/about_us.html">About</a>
          <a href="/play/privacy_policy.html">Privacy</a>
          <a href="/play/contact_us.html">Contact</a>
        </nav>

        <div class="cat-dropdown-wrap">
          <button class="cat-btn" onclick="toggleCategoryDropdown(event)">
            🎮 Categories <span class="arrow">▾</span>
          </button>
          <div id="categoryDropdown" class="cat-menu">
            <div class="cat-option" data-cat="all" onclick="selectCategory('all')"><span class="icon">🌟</span> All Games</div>
            <div class="cat-option" data-cat="new" onclick="selectCategory('new')"><span class="icon">🆕</span> New</div>
            <div class="cat-option" data-cat="popular" onclick="selectCategory('popular')"><span class="icon">🔥</span> Popular</div>
            <div class="cat-option" data-cat="action" onclick="selectCategory('action')"><span class="icon">⚡</span> Action</div>
            <div class="cat-option" data-cat="arcade" onclick="selectCategory('arcade')"><span class="icon">🕹️</span> Arcade</div>
            <div class="cat-option" data-cat="puzzle" onclick="selectCategory('puzzle')"><span class="icon">🧩</span> Puzzle</div>
            <div class="cat-option" data-cat="sports" onclick="selectCategory('sports')"><span class="icon">⚽</span> Sports</div>
            <div class="cat-option" data-cat="racing" onclick="selectCategory('racing')"><span class="icon">🏎️</span> Racing</div>
            <div class="cat-option" data-cat="shooting" onclick="selectCategory('shooting')"><span class="icon">🎯</span> Shooting</div>
          </div>
        </div>
      </div>

      <!-- Scrollable Category Pills Bar -->
      <div class="cat-pills-bar" id="catPillsBar">
        <div class="cat-pill active" data-cat="all" onclick="selectCategory('all')">🌟 All</div>
        <div class="cat-pill" data-cat="new" onclick="selectCategory('new')">🆕 New</div>
        <div class="cat-pill" data-cat="popular" onclick="selectCategory('popular')">🔥 Popular</div>
        <div class="cat-pill" data-cat="action" onclick="selectCategory('action')">⚡ Action</div>
        <div class="cat-pill" data-cat="arcade" onclick="selectCategory('arcade')">🕹️ Arcade</div>
        <div class="cat-pill" data-cat="puzzle" onclick="selectCategory('puzzle')">🧩 Puzzle</div>
        <div class="cat-pill" data-cat="sports" onclick="selectCategory('sports')">⚽ Sports</div>
        <div class="cat-pill" data-cat="racing" onclick="selectCategory('racing')">🏎️ Racing</div>
        <div class="cat-pill" data-cat="shooting" onclick="selectCategory('shooting')">🎯 Shooting</div>
      </div>
    </div>
    `;

        // Sync pill active state
        window.updateActivePill = function(cat) {
            document.querySelectorAll(".cat-pill").forEach(el => {
                el.classList.toggle("active", el.dataset.cat === cat);
            });
        };

        const origSelect = window.selectCategory;
        window.selectCategory = function(cat) {
            origSelect(cat);
            window.updateActivePill(cat);
        };
    }
}

customElements.define('header-component', Header);



