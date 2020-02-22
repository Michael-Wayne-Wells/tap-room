# Tony Danza's Tap Room
## Created by Michael Wells


## Description
This application is a website for a imagenery beer hall to demonstrate setup and routing in React.

Diagram of routing:

![diagram](/diagram.png)

## State and information flow:
* App.js is the only Stateful component

### New Beer:
* A new beer is added to by the user on NewBeer.jsx 
* Information is passed through and rendered in App.jsx
* Information is the passed through BeerList to its endpoint, Beer.jsx


### Sell Beer:
* User clicks Sell button
* sellBeer function is called via props in App.js
* kegAmount is decremented and information is then passed back down through Beerlist and then Beer.
* As kegAmount changes, this value is illustrated in the keg image.
* If kegAmount hits 0, It will show the keg is empty and given an option to delete it.


### Delete a Beer:
* User clicks Delete
* removeBeer function is called in App.js via props
* Beer with matching index is removed and masterBeerList is updated
* information is then passed to BeerList.jsx


## This website allows users to:
* See available beers with flavor notes, cost, ibu, abv, and price
* Fill out a form to add a new beer
* 'Sell' a beer
* See the amount left in a particular keg
* Remove a keg
* Navigate as though this single page is multple pages


## Setup/Installation Requirements

* clone and open the file locally
* _in terminal run:_
>$git clone https://github.com/Michael-Wayne-Wells/tap-room.git

* Navigate into project folder

>$cd tap-room

* _install webpack_

>$npm install

* _run the program_

>$npm run start



## Known Bugs

_No known bugs_

## Support and contact details

_If you have any issues with the program or want to reach out, email [mwells1286@gmail.com](href="mailto:mwells1286@gmail.com")_

## Technologies Used

_This program utilized:_
* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _React_

### License

*Licensed under MIT license*

Copyright (c) 2020 **_Michael Wells_**
