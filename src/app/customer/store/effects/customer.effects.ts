import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromActions from "../action/customer.actions"
import { EMPTY, catchError, map, mergeMap, of, switchMap } from "rxjs";
import { CustomerService } from "../../services/customer.service";

@Injectable()
export class CustomerEffects {

    addCustomer$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(fromActions.ADD_CUSTOMERS),
                map((action: fromActions.AddCustomers) => action.payload),
                switchMap((req) => 
                    this.customerService.addCustomers(req).pipe(
                        map(
                            (res: any) =>
                                new fromActions.AddCustomersSuccess(res)
                        ),
                        catchError(error => of(new fromActions.AddCustomersFailure({ error })))
                    )
                )
            )
        }, {dispatch: false});

        // loadMovies$ = createEffect(() => this.actions$.pipe(
            // ofType(fromActions.ADD_CUSTOMERS),
            // mergeMap(() => this.customerService.addCustomers(req)
            //   .pipe(
            //     map(customers => (new fromActions.AddCustomersSuccess(customers))),
            //     catchError(() => EMPTY)
            //   ))
            // )
        //   );

    constructor(private actions$: Actions, private customerService: CustomerService) { }
}