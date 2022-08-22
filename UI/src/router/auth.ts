import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default async function confirmAuth(
    to: RouteLocationNormalized, 
    from: RouteLocationNormalized, 
    next: NavigationGuardNext
): Promise<void> {
    
    try {
        //TODO: establish connection to user api endpoint and confirm authentication and authorization
        return next();
    }
    catch (error) {
        //TODO: establish logging back to error collection api with failover back to local disk
        return next('/unauthorized');
    }

    
}