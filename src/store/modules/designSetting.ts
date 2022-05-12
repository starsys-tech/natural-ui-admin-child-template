import { defineStore } from 'pinia';
import { store } from '@/store';
import designSetting from '@common/settings/designSetting';

const { darkTheme } = designSetting;

interface DesignSettingState {
  //深色主题
  darkTheme: boolean;
}

export const useDesignSettingStore = defineStore({
  id: 'app-design-setting',
  state: (): DesignSettingState => ({
    darkTheme,
  }),
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme;
    },
  },
  actions: {},
});

// Need to be used outside the setup
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}
