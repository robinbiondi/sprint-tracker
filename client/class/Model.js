(function strict() {

  module.exports = class Model {
    constructor() {
      this.uuid = generateUUID();
    }
  }

  function generateUUID() {
    function s4() {
     return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
})();
