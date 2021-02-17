# Rendszerterv

## A rendszer célja

- A rendszer célja a recepciósok munkájának könnyítése
- A program egy web alapú felületen fut, ami egy adatbázishoz van kapcsolva
- Navigációs menün keresztül lehet egyes pontokba eljutni a rendszerben
- A program célja, hogy könnyen lehessen tájékozódni a felületen

## Projektterv

## Rendszerterv 

## Üzleti folyamatok modellje

## Követelmények

 - Funkcionális
	- Webes környezetben való működés
	- A foglalások és az ehhez tartozó adatok tárolása
 - Nem funkcionális
	- Gyors működés, foglalások kilistázása
	- Egyszerű, egyértelmű kezelés
 - Törvényi előírások, szabványok
	- GDPR követelményeinek való megfelelés
## Funkcionális terv

- Rendszerszereplők
  - Recepciós
  
- Rendszerhasználati esetek és lefutásaik:
  - Recepciós
    * Adatok megtekintése
    * Adatok hozzáadása, törlése, módosítása
    * A rendszerhez való teljes hozzáférés

- Menü hierarchiák
  - Kezdőlap
    * Foglalások
    * Számlák
## Fizikai környezet

## Absztrakt domain modell

## Architekturális terv

## Adatbázis terv

A kemping szolgáltatáshoz készült az adatbázis, ennek a tervét mutatja a mellékelt ábra.
![Adatbázis terv](https://github.com/L0ggeRs/afp2_exception/blob/main/Dokumentáció/database_model.png)

## Implementációs terv

## Tesztterv

## Telepítési terv

 - A rendszer beüzemelésekor ajánlott egy hozzá szakértő emberre bízni a beüzemelést mivel a szerver elindításához szükség van némi hozzáértéshez.
	Így elkerülve esetleges nem kívánatos hibák létre jöttét.
## Karbantartási terv

-Az alkalmazás folyamatos üzemeltetése és karbantartása, mely
magában foglalja a programhibák elhárítását, a belső igények változása miatti
módosításokat, valamint a környezeti feltételek változása miatt
megfogalmazott program-, illetve állomány módosítási igényeket.

**Karbantartás:**
Corrective Maintenance: A felhasználók által felfedezett és "user reportban"
elküldött hibák kijavítása.
Adaptive Maintenance: A program naprakészen tartása és finomhangolása.
Perfective Maintenance: A szoftver hosszútávú használata érdekében végzett
módosítások, új funkciók, a szoftver teljesítményének és működési
megbízhatóságának javítása.
Preventive Maintenance: Olyan problémák elhárítása, amelyek még nem
tűnnek fontosnak, de később komoly problémákat okozhatnak.
