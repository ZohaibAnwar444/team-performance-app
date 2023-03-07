import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class DailyProgressService  {

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

    public addDailyProgress(model : any) {
        return this.http.post(`${environment.baseUrl}${this.url}`,model).pipe(
            map((response : any) => {
                return response;
            })
        )
    }

}