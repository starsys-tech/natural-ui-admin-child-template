interface MicroApp {
  addDataListener: Function;
  removeDataListener: Function;
  clearDataListener: Function;
  getData: Function;
  dispatch: Function;
}

declare global {
  interface Window {
    microApp: MicroApp;
    microAppData: any;
    __MICRO_APP_PUBLIC_PATH__: string;
    __MICRO_APP_BASE_ROUTE__: string;
    __MICRO_APP_ENVIRONMENT__: boolean;
    $http: object;
  }
}

export {};
