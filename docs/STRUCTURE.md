# Project Structure

- `index.html`: homepage entrypoint.
- `pages/`: core pages (`about`, `services`, `book`).
- `pages/legal/`: compliance pages (`privacy`, `terms`, `disclaimer`).
- `assets/css/`: shared styles.
- `assets/js/`: shared scripts and config (`site-config.js`, `main.js`).
- `assets/images/`: image assets and library files.
- `docs/`: project documentation and handover notes.
- `archive/layout-v1-2026-02-24/`: preserved snapshot of layout v1.

## Booking/Brand Tokens
Edit `assets/js/site-config.js`:
- `BUSINESS_NAME`
- `TAGLINE`
- `PRIMARY_EMAIL`
- `BOOKING_URL`
- `LOGO_SVG_PATH`

All `Book` actions route through `data-booking-link` + `BOOKING_URL`.
