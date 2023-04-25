import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from "@angular/router";

export class TabRouteReuseStrategy implements RouteReuseStrategy {
  reusableKeys = ['tab-details'];
  storedRouteHandles = new Map<string, DetachedRouteHandle>();

  private parseRouteId(route: ActivatedRouteSnapshot): string {
    const path = route.data['key'];
    const id = route.params['id'];

    return `${path}-${id}`;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data['shouldReuse'] && this.reusableKeys.includes(route.data['key']);
  }


  // This method is executed when the shouldDetach method returns true
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const key = this.parseRouteId(route);
    // the {{handle}} is the component instance that was detached
    this.storedRouteHandles.set(key, handle);
  }

  // This method is used to determine whether the component that we are trying to load / navigating to should be re-used (retrieved)
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // This almost could be thought as a toggle. Though it's possible to customize for specific routes
    // Only store the component instance if it's not already stored
    return route.data['shouldReuse'] && this.reusableKeys.includes(route.data['key']) && this.storedRouteHandles.has(this.parseRouteId(route));
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
    // So I had to add the checks below to make sure that the route is not re-used when the id param changes
    // Otherwise the future.routeConfig === curr.routeConfig would always be true and the tab component would not be reused
    const futureKey = future.data['key'];

    // If this is not a reusable rout (with "data" parameter on routes array) don't reuse it
    if (!future.data['shouldReuse'] || !this.reusableKeys.includes(futureKey)) {
      return false;
    }

    // Are keys different?
    if (this.parseRouteId(curr) !== this.parseRouteId(future)) {
      return false;
    }

    return future.routeConfig === curr.routeConfig;
  }
}
