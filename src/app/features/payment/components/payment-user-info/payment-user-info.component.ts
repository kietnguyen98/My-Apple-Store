import { AdministrativeUnitService } from "@/app/share/services/administrative-unit.service";
import { TDistricts, TProvinces, TWards } from "@/app/share/types";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-payment-user-info",
  templateUrl: "./payment-user-info.component.html",
  styleUrls: ["./payment-user-info.component.css"],
})
export class PaymentUserInfoComponent {
  provinces: TProvinces = [];
  districts: TDistricts = [];
  wards: TWards = [];
  receiverInfoForm = new FormGroup({
    fullName: new FormControl("", Validators.required),
    province: new FormControl("0", Validators.required),
    district: new FormControl("0", Validators.required),
    ward: new FormControl("0", Validators.required),
    address: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
  });

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
    this.administrativeUnitService.selectProvince(
      Number((event.target as HTMLSelectElement).value)
    );

    // reset
    this.receiverInfoForm.patchValue({ province: "0" });
    this.receiverInfoForm.patchValue({ ward: "0" });
  }

  handleSelectDistrict(event: Event) {
    this.administrativeUnitService.selectDistrict(
      Number((event.target as HTMLSelectElement).value)
    );

    // reset
    this.receiverInfoForm.patchValue({ ward: "0" });
  }
}
