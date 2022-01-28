
export const getLocation = function () {
  return window.location;
};

export const getQueryElement = function (element) {
  return document.querySelector(element);
};

export const getQueryElements = function (element) {
  return document.querySelectorAll(element);
};

export const triggerClass = function (element, className) {
  if(element && className) {
    element.classList.contains(className) ?
      element.classList.remove(className) :
      element.classList.add(className);
  }
};

export const isMobile = window.matchMedia('(max-width: 991.97px)').matches;
