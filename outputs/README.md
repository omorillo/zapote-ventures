# Zapote Ventures — MVP-Website

Statische Landingpage für Zapote Ventures UG (haftungsbeschränkt), fertig für GitHub Pages mit HTTPS.

## Dateien

- `index.html` — Landingpage
- `impressum.html` — Impressum (§5 TMG); zwei Felder sind als `[PLATZHALTER]` markiert (Registergericht, HRB-Nummer, ggf. USt-IdNr.) — bitte ausfüllen, sobald die UG ins Handelsregister eingetragen ist
- `zapote-logo.svg` — Logo, referenziert in Nav und als Favicon
- `CNAME` — trägt `zapote.de` ein, für die eigene Domain
- `.nojekyll` — deaktiviert Jekyll-Verarbeitung, damit GitHub Pages die Dateien 1:1 ausliefert

## 1. Repo anlegen und Dateien pushen

```bash
cd /pfad/zu/diesem/ordner
git init
git add .
git commit -m "Initial commit: Zapote Ventures MVP-Landingpage"
git branch -M main
git remote add origin https://github.com/omorillo/zapote-ventures.git
git push -u origin main
```

(Repo vorher auf github.com unter dem Account `omorillo` anlegen, z. B. `zapote-ventures`, public, ohne README/gitignore-Vorbelegung.)

## 2. GitHub Pages aktivieren

1. Im Repo: **Settings → Pages**
2. Unter **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **main**, Ordner: **/ (root)**
4. Speichern

GitHub baut die Seite danach automatisch unter `https://omorillo.github.io/zapote-ventures/`.

## 3. Eigene Domain (zapote.de) einrichten

Die `CNAME`-Datei ist bereits im Repo (Inhalt: `zapote.de`). Zusätzlich bei deinem Domain-Registrar folgende DNS-Einträge setzen:

**Für die Root-Domain (`zapote.de`) — vier A-Records:**

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

**Für `www.zapote.de` (optional, falls gewünscht):**

```
CNAME   www   omorillo.github.io.
```

Danach in **Settings → Pages → Custom domain** `zapote.de` eintragen und speichern. DNS-Propagierung kann bis zu 24 Stunden dauern.

## 4. HTTPS erzwingen

Sobald GitHub die Domain verifiziert hat und das TLS-Zertifikat ausgestellt ist (automatisch, kann ein paar Minuten bis Stunden dauern):

1. **Settings → Pages**
2. Checkbox **Enforce HTTPS** aktivieren

Damit läuft die Seite ausschließlich über `https://zapote.de`.

## Offene Punkte vor Live-Gang

- [ ] Impressum: Registergericht + HRB-Nummer eintragen, sobald vorhanden
- [ ] Impressum: USt-IdNr. eintragen, falls beantragt
- [ ] LinkedIn-Link in `index.html` (Footer) eintragen — aktuell Platzhalter `#`
- [ ] "Artikel lesen"-Link im Analyse-Abschnitt auf echten Blogbeitrag verlinken, sobald vorhanden
- [ ] DNS-Einträge bei deinem Domain-Registrar setzen (siehe oben)
