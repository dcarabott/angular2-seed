import { MapUtils } from '../decorators-api/mapUtils';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  public static language: string;
  headers: any;

  constructor(private http: Http) {
    this.headers = {
      headers: {
        'skin': 'voodoodreams',
        'language': HttpService.language,
        'secure': false
      },
      withCredentials: true
    };
  }

  public getSingle<T>(clazz: {new(): T}, url: string, headers?: {}, ...errorHandler: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.get(url, this.getHeaders(headers)).subscribe((response: any) => {
        let body = response.json();
        if (body) {
          resolve(MapUtils.deserialize(clazz, body));
        } else {
          resolve(new clazz());
        }
      });
    });
  }

  //Avoiding a watch
  private getHeaders(headers: any) {
    let result = JSON.parse(JSON.stringify(this.headers));
    result.headers['device'] = 'desktop';
    result.headers['language'] = HttpService.language || 'en';
    result.headers['secure'] = false;
    Object.assign(result, headers);
    return result;
  }
}
