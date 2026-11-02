# Adana Güneş Çiçek — Web Sitesi

Adana Güneş Çiçek için hazırlanmış, çok sayfalı, mobil uyumlu ve SEO odaklı statik web sitesi.

- **Telefon:** 0542 486 37 01
- **Adres:** Yeşilyurt Mah., 70192. Sk., 01150 Seyhan/Adana
- **Instagram:** [@gunescicekadana](https://www.instagram.com/gunescicekadana/)

## Sayfalar (24)
- Ana sayfa, Hakkımızda, Ürünler (filtreli katalog), SSS, İletişim (WhatsApp sipariş formu + harita), 404
- 8 hizmet sayfası: doğum günü, sevgiliye, düğün & nişan, açılış çelengi, cenaze çelengi, kurumsal, orkide & saksı, yeni doğan
- Teslimat bölgeleri + 4 ilçe sayfası: Seyhan, Çukurova, Yüreğir, Sarıçam
- Blog + 4 yazı

## Öne çıkanlar
- Her sayfada Ara / WhatsApp / Instagram butonları (masaüstünde yüzen butonlar, mobilde sabit alt bar)
- Ürün kartlarında ürün adı hazır yazılmış WhatsApp sipariş butonları
- Schema.org yapısal verileri: Florist (LocalBusiness), BreadcrumbList, FAQPage, Service, BlogPosting
- Her sayfaya özel title, meta description, canonical, Open Graph; `sitemap.xml`, `robots.txt`, `site.webmanifest`
- Harici kütüphane yok; yalnızca HTML + CSS + JS

## Yayına alma (GitHub Pages)
Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)` → Save.
Site şu adreste açılır: https://01pandaa.github.io/gunes-i-ek/

## Özel alan adı kullanılırsa
Tüm `.html` dosyalarında, `sitemap.xml` ve `robots.txt` içinde `https://01pandaa.github.io/gunes-i-ek` adresini yeni alan adıyla değiştirin (toplu bul-değiştir).

## Gerçek fotoğraf eklemek
Ürün ve hizmet görselleri şu an SVG illüstrasyon. Gerçek fotoğraf için ilgili kartın `<div class="art ...">` içindeki `<svg>` yerine
`<img src="assets/img/urun-adi.webp" alt="..." loading="lazy" style="width:100%;height:100%;object-fit:cover">` koyabilirsiniz.
