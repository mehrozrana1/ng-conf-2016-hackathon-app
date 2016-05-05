import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1><hr/>
  `,
   styleUrls: [`src/style.css`]
})
export class App {
  title: string = 'Countries and Capitals';
}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
