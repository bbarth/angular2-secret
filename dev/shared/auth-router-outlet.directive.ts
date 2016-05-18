import {RouterOutlet, Router, ComponentInstruction} from 'angular2/router';
import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {AuthService} from "./auth.service";

@Directive({
    selector: 'auth-router-outlet'
})

export class AuthRouterOutlet extends RouterOutlet {
  private _router: Router;
  private _protectedRoutes = {
      'protected': true,
  };

  constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader, _parentRouter:Router, @Attribute('name') _nameAttr:string,
              private _authService: AuthService) {
      super(_elementRef, _loader, _parentRouter, _nameAttr);
      this._router = _parentRouter;
  }


  activate(nextInstruction: ComponentInstruction): Promise<any> {
      const url = nextInstruction.urlPath;
      if (this._protectedRoutes[url] && !this._authService.isAuthenticated()) {
          this._router.navigate(['Signin']);
    }
    return super.activate(nextInstruction);
  }
}
