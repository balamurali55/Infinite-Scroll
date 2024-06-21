export function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo(0, parseInt(offsetPosition, 10));
    }
  }
