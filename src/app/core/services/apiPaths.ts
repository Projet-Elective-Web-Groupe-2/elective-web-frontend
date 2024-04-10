/**
 * Constants for all routes that are exposed by the backend
 */
export const API = Object.freeze({
    createAccount: '/auth/register',
    login: '/auth/login',

    editUser: '/user/edit',
    deleteUser: '/user/delete',
    activateUser: '/user/unsuspend',
    disableUser: '/user/suspend',
    getUserInfo: '/user/get',
    getUsers: '/user/getAll',

    getOrder: '/order/getOrder',
    getOrders: '/order/getOrders',
    getOrderCount: '/order/getOrderCount',

    createArticle:'/product/add',


    getRestaurant:'/restaurant/getAll',
    getRestaurantDetail:'/restaurant/find',



  });
  