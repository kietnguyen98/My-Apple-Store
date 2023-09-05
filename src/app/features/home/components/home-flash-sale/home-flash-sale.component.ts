import { Component, OnDestroy } from "@angular/core";
import { updateTimeSection } from "@/utilities/functions";

@Component({
  selector: "app-home-flash-sale",
  templateUrl: "./home-flash-sale.component.html",
  styleUrls: ["./home-flash-sale.component.css"],
})
export class HomeFlashSaleComponent implements OnDestroy {
  timeString: string = "";
  countDownTime: number = 7 * 24 * 3600 * 1000;
  timer: NodeJS.Timeout | undefined;

  constructor() {
    const elementIdPrefix = "countdown-clock";

    this.timer = setInterval(() => {
      const days = Math.floor(this.countDownTime / (24 * 3600 * 1000));
      const hours = Math.floor(
        (this.countDownTime % (24 * 3600 * 1000)) / (3600 * 1000)
      );
      const minutes = Math.floor(
        (this.countDownTime % (3600 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((this.countDownTime % (60 * 1000)) / 1000);

      updateTimeSection(`${elementIdPrefix}-days`, days);
      updateTimeSection(`${elementIdPrefix}-hours`, hours);
      updateTimeSection(`${elementIdPrefix}-minutes`, minutes);
      updateTimeSection(`${elementIdPrefix}-seconds`, seconds);

      this.countDownTime = this.countDownTime - 1000;

      if (this.countDownTime === 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
