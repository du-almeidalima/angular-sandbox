import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";

export class TabRouteReuseStrategy implements RouteReuseStrategy {
  reusablePaths = ['products/:id'];
  storedRouteHandles = new Map<string, DetachedRouteHandle>();

  private parseRouteId(route: ActivatedRouteSnapshot): string {
    const path = route.routeConfig?.path!;
    const id = route.params['id'];

    return path.replace(':id', id);
  }
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Product id details tab
    return this.reusablePaths.includes(route.routeConfig?.path!);
  }


  // This method is executed when the shouldDetach method returns true
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const path = this.parseRouteId(route);
    // the {{handle}} is the component instance that was detached
    this.storedRouteHandles.set(path, handle);
  }

  // This method is used to determine whether the component that we are trying to load / navigating to should be re-used
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path!;
    // This almost could be thought as a toggle. Though it's possible to customize for specific routes
    // Only store the component instance if it's not already stored
    return !!path && this.reusablePaths.includes(path) && this.storedRouteHandles.has(this.parseRouteId(route));
  }

  // This method is executed when the shouldAttach method returns true
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const handle = this.storedRouteHandles.get(this.parseRouteId(route));

    return handle ?? null;
  }


  //This method is used to determine whether to reuse the routes or not, it will be called for every route change,
  // if we try to navigate to the same component that we are currently in means, it will be re-used.
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // In this demo I tried to create a tabs component that relies on route id params to load a tab
    // So I had to add this check to make sure that the route is not re-used when the id param changes
    // Otherwise the future.routeConfig === curr.routeConfig would always be true and the tab component would not be reused
    const hasIdParamsChanged = future.params["id"] !== curr.params["id"];
    if (this.reusablePaths.includes(future.routeConfig?.path!) && hasIdParamsChanged) {
      return false;
    }

    return future.routeConfig === curr.routeConfig;
  }
}
