import { backendAdminKeys } from 'common/constants';
import BaseService from './baseService';
import instanse from './axios/instanse';
import { ICafe, ICreateCafeDto, IUpdateCafeDto } from 'common/types';

class CafeService extends BaseService {
  constructor(
    public baseUrl = backendAdminKeys.cafe,
    private fetchingService = instanse
  ) {
    super(baseUrl);
  }

  async getOne({ id }: { id: number }): Promise<any> {
    return this.handleRequest<any>(
      this.fetchingService.get(this.getFullUrl(`/${id}`))
    );
  }

  async remove({ id }: { id: number }): Promise<ICafe> {
    return this.handleRequest<ICafe>(
      this.fetchingService.delete(this.getFullUrl(`/${id}`))
    );
  }

  async getMany(): Promise<ICafe[]> {
    return this.handleRequest<ICafe[]>(this.fetchingService.get(this.baseUrl));
  }

  async create({ body }: { body: ICreateCafeDto }): Promise<ICafe> {
    return this.handleRequest<ICafe>(
      this.fetchingService.post(this.baseUrl, body)
    );
  }

  async update({
    body,
  }: {
    body: IUpdateCafeDto;
  }): Promise<ICafe> {
    return this.handleRequest<ICafe>(
      this.fetchingService.put(this.baseUrl, body)
    );
  }
}

export const cafeService = new CafeService();
