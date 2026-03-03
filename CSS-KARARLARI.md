# CSS Kararları

## 1. Breakpoint Seçimi
Mobil-first bir yaklaşım benimsediğim için önce küçük ekranı (0–639px) baz aldım, ardından 640px ve 1024px için iki ek breakpoint tanımladım. 640px, tipik tablet ve küçük dizüstü cihazlar için iyi bir eşik; 1024px ise masaüstü düzenine geçtiğim genişlik. İçerik bu noktalarda hem padding değerleriyle hem de proje kartlarının kolon sayısıyla (auto-fit grid → sabit 3 sütun) değişiyor.

## 2. Layout Tercihleri
Header için Flexbox kullandım çünkü logo/isim ve navigasyon linklerini aynı satırda, iki uca yaslanmış ve mobilde kolayca dikey dizilebilecek şekilde yönetmek istedim. Proje kartları için Grid seçtim; auto-fit ve minmax kullanarak ekran genişledikçe kartların otomatik olarak yeni kolona akmasını sağlıyor. Flexbox’ı daha çok satır içi hizalamalar, Grid’i ise sayfa düzeyinde kart yerleşimi için kullandım.

## 3. Design Tokens
Renk, tipografi ve spacing değerlerini `tokens.css` içindeki CSS değişkenleriyle yönettim; böylece temayı değiştirmek için tek bir dosyayı güncellemek yeterli oluyor. Renk paleti olarak koyu bir arka plan ve canlı turuncu aksan seçtim; kontrastı yüksek tutarak hem modern bir görünüm hem de okunabilirlik sağlamayı hedefledim. Fluid typography için `clamp()` ile tanımlanan `--text-*` tokenlarını kullandım, böylece media query yazmadan başlık ve metin boyutları ekrana göre akıcı biçimde ölçekleniyor.

## 4. Responsive Stratejiler
CSS’i mobil-first mantığıyla yazdım; temel stil önce mobil için geçerli, daha geniş ekranlar sadece `min-width` media query’leriyle ek özellikler alıyor. Tablet ve masaüstünde section padding’lerini ve proje grid yapısını değiştirerek geniş alanlarda daha ferah bir düzen elde ettim. Görsel boyutları için `max-width: 100%` ve `object-fit: cover` kullandım; böylece ekran oranı değiştiğinde bile görseller taşmadan ve yamulmadan kartlara uyum sağlıyor.

