import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { countDownClockHelper } from "@/utilities/helperFunctions";

type TCountDownClockMode = "dark" | "light";
type TCountDownClockSize = "medium" | "big";

@Component({
  selector: "app-home-flash-sale-clock",
  templateUrl: "./home-flash-sale-clock.component.html",
  styleUrls: ["./home-flash-sale-clock.component.css"],
})
export class HomeFlashSaleClockComponent implements OnInit, OnDestroy {
  @Input() elementIdPrefix: string = "";
  @Input() mode: TCountDownClockMode = "light";
  @Input() size: TCountDownClockSize = "medium";
  timeString: string = "";
  countDownTime: number = 7 * 24 * 3600 * 1000;
  timer: NodeJS.Timeout | undefined;

  constructor() {}

  ngOnInit(): void {
    if (!this.timer)
      this.timer = setInterval(() => {
        const days = Math.floor(this.countDownTime / (24 * 3600 * 1000));
        const hours = Math.floor(
          (this.countDownTime % (24 * 3600 * 1000)) / (3600 * 1000)
        );
        const minutes = Math.floor(
          (this.countDownTime % (3600 * 1000)) / (60 * 1000)
        );
        const seconds = Math.floor((this.countDownTime % (60 * 1000)) / 1000);

        countDownClockHelper.updateTimeSection(
          `${this.elementIdPrefix}-countdown-clock-days`,
          days
        );
        countDownClockHelper.updateTimeSection(
          `${this.elementIdPrefix}-countdown-clock-hours`,
          hours
        );
        countDownClockHelper.updateTimeSection(
          `${this.elementIdPrefix}-countdown-clock-minutes`,
          minutes
        );
        countDownClockHelper.updateTimeSection(
          `${this.elementIdPrefix}-countdown-clock-seconds`,
          seconds
        );

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
