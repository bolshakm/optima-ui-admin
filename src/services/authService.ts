import { backendAuthKeys } from 'common/constants';
import BaseService from './baseService';
import instanse from './axios/instanse';
import { ILoginBody, IRegisterBody } from 'common/types';

interface IAuthResponse {
  token: string;
}

class AuthService extends BaseService {
  constructor(
    public baseUrl = backendAuthKeys.auth,
    private fetchingService = instanse
  ) {
    super(baseUrl);
  }

  async login({ body }: { body: ILoginBody }): Promise<IAuthResponse> {
    return this.handleRequest<IAuthResponse>(
      this.fetchingService.post(
        this.getFullUrl(backendAuthKeys.authenticate),
        body
      )
    );
  }

  async register({ body }: { body: IRegisterBody }): Promise<IAuthResponse> {
    return this.handleRequest<IAuthResponse>(
      this.fetchingService.post(this.getFullUrl(backendAuthKeys.register), body)
    );
  }
}

export const authService = new AuthService();
