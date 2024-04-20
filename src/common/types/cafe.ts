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

export interface ICreateCafeDto extends Partial<ICafe> {
  name: string;
}

export interface IUpdateCafeDto extends Partial<ICafe> {}
