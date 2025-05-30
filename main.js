function removePromotedJobs() {
  const jobCards = document.querySelectorAll("li");

  jobCards.forEach(card => {
    const spans = card.querySelectorAll("span");

    for (let span of spans) {
      const text = span.textContent?.trim().toLowerCase();
      if (text === "promoted") {
        card.remove();
        break; // exit after removing one card
      }
    }
  });
}

// Run once on load
removePromotedJobs();

// Observe for dynamic content like infinite scrolling
const observer = new MutationObserver(() => {
  removePromotedJobs();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});