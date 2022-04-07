# blok-tech
Hallo, hier de introductie tot mijn concept voor Project: Tech.

## Live Demo :zap:
Link naar live demo (not working yet) 
[Hier](https://github.com/Mitchel-DS/blok-tech)

## Het Concept - GaMerge :new_moon_with_face:
Gamerge, is een matching applicatie die gamers met elkaar merged, om vrienden te maken of gewoon samen brengt om elkaar te helpen. Gebruikers kunnen posts van andere gebruikers in zien en zelf bepalen op welke gereageerd wordt om te matchen.

## De Feature :calling:
Tijdens dit project werk ik 1 feature zo veel mogelijk uit. De Job Story die ik hierbij uitwerk is: 'Wanneer ik hulp nodig hebt met een game, wil ik een post op de feed kunnen plaatsen, zodat ik kan aangeven waar ik naar op zoek ben en andere gebruikers hierop kunnen reageren.' Deze feature is het posten van een bericht op de feed en een lijst met alle posts kunnen inzien. :smile:

## Installation guide :electric_plug:
### Clone link
Om te beginnen moet je de repository clonen naar je lokale machine. Dit kun je doen door het volgende in je terminal te typen op de locatie waar je de bestanden wilt hebben: 

```
git clone git@github.com:Mitchel-DS/blok-tech.git
```

### Packages :file_folder:
Voor een correcte installatie, moeten de volgende [packages](/package.json) worden geinstalleerd.

Dit kun je doen met:

```
npm install
```

### .env file :closed_lock_with_key:
Als gebruiker moet er zelf een .env file aangemaakt worden in de root. Deze moet je ook gelijk in je .gitignore zetten als je van plan bent deze bestanden naar een eigen repository te sturen. In de .env file moeten de volgende regels meegegeven worden:

```
PORT=<PORT NUMMER>
CONNECTION_STRING=<DATABASE CONNECTION STRING>
```

### Run applicatie :man_dancing:
Tot slot kun je de applicatie gaan runnen door het volgende in je terminal te typen:
```
npm start
```

## Bronnen :bookmark_tabs:
Bronnen die zijn gebruikt tijdens het maken van dit project:
* https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
* https://mongoosejs.com/docs/models.html
* https://handlebarsjs.com/guide/block-helpers.html

## License :globe_with_meridians:
Licensed met: [MIT license](/LICENSE.md) 
