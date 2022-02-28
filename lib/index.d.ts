import { DefineComponent } from 'vue';

export declare type SpriteIcon = DefineComponent<{
  readonly width?: number;
  readonly height?: number;
  readonly image: string;
  readonly backgroundWidth?: number;
  readonly duration?: number;
  readonly steps?: number;
}>;
