import { GitSearch } from '../git-search';
import { GitSearchService } from '../git-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResult: GitSearch;
  searchQuery: string;
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit(): void {
    this.GitSearchService.gitSearch('java').then((response) => {
      console.log(response);
      this.searchResult = response;
    },(error) => {
      alert("Error: " + error.statusText);
    })
  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResult = response;
    },(error) => {
      alert("Error: " + error.statusText);
    })
  }

}
