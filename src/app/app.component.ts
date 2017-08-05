import { OnInit, Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Himeji";

  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  latestItems: Array<any>;

  constructor(private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.latestItems = res);
  }

  openSidebar(){
    this.sidebar.openSidebar();
  }

  ngOnInit() {

  }

}
