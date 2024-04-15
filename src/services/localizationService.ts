import { backendKeys } from 'common/constants';
import BaseService from './baseService';
import instanse from './axios/instanse';
import { LanguageSet, LanguageLow, LanguageKey } from 'common/types';

class LocalizationService extends BaseService {
  constructor(
    public baseUrl = backendKeys.text,
    private fetchingService = instanse
  ) {
    super(baseUrl);
  }

  async getLanguages(): Promise<LanguageSet> {
    return this.handleRequest<LanguageSet>(
      this.fetchingService.get(this.getFullUrl(backendKeys.languages))
    );
  }

  async getLanguagePage({
    page,
    lang,
  }: {
    page: LanguageKey;
    lang: LanguageLow;
  }): Promise<LanguageSet> {
    return this.handleRequest<LanguageSet>(
      this.fetchingService.get(
        this.getFullUrl(`${backendKeys.page}?page=${page}&lang=${lang}`)
      )
    );
  }
}

export const localizationService = new LocalizationService();
