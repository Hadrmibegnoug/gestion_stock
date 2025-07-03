import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated == true) {
    // User is authenticated, allow access
    return true;

  } else {
    router.navigateByUrl('/login'); // Redirect to login page if not authenticated
    return false; // User is not authenticated, deny access
  }
};
