import { APP_HEADER_HEIGHT } from "@/app/share/constants/dimensions";
import { Component, OnInit, OnDestroy } from "@angular/core";

type TPageSection = {
  label: string;
  idForHref: string;
  isSelected: boolean;
};

type TPageSections = Array<TPageSection>;

@Component({
  selector: "app-page-section-navigation",
  templateUrl: "./page-section-navigation.component.html",
  styleUrls: ["./page-section-navigation.component.css"],
})
export class PageSectionNavigationComponent implements OnInit, OnDestroy {
  sections: TPageSections = [
    {
      label: "Main",
      idForHref: "main",
      isSelected: true,
    },
    {
      label: "Description & Rating",
      idForHref: "desc-and-rate",
      isSelected: false,
    },
    {
      label: "Related Products",
      idForHref: "related-products",
      isSelected: false,
    },
  ];

  private getNavigationBarSticky: (() => void) | undefined;

  private getNavigationSectionSelected: (() => void) | undefined;

  ngOnInit(): void {
    const elementList: NodeListOf<HTMLElement> = document.getElementsByName(
      "page-section-navigation"
    );

    const navigateElement = elementList[elementList.length - 1] as HTMLElement;

    const defaultOffsetHeader = navigateElement.offsetTop + APP_HEADER_HEIGHT;

    this.getNavigationBarSticky = () => {
      if (window.scrollY >= defaultOffsetHeader) {
        navigateElement.classList.add("sticky");
      } else {
        navigateElement.classList.remove("sticky");
      }
    };

    this.getNavigationSectionSelected = () => {
      this.sections = this.sections.map<TPageSection>(section => {
        const sectionElement = document.getElementById(
          section.idForHref
        ) as HTMLElement;

        const elementTopOffset = sectionElement.offsetTop;
        const elementBottomOffset =
          sectionElement.offsetTop + sectionElement.offsetHeight;

        let isSelected = false;

        if (window.scrollY >= elementTopOffset) {
          isSelected = true;
        }

        if (window.scrollY >= elementBottomOffset) {
          isSelected = false;
        }

        return { ...section, isSelected: isSelected };
      });
    };

    window.addEventListener("scroll", this.getNavigationBarSticky, false);
    window.addEventListener("scroll", this.getNavigationSectionSelected, false);
  }

  ngOnDestroy() {
    window.removeEventListener(
      "scroll",
      this.getNavigationBarSticky as () => void,
      false
    );
    window.removeEventListener(
      "scroll",
      this.getNavigationSectionSelected as () => void,
      false
    );
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id) as HTMLElement;

    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}
