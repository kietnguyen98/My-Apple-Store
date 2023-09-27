export function scrollToTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToTopImmediately() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}
