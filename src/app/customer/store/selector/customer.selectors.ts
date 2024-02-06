import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey
);

export const SelectCustomers = createSelector(
    selectCustomerState,
    (state:fromCustomer.CustomerState)=>state.customers
);