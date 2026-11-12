# Adana Güneş Çiçek — Web Sitesi

Adana Güneş Çiçek için hazırlanmış, çok sayfalı, mobil uyumlu ve SEO odaklı statik web sitesi.

- **Telefon:** 0542 486 37 01
- **Adres:** Yeşilyurt Mah., 70192. Sk., 01150 Seyhan/Adana
- **Instagram:** [@gunescicekadana](https://www.instagram.com/gunescicekadana/)

## Sayfalar (31)
- Ana sayfa, Hakkımızda, Ürünler (filtreli katalog), SSS, İletişim (WhatsApp sipariş formu + harita), 404
- 8 hizmet sayfası: doğum günü, sevgiliye, düğün & nişan, açılış çelengi, cenaze çelengi, kurumsal, orkide & saksı, yeni doğan
- Teslimat bölgeleri + 4 ilçe sayfası: Seyhan, Çukurova, Yüreğir, Sarıçam
- Blog + 4 yazı
- Ürün kategori sayfaları (gerçek fotoğraflar): gül buketleri, mevsim buketleri, kutuda çiçek, çikolata buketleri, duvak çelenk modelleri, ferforje modelleri (+ saksı ve cenaze çelengi hizmet sayfalarında tüm modeller)

## Öne çıkanlar
- Her sayfada Ara / WhatsApp / Instagram butonları (masaüstünde yüzen butonlar, mobilde sabit alt bar)
- Ürün kartlarında ürün adı hazır yazılmış WhatsApp sipariş butonları
- Schema.org yapısal verileri: Florist (LocalBusiness), BreadcrumbList, FAQPage, Service, BlogPosting
- Her sayfaya özel title, meta description, canonical, Open Graph; `sitemap.xml`, `robots.txt`, `site.webmanifest`
- Harici kütüphane yok; yalnızca HTML + CSS + JS

## Yayına alma (GitHub Pages)
Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)` → Save.
Site adresi: https://www.gunescicekadana.com/ (yedek: https://01pandaa.github.io/gunes-i-ek/). Her `main` güncellemesinde `.github/workflows/pages.yml` siteyi otomatik yayınlar.

## Özel alan adı kullanılırsa
Tüm `.html` dosyalarında, `sitemap.xml` ve `robots.txt` içinde `https://01pandaa.github.io/gunes-i-ek` adresini yeni alan adıyla değiştirin (toplu bul-değiştir).

## Ürün fotoğrafları
74 gerçek ürün fotoğrafı `assets/img/urunler/<kategori>/` altında WebP olarak bulunur (`-k.webp` = kart görseli 640×800, diğeri büyük görsel). Her ürünün bir kodu vardır (ör. `GC-GUL-06`); sipariş butonu WhatsApp mesajına ürün adını ve kodunu otomatik yazar. Çelenk ve saksı fotoğraflarındaki müşteri isimleri "GÜNEŞ ÇİÇEK" yazısıyla değiştirilmiştir.

## Gerçek fotoğraf eklemek (eski not)
Ürün ve hizmet görselleri şu an SVG illüstrasyon. Gerçek fotoğraf için ilgili kartın `<div class="art ...">` içindeki `<svg>` yerine
`<img src="assets/img/urun-adi.webp" alt="..." loading="lazy" style="width:100%;height:100%;object-fit:cover">` koyabilirsiniz. 
