export function getTimeSegmentElements(segmentElement: HTMLElement) {
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
}

export function updateSegmentValues(
  displayElement: HTMLElement,
  overlayElement: HTMLElement,
  value: string
) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

export function updateTimeSegment(
  segmentElement: HTMLElement,
  timeValue: string
) {
  const segmentElements = getTimeSegmentElements(segmentElement);

  // check which segment's value is remain
  if (segmentElements.segmentDisplayTop.textContent === timeValue) {
    return;
  }

  segmentElements.segmentOverlay?.classList.add("flip");

  updateSegmentValues(
    segmentElements.segmentDisplayTop,
    segmentElements.segmentOverlayBottom,
    timeValue
  );

  const finishAnimation = () => {
    segmentElements.segmentOverlay.classList.remove("flip");
    updateSegmentValues(
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
}

export function updateTimeSection(sectionId: string, timeValue: number) {
  const firstNumber = Math.floor(timeValue / 10);
  const secondNumber = timeValue % 10;

  const sectionElement = document.getElementById(sectionId) as HTMLElement;
  const segmentElements = sectionElement.querySelectorAll(
    ".time-segment"
  ) as NodeListOf<HTMLElement>;

  updateTimeSegment(segmentElements[0], firstNumber.toString());
  updateTimeSegment(segmentElements[1], secondNumber.toString());
}
