/**
 * Constants for all routes that are exposed by the backend
 */
export const API = Object.freeze({
    createAccount: '/auth/register',
    login: '/auth/login',

    logs:'/auth/logs',

    editUser: '/user/edit',
    deleteUser: '/user/delete',
    activateUser: '/user/unsuspend',
    disableUser: '/user/suspend',
    getUserInfo: '/user/get',
    getUsers: '/user/getAll',

    getOrder: '/order/getOrder',
    getRestaurant:'/restaurant/getAll',
    getRestaurantDetail:'/retaurant/find',

    getOrders: '/order/getOrders'


  });
  