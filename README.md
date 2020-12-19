STRUCTURE DU SITE FULLSTACK 

	1 - Definir la structure du projet DFD : flux de donnée 
	
		BOOTSTRAP 
		
	2 - Menu en barre de navigation : Navbar
	
	3 - HOME
		
		Options du menu 
			-Le CRUD : GenericService
			-Model : Object, Class, Interface
			-Notion de service: Heritage
				. HttpClient ==> @angular/common/http
				. HttpClientModule 
		
	*Un pieds de page : Footer
	*Json-server 
	*Playliste [Lecteur de video youtube]
	
	4 - Formulaire
	
	5 - Cours (Projet)
		* - Lien vers le TP1
		* Mini tutoriel sur angular
		* Mini tutoriel sur les commandes angular 
		* Mini tutoriel sur TS
		* Mini Tutoriel sur les Relations entre Object
		
	6 - Pagination
	
	7 - Creativité
	
	1 - DEBUT APPLICATION 
	
	Creation : ng new tpSynthese --routing
	
	Installation de la librairie FontAwesome : npm i @fortawesome/fontawesome-free --save
	Installation de la librairie Bootstrap : npm i bootstrap --save
	Installation de la librairie jquery : npm i jquery --save
	Installation de la serveur json-server : npm i json-server --save
	
	1 - Configuration du fichier angular.json
	
	integration des fichiers de styles[ bootstrap et fortawesome/fontawesome ]
	integration des fichiers de script[ jquery et javascript ]
	
	2 - Ajout des modules 
		
		HttpClientModule, de [import { HttpClientModule } from '@angular/common/http';]
		FormsModule  de [import { FormsModule } from '@angular/forms';]
		
	3 - Creation des composants de la barre de navigation
	
		Creation du dossier : APPLICATION {
			
			* composant contact
			* composant formulaire
			* composant home
			* composant tutoriel
			* composant footer
			* composant fun
			* composant crud : {
				
				* composant delete
				* composant update
				* composant read
				* composant create
			}
		}
	4 - FORMULAIRE 
		#form1 = "ngForm" ajout au formulaire pour le rendre reactif, il est controlé par Forms
		{{ {{ form1.value | json }} }} tout a la fin du formulaire pour débugger
		*Controle du formulaire : required #classTest : 3 attributs {1 - touch, pristing, valid} ensuite on ajoute {{ classTest.className }}
		
		* On crée une interface avec un record exemple: User (avec tous les champs), et on crée l'object user: User = {} dans formulaire.ts
		*utiliser l'interpolation : [(ngModel)]="user.subscriptionType
		* Creation d'un evenement avec la commande form #form1 = "ngForm" (ngSubmit) = "onSubmit(form1)" ensuite on crée la methode dans formulaire.ts
	
	Recuperation du linkRouter dans la router Active
		* declaration d'une variable dans le component.ts du composant on peut le mettre a any
		* on declare un paramettre private dans le constructeur private: Activate
	
	
	RESSOURCES 
	----------------------------------------------------------------------------
	|                                                                                   				
	|        import { HttpClient } from '@angular/common/http';					|
	         import { Observable } from 'rxjs';									|


			export class GenericService<T, ID> {

			constructor(protected http: HttpClient, protected url: string){}
		   
		   
			post(t: T): Observable<T> {
				return this.http.post<T>(this.url, t);
			}

			getAll(): Observable<T[]> {
				return this.http.get<T[]>(this.url);
			}

			getById(id: ID): Observable<T> {
				return this.http.get<T>(this.url + '/' + id);
			}

			put(id: ID, t: T): Observable<T> {
			   return this.http.put<T>(this.url + "/" + id, t, {});
			}

			deleteById(id: ID): Observable<T> {
        return this.http.delete<T>(this.url + "/" + id);                                                                          
	
    }
    

}

======================================================================
[routerLink] = "['/home']"



<!-- 
<ng-container [ngSwitch]="myParametre">
<ng-container *ngSwitchCase="1">
    <div>
        <h1>Mini tutoriel Angular 10</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi eum sapiente delectus optio, et at repudiandae. Omnis repudiandae similique enim tenetur ipsa odit quaerat, et quia, soluta natus velit facere officiis tempora culpa repellendus necessitatibus accusamus. Fugiat quod nobis aut rem modi magni! Sit sequi facilis omnis, saepe fuga, repellendus, similique quod nobis recusandae tenetur libero? Nisi minus ut natus, labore quos vitae! Ipsa quas doloribus et dolor, reiciendis aut eligendi perspiciatis rem animi ratione architecto cum expedita doloremque recusandae cumque tenetur a esse! Hic cupiditate quasi voluptas facere, neque perspiciatis autem doloribus officiis voluptatibus laboriosam vel fugit deserunt exercitationem dolorum natus perferendis modi pariatur magnam voluptatem qui. Officia error fugiat perspiciatis id esse fugit cum quibusdam. Provident veniam rem assumenda dolorem id corrupti optio eveniet voluptatibus ut consectetur eligendi, nostrum deserunt repellendus debitis accusantium explicabo esse repudiandae deleniti hic blanditiis totam earum at. Architecto repellendus molestias aspernatur neque asperiores commodi fuga nihil, itaque quod rem assumenda! Beatae est saepe debitis. Accusantium, consequatur possimus veniam tempora impedit atque, vero voluptatem accusamus illum ullam nostrum exercitationem? Repellendus animi similique suscipit ut consequatur eveniet repudiandae, alias nesciunt dignissimos, et sunt magni. Modi, laboriosam! Quas deserunt minima harum, ipsam aliquam atque dolorem accusantium.</p>
    </div>
</ng-container>
<ng-container *ngSwitchCase="2">
    <div>
        <h1>Mini tutoriel Crud</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perspiciatis neque, nihil labore iure numquam minima soluta aut distinctio mollitia placeat natus veritatis autem libero alias quo officiis! Ducimus distinctio id voluptatibus laboriosam quas eligendi iste sequi similique quidem, corrupti est facilis, earum a perspiciatis temporibus nihil libero nobis velit impedit cumque quia exercitationem ipsam dolor. Sed earum animi facilis tenetur voluptate eaque, rerum commodi placeat quisquam laboriosam accusamus officiis totam consequuntur, molestiae voluptatum non suscipit dignissimos. Unde impedit numquam nisi placeat aperiam amet, labore fugiat mollitia iste! Excepturi eligendi, magnam suscipit facilis culpa provident dolorum perspiciatis nostrum distinctio reiciendis.</p>
    </div>
</ng-container>
<ng-container *ngSwitchCase="3">
    <div>
        <h1>Mini tutoriel Relations</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum expedita quisquam assumenda hic accusamus quos. Nobis, illo mollitia! Et suscipit architecto rem saepe sapiente ipsum vero itaque, laborum corporis quo corrupti dicta similique cumque illo cupiditate deleniti debitis! Optio cumque esse laudantium nulla dignissimos porro minus quam facere laborum blanditiis!</p>
    </div>
</ng-container>
<ng-container *ngSwitchDefault>
    <div>
       
    </div>
</ng-container>
</ng-container> -->
























# Fullstack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
