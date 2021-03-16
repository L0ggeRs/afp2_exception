# Rendszerterv

## A rendszer célja

- A rendszer célja a recepciósok munkájának könnyítése
- A program egy web alapú felületen fut, ami egy adatbázishoz van kapcsolva
- Navigációs menün keresztül lehet egyes pontokba eljutni a rendszerben
- A program célja, hogy könnyen lehessen tájékozódni a felületen

## Projektterv
**Projekt szerepkörök, felelősségek**

-   szerepkörök
    -   product owner: Tajti Tibor
    -   scrum master: Tamasi Marcell, Dancs Viktor
    - junior fejlesztők: Bencsik Krisztián Dániel, Guti Adrián, Karaba Márk, Ungi Keve
-   felelősségek:
    -   scrum master: A Scrum mester felügyeli és megkönnyíti a folyamat fenntartását, segíti a csapatot, ha problémába ütközik, illetve felügyeli, hogy mindenki betartja-e a Scrum alapvető szabályait.
    -   junior fejlesztő: A projekt elkészítése.

**Projekt munkások és felelősségeik**

-   Webfelület:
-   Frontend: 
-   Backend: 
## Rendszerterv 

## Üzleti folyamatok modellje

- Üzleti szereplők:
  - Recepciós
  
- Üzleti folyamatok:
  - Feladatok felvitele módosítása
  - Adatbázis hozzáférés

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
Kliens:
   - Eszköz: Asztali számítógép

  -  Operációs rendszer: Windows 7 vagy nagyobb

    - Szükséges applikációk: Chrome böngésző

    - Konfiguráció: Nem specifikus.



Szerver:

- Eszköz: Kliens

- Specifikáció: Klienssel ekvivalens

- Operációs rendszer: Windows 7 vagy nagyobb

 - Komponensek: 
## Absztrakt domain modell
A program működése során a recepciós egy féle szerepkörben figyelhető meg. A recepciós képes kempinghelyet foglalni, számlát kiállítani, illetve vendéget regisztrálni az adatbázisba.
## Architekturális terv
 - Backend
	A rendszerhez szükség van egy adatbázis szerverre, ebben az esetben MySql-t használunk.
	A kliensekkel JSON objektumokkal kommunikál.
 - Frontend
	A web alkalmazás JetBrains Webstorm keretrendszer használatával készül el

## Adatbázis terv

A kemping szolgáltatáshoz készült az adatbázis, ennek a tervét mutatja a mellékelt ábra.
![Adatbázis terv](https://github.com/L0ggeRs/afp2_exception/blob/main/Dokumentáció/database_model.png)

## Implementációs terv
A Webes felület főként HTML, CSS, és Javascript nyelven fog készülni. Ezeket a technológiákat amennyire csak lehet külön fájlokba írva készítjük, és úgy fogjuk egymáshoz csatolni a jobb átláthatóság, könnyebb változtathatóság, és könnyebb bővítés érdekében.

 Képes lesz felhasználni a Backend részen futó REST szolgáltatás metódusait, ezáltal tud felvinni és lekérdezni adatokat az adatbázisból. 
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
- Corrective Maintenance: A felhasználók által felfedezett és "user reportban"
elküldött hibák kijavítása.
- Adaptive Maintenance: A program naprakészen tartása és finomhangolása.
- Perfective Maintenance: A szoftver hosszútávú használata érdekében végzett
módosítások, új funkciók, a szoftver teljesítményének és működési
megbízhatóságának javítása.
- Preventive Maintenance: Olyan problémák elhárítása, amelyek még nem
tűnnek fontosnak, de később komoly problémákat okozhatnak.
