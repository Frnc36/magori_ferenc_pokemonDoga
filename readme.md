# Pokémon API Dolgozat - Mágori Ferenc Ferdinánd

## Pages Link: https://frnc36.github.io/magori_ferenc_pokemonDoga/

### Leírás:

Ez a projekt egy egyszerű, objektumorientált JavaScript alkalmazás, amely a **PokeAPI** segítségével Pokémon adatait kéri le és jeleníti meg.  
A felépítés célja az **OOP szemlélet** és az **eseményalapú kommunikáció** gyakorlása.

## Főbb osztályok

### Services

- Külső API-ból történő adatlekérés
- `fetch` használata
- Callback alapú feldolgozás

### Pokemon

- Egy Pokémon adatainak megjelenítése
- DOM események kezelése
- Saját (custom) esemény kiváltása

### Pokemonok

- Több Pokémon kezelése listaként
- Pokémon objektumok példányosítása

### Info

- Egy Pokémon részletes információinak megjelenítése
- Custom eventből érkező adatok feldolgozása

## Eseménykezelés

A `Pokemon` osztály egy saját `pokemon` eseményt hoz létre,  
amelyet az `index.js` figyel, és ennek hatására jelenik meg az `Info` komponens.

## Dokumentáció generálása

### A dokumentáció linkje: https://frnc36.github.io/magori_ferenc_pokemonDoga/out/

A projekt JSDoc kommenteket tartalmaz.  
A dokumentáció generálásához:

```bash
npm install
npm run doc

```
