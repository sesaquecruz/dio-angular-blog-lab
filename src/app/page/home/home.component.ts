import { Component, OnInit } from '@angular/core';
import { Data, FakeData } from 'src/app/data/fake.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bigCards: Data[] = [];
  smallCards: Data[] = [];

  ngOnInit(): void {
    this.bigCards.push(FakeData.data[0]);

    for(let i = 1; i < FakeData.data.length; i++)
      this.smallCards.push(FakeData.data[i]);
  }
}
