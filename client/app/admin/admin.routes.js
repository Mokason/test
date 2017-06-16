'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('admin', {
    url: '/admin',
    template: require('./admin.html'),
    controller: 'AdminController',
    controllerAs: 'admin',
    authenticate: 'admin'
  });

  $stateProvider.state('admin/user',{
    url: '/admin/users',
    template: require('./User Settings/admin.user.html'),
    controller: 'AdminController',
    controllerAs: 'admin',
    authenticate: 'admin'
  });
}
