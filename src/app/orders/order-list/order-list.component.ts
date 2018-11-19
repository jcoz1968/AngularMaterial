import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 103,
    total: 41.22,
    description: '1lbs of yellow tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 104,
    total: 21.99,
    description: '15lbs of tuna parts',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 105,
    total: 27.99,
    description: '11lbs of medium tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 106,
    total: 37.22,
    description: '18lbs of cheap tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = [ 'action', 'orderNumber', 'orderDate', 'description', 'total' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for (const elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }

}
