import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { RouteInfo } from '../../Models/route-info.model';
import { availableRoutes } from '../../Data/routes.data';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {

  isDropdownOpen = false;
  isTopDropdownOpen = false;
  availableRoutes: RouteInfo[] = availableRoutes;
  menuOpenState: Map<any, boolean> = new Map();
  menuOpenStateTop: Map<any, boolean> = new Map();

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) { }

  isRouteActive(route: RouteInfo) {
    return this.router.isActive(route.routePrefix.en + route.path.en, true);
  }

  toggleDropdown(item: any, open: boolean) {
    if (item) {
      this.menuOpenState.set(item, open);
      this.menuOpenStateTop.set(item, open);
    }
  }

  calculateDropdownClasses(item: any) {
    return this.menuOpenState.get(item) ? 'NavDropdown vir-nav-show' : 'NavDropdown';
  }
}
