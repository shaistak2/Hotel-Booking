import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'phone', 'website'];
  data: any;
  dataSourceOne: MatTableDataSource<any>;

  constructor(private userService: UserService) {
    this.dataSourceOne = new MatTableDataSource;
   }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.data = data;
      this.dataSourceOne = new MatTableDataSource(this.data);
  }, error => console.error(error));
  }
  }


