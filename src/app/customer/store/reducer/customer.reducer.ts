import { Action, State, createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as customerActions from '../action/customer.actions';

export const customerFeatureKey = 'customertest';

export interface CustomerState {
  customers:Customer[];
}

export const initialState: CustomerState = {
  customers:[]
};

// export const customerReducer = createReducer(
//   initialState,
  
// );

export function reducer(state: CustomerState = initialState, action: customerActions.CustomerActions) {
  switch (action.type) {
    case customerActions.ADD_CUSTOMERS: { return State }
    case customerActions.ADD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        customers: action.payload
      }
    }
    case customerActions.ADD_CUSTOMERS_FAILURE: { return State }
    default: return State
  }
}
