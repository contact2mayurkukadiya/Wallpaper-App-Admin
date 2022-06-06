import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { HOST } from './app.constants';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postData(url, header: any = {}, data: any = {}) {
    return this.http.post(HOST.API_URL + url, data, header).toPromise().then((result: any) => {
      if (result.code == 400) {

      }
      else if (result.code == 401) {
        console.log('result', result);
      }
      else {
        return result;
      }
    });

  }

  /* getData() {
    // INFOSM
    // 7229001843  goli
    return this.http.post("http://mobicomm.dove-sms.com//submitsms.jsp?user=PhotivoP&key=19ee3d23f4XX&mobile=8347806122&message=Hi&senderid=INFOSM&accusage=1", {}, {}).toPromise().then(result => {
      return result;
    });
  } */
}
