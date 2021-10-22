import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-booking';
}
