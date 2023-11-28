import { Pipe, PipeTransform } from "@angular/core";
import { TCategoryValue, TProducts } from "@/app/features/product/types";

@Pipe({
  name: "productByCategoryPipe",
})
export class ProductByCategoryPipe implements PipeTransform {
  transform(products: TProducts, category: TCategoryValue): TProducts {
    if (products.length > 0) {
      return products.filter(product => product.category.name === category);
    }
    return [];
  }
}
