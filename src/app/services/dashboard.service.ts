import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class DashboardService  {

    public url = '/dailyProgress';

    constructor(protected http: HttpClient) {
    }

    
    public getTeamMembers() {
        return this.http.get(`${environment.baseUrl}/teamMember`).pipe(
                    map((response: any) => {
                        return response;
                    })
        )
      }

    public getDailyProgressList(id:any) {
        return this.http.get(`${environment.baseUrl}/dailyProgress/id:${id}`,id).pipe(
                    map((response: any) => {
                        return response;
                    })
        )
      }

}