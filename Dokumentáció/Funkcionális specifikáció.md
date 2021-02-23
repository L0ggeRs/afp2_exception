# Funkcionális specifikáció

## Áttekintés

 - A fejlesztésünk célja, egy olyan webes alkalmazás, mellyel képesek leszünk nyilvántartani egy kemping foglalásait és megjeleníti a parcelláinak állapotát.
 - A rendszer célja a könnyű kezelhetőség és átláthatóság. Bárki számára gyorsan és egyszerűen megtanulható legyen.
 - A kemping foglalása regisztrációhoz van kötve, csak ezután lehet lefoglalni a szabad helyeket.
 - A foglalás történhet sátorral vagy lakókocsival, akár egy vagy több éjszakára is.
 - Az aktuális foglalások kilistázására is lesz lehetőség. A rendszer ez alapján fogja kiszámolni az aktuális foglaláshoz tartozó költségeket.
 - A weboldal tartalmazni fog képeket, elérhetőségeket és az ehhez szükséges információkat.
 
## Jelenlegi helyzet

- Ennek a fejezetnek a feladata kifejteni, hogy miért van
  szükség az alkalmazásunkra. Érdemes minél lényegretörőbbnek
  lenni benne, minél több pontban ecsetelve a szükséget.
  
- A mai világban már elengedhetetlen, hogy szoftveresen is vezetve legyenek az adminisztrációs dolgok. Ezért szükség van egy olyan szoftverre, ami segít könnyebben tájékozódni a foglalások, pénzösszegek és a vevő igényei között. Ezáltal visszakövethetőbbé is teszi ezt.

- A jelenlegi helyzet, hogy papíron, jegyzetben van vezetve, ami nagyon lassú ahhoz, hogy a vevők igényei ki legyenek elégítve. Ezt pedig nehéz úgy kivitelezni, hogy az alkalmazottaknak kevesebb idejük marad más teendőkre.

- Muszáj a pénzösszegek kezelését is egyszerűbbé tenni. Jelenlegi formában ez nehéz, és nehezen nyomon követhető. Sok időt vesz igénybe a dokumentumok, papírok karbantartása, tárolása. Nem egyszerű több évre visszamenőleg keresni.
  
## Követelménylista
| modul | id | név | verzió | kifejtés |
|--|--|--|--|--|
| funkció | F1  | Foglalás | 1.0 |Az adott cellára kattintva elő hívjuk a cella adatait, amely tartalmazza a lefoglalni kívánt kemping hely adatait és ha ez a hely szabad akkor a lefoglal gomb lenyomásával elő tudjuk hívni a foglalás formot. Ahol az a adatok kitöltésével letudunk foglalni egy kemping helyet.
|funkció| F2| Kemping helyek lekérdezése | 1.0 | Ez a fő form, ahol láthatjuk a kiválasztott intervallumban éppen szabad helyeket vagy már lefoglalt helyeket.
|funkció|F3| Adatok lekérdezése | 1.0 | Itt tudjuk lekérni a cellák adatait (Rá kattintva a cellára).
|Funkció|F4| Számlázás | 1.0 |Számla kiállítást az adott foglaláshoz a "Foglalások" menüpontban, vagy a cella információk ablakból lehet indítani. 
|Menü|M1|Kemping helyek megjelenítése| 1.0| A lefoglalt slotokat jeleníti meg különböző színekkel. Itt tudjuk meg kezdeni a lefoglalást.
|Menü| M2 | Foglalások megjelenítése | 1.0 | A lefoglalt kemping helyek adatait jeleníti meg táblázatosan.

## Jelenlegi üzleti folyamatok modellje
 Sok kemping a hagyományos, papír alapú módszert használja a foglalások számontartásához. A recepciós a foglalási adatokat egy jegyzőkönyvbe/naptárba rögzíti.
 Ennek számos hátránya van:
 - Lassan és nehezen átlátható rendszer
 - Vendégek adatai összekeveredhetnek
 - Hiba kockázat az adatok feljegyzésekor
 - Az egész dokumentáció elveszhet
 - Számla kiállítása körülményes
 - Nem környezetbarát módszer
## Igényelt üzleti folyamatok modellje

 - Weboldalunk célja, hogy leegyszerűsítsük egy kemping foglalását és foglalásainak kezelését a papír alapú munkához képest. Csökken a hibalehetőségek száma is.
 - A digitálisan sokkal gyorsabban és egyszerűbben tehetjük ezt meg, ki tudunk állítani elektronikus számlát is.
 - Célunk, hogy bármely időpont beírására megkapjuk azt, hogy mely parcellák szabadok és melyek foglaltak.
 - A vendégek kiválaszthatják, hogy sátorral vagy lakókocsival szeretnének-e megszállni, ehhez mérten fogják megkapni a szabad helyeket.
 - A vendégek, a számukra szimpatikus parcellákat foglalhatják le, így a rendszer számon fog tartani minden ehhez kapcsolódó információt.
 - A vendégek a kiállított elektronikus számlát távozáskor kapják.
 - 
## Használati esetek

A kemping recepciósa kezeli a rendszert, ami azt jelenti, hogy a használati esetek többsége hozzá kapcsolódik.

Adatbázisban lévő adatok kezelése:
- Adatok hozzáadása, törlése, módosítása.

## Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
A recepciós feladatkör ellátja az adminisztrátor feladatát. A vendég nincsen közvetlen kapcsolatban a rendszerünk, de közvetett módon a recepciós által kerül kapcsolatba a rendszerrel. A weboldal megnyitásakor megnyílik a főoldalunk, ahol található a navigációs menü pont, ahol a kezelő kitudja választani a tetszőleges intervallumot, ami szerint megjelenítődnek az adott intervallumon lefoglalt és szabad férőhelyek.  Egy cellára kattintva elő hozhatjuk a cella adatait, ahol megtalálhatjuk a lefoglal gombot amely egy újabb formra irányít minket ahol letudjuk foglalni az adott slotot. De található még egy Foglalások menü pont is a főoldalon, ahol a foglalásokat tudjuk ki listázni és számlát készíteni.

## Képernyő tervek
A recepciós felhasználói felülete egy térkép a kempingről, amelyen táblázat szerűen vannak jelölve kemping különböző parcellái. A táblázat cellái egy-egy kiadható kemping helyet jelölnek. A cellákat egy, vagy több éjszakára lehet lefoglalni. A foglalás két féle típusú lehet, sátras vagy lakókocsis. Minden parcellához kérhető áram csatlakozás. A cellák színezése a parcella állapotától függ:
- Zöld - a cella nincs lefoglalva egy éjszakára sem az adott intervallumon belül.
- Szürke - a cella legalább egy éjszakára le van foglalva az adott intervallumon belül.
A cellára kattintva megjelenik az adott cella információt tartalmazó ablak
Számla kiállítást a "Foglalások" menüpontból lehet indítani.

Navigációs menü:

Kezdőlap: térkép + idő-intervallum beállítás.

Foglalás: űrlap egy cella lefoglalásához.

Foglalások: táblázat a jelenleg rendszerben lévő foglalásokkal.
- Megjelenik egy táblázat az összes rendszerben lévő foglalás adataival. A sorok végén "Módosítás", "Törlés", és "Számla" lehetőséggel.
- Módosítás form: Automatikusan kitölti a mezőket a módosítandó foglalás adataival. Az mezők alatt két gomb van: "Mentés" és "Mégsem".

## Forgatókönyv

 - Egy webes felületet fogunk létrehozni, melyhez tartozni fog egy adatnázis, melyben a foglalásokat fogjuk kezelni.
 - A térképen fogjuk látni a férőhelyek elhelyezkedését a megadott intervallumon belül. 2 féle színnel lesznek jelölve a számozott férőhelyek, zöld és piros. 
	A zölddel jelölt parcellák lesznek a szabadok, míg a pirossal jelöltek a foglaltak.
 - Regisztrálni tudunk majd vendégeket. A névre, email címre, személyi számra, telefonszámra és a lakcímre lesz szükség a regisztrációhoz.
 - A megadott szám és a szín függvényében tudjuk lefoglalni az adott parcellát. Ilyenkor fogjuk tudni eldönteni, hogy sátorral vagy lakókocsival szeretnénk megszállni.
	Az intervallum és a megfelelő email cím megadása után tudjuk lefoglalni az adott parcellát.
	
## Funkció-követelmény megfeleltetés

## Fogalomszótár
 slot - Kemping hely


