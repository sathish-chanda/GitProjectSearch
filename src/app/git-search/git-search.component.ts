import { GitSearch } from '../git-search';
import { GitSearchService } from '../git-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResult: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;

  constructor(private GitSearchService: GitSearchService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param : ParamMap) => {
      this.searchQuery = param.get('query');
      this.displayQuery = param.get('query');
      this.gitSearch();
    })
    this.route.data.subscribe((result) => {
         this.title = result.title;
    });

  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResult = response;
    },(error) => {
      alert("Error: " + error.statusText);
    })
  }

  sendQuery = () => {
    this.searchResult = null;
    this.router.navigate(['/search/'+this.searchQuery]);
  }

}
