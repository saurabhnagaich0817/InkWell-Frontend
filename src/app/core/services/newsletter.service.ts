import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private apiUrl = `${environment.apiUrl}/newsletter`;

  constructor(private http: HttpClient) {}

  subscribe(email: string, fullName: string, userId?: string): Observable<BaseResponse<string>> {
    return this.http.post<BaseResponse<string>>(`${this.apiUrl}/subscribe`, { email, fullName, userId });
  }

  approveSubscriber(id: string): Observable<BaseResponse<string>> {
    return this.http.post<BaseResponse<string>>(`${this.apiUrl}/${id}/approve`, {});
  }

  rejectSubscriber(id: string): Observable<BaseResponse<string>> {
    return this.http.post<BaseResponse<string>>(`${this.apiUrl}/${id}/reject`, {});
  }

  getAllSubscribers(): Observable<BaseResponse<any[]>> {
    return this.http.get<BaseResponse<any[]>>(this.apiUrl);
  }
}
