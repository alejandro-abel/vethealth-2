export class SessionStorage {

  constructor() {
  }

  static getItem(key: string): any {
    return window.sessionStorage.getItem(key);
  }

  static setItem(key: string, value: any): void {
    window.sessionStorage.setItem(key, value);
  }

  static clearStorage(): void {
    window.sessionStorage.clear();
  }

  static removeItem(key: string): void {
    window.sessionStorage.removeItem(key);
  }

  static existItem(key: string): boolean {
    return window.sessionStorage.getItem(key) !== undefined;
  }
}
