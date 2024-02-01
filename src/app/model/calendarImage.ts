import { SafeUrl } from '@angular/platform-browser';

export type CalendarImageData = {
  image: CalendarImage;
};

export type CalendarImage = {
  [key: string]: SafeUrl;
};
