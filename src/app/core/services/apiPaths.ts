/**
 * Constants for all routes that are exposed by the backend
 */
export const API = Object.freeze({
    createAccount: '/auth/register',
    login: '/auth/login',

    editUser: '/user/edit',
    deleteUser: '/user/delete',
    getUserInfo: '/user/get',

    getOrder: '/order/getOrder',
    getRestaurant:'/restaurant/getAll',
    getRestaurantDetail:'/retaurant/find',

    getOrders: '/order/getOrders'


  });
  