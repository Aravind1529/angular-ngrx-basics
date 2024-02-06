import { Action, createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const ADD_CUSTOMERS = '[Customer] Add Customers';
export const ADD_CUSTOMERS_SUCCESS = '[Customer] Add Customers Success';
export const ADD_CUSTOMERS_FAILURE = '[Customer] Add Customers Failure';


export class AddCustomers implements Action {
  readonly type = ADD_CUSTOMERS
  constructor(public payload: any) {
    
  }
}
export class AddCustomersSuccess implements Action {
  readonly type = ADD_CUSTOMERS_SUCCESS
  constructor(public payload: any) {
    
  }
}
export class AddCustomersFailure implements Action {
  readonly type = ADD_CUSTOMERS_FAILURE
  constructor(public payload: any) {
    
  }
}

export type CustomerActions = |AddCustomers|AddCustomersSuccess|AddCustomersFailure;


