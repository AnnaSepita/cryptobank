const api = 'http://167.99.208.229:9000/';
//const api = 'http://hire-man.grassbusinesslabs.tk/public/api/';
// const api = 'https://hireman.smartcapper.online/server/public/api/';

export const COMMON_URL = {

  auth: {
    login: api + 'auth', //
    logout: api + 'logout'
  },

  user: {
    index: api + 'users/me', //
    create: api + 'users', //
    update: api + 'users/', //
    varefications: api + 'varefications',
    getethereumaddresses: api + 'ethereum/',
    picture: api + 'users/pictures',
    createbitcoin: api + 'bitcoin',
    retrievebitcoin: api + 'bitcoin',
    password: api + 'users/',
    userdoc: api + 'users/docs',
    ethereum: api +'ethereum',
    ethereumbalance: api +'ethereum/balances/',
    transaction: api + 'ethereum/transactions',
    varefic: api + 'varefications/',
    key: api + 'users/key',
    users: api +'users'
  },

  job: {
    index: api + 'jobs',
    apply: api + 'jobs',
    share: api + 'share',
    remove: api + 'deleteorder/',
    order: api + 'orderjobs'
  },

  my_job: {
    index: api + 'myjobs',
    remove: api + 'jobs/',
    search: api + 'search'

  },

  all_skill: {
    index: api + 'skill',
  },

  skill: {
    index: api + 'myskill',
    create: api + 'skill',
    update: api + 'updatelevel',
    remove: api + 'deleteskill'
  },

  friend: {
    index: api + 'friend',
    incoming: api + 'friend/incoming',
    acc: api + 'friend/',
    dec: api + 'friend/',
    remove: api + 'friend/delete'
  }
};
