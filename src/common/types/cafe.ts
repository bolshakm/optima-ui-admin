import { Language } from './language';

export interface IWorkingHour {
  day: string;
  time: string;
}

export interface ICafe {
  id: number;
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

export interface ICafeDto extends Partial<ICafe> {}
