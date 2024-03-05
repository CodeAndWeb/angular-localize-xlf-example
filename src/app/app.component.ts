import { Component } from '@angular/core';

enum Fruit { apple = 'apple', pear = 'pear' };

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = "John Doe";
  helloAgain = $localize `:A text defined in the typescript file@@main.hello-again:Hello again!`;
  counter = 1;
  fruit:Fruit = Fruit.apple;

  public changeCounter(change:number)
  {
      this.counter = Math.max(0, this.counter+change);
  }

  public toggleFruit()
  {
      this.fruit = this.fruit === Fruit.apple ? Fruit.pear : Fruit.apple;
  }
}