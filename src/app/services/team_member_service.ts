import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class TeamMemberService  {

    public url = 'teamMember';

    constructor(protected http: HttpClient) {
    }

    

    public getTeamMemberTypeList() {
        return this.http.get(`${environment.baseUrl}/teamMemberType`).pipe(
                    map((response: any) => {
                        return response;
                    })
        )
      }

    public addTeamMember(model : any) {
        return this.http.post(`${environment.baseUrl}/teamMember`,model).pipe(
            map((response : any) => {
                return response;
            })
        )
    }
}