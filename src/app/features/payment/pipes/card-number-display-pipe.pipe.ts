import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardNumberDisplayPipe",
})
export class CardNumberDisplayPipe implements PipeTransform {
  transform(cardNumber: string | null | undefined) {
    var final = (cardNumber as string).replaceAll(" - ", "");

    while (final.length < 16) {
      final += "X";
    }

    [4, 9, 14].forEach(position => {
      final = final.slice(0, position) + " " + final.slice(position);
    });

    return final.split("");
  }
}
