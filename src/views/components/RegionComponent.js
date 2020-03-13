const { View } = require('../View');

export class RegionComponent extends View {
    constructor(controller) {
        super();

        // Set instance variables
        this.controller = controller;
        this.root = document.querySelector("#content");

        // Create map container
        this.region = this.createElement("div", ["region"]);

        // Fill container
        this.generateRegion();
    }

    updateMap() {
        this.region.innerHTML = "";
        this.generateRegion();
    }

    generateRegion() {
        // Create and add sections to the map container
        var _self = this;
        this.controller.selectedRegion.sections.forEach((row, y) => {
            let regionRow = _self.createElement("div", ["region-row"])
            
            row.forEach((s, x) => {
                let regionSection = _self.createElement("div", ["region-section", s.type]);
                regionRow.appendChild(regionSection);
            });

            _self.region.appendChild(regionRow);
        });

        // Append map container to the root element
        this.root.appendChild(this.region);
    }
}