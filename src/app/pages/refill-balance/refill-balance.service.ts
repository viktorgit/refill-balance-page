import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RefillBalanceService {

  constructor() {
  }

  pay(operatorId: number, sum: number, phoneNumber: number): Observable<{success: boolean}> {
    return new BehaviorSubject({success: true}).pipe(map(result => {
        result.success = !!(new Date().getTime() % 2);
        return result;
    }));
  }
}