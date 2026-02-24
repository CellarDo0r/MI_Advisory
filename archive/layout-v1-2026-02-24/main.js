(function () {
  const config = window.SITE_CONFIG || {};
  const defaults = {
    BUSINESS_NAME: "[[BUSINESS_NAME]]",
    TAGLINE: "[[TAGLINE]]",
    PRIMARY_EMAIL: "[[PRIMARY_EMAIL]]",
    BOOKING_URL: "[[BOOKING_URL]]",
    LOGO_SVG_PATH: "[[LOGO_SVG_PATH]]",
    SERVICE_AREA: "Local service area (regional partnerships)",
    RESPONSE_SLA: "We respond within 2 business days."
  };

  const site = { ...defaults, ...config };
  const page = document.body.dataset.page || "";

  function safeBookingUrl() {
    return site.BOOKING_URL && !site.BOOKING_URL.includes("[[") ? site.BOOKING_URL : "book.html";
  }

  function renderHeader() {
    const headerMount = document.querySelector("[data-site-header]");
    if (!headerMount) return;

    const navItems = [
      { href: "index.html", key: "home", label: "Home" },
      { href: "services.html", key: "services", label: "Services" },
      { href: "about.html", key: "about", label: "About" },
      { href: "book.html", key: "book", label: "Book" }
    ];

    const links = navItems
      .map((item) => {
        const active = item.key === page ? "is-active" : "";
        return '<a class="nav-link ' + active + '" href="' + item.href + '">' + item.label + "</a>";
      })
      .join("");

    headerMount.innerHTML =
      '<div class="site-shell">' +
      '<nav class="site-nav" aria-label="Main navigation">' +
      '<a href="index.html" class="brand" aria-label="Home">' +
      '<span class="brand-mark" aria-hidden="true">NM</span>' +
      '<span class="brand-text">' +
      '<span class="brand-name" data-site-token="BUSINESS_NAME">' + site.BUSINESS_NAME + '</span>' +
      '<span class="brand-tag" data-site-token="TAGLINE">' + site.TAGLINE + "</span>" +
      "</span>" +
      "</a>" +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">Menu</button>' +
      '<div class="nav-group" id="site-menu">' +
      '<div class="nav-links">' +
      links +
      "</div>" +
      '<a class="btn btn-primary" data-booking-link href="' + safeBookingUrl() + '">Book consult</a>' +
      "</div>" +
      "</nav>" +
      "</div>";
  }

  function renderFooter() {
    const footerMount = document.querySelector("[data-site-footer]");
    if (!footerMount) return;

    footerMount.innerHTML =
      '<div class="site-shell footer-grid">' +
      '<div>' +
      '<p class="footer-name" data-site-token="BUSINESS_NAME">' + site.BUSINESS_NAME + "</p>" +
      '<p class="footer-text">Specialist medicines education and advisory support.</p>' +
      "</div>" +
      '<div class="footer-links">' +
      '<a href="privacy.html">Privacy</a>' +
      '<a href="terms.html">Terms</a>' +
      '<a href="disclaimer.html">Clinical disclaimer</a>' +
      "</div>" +
      '<div class="footer-contact">' +
      '<a data-site-email href="mailto:' + site.PRIMARY_EMAIL + '">' + site.PRIMARY_EMAIL + "</a>" +
      '<p data-site-token="SERVICE_AREA">' + site.SERVICE_AREA + "</p>" +
      "</div>" +
      "</div>";
  }

  function applyTokens() {
    document.querySelectorAll("[data-site-token]").forEach((node) => {
      const key = node.getAttribute("data-site-token");
      if (site[key]) node.textContent = site[key];
    });

    document.querySelectorAll("[data-booking-link]").forEach((node) => {
      node.setAttribute("href", safeBookingUrl());
      if (safeBookingUrl().startsWith("http")) {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noopener noreferrer");
      }
    });

    document.querySelectorAll("[data-site-email]").forEach((node) => {
      node.textContent = site.PRIMARY_EMAIL;
      node.setAttribute("href", "mailto:" + site.PRIMARY_EMAIL);
    });
  }

  function enableMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("site-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close" : "Menu";
    });
  }

  function bindFaq() {
    document.querySelectorAll(".faq details").forEach((node) => {
      node.addEventListener("toggle", () => {
        if (!node.open) return;
        document.querySelectorAll(".faq details").forEach((other) => {
          if (other !== node) other.open = false;
        });
      });
    });
  }

  renderHeader();
  renderFooter();
  applyTokens();
  enableMobileMenu();
  bindFaq();
})();
