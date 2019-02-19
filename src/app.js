import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      beers: [],
      selectedBeerIndex: "",
      selectedBeer: null,
      favouriteBeers: []

    },
    mounted: function(){
      this.getBeers()
    },

    methods: {
      getBeers: function(){
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(data => this.beers = data)
      },

      beerSelect: function(){
        this.selectedBeer = this.beers[this.selectedBeerIndex]
      },

      addToFavourites: function(){
        // This method returns -1 if the value to search for never occurs
        if(this.favouriteBeers.indexOf(this.selectedBeer) === -1) {
          this.favouriteBeers.push(this.selectedBeer);
        }
      },

      removeBeer: function(index) {
        this.favouriteBeers.splice(this.id, 1)
      }
    }
  })
})
