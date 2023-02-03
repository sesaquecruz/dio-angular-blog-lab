import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeData } from 'src/app/data/fake.data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() text: string = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')!
      const data = FakeData.getById(id);

      this.image = data.image;
      this.title = data.title;
      this.text = data.text;
    });
  }
}
