/**
 * Constants for all routes that are exposed by the backend
 */
export const API = Object.freeze({
    createAccount: '/auth/register',
    login: '/auth/login',

    logs:'/auth/logs',
    getComponentLog:'/component/getLogs',
    writeComponentLog:'/component/writeLogs',
    
    editUser: '/user/edit',
    deleteUser: '/user/delete',
    activateUser: '/user/unsuspend',
    disableUser: '/user/suspend',
    getUserInfo: '/user/get',
    getUsers: '/user/getAll',

    getOrder: '/order/getOrder',
    getOrders: '/order/getOrders',
    getAllOrders: '/order/getAllOrders',

    createMenu:'/menu/create',
    createArticle:'/product/add',

    getOrdersSince:'/restaurant/getOrdersSince',
    getRestaurantInformation: '/restaurant/findByOwner',
    getRestaurant:'/restaurant/getAll',
    getRestaurantDetail:'/restaurant/find',



  });
  