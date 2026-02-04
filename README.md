# GM Static Agency Site (No Prisma / No DB)

Αυτό είναι ένα **στατικό** site (HTML/CSS/JS) σαν το παράδειγμα που έστειλες — ανοίγει κατευθείαν στο browser και δουλεύει άμεσα.

## Πώς το ανοίγεις
- Άνοιξε τον φάκελο στο VS Code
- Διπλό κλικ `index.html` ή βάλε VS Code extension **Live Server** και πάτα “Go Live”.

## Αρχεία
- `index.html` Home
- `services.html` Υπηρεσίες
- `pricing.html` Πακέτα
- `case-studies.html` Case Studies
- `contact.html` Επικοινωνία
- `style.css` styles
- `app.js` mobile menu + active nav link
- `assets/` logo

## Φόρμα επικοινωνίας
Το demo κάνει alert. Για πραγματική αποστολή χωρίς backend:
- Formspree ή Netlify Forms
ή
- custom backend (όταν θες) σε Node/PHP/FastAPI

## Tawk.to Live Chat (μόνο)
Το site έχει ήδη το Tawk.to snippet σε **όλες** τις σελίδες.

### Τι χρειάζεται να κάνεις
1) Πήγαινε στο tawk.to και δημιούργησε widget για το domain σου  
2) Αντέγραψε το embed link που μοιάζει με:
`https://embed.tawk.to/XXXX/YYYY`

3) Άνοιξε οποιοδήποτε από τα html αρχεία (π.χ. `index.html`) και αντικατάστησε:
- `YOUR_PROPERTY_ID` → το `XXXX`
- `YOUR_WIDGET_ID` → το `YYYY`

✅ Δεν έχουμε Google Analytics, δεν έχουμε Meta Pixel.
