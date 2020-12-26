import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.scss']
})
export class OperatorsListComponent implements OnInit {

  operators: IOperator[] = [];

  constructor() { }

  ngOnInit(): void {
    this.operators = [
      {
        id: 1,
        name: 'MTS'
      },
      {
        id: 2,
        name: 'Beeline'
      },
      {
        id: 3,
        name: 'Megafon'
      }
    ]
  }

}

export interface IOperator {
  name: string;
  id: number;
}
