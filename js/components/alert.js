"use strict";

export const deleteAlert = function () {
  return (document.querySelector(
    ".delete-alert"
  ).innerHTML += `<div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          An example danger alert with an icon
        </div>
        </div>`);
};