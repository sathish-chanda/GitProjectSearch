import { Injectable } from '@angular/core';
import { GitUsers } from './git-users';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  cachedValues: Array < {
    [query: string] : GitUsers;
  }> = [];

  gitUsers = (query: string) : Promise<GitUsers> => {
    let promise = new Promise<GitUsers> ((resolve,reject) =>{
        if(this.cachedValues[query])
        {
           resolve(this.cachedValues[query]);
        } 
        else
        {
          this.http.get("https://api.github.com/search/users?q="+query)
          .toPromise()
          .then((response) => {
            resolve(response as GitUsers)
          },(error) => {
            reject(error);
          }
          )
        }  
    })
    return promise;
  }

  constructor(private http: HttpClient) {
       
   }

}
