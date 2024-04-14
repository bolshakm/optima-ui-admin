class BaseService {
  constructor(protected baseUrl: string) {}

  protected getFullUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }

  protected async handleRequest<T>(promise: Promise<T>) {
    try {
      const response = await promise;

      return (response as { data?: T }).data ?? response;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: unknown): void {
    const err: Error =
      error instanceof Error ? error : new Error(String(error));
    console.error('An error occurred during the request:', err.message);
  }
}

export default BaseService;
