import { QUERY_PARAM_KEYS } from "@/constants";
import { Params } from "@angular/router";

const QUERY_PARAMS_ORDERED_ARRAY = [
  QUERY_PARAM_KEYS.SEARCH_TERM,
  QUERY_PARAM_KEYS.CATEGORY,
  QUERY_PARAM_KEYS.START_PRICE,
  QUERY_PARAM_KEYS.END_PRICE,
];

export const windowScrollHelper = {
  scrollToTopSmooth: function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  scrollToTopImmediately: function () {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  },
};

export const countDownClockHelper = {
  getTimeSegmentElements: function (segmentElement: HTMLElement) {
    const segmentDisplay = segmentElement.querySelector(
      ".segment-display"
    ) as HTMLElement;
    const segmentDisplayTop = segmentElement.querySelector(
      ".segment-display__top"
    ) as HTMLElement;
    const segmentDisplayBottom = segmentElement.querySelector(
      ".segment-display__bottom"
    ) as HTMLElement;
    const segmentOverlay = segmentElement.querySelector(
      ".segment-overlay"
    ) as HTMLElement;
    const segmentOverlayTop = segmentElement.querySelector(
      ".segment-overlay__top"
    ) as HTMLElement;
    const segmentOverlayBottom = segmentElement.querySelector(
      ".segment-overlay__bottom"
    ) as HTMLElement;

    return {
      segmentDisplay,
      segmentDisplayTop,
      segmentDisplayBottom,
      segmentOverlay,
      segmentOverlayTop,
      segmentOverlayBottom,
    };
  },

  updateSegmentValues: function (
    displayElement: HTMLElement,
    overlayElement: HTMLElement,
    value: string
  ) {
    displayElement.textContent = value;
    overlayElement.textContent = value;
  },

  updateTimeSegment: function (segmentElement: HTMLElement, timeValue: string) {
    const segmentElements = this.getTimeSegmentElements(segmentElement);

    // check which segment's value is remain
    if (segmentElements.segmentDisplayTop.textContent === timeValue) {
      return;
    }

    segmentElements.segmentOverlay?.classList.add("flip");

    this.updateSegmentValues(
      segmentElements.segmentDisplayTop,
      segmentElements.segmentOverlayBottom,
      timeValue
    );

    const finishAnimation = () => {
      segmentElements.segmentOverlay.classList.remove("flip");
      this.updateSegmentValues(
        segmentElements.segmentDisplayBottom,
        segmentElements.segmentOverlayTop,
        timeValue
      );
      segmentElements.segmentOverlay.removeEventListener(
        "animationend",
        finishAnimation
      );
    };

    segmentElements.segmentOverlay.addEventListener(
      "animationend",
      finishAnimation
    );
  },

  updateTimeSection: function (sectionId: string, timeValue: number) {
    const firstNumber = Math.floor(timeValue / 10);
    const secondNumber = timeValue % 10;

    const sectionElement = document.getElementById(sectionId) as HTMLElement;
    const segmentElements = sectionElement.querySelectorAll(
      ".time-segment"
    ) as NodeListOf<HTMLElement>;

    this.updateTimeSegment(segmentElements[0], firstNumber.toString());
    this.updateTimeSegment(segmentElements[1], secondNumber.toString());
  },
};

export const routeHelper = {
  encodeUrl: function (dirtyUrl: string) {
    return dirtyUrl
      .replaceAll("%20", " ")
      .replaceAll("%28", "(")
      .replaceAll("%29", ")");
  },
  getCleanSpecificRoutePath: function (
    currentUrl: string,
    isHaveQueryParams: boolean = false
  ) {
    if (isHaveQueryParams) {
      return this.encodeUrl(currentUrl).split("?")[0].replace("/", "");
    } else {
      return this.encodeUrl(currentUrl).replace("/", "");
    }
  },
  sortQueryParamsInOrder: function (currentQueryParams: Params) {
    let sortedQueryParams: Params = {};

    Object.keys(currentQueryParams)
      .sort(
        (a, b) =>
          QUERY_PARAMS_ORDERED_ARRAY.indexOf(a) -
          QUERY_PARAMS_ORDERED_ARRAY.indexOf(b)
      )
      .forEach(key => (sortedQueryParams[key] = currentQueryParams[key]));

    return sortedQueryParams;
  },
};