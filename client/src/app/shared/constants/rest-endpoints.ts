export class RestEndpointConstants {
  public static RestEndpoints = {
      endpoints: [
          {
              name: 'signup',
              url: '/api/Customers',
              method: 'post'
          },
          {
              name: 'login',
              url: '/api/Customers/login',
              method: 'post'
          },
          {
            name: 'logout',
            url: '/api/Customers/logout',
            method: 'post'
          },
          {
            name: 'registeredDevices',
            url: '/api/Devices/registered',
            method: 'get'
        },
        {
          name: 'account',
          url: '/api/account',
          method: 'get'
        },
        {
          name: 'postDevice',
          url: '/api/Devices',
          method: 'post'
        },
        {
          name: 'registerBoard',
          url: '/api/Boards',
          method: 'post'
        },
        {
          name: 'getDeviceByDeviceId',
          url: '/api/Devices/findOne?filter={"where":{"deviceId":"{parameter}"},"include":["boards"]}',
          method: 'get'
        },
        {
          name: 'registerDevice',
          url: '/api/Devices/register?id={parameter}',
          method: 'patch'
        },
        {
          name: 'forgotPassword',
          url: '/api/Customers/reset',
          method: 'post'
        },
        {
          name: 'resetPassword',
          url: '/api/Customers/reset-password',
          method: 'post'
        },
        {
          name: 'changePassword',
          url: '/api/Customers/change-password',
          method: 'post'
        },
        {
          name: 'adminDevices',
          url: '/api/Devices',
          method: 'get'
        },
        {
          name: 'patchAdminDevices',
          url: '/api/Devices{parameter}',
          method: 'patch'
        },
        {
          name: 'deleteAdminDevices',
          url: '/api/Devices/{parameter}',
          method: 'delete'
        },
        {
          name: 'adminBoards',
          url: '/api/Boards',
          method: 'get'
        },
        {
          name: 'patchAdminBoards',
          url: '/api/Boards{parameter}',
          method: 'patch'
        },
        {
          name: 'deleteAdminBoards',
          url: '/api/Boards/{parameter}',
          method: 'delete'
        },
        {
          name: 'users',
          url: '/api/users/devices',
          method: 'get'
        },
        {
          name: 'patchUsers',
          url: '/api/Customers{parameter}',
          method: 'patch'
        },
        {
          name: 'deleteUsers',
          url: '/api/Customers/{parameter}',
          method: 'delete'
        },
        {
          name: 'icons',
          url: '/api/icons/{parameter}',
          method: 'get'
        }








      ]
  };
}
