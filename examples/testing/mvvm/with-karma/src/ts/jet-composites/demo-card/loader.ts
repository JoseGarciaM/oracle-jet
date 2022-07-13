import Composite = require("ojs/ojcomposite");
import * as view from "text!./demo-card-view.html";
import viewModel from "./demo-card-viewModel";
import * as metadata from "text!./component.json";
import "css!./demo-card-styles";

Composite.register("demo-card", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});