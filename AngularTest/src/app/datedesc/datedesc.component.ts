import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datedesc',
  templateUrl: './datedesc.component.html',
  styleUrls: ['./datedesc.component.css']
})
export class DatedescComponent implements OnInit {

  days = [
    {day: 'пт', date: '12'},
    {day: 'сб', date: '13'},
    {day: 'вс', date: '14'},
    {day: 'пн', date: '15'},
    {day: 'вт', date: '16'},
    {day: 'ср', date: '17'},
    {day: 'чт', date: '18'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
