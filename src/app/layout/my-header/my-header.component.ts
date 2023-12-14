import { Component, OnInit } from '@angular/core';
import { faGgCircle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  Tron = faGgCircle;
  constructor() {}

  ngOnInit() {}
}
