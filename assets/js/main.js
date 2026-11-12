/* Adana Güneş Çiçek — etkileşimler */
(function(){
  var PHONE = "905424863701";
  var root = document.documentElement;
  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".burger");
  var toTop = document.querySelector(".to-top");

  function setHdr(){
    if(!header) return;
    var r = header.getBoundingClientRect();
    root.style.setProperty("--hdr", Math.max(0, r.bottom) + "px");
  }

  // Menü
  if (burger) {
    burger.addEventListener("click", function(){
      setHdr();
      var open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
  document.querySelectorAll(".has-drop > button").forEach(function(b){
    b.addEventListener("click", function(){
      var li = b.parentElement;
      var open = li.classList.toggle("open");
      b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function(e){
    document.querySelectorAll(".has-drop.open").forEach(function(li){
      if (!li.contains(e.target) && !document.body.classList.contains("nav-open")) li.classList.remove("open");
    });
  });

  // Scroll durumları
  function onScroll(){
    var y = window.scrollY || 0;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
  if (toTop) toTop.addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });

  // Görünür olunca açığa çık
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    }, {threshold:.12, rootMargin:"0px 0px -40px 0px"});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add("in"); }); }

  // Ürün filtresi
  var fbtns = document.querySelectorAll(".filters button");
  fbtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      fbtns.forEach(function(x){ x.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      document.querySelectorAll(".prod[data-cat]").forEach(function(p){
        p.classList.toggle("hide", f !== "all" && p.getAttribute("data-cat").indexOf(f) === -1);
      });
    });
  });

  // WhatsApp sipariş formu
  var form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var d = new FormData(form);
      var lines = [
        "Merhaba Adana Güneş Çiçek, sipariş vermek istiyorum.",
        "",
        "Adım: " + (d.get("ad") || "-"),
        "Telefonum: " + (d.get("tel") || "-"),
        "Ürün / Kategori: " + (d.get("urun") || "-"),
        "Teslimat tarihi: " + (d.get("tarih") || "-"),
        "Teslimat ilçesi: " + (d.get("ilce") || "-"),
        "Kart notu: " + (d.get("not") || "-")
      ];
      window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    });
  }

  // Yıl
  document.querySelectorAll("[data-year]").forEach(function(el){ el.textContent = new Date().getFullYear(); });
})();

/* Galeri (lightbox) */
(function(){
  var lb = document.getElementById("lb");
  if (!lb) return;
  var img = lb.querySelector("img"), cap = lb.querySelector("figcaption"), order = lb.querySelector(".lb-order");
  var list = [], idx = 0, lastFocus = null;
  function visible(){ return Array.prototype.filter.call(document.querySelectorAll("a[data-lb]"), function(a){ return a.offsetParent !== null; }); }
  function show(i){
    idx = (i + list.length) % list.length;
    var a = list[idx];
    img.src = a.getAttribute("href");
    img.alt = a.querySelector("img") ? a.querySelector("img").alt : "";
    cap.textContent = a.getAttribute("data-caption") || "";
    var card = a.closest(".prod");
    var w = card && card.querySelector(".btn-wa");
    if (w) { order.href = w.href; order.style.display = ""; } else { order.style.display = "none"; }
  }
  function open(a){ list = visible(); lastFocus = a; lb.hidden = false; document.body.style.overflow = "hidden"; show(list.indexOf(a)); lb.querySelector(".lb-x").focus(); }
  function close(){ lb.hidden = true; img.src = ""; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest("a[data-lb]");
    if (a) { e.preventDefault(); open(a); }
  });
  lb.querySelector(".lb-x").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", function(){ show(idx - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function(){ show(idx + 1); });
  lb.addEventListener("click", function(e){ if (e.target === lb) close(); });
  document.addEventListener("keydown", function(e){
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
  var sx = null;
  lb.addEventListener("touchstart", function(e){ sx = e.touches[0].clientX; }, {passive:true});
  lb.addEventListener("touchend", function(e){ if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); sx = null; });
})();
