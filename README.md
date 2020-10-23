This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
To install npm and be able to run the backend

### `npm start`

#### Projekt-Frontend


För att kunna skapa en realtids-mikroservice används socket.io tillsammans med Express som grund, valet var enkelt då dessa verktyg är stabila och etablerade. Genom att hämta datan direkt från vårt projekt-API får vi en förhållandevis snabb koppling där servicen skickar ut uppdaterad information om priset var femte sekund. Den data som skickas ut kan sedan filtreras direkt i frontenden för att underlätta datahämtningen. Uträkningen för priserna hade samma utgångspunkt och har därefter fått utvecklas med hjälp av den Wiener-process som vi fått tillgång till i Emils exempel-repo, med vissa mindre ändringar.
Datan skickas ut med alla decimaler för att kunna rendera graferna i frontenden så noga som möjligt, och avrundas i frontenden där behov finns. Uträkningen för priset ligger i en separat fil, socket-simulation.js, men all övrig information återfinnes i app.js.

Jag upplever att socket.io är ett välfungerande vertyg för realtidsapplikationer, men då jag inte har speciellt mycket att jämföra med är det svårt att vidareutveckla en analys. Den gör det som den ombeds om, är förhållandevis enkelt att integrera i React och är ganska rättfram i det den gör. Jag misstänker att man vid fortsatt användning kommer kunna utnyttja tekonologin ytterligare.
