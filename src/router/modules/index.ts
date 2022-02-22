import { RouteRecordRaw } from 'vue-router';

const files = require.context('.', false, /\.ts$/);
let routeList: Array<RouteRecordRaw> = [];
files.keys().forEach((key) => {
  if (key === './index.ts') {
    return;
  }
  routeList = routeList.concat(files(key).default);
});
export default routeList;
