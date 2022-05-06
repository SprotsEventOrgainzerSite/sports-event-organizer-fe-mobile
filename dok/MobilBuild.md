MOBIL BUILD

## Előkészületek:
- React kód elkészítése
- npm install
- Netlify regisztráció
- Expo Go applikáció

## Buildelés folyamata:
- a projekt mappájában, a konzolban megadjuk az "npm run build" parancsot
- netlify -> login -> teams -> sites
- drag & dropoljuk a projekt mappájában létrejött build mappát
- az oldal létrehoz egy linket, ezt vágólapra helyezzük
- "npm install -g expo-cli" - telepítjük a csomagot konzolban
- a projekt mappájába navigálunk, majd expo init mappa-nev -> blank project
- a létrejött projektbe lépünk, majd "npm i react-native-webview" parancsot futtatjuk
- a létrejött projekt App.js-be importáljuk a WebView-ből a 'react-native-webview'-t
- a default function-ben a view-ek közé illesztjük a <WebView source = {{ uri: "..." }} sort,
  ahol a ... helyére helyezzük a vágólapra tett linket
- a StyleSheet kódrészletben a height-et 45-re, a backgroundColor-t "black"-re állítjuk
- npm start vagy expo start-al indítjuk az appot
- Expo Go-val leolvassuk a generált kódot, ami futtatja a mobilunkon az applikációt                                                             
                                                              
Felhasznált anyag:
                                                              
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/KAnREiZxPZg/0.jpg)](https://youtu.be/KAnREiZxPZg)
