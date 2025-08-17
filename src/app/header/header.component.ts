import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authservice = inject(AuthService);
  currentUser: any = null;
  async ngOnInit() {
    this.authservice.currentUser$.subscribe((user) => {
      this.currentUser = user;
    })
  
  }
}
