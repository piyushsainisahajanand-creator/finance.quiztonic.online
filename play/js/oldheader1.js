function openSimpleNav() {
    document.getElementById("SimpleSidebar").style.width = "200px";
}

function closeSimpleNav() {
    document.getElementById("SimpleSidebar").style.width = "0";
}

document.addEventListener("click", function(e) {
    const sidebar = document.getElementById("SimpleSidebar");
    if (sidebar && !sidebar.contains(e.target) && !e.target.closest('.simple-openbtn')) {
        sidebar.style.width = "0";
    }
});

class SimpleHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
          .simple-top-header {
            background: #0f0f1a;
            border-bottom: 2px solid #ff6b35;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(255,107,53,0.3);
          }

          .simple-header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            gap: 16px;
          }

          .simple-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .simple-openbtn {
            background: none;
            border: 1.5px solid #444;
            color: #ccc;
            padding: 7px 11px;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s;
          }
          .simple-openbtn:hover { border-color: #ff6b35; color: #ff6b35; }

          .simple-logo-wrap img {
            height: 42px;
            display: block;
          }

          .simple-site-title {
            font-family: 'Orbitron', 'Segoe UI', sans-serif;
            font-size: 1.4rem;
            font-weight: 900;
            color: #ff6b35;
            letter-spacing: 3px;
            text-shadow: 0 0 15px rgba(255,107,53,0.6);
            text-decoration: none;
          }

          /* Desktop Nav */
          .simple-nav {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .simple-nav a {
            color: #ccc;
            text-decoration: none;
            font-size: 0.82rem;
            font-weight: 600;
            padding: 7px 13px;
            border-radius: 8px;
            transition: color 0.2s, background 0.2s;
            white-space: nowrap;
          }
          .simple-nav a:hover {
            color: #ff6b35;
            background: rgba(255,107,53,0.1);
          }
          .simple-nav a.active {
            color: #ff6b35;
            background: rgba(255,107,53,0.12);
          }

          /* Sidebar */
          .simple-sidebar {
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
          .simple-sidebar a {
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
          .simple-sidebar a:hover { color: #ff6b35; background: rgba(255,107,53,0.1); }
          .simple-sidebar .close-btn {
            position: absolute;
            top: 10px; right: 16px;
            font-size: 1.8rem;
            color: #ff6b35;
            cursor: pointer;
            background: none;
            border: none;
            line-height: 1;
          }

          @media (max-width: 640px) {
            .simple-nav { display: none; }
            .simple-site-title { font-size: 1.1rem; letter-spacing: 2px; }
          }
        </style>

        <div id="SimpleSidebar" class="simple-sidebar">
          <button class="close-btn" onclick="closeSimpleNav()">×</button>
          <a href="/play/index.html">🏠 Home</a>
          <a href="/play/about_us.html">ℹ️ About Us</a>
          <a href="/play/adsense_disclaimer.html">📢 Adsense Disclaimer</a>
          <a href="/play/privacy_policy.html">🔒 Privacy Policy</a>
          <a href="/play/terms_of_use.html">📄 Terms & Conditions</a>
          <a href="/play/contact_us.html">✉️ Contact Us</a>
        </div>

        <div class="simple-top-header">
          <div class="simple-header-inner">

            <div class="simple-left">
              <button class="simple-openbtn" onclick="openSimpleNav()">☰</button>
              <div class="simple-logo-wrap">
                  <a href="/index.html">
                <img src="/assets/images/logo.png" alt="NextlevlplayLogo">
                </a>
              </div>
            
            </div>

            <nav class="simple-nav">
              <a href="/play/index.html">Home</a>
              <a href="/play/about_us.html">About Us</a>
              <a href="/play/adsense_disclaimer.html">Disclaimer</a>
              <a href="/play/privacy_policy.html">Privacy Policy</a>
              <a href="/play/terms_of_use.html">Terms & Conditions</a>
              <a href="/play/contact_us.html">Contact Us</a>
            </nav>

          </div>
        </div>
        `;

        // Auto-highlight current page link
        const currentPath = window.location.pathname;
        this.querySelectorAll('.simple-nav a, .simple-sidebar a').forEach(link => {
            const linkPath = new URL(link.href, window.location.origin).pathname;
            if (linkPath === currentPath) link.classList.add('active');
        });
    }
}

customElements.define('simple-header-component', SimpleHeader);