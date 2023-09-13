import { PATH } from "@/configs/routes";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (Object.keys(queryParams).length > 0) {
        // query params exist => redirect with query params removed
        // redirect to home with fully reload the page
        this.router
          .navigateByUrl(PATH.DUMMY, { skipLocationChange: true })
          .then(() => {
            this.router.navigate([PATH.HOME], {
              relativeTo: this.activatedRoute,
              queryParams: {},
            });
          });
      }
    });
  }
}
