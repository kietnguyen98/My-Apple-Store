import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-sub-images",
  templateUrl: "./product-sub-images.component.html",
  styleUrls: ["./product-sub-images.component.css"],
})
export class ProductSubImagesComponent implements OnInit {
  @Input() listImageUrl: Array<string> = [];
  @Output() changeImageUrl = new EventEmitter<string>();
  currentImageUrl: string = "";
  lastSubImageIndex = 0;

  ngOnInit(): void {
    this.currentImageUrl = this.listImageUrl[0];
    this.lastSubImageIndex = this.listImageUrl.length - 1;
  }

  handleChangeCurrentImageUrl(newImageUrl: string) {
    if (newImageUrl !== this.currentImageUrl) {
      this.currentImageUrl = newImageUrl;
      this.changeImageUrl.emit(this.currentImageUrl);
    }
  }

  handleSlidePrevious() {
    const element = document.getElementById("slide_product_image_0");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }

  handleSlideNext() {
    const element = document.getElementById(
      `slide_product_image_${this.lastSubImageIndex}`
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }
}
