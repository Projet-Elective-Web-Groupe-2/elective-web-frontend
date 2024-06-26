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

    createOrder: '/order/create',
    updateOrder: '/order/update',
    getOrder: '/order/getOrder',
    getOrders: '/order/getOrders',
    getAllOrders: '/order/getAllOrders',
    getAllOrdersFromRestaurant: '/order/getAllOrdersFromRestaurant',
    getAllFromUser: '/order/getAllFromUser',
    getAllCreatedOrdersFromRestaurant: '/order/getAllCreatedOrdersFromRestaurant',


    createMenu:'/menu/create',
    createArticle:'/product/add',
    getMenu:'/menu/find',
    getArticle:'/product/find',
    getDrinks:'/product/getDrinks',



    getOrdersSince:'/restaurant/getOrdersSince',
    getRestaurantInformation: '/restaurant/findByOwner',
    getRestaurant:'/restaurant/getAll',
    getRestaurantDetail:'/restaurant/find',
    getOrderCount: '/restaurant/getOrderCount',


    getDelivery:'/delivery/getAllWithFilter',
    refuseDelivery:'/delivery/refuse',
    acceptDelivery:'/delivery/accept',
    getStatutDelivery:'/delivery/getStatut',
    trackDeliveryDelivery:'/delivery/trackDelivery',
    nerbyDelivery:'/delivery/nearby',
    validateDelivery:'/delivery/validate',
    getMetricDelivery:'/delivery/metrics',



  });
  