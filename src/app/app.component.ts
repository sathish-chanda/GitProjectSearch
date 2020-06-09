import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private GitSearchService: GitSearchService,private GitUsersService: GitUsersService)
  {

  }

  ngOnInit(){
      // this.GitSearchService.gitSearch('java').then((response) => {
      //   alert('Total Libraries Found: '+response.total_count);
      // },(error) => {
      //   alert("Error: " + error.statusText);
      // })

      // this.GitUsersService.gitUsers('john').then((response) => {
      //   alert('Totaaaaaaaaaaaaaaaaaaaaaaal Libraries Found: '+response.total_count);
      //   alert('First login user name : '+response.items[1].login);
      // },(error) => {
      //   alert('Errrrrror  : '+error.statusText);
      // })
  }

  title = 'app is functional!';
}
