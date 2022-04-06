const http = require('./http');

const globals = {
  microApp: {
    addDataListener: () => {},
    removeDataListener: () => {},
    clearDataListener: () => {},
    removeDomScope: () => {},
    getData: () => {},
    dispatch: () => {},
  },
  microAppData: { http },
};

module.exports = globals;
