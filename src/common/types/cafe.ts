import { Language } from './language';

export interface IWorkingHour {
  day: string;
  time: string;
}

export interface ICafe {
  id: 0;
  name: string;
  workingHours: IWorkingHour[];
  defLang: string;
  facebook: string;
  instagram: string;
  tripAdvisor: string;
  googleReview: string;
  bannerUrl: string;
  languageSet: Language[];
}

export interface ICafeDto extends Omit<ICafe, 'id'> {}
