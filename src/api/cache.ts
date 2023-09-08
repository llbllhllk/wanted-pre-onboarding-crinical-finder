export class MemoryCache implements Cache {
  private storage: Map<string, any> = new Map();

  get<T>(key: string): T | undefined {
    return this.storage.get(key);
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }
  has(key: string): boolean {
    return this.storage.has(key);
  }
}

export interface Cache {
  get<T>(key: string): T | undefined;
  set<T>(key: string, value: T): void;
  has(key: string): boolean;
}
