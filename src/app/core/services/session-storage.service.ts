import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  // Set a value in local storage
  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }

  // Get a value from local storage
  getItem(key: string): any | null {
    return sessionStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    sessionStorage.clear();
  }
}