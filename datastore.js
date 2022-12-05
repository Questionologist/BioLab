const Store = require('electron-store');

const store = new Store();
function test(){
  store.set('unicorn', '🦄');
  console.log(store.get('unicorn'));
  //=> '🦄'
}
module.exports = test;
