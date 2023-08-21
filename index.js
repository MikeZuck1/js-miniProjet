// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const isDifferent = () => {
  let num = 8; 

  if(num != 7) { // le signe signifie 'est différent de'
      console.log(true + ' => Il y a bien une différence de nombre!');
      // console.log(num + ' Est different de 7!');
  } else {
      console.log(false + ' => Il n\'y pas de différence de nombre!');
      // console.log(num + ' n\'est pas différent.');
  }

  // utilisation du tableau
  const fruits = ['Banana', 'Orange', 'Apple']
  for(const fruit of fruits) {
      if(fruit != 'Ananas') {
          console.log(true); 
      } else {
          console.log(false);
      }
  }
}; 
isDifferent(); // appel à la fonction 


let comparasonBetweenTwoNumbers = function() {
  let nombre1 = 12 
  let nombre2 = 15

  if(nombre1 < nombre2) {
      console.log(true);
      if(nombre1 > nombre2) {
          console.log(false);
      } else {
          console.log('Oups!');
      }
  }

  let halley = {
      _name: 'Halley', 
      _behavior: 0, 

      get name() {
          return this._name
      }, 

      get behavior() {
          return this._behavior; 
      },

      incrementBehavior() {
          this._behavior; 
      }
  }
  console.log(halley._name); 
  // should print : 
  // Halley

}
comparasonBetweenTwoNumbers(); // appel à la fonction 