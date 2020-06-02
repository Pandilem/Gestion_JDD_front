import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FiltreService} from '../services/filtre.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() text;
  @Input() nom;
  @Input() description;

  constructor() {
  }

  ngOnInit() {
  }
}
