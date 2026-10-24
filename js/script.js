/* =========================================================
   ELECTRO KARIM — script.js
   Products · Drawer · Search · WhatsApp · Modal
   ========================================================= */

// ── Config ────────────────────────────────────────────────
const STORE = {
  name:     "ELECTRO KARIM",
  phone:    "212653957810",   // ← بدّل بالرقم الحقيقي
  currency: "د.م."
};

const PRODUCTS = [
  // ── AUDIO (الصوتيات / Écouteurs) ──
  { id:501, cat:"audio", title:"سماعات بلوتوث (TWS Earbuds) اقتصادية", price:120, old:160, disc:"-25%", off:true, best:true, isnew:false,
    img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    desc:"سماعات لاسلكية بجودة صوت جيدة، مناسبة للاستخدام اليومي." },
  { id:502, cat:"audio", title:"سماعات بلوتوث جودة عالية (ANC)", price:250, old:320, disc:"-21%", off:true, best:false, isnew:true,
    img:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    desc:"سماعات لاسلكية مع ميزة عزل الضوضاء النشط وصوت نقي." },
  { id:503, cat:"audio", title:"سماعات أذن سلكية", price:45, old:0, disc:"", off:false, best:true, isnew:false,
    img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    desc:"سماعات سلكية بجودة عالية." },
  { id:504, cat:"audio", title:"Casque Bluetooth فوق الأذن", price:180, old:230, disc:"-21%", off:true, best:false, isnew:true,
    img:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
    desc:"سماعة رأس لاسلكية مريحة مع بطارية تدوم طويلاً." },
  // ── ORAIMO PRODUCTS ──
  { id:505, cat:"accessories", title:"Oraimo Watch 5 Lite x FREE FIRE", price:350, old:450, disc:"-22%", off:true, best:true, isnew:true,
    img:"images/watch5lite.jpg",
    desc:"2.01\" HD Screen, 7-Day Usage Time. Smartwatch." },
  { id:506, cat:"accessories", title:"Oraimo Type-C to Lightning Cable 30W", price:50, old:0, disc:"", off:false, best:false, isnew:false,
    img:"images/typec_lightning.jpg",
    desc:"3A Fast Charging, High-Speed Syncing, Tangle Free, 1 Metre. RobustLine BRG-114CL." },
  { id:507, cat:"accessories", title:"Oraimo EasyCut Hair Clipper OCL-230", price:150, old:200, disc:"-25%", off:true, best:false, isnew:true,
    img:"images/hairclipper.jpg",
    desc:"Up to 2.5-Hour Usage, Adjustable Zero Gap, Stainless Steel Blade, Super Powerful Motor." },
  { id:508, cat:"audio", title:"Oraimo lite CONCH 2C OEP-320C", price:80, old:0, disc:"", off:false, best:true, isnew:true,
    img:"images/conch2c.jpg",
    desc:"Digital Type-C Plug, Optimized Deep Bass, Clear Voice in Calls." },
  { id:509, cat:"accessories", title:"Oraimo PowerCube 201 20W Rapid Charge", price:100, old:130, disc:"-23%", off:true, best:true, isnew:false,
    img:"images/powercube201.jpg",
    desc:"20W Rapid Charge, Type-C to Type-C cable included, PD3.0 & QC3.0 Compatible. OCW-5203ECC." },
  { id:510, cat:"audio", title:"Apple EarPods Lightning", price:150, old:200, disc:"-25%", off:true, best:true, isnew:false,
    img:"images/earpods_lightning.jpg",
    desc:"سماعات أبل السلكية الأصلية مع منفذ Lightning. جودة صوت ممتازة وتصميم مريح." },
  { id:511, cat:"audio", title:"Royal R676 Type-C Earphones", price:60, old:80, disc:"-25%", off:true, best:false, isnew:true,
    img:"images/royal_r676.webp",
    desc:"سماعات سلكية بمنفذ Type-C مع ميكروفون مدمج، صوت نقي وواضح." },
  { id:512, cat:"audio", title:"T'nB CBUDS USB-C Earphones", price:90, old:120, disc:"-25%", off:true, best:false, isnew:true,
    img:"images/tnb_cbuds_usbc.jpg",
    desc:"سماعات T'nB الفرنسية بمنفذ USB-C، تصميم عصري وميكروفون مدمج." },
  { id:513, cat:"audio", title:"Apple AirPods Pro", price:350, old:450, disc:"-22%", off:true, best:true, isnew:true,
    img:"images/airpods_pro.jpg",
    desc:"سماعات لاسلكية بتصميم أنيق وصوت عالي الجودة." },
  // ── CHARGEURS ──
  { id:601, cat:"chargeurs", title:"Chargeur 90W Rapide (M06)", price:150, old:200, disc:"-25%", off:true, best:true, isnew:true,
    img:"images/charger_90w_white.jpg",
    desc:"Chargeur secteur très puissant 90W avec câble Type-C inclus. Double port pour charge rapide." },
  { id:602, cat:"chargeurs", title:"Chargeur Samsung Adaptive Fast Charging", price:70, old:99, disc:"-29%", off:true, best:true, isnew:false,
    img:"images/charger_samsung_adaptive.jpg",
    desc:"Chargeur officiel Samsung Adaptive Fast Charging avec câble USB-A vers Type-C." },
  { id:603, cat:"chargeurs", title:"Chargeur UGREEN GaN 30W + Câble Lightning", price:200, old:250, disc:"-20%", off:true, best:false, isnew:true,
    img:"images/charger_ugreen_30w.jpg",
    desc:"Chargeur compact UGREEN GaN 30W ultra rapide, livré avec son câble tressé robuste Type-C vers Lightning." },
  { id:604, cat:"chargeurs", title:"Chargeur Samsung Super Fast Charging", price:120, old:150, disc:"-20%", off:true, best:true, isnew:true,
    img:"images/charger_samsung_superfast.jpg",
    desc:"Chargeur Samsung Super Fast Charging d'origine avec son câble Type-C vers Type-C." }
];

// ── State ─────────────────────────────────────────────────
let currentCat = "all";
let query      = "";

// ── DOM refs ──────────────────────────────────────────────
const mainGrid    = document.getElementById("mainProductsGrid");
const offersGrid  = document.getElementById("offersGrid");
const newGrid     = document.getElementById("newArrivalsGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");
const catBtns     = document.querySelectorAll(".cat-btn");

// Drawer
const hamburgerBtn = document.getElementById("hamburgerBtn");
const drawer       = document.getElementById("drawer");
const drawerOverlay= document.getElementById("drawerOverlay");
const drawerClose  = document.getElementById("drawerClose");
const drawerLinks  = document.querySelectorAll(".drawer-link");

// Modal
const qvModal  = document.getElementById("qvModal");
const modalClose = document.getElementById("modalClose");
const qvImg    = document.getElementById("qvImg");
const qvCat    = document.getElementById("qvCat");
const qvTitle  = document.getElementById("qvTitle");
const qvDesc   = document.getElementById("qvDesc");
const qvPrice  = document.getElementById("qvPrice");
const qvOldP   = document.getElementById("qvOldPrice");
const qvOrder  = document.getElementById("qvOrderBtn");

// Back to top
const backTop  = document.getElementById("backTop");

// ── Helpers ───────────────────────────────────────────────
function catLabel(c) {
  const labels = {
    phones: "📱 الهواتف الذكية",
    audio: "🎧 السماعات",
    pochettes: "📱 Pochettes",
    chargeurs: "⚡ Chargeurs",
    accessories: "🔌 الإكسسوارات"
  };
  return labels[c] || "إكسسوارات";
}

function cardHTML(p) {
  const old   = p.old  ? `<span class="old-price">${p.old.toLocaleString()} ${STORE.currency}</span>` : "";

  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img">
      <img src="${p.img}" alt="${p.title}" loading="lazy"
           onerror="this.src='https://placehold.co/400x400/0f172a/fff?text=ELECTRO+KARIM'">
      <button class="quick-view" onclick="openQV(${p.id})">
        <i class="fas fa-eye"></i> معاينة سريعة
      </button>
    </div>
    <div class="product-body">
      <span class="product-category">${catLabel(p.cat)}</span>
      <h3 class="product-title" title="${p.title}">${p.title}</h3>
      <div class="product-price-box">
        <span class="current-price">${p.price.toLocaleString()} <small>${STORE.currency}</small></span>
        ${old}
      </div>
      <button class="btn-whatsapp-order" onclick="orderWA(${p.id})">
        <i class="fab fa-whatsapp"></i> اطلب الآن
      </button>
    </div>
  </div>`;
}

function emptyHTML() {
  return `<div class="no-products">
    <i class="fas fa-search"></i>
    <h3>لا توجد نتائج</h3>
    <p>جرب كلمات بحث مختلفة أو اختر تصنيفاً آخر</p>
  </div>`;
}

// ── Render functions ──────────────────────────────────────
function renderMain() {
  if (!mainGrid) return;
  const list = PRODUCTS.filter(p => {
    const catOk  = currentCat === "all" || p.cat === currentCat || (currentCat === "offers" && p.off);
    const queryOk= !query || p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
    return catOk && queryOk;
  });
  mainGrid.innerHTML = list.length ? list.map(cardHTML).join("") : emptyHTML();
}

function renderSections() {
  if (offersGrid) offersGrid.innerHTML = PRODUCTS.filter(p => p.off).map(cardHTML).join("");
  if (newGrid)    newGrid.innerHTML    = PRODUCTS.filter(p => p.isnew).map(cardHTML).join("");
}

// ── WhatsApp order ────────────────────────────────────────
function orderWA(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const msg = `السلام عليكم، أريد طلب هذا المنتج من ${STORE.name}:\nاسم المنتج: ${p.title}\nالسعر: ${p.price.toLocaleString()} ${STORE.currency}`;
  window.open(`https://wa.me/${STORE.phone}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ── Quick View Modal ──────────────────────────────────────
function openQV(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p || !qvModal) return;
  qvImg.src       = p.img;
  qvImg.alt       = p.title;
  qvCat.textContent   = catLabel(p.cat);
  qvTitle.textContent = p.title;
  qvDesc.textContent  = p.desc;
  qvPrice.textContent = `${p.price.toLocaleString()} ${STORE.currency}`;
  if (p.old) { qvOldP.textContent = `${p.old.toLocaleString()} ${STORE.currency}`; qvOldP.style.display = "inline"; }
  else qvOldP.style.display = "none";
  qvOrder.onclick = () => orderWA(id);
  qvModal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeQV() {
  if (!qvModal) return;
  qvModal.classList.remove("open");
  document.body.style.overflow = "";
}

// ── Drawer ────────────────────────────────────────────────
function openDrawer() {
  drawer?.classList.add("open");
  drawerOverlay?.classList.add("open");
  hamburgerBtn?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer?.classList.remove("open");
  drawerOverlay?.classList.remove("open");
  hamburgerBtn?.classList.remove("open");
  document.body.style.overflow = "";
  // Reset all open accordion panels
  document.querySelectorAll(".drawer-accordion-item.open").forEach(item => {
    item.classList.remove("open");
    item.querySelector(".drawer-accordion-btn")?.setAttribute("aria-expanded", "false");
    item.querySelector(".drawer-submenu")?.setAttribute("aria-hidden", "true");
  });
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // First render
  renderMain();
  renderSections();

  // ── DRAWER events ────────────────────────────────────────
  hamburgerBtn?.addEventListener("click", openDrawer);
  drawerClose?.addEventListener("click",  closeDrawer);
  drawerOverlay?.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      const cat = link.getAttribute("data-cat");
      if (cat) {
        currentCat = cat;
        // sync category buttons
        catBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-category") === cat));
        renderMain();
        // Smooth scroll to products section
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      }
      closeDrawer();
    });
  });

  // ── DRAWER ACCORDION ─────────────────────────────────────
  const accBtns = document.querySelectorAll(".drawer-accordion-btn");

  accBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId   = btn.getAttribute("data-target");
      const parentItem = btn.closest(".drawer-accordion-item");
      const isOpen     = parentItem.classList.contains("open");

      // Close ALL accordion items first (one open at a time)
      document.querySelectorAll(".drawer-accordion-item.open").forEach(item => {
        item.classList.remove("open");
        item.querySelector(".drawer-accordion-btn").setAttribute("aria-expanded", "false");
        const sub = item.querySelector(".drawer-submenu");
        if (sub) sub.setAttribute("aria-hidden", "true");
      });

      // If it was closed, open it now
      if (!isOpen) {
        parentItem.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        const sub = document.getElementById(targetId);
        if (sub) sub.setAttribute("aria-hidden", "false");
      }
    });
  });

  // ── DRAWER SUB-LINKS (inside accordion menus) ────────────
  document.querySelectorAll(".drawer-sub-link").forEach(link => {
    link.addEventListener("click", () => {
      const cat = link.getAttribute("data-cat");
      if (cat) {
        currentCat = cat;
        catBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-category") === cat));
        renderMain();
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      }
      closeDrawer();
    });
  });

  // ── Category buttons ──────────────────────────────────────
  catBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      catBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.getAttribute("data-category");
      renderMain();
    });
  });

  // ── Desktop nav cat links ─────────────────────────────────
  document.querySelectorAll(".dnav-link[data-cat]").forEach(link => {
    link.addEventListener("click", () => {
      const cat = link.getAttribute("data-cat");
      if (cat) {
        currentCat = cat;
        catBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-category") === cat));
        renderMain();
      }
    });
  });

  // ── Search ────────────────────────────────────────────────
  searchInput?.addEventListener("input", e => {
    query = e.target.value.trim().toLowerCase();
    renderMain();
  });
  searchBtn?.addEventListener("click", () => {
    query = searchInput?.value.trim().toLowerCase() || "";
    renderMain();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  });

  // ── Back to top ───────────────────────────────────────────
  window.addEventListener("scroll", () => {
    backTop?.classList.toggle("visible", window.scrollY > 500);
  });
  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ── Modal close ───────────────────────────────────────────
  modalClose?.addEventListener("click", closeQV);
  qvModal?.addEventListener("click", e => { if (e.target === qvModal) closeQV(); });

  // ── ESC key closes modals/drawer ─────────────────────────
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeQV(); closeDrawer(); }
  });
});
