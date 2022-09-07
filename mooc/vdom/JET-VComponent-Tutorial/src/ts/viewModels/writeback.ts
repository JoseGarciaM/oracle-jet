import { TopicViewModel } from "./topic";

import "oj-demo-writeback/loader";
import "oj-greet/with-writeback-parent/loader";
import { ojInputText } from "ojs/ojinputtext";
import "ojs/ojinputtext";
import "ojs/ojknockout";
import "ojs/ojformlayout";
import * as ko from "knockout";

class WritebackViewModel extends TopicViewModel {

  textValue1 = ko.observable("");

  textValue2 = ko.observable("");

  handleValueChanged = (event: ojInputText.valueChanged) => {
    this.textValue2(event.detail.value);
  }
}

export = WritebackViewModel;