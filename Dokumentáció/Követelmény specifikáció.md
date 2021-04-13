# Követelmény specifikáció

## Áttekintés
A fejlesztés célja egy vizuálisan részletes, és átlátható web alkalmazás készítése, amely képes nyílvántartani egy kemping foglalásait, és megjeleníteni parcelláinak állapotát.
A rendszer az egyszerűségre alapoz ,hogy minél könnyebben és egyszerűbben megtanulható és átláthatóbb legyen a recepciós számára.
Az alkalmazást csak a kemping recepciósa kezeli. A cellákat egy vagy több éjszakára is le lehet foglani. Dönteni lehet hogy sátras vagy lakókocsis. Minden cellához kérhető akár áram is. Ki lehet listázni az aktuális ffoglalásokat minden adaatukkal együtt.
A távozás előtt a fizetéskor a rendszer egy számlát állít ki, amit ki lehet nyomtatni.
## Jelenlegi helyzet

 - A kempingnek szüksége van egy könnyen kezelhető és átfogó rendszerre a mostani papír alapú megoldások helyett.
 - Sok hibalehetőség a papír alapú kezelésben, emellett sokkal lassabb is, mint egy digitális rendszer.
 - Nehezebb nyomon követni a bevételeket és a kiadásokat is, feleslegesen sok munkával tud járni a papírok kezelése.
## Vágyálom rendszer

- A vágyálom rendszer azért felelős, hogy kifejtsük benne mit szeretnénk célul a programunkban a 100%-ban ideális esetben. Ilyen-olyan feature-ök jelenléte, és ideális állapotuk.
- A projekt célja egy olyan szoftver elkészítése, ami lehetőséget nyújt az egyszerűbb, korszerűbb adatok kezeléséhez a kemping részére. Zavartalan működést biztosít.
- Könnyíti a könyvelési feladatokat. Csökkenti ezeknek az idejét és a költségét, ezzel megkönnyítve az alkalmazottak munkáját.
- A rendszer a pénzkezelést és a foglalások követhetőségét sokkal egyszerűbbé teszi. 
- Ki lehet listázni a foglalásokat és a hozzájuk tartozó információkat.
## Funkcionális követelmények
 A recepciós, mint felhasználó lehetőségei:

-   Lekérdezheti a szabad férőhelyeket egy adott időközre a vendég kérése szerint.
-   Betáplálhatja a rendszerbe a kérést miszerint a vendég sátorral, vagy karavánkocsival szeretne a kempingbe tartózkodni, szüksége van-e áramra, illetve mettől meddig marad a kempingben.
-   Le tudja foglalni a vendég számára a megfelelő helyet.
-   Számlát tud előállítani
## Rendszerre vonatkozó törvények szabványok, ajánlások
>   1999. évi L XXVI. törvény a szerzői jogról 210/2009. (IX. 29.) Korm. rendelet a kereskedelmi tevékenységek végzésének feltételeiről
AZ EURÓPAI PARLAMENT ÉS A TANÁCS 1169/2011/EU RENDELETE (2011. október 25.) A természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.)

>  1997. évi CLV. törvény a fogyasztó védelemről

>  2001. évi CVIII. törvény – az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről (főképp a 13/A. §-a)

>  2011. évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról (a továbbiakban: Infotv.)
>  
>  2016. évi XCIII. törvény a szerzői jogok és a szerzői joghoz kapcsolódó jogok közös kezeléséről

## Jelenlegi üzleti folyamatok modellje

 - A XXI. században sajnos még mindig sokan vannak, akik az ilyen jellegű foglalásokat papír alapon kezelik. Ezek a megoldások és nem túl környezetbarátnak számítanak a mai világban.
 - A recepciós lassan és nehezen látja át a foglalásokat papír alapon, emellett nő a hibalehetőségek száma is.
 - A papír alapú könyvelés is növeli a hibázás kockázatát, nehezebben is javítható.

## Igényelt üzleti folyamatok

- A megrendelő kérésére a recepciós lekérheti az ügyfelek adatait, megkönnyítve ezzel a recepciós munkáját.

## Követelménylista
| követelménysorszám| követelmény megnevezése| Követelményekről bővebben 
|--|--|--|--|--|
|K00| Férőhelyek lekérdezése | Egy adott intervallumban lekérdezheti a férőhelyek állapotát amelyet egy térképen jelenít meg zöld színnel ha szabad és szürkével ha foglalt.
|K01| Férőhely lefoglalása | Ez egy külön form amelyen az adatok megadásával letudja foglalni a kemping helyet adott időre.
|K02| Foglalások kilistázása | A már lefoglalt férőhelyeket táblázatban megjeleníti az oldalon 
## Riportok

## Fogalomtár

 - Cella: egy kisebb terület, melyen meg tudnak szállni a vendégek lakókocsival vagy sátorral
 - Számla: Olyan számadási bizonylat, amelyet ezen szolgáltatás teljesítésekor állítanak ki
 