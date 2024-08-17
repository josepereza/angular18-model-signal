import { Component, model } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styles: ['h2 { color: red; }']
 
 

})
export class hijoComponent {
  page = model.required<number>(); 
  cambiopage(page:number){
    this.page.set(page)
  }
}
