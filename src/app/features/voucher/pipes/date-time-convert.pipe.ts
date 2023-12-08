import { dateConvertHelper } from "@/utilities";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ddmmyyyyFormatDatePipe",
})
export class DDMMYYYYFormatDatePipe implements PipeTransform {
  transform(value: Date): string {
    return dateConvertHelper.fromDateToDDMMYYYY(value);
  }
}
