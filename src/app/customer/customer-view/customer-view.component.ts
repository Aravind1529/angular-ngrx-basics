import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { Customer } from 'src/app/models/customer';
// import {selectCustomers} from '../store/selector/customer.selectors'
import { SubSink } from 'subsink';
import * as fromSelector from '../store/selector/customer.selectors'

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers$!: Observable<Customer[]>;
  private subsink = new SubSink();
  customer : any;

  constructor(private store: Store<any>) {
      // this.customers$=this.store.pipe(select(SelectCustomers))
      this.subsink.add(
        this.store.pipe(
          fromSelector.SelectCustomers
        ).subscribe(
          (cust: any)=> this.customer = cust
        )
      )
   }

  ngOnInit(): void {
  }

}
