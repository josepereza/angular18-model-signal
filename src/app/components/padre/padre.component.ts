import { Component, computed, inject, model } from '@angular/core';
import { hijoComponent } from '../hijo/hijo.component';


@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [hijoComponent],
  templateUrl: './padre.component.html'
})
export class PadreComponent {
  pageNumber:number=1
  checked=model('')


handler(text:string){
this.checked.set(text)
console.log(text)
}

cambiopage(data:number){
  this.pageNumber=data
}
}