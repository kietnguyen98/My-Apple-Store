import { Pipe, PipeTransform } from "@angular/core";
import { TCartItems } from "../../cart/types";

@Pipe({
  name: "totalBagItemsPipe",
})
export class TotalBagItemsPipe implements PipeTransform {
  transform(items: TCartItems) {
    return items.reduce((prev, cur) => prev + cur.quantity, 0);
  }
}
