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
