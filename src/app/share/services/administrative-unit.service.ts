import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TDistricts, TProvinces, TWards } from "../types";

@Injectable({ providedIn: "root" })
export class AdministrativeUnitService {
  provinces: TProvinces = [];
  provincesSubject = new Subject<TProvinces>();
  districts: TDistricts = [];
  districtsSubject = new Subject<TDistricts>();
  wards: TWards = [];
  wardsSubject = new Subject<TWards>();

  constructor(private http: HttpClient) {
    this.getInitialData();
  }

  getInitialData() {
    return this.http
      .get<TProvinces>(
        "/assets/data/vietnamese-provinces-nested-divisions.json"
      )
      .subscribe(data => {
        this.provinces = data;
        this.provincesSubject.next(this.provinces);
      });
  }

  getProvinces(): Observable<TProvinces> {
    return this.provincesSubject.asObservable();
  }

  selectProvince(provinceCode: number) {
    this.districts = this.provinces.find(
      province => province.code === provinceCode
    )?.districts as TDistricts;
    this.districtsSubject.next(this.districts);

    // reset
    this.wards = [];
  }

  getDistricts(): Observable<TDistricts> {
    return this.districtsSubject.asObservable();
  }

  selectDistrict(districtCode: number) {
    this.wards = this.districts.find(district => district.code === districtCode)
      ?.wards as TWards;
    this.wardsSubject.next(this.wards);
  }

  getWards(): Observable<TWards> {
    return this.wardsSubject.asObservable();
  }
}
