import { SafeUrl } from '@angular/platform-browser';

export type CalendarImageData = {
  image: CalendarImage;
  stat: CalendarStat[];
};

export type CalendarImage = {
  [key: string]: SafeUrl;
};

export type CalendarStat = {
  year: number;
  count: number;
  distance: number;
};
