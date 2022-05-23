# AJAX-Pokedex
AJAX Pokedex challenge by BeCode
***
## Learning Objectives

* A typical AJAX flow: send asynchronous requests to a remote server and process the results;
* **[JSON](https://www.w3schools.com/js/js_json_intro.asp)** (JavaScript Object Notation) format;
* DOM manipulation: changing the DOM based on results of AJAX-requests.
***
## Exercise

Make a [Pokédex](https://www.google.com/search?q=pokedex&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRtNT3-vDfAhWDy6QKHd1cBD4Q_AUIDigB&biw=1300&bih=968#imgrc=_) using [this API](https://pokeapi.co/).

Basic functionality that is expected (read: core features):
* [ ] You can search a pokémon by name and by ID
* Of said pokémon you need to show:
    * [ ] The ID-number
    * [ ] An image (sprite)
    * [ ] _At least_ 4 "moves"
    * [ ] The previous evolution, _only if it exists_, along with their name and image. Be carefull, you cannot just do ID-1 to get the previous form, for example look into "magmar" - "magmortar". You have to use a seperate api call for this!

* [ ] Make your web page look like a pokédex by adding a little CSS.

_Note: For this exercise, the goal is to keep working on it, until the deadline is reached. If you are finished adding all "core features", look at what else the API has to offer, and try adding some other features. At the end of the deadline, everyone is going to present the pokédex they made; As such it is important that you have published your web page on GitHub!_

### Getting Started:
* Set up the html page and make sure following features are available
  * [ ] Input search field for the name
  * [ ] Input search field for the ID
  * [ ] A text field that shows the ID-number
  * [ ] An image field that shows the Pokémon
  * [ ] A text field that shows its available "moves"
  * [ ] A field that shows previous evolution(s), if there are any
    * [ ] Show the Pokémon's name
    * [ ] Show the Pokémon's image

* Css
  * [ ] Make it look like a Pokédex

* JavaScript
  * [ ] Check out the exercises around Fetch
  * [ ] Fetch & display the Pokémon's name
  * [ ] Fetch & display the Pokémon's ID (I saw there are 898 you can find by ID)
  * [ ] Fetch & display the Pokémon's image
  * [ ] Fetch & display the Pokémon's moves (at least 4)
  * [ ] Create a function that gets and shows previous evolutions of a Pokémon

#### Things that will help me:
* Look back at the exercises with the X-Men
* Check out [MDN](https://developer.mozilla.org/en-US/)
***
# Extra challenge
There are a couple of Pokémon that don't play with the normal rules, add code so their cases are also handled elegantly.

- Ditto only has 1 move.
- Eevee has 6 evolutions.
