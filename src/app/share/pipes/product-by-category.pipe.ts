import { Pipe, PipeTransform } from "@angular/core";
import { TCategoryValue, TProducts } from "@/app/features/product/types";

@Pipe({
  name: "productsByCategory",
})
export class ProductsByCategoryPipe implements PipeTransform {
  transform(products: TProducts, category: TCategoryValue): TProducts {
    if (products.length > 0) {
      return products.filter(product => product.category.name === category);
    }
    return [];
  }
}
