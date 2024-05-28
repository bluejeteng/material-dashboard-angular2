import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'app/farmer.service';

interface Farmer {
  name: string;
  lastName: string;
  email: string;
  address: string;
  state: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class FarmerListComponent implements OnInit {
  farmers: Farmer[] = [];

  constructor(private farmerService: FarmerService) { }

  ngOnInit(): void {

  }
}
