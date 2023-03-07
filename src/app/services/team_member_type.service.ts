import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class TeamMemberTypeService  {

    public url = '/teamMemberType';

    constructor(protected http: HttpClient) {
    }

    
    public addTeamMemberType(model : any) {
        return this.http.post(`${environment.baseUrl}${this.url}`,model).pipe(
            map((response : any) => {
                return response;
            })
        )
    }
}