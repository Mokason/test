'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    template: '<main></main>'
  });
  /*$stateProvide.state('shop', {
    url: '/shop',
    template: './shop/shop.html'
  });*/
}
