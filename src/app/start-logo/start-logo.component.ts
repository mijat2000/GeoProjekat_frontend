import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-logo',
  templateUrl: './start-logo.component.html',
  styleUrls: ['./start-logo.component.scss'],
})
export class StartLogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
