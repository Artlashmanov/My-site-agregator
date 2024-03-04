export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favorite: '/favorites',
  Offer: '/offer',
  Paint: '/paint',
  Repair: '/repair',
  Detailing: '/detailing',
  Tuning: '/tuning',
  Parts: '/parts',
  Events: '/events'

} as const;

export enum AuthorizationStatus {

  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

