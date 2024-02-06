import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { catchError, map } from "rxjs";

@Injectable() 

export class CustomerService {
    constructor(private http: HttpClient) {
        
    }

    addCustomers(req: any) {
        return this.http.get(`localhost:8080/getCustomers`).pipe(
            map(res => res),
            catchError(e => e)
        )
    }
}