// 使用natural-request包
/* import { createAxios } from 'natural-request';
import { useGlobalEnv } from '@root/env';
const { mainRouter: router } = window.microApp.getData();

const { API_URL, URL_PREFIX } = useGlobalEnv(process.env.NODE_ENV);

export const http = createAxios(
  { mainRouter: router },
  {
    requestOptions: {
      apiUrl: API_URL,
      urlPrefix: URL_PREFIX,
    },
  }
); */

// 使用主应用实例
export const { http } = window.microApp.getData();
