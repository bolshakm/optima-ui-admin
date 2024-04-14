import { backendKeys } from 'common/constants';
import BaseService from './baseService';
import instanse from './axios/instanse';
import { ILanguageSet } from 'common/types';

class LocalizationService extends BaseService {
  constructor(
    public baseUrl = backendKeys.text,
    private fetchingService = instanse
  ) {
    super(baseUrl);
  }

  async getLanguages(): Promise<ILanguageSet> {
    return this.handleRequest<ILanguageSet>(
      this.fetchingService.get(this.getFullUrl(backendKeys.languages))
    );
  }

  async getLanguagePage(): Promise<ILanguageSet> {
    return this.handleRequest<ILanguageSet>(
      this.fetchingService.get(this.getFullUrl(backendKeys.page))
    );
  }
}

export const contaminantsService = new LocalizationService();
