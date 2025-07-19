import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Loading {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(isLoading: boolean) {
    if (isLoading) {
      this.loadingSubject.next(true);
    } else {
      // Delay hiding by 3 seconds
      setTimeout(() => {
        this.loadingSubject.next(false);
      }, 3000);
    }
  }
}
