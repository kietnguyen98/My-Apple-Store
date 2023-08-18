function scrollToTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToTopImmediately() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}

export { scrollToTopSmooth, scrollToTopImmediately };
