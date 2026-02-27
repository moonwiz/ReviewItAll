import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {

  http = inject(HttpClient);
  router = inject(Router);
  
  categories: any[] = [];

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get(environment.apiUrl + '/categories').subscribe((result: any) => {
      this.categories = result;
    });
  }

  onLogout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }

}
