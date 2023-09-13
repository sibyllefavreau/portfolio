import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-patisserie-page',
  templateUrl: './patisserie-page.component.html',
  styleUrls: ['./patisserie-page.component.css']
})
export class PatisseriePageComponent {
  nombreEntremet:number=0;
  titrePage=['Mes desserts','My desserts'];
  paragraphe=[ 'Depuis petite j’aime pâtisser et surtout manger mes réalisations ensuite. J’ai ainsi pu faire de beaux gâteaux et m’améliorer avec les années, ce qui m’a permit de me lancer dans la réalisation d’entremets plus complexes, en prenant toujours autant de plaisir à cuisiner qu’à déguster. ' ,'Ever since I was a little girl, I\'ve loved baking and, above all, eating my creations afterwards. I\'ve been able to make beautiful cakes and improve over the years, which has enabled me to start making more complex desserts, always taking as much pleasure in cooking as in eating.'];
  titreSection=[
    ['Mes entremets', 'My desserts'],
    ['Mes gâteaux', 'My cakes']
  ];

  titreEntremet=[
    ['Entremets chocolat poire', 'Chocolate pear dessert'],
    ['Entremets au praliné', 'Praline dessert'],
    ['Entremets pomme kiwi', 'Apple and kiwi dessert'],
    ['Entremets café praliné','Coffee and praline dessert']
  ];
  photoEntremet=['assets/chocolatPoire.jpg','assets/praline.jpg','assets/kiwi.jpg','assets/cafe.jpg' ];
  photoPartEntremet=['assets/partChocolatPoire.jpg','assets/partPraline.jpg','assets/kiwiPart.jpg','assets/cafePart.jpg'];
  schemaEntremet=['assets/dessinChocolatPoireLegende.png'];
  description=[
    ['Entremets fait pour les 18 ans de mon frère réalisé en 2h et 2 nuits, constitué d’un brownie chocolat, d’une mousse au chocolat au lait, d’un insert à la poire et d’un glaçage miroir au chocolat noir','Dessert made for my brother\'s 18th birthday in 2 hours and 2 nights, consisting of a chocolate brownie, milk chocolate mousse, pear insert and dark chocolate mirror icing.'],
    ['Entremets pour 12 realisé en 3h et 1 nuit, composé d\'une dacquoise noisette coupé en deux, d\'un croustillant au praliné, d\'un crémeux au chocolat noir, d\'une mousse au praliné, le tout récouvert d\'un glaçage au chocolat et entouré d\'un cercle en chocolat noir. ','Entremets for 12 made in 3 hours and 1 night, consisting of a hazelnut dacquoise cut in half, a crispy praline, a dark chocolate cream, a praline mousse, all covered with a chocolate and surrounded by a circle of dark chocolate.'],
    ['Entremets pour 8 réalisé en 2h30 et 2 nuits, composé d\'un sablé breton, d\'un insert kiwi, d\'une mousse à la pomme verte, le tout recouvert par un glaçage miroir vert au chocolat blanc, et entouré par un cercle en chocolat blanc.','Entremets for 8 made in 2h30 and 2 nights, consisting of a Breton shortbread, a kiwi insert, a green apple mousse, all covered with a green mirror glaze with white chocolate, and surrounded by a circle in White chocolate.'],
    ['Entremets pour 6 réalisé en 2h30 et 2 nuits, composé d\'un financier noisette, d\'un crémeux praliné noisette réalisé à partir d\'un praliné noisette maison et d\'une mousse bavaroise au café, le tout recouvert par un glaçage miroir marron au chocolar blanc.  ','Entremets for 6 made in 2h30 and 2 nights, composed of a hazelnut financier, a creamy hazelnut praline made from a homemade hazelnut praline and a Bavarian coffee mousse, all covered with a brown mirror glaze with white chocolate.']
  ];

  titreGateau=[
    ["Fraisier", "Strawberry cream cake"],
    ["Opéra", "Opera cake"],
    ["Gâteau du millionaire","Millionaire cake"],
    ["Tiramisu framboise","Raspberry tiramisu"],
    ["Charlotte poire chocolat", "Chocolate pear charlotte"],
    ["Cupcakes", "Cupcakes"]
  ];

  photoGateau=['assets/fraisier.jpg', 'assets/opera.jpg', 'assets/millionaire.jpg','assets/tiramisu.jpg', 'assets/charlotte.jpg', 'assets/cupcake.jpg'];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
    if (param.chemin == '/loisirs/patisserie') {
      service.styleBoutonsLoisirs = ["styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbiesActive", "styleButtonHobbies", "styleButtonHobbies"];
    }
  }
  derouleGauche(){
    if (parseInt(this.param.nbEntremet)!=1){
      const nombre = parseInt(this.param.nbEntremet)-1;
      this.param.nbEntremet=nombre.toString()
      this.nombreEntremet=nombre-1;
    }
  }
  derouleDroite(){
    if (parseInt(this.param.nbEntremet)!=4){
      const nombre = parseInt(this.param.nbEntremet)+1;
      this.param.nbEntremet=nombre.toString()
      this.nombreEntremet=nombre-1;
    }
  }
}
