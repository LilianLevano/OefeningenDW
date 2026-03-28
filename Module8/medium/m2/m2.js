"use strict";

let flexDashboard = document.getElementById("dashboard");
let huidigeBreedte = document.getElementById("current-width");
let aantalKolommen = document.getElementById("column-count");

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width } = entry.contentRect;

    let kolommen;

    if (width < 600) {
      kolommen = 1;
    } else if (width < 900) {
      kolommen = 2;
    } else {
      kolommen = 3;
    }

    huidigeBreedte.textContent = width;
    flexDashboard.dataset.columns = kolommen;
    aantalKolommen.textContent = kolommen;
  }
});

resizeObserver.observe(flexDashboard);
