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
        }


      ]
  };
}
