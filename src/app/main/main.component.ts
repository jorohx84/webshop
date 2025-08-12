import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
dataservice=inject(DataService);

constructor(){
  this.test();
}
test(){
console.log(this.dataservice.testKey);
}


}
