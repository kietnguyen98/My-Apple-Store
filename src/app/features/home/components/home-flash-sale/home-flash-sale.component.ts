import { Component } from "@angular/core";

@Component({
  selector: "app-home-flash-sale",
  templateUrl: "./home-flash-sale.component.html",
  styleUrls: ["./home-flash-sale.component.css"],
})
export class HomeFlashSaleComponent {
  timeString: string = "";
  countDownTime: number = 7 * 24 * 3600 * 1000;

  constructor() {
    const timer = setInterval(() => {
      const days = Math.floor(this.countDownTime / (24 * 3600 * 1000));
      const hours = Math.floor(
        (this.countDownTime % (24 * 3600 * 1000)) / (3600 * 1000)
      );
      const minutes = Math.floor(
        (this.countDownTime % (3600 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((this.countDownTime % (60 * 1000)) / 1000);

      this.timeString =
        days.toString() +
        "d " +
        hours.toString() +
        "h " +
        minutes.toString() +
        "m " +
        seconds.toString() +
        "s";

      this.countDownTime = this.countDownTime - 1000;
    }, 1000);
  }
}
