# Zapote Website Assets

Dieses Paket enthält die Produktionsassets für das freigegebene Zielbild der Zapote Homepage.

## Dateien

- `logo/zapote-logo.svg` ist das bestehende Original für helle Hintergründe.
- `logo/zapote-logo-dark.svg` ist das bestehende Original für dunkle Hintergründe.
- `logo/zapote-mark.svg` ist das aus dem bestehenden Markenzeichen abgeleitete Symbol für Favicon oder kompakte Darstellungen.
- `backgrounds/hero-background.svg` ist der dekorative Hero Hintergrund. Er enthält nur Navy Farbtöne und keine inhaltlichen Informationen.
- `diagrams/governance-flow-desktop.svg` ist der horizontale statische Endzustand der Governance Grafik.
- `diagrams/governance-flow-mobile.svg` ist die vertikale mobile Variante.
- `previews/zapote-homepage-target-v2.png` ist nur eine Designreferenz. Diese Datei wird nicht in die Website eingebaut.
- Die PNG Dateien in `previews` dienen der visuellen Abstimmung und als Figma Vorschau. Für die Website sind die SVG Dateien zu verwenden.

## Einbindung

Das Logo kann als normales Bild eingebunden werden. Der Alternativtext lautet `Zapote Ventures`.

```html
<img src="/assets/logo/zapote-logo.svg" alt="Zapote Ventures" width="160" height="84">
```

Der Hero Hintergrund wird dekorativ per CSS gesetzt. Das SVG gehört nicht in den Lesefluss.

```css
.hero {
  background-color: #111820;
  background-image: url('/assets/backgrounds/hero-background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

Die Governance Grafik soll als Inline SVG eingebunden werden, damit die Gruppen gezielt animiert und fokussiert werden können. In der Desktop Datei heißen sie `identity`, `policy`, `human-oversight`, `audit`, `human-review-branch` und `controlled-action`; in der mobilen Datei tragen die entsprechenden IDs zusätzlich das Suffix `-mobile`. Die mobile Datei wird bis 767 Pixel eingesetzt, die Desktop Datei ab 768 Pixel.

```html
<picture class="governance-graphic">
  <source media="(max-width: 767px)" srcset="/assets/diagrams/governance-flow-mobile.svg">
  <img src="/assets/diagrams/governance-flow-desktop.svg" alt="Kontrollierter Aktionspfad mit Identity, Policy, Human Oversight und Audit">
</picture>
```

Für die interaktive Umsetzung reicht `picture` nicht aus. Dann werden die SVG Inhalte direkt in das HTML übernommen. Die vorhandenen Titel und Beschreibungen bleiben erhalten. Bei `prefers-reduced-motion: reduce` wird sofort der statische Endzustand angezeigt.

## Nicht als Grafik umsetzen

Prozessschritte, Trust Strip, Headlines, Buttons, Case Texte und Kennzahlen bleiben echter HTML Text. Das verbessert Responsivität, Suchmaschinenlesbarkeit, Barrierefreiheit und spätere redaktionelle Änderungen.
