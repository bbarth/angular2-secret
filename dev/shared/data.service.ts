import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
    constructor (private _http: Http) {}

    getAllData(): Observable<any> {
        const token = localStorage.getItem('token') !== null ? '?auth=' + localStorage.getItem('token') : '';
        return this._http.get('https://scorching-torch-6310.firebaseio.com/users/data.json' + token)
                .map(response => response.json());

    }

    addData(data: any): Observable<any> {
        const token = localStorage.getItem('token') !== null ? '?auth=' + localStorage.getItem('token') : '';
        const body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('https://scorching-torch-6310.firebaseio.com/users/data.json' + token, body, {headers: headers})
            .map(response => response.json())


    }

    deleteAllData(): Observable<any> {
        const token = localStorage.getItem('token') !== null ? '?auth=' + localStorage.getItem('token') : '';
        return this._http.delete('https://scorching-torch-6310.firebaseio.com/users/data.json' + token)
              .map(response => response.json());
    }
}
