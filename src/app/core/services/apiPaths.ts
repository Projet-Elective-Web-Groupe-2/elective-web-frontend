/**
 * Constants for all routes that are exposed by the backend
 */
export const API = Object.freeze({
    currentUser: '/current-user',
    successLoginUrl: '/login?successUrl=' + encodeURI(window.location.href),
    createAccount: '/auth/register'

  });
  