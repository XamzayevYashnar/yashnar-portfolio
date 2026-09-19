# Yashnar Xamzayev — Portfolio

React (Vite) asosida qurilgan shaxsiy portfolio sayt. Dizayn kod muharriri
(editor/terminal) uslubida — tab'lar, fayl nomlari va checklist orqali
navigatsiya qilinadi.

## Loyihani mahalliy ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

## GitHub'ga joylash

1. GitHub'da yangi (bo'sh) repozitoriy yarating, masalan `portfolio`.
2. Shu papkadagi fayllarni o'sha repoga push qiling:

```bash
git init
git add .
git commit -m "Portfolio sayt"
git branch -M main
git remote add origin https://github.com/<username>/<repo-nomi>.git
git push -u origin main
```

## GitHub Pages'da bepul deploy qilish (eng oson yo'l)

1. `gh-pages` paketi allaqachon `package.json`ga qo'shilgan.
2. Quyidagi buyruqni ishga tushiring:

```bash
npm run deploy
```

Bu `dist` papkasini avtomatik ravishda `gh-pages` branch'iga push qiladi.

3. GitHub repo sahifasida: **Settings → Pages → Source** bo'limida
   `gh-pages` branch'ini tanlang va saqlang.
4. Bir necha daqiqadan so'ng sayt shu manzilda ochiladi:
   `https://<username>.github.io/<repo-nomi>/`

Sayt `vite.config.js` ichida `base: './'` bilan sozlangan, shuning uchun
repo nomidan qat'i nazar to'g'ri ishlaydi — qo'shimcha sozlash shart emas.

## Muqobil variant: Vercel yoki Netlify

Agar GitHub Pages o'rniga tezroq va qulayroq variant kerak bo'lsa:

- [vercel.com](https://vercel.com) yoki [netlify.com](https://netlify.com) ga
  GitHub akkountingiz bilan kiring
- Repozitoriyni import qiling — build buyrug'i avtomatik aniqlanadi
  (`npm run build`, output papka: `dist`)
- Bir necha soniyada tayyor havola olasiz

## Kontentni o'zgartirish

Barcha matn (ism, loyihalar, stack, kontakt) bitta faylda joylashgan:

```
src/data.js
```

Shu faylni tahrirlab, `npm run dev` bilan natijani real vaqtda ko'rishingiz
mumkin.

## Struktura

```
src/
  components/
    TabBar.jsx      — yuqoridagi navigatsiya
    Hero.jsx        — bosh sahifa (ism, rol, tugmalar)
    About.jsx       — men haqimda bloki
    Stack.jsx       — texnologiyalar ro'yxati
    Projects.jsx    — loyihalar ro'yxati
    Activity.jsx    — GitHub commit grafigi va contribution snake
    Goals.jsx       — 2026 maqsadlar checklist
    Contact.jsx     — bog'lanish ma'lumotlari
  data.js           — barcha matn/ma'lumotlar shu yerda
  App.jsx
  App.css
```
