
  import {Component, computed, effect, EffectRef, signal} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstSignal';

  signalQty = signal<number>(1);
  
  computedValue = computed( () => this.signalQty()+5);



constructor() {

  
  setInterval( () =>{
    console.log("calling update value for "+ this.signalQty());
    this.signalQty.update( (qty) => qty +1)}, 100);

    effect (() => console.log('curr val is '+ this.signalQty()));
}

}
