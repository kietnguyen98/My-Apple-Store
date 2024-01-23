import { AdministrativeUnitService } from "@/app/share/services/administrative-unit.service";
import { TDistricts, TProvinces, TWards } from "@/app/share/types";
import { Component } from "@angular/core";

@Component({
  selector: "app-payment-user-info",
  templateUrl: "./payment-user-info.component.html",
  styleUrls: ["./payment-user-info.component.css"],
})
export class PaymentUserInfoComponent {
  provinces: TProvinces = [];
  districts: TDistricts = [];
  wards: TWards = [];
  selectedProvinceCode: number = 0;
  selectedDistrictCode: number = 0;
  selectedWardCode: number = 0;

  constructor(private administrativeUnitService: AdministrativeUnitService) {
    this.administrativeUnitService.getProvinces().subscribe(data => {
      this.provinces = data;
    });

    this.administrativeUnitService.getDistricts().subscribe(data => {
      this.districts = data;
    });

    this.administrativeUnitService.getWards().subscribe(data => {
      this.wards = data;
    });
  }

  handleSelectProvince(event: Event) {
    this.selectedProvinceCode = Number(
      (event.target as HTMLSelectElement).value
    );

    this.administrativeUnitService.selectProvince(this.selectedProvinceCode);

    // reset
    this.selectedDistrictCode = 0;
    this.selectedWardCode = 0;
  }

  handleSelectDistrict(event: Event) {
    this.selectedDistrictCode = Number(
      (event.target as HTMLSelectElement).value
    );

    this.administrativeUnitService.selectDistrict(this.selectedDistrictCode);

    // reset
    this.selectedWardCode = 0;
  }

  handleSelectWard(event: Event) {
    this.selectedWardCode = Number((event.target as HTMLSelectElement).value);
  }
}
