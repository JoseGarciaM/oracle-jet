import * as ko from "knockout";
import rootViewModel from "./appController";
import "ojs/ojknockout";
import "ojs/ojmodule";
import "ojs/ojnavigationlist";
import "ojs/ojbutton";
import "ojs/ojtoolbar";

export = class Root {
  static init(): void {
    function _init(): void {
      // bind your ViewModel for the content of the whole page body.
      const root = document.getElementById("globalBody");
      ko.applyBindings(rootViewModel, root);
    }
    // if running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
    // event before executing any code that might interact with Cordova APIs or plugins.
    if (document.body.classList.contains("oj-hybrid")) {
      document.addEventListener("deviceready", _init);
    } else {
      _init();
    }
  }
}

declare global {
  namespace preact.JSX {

    // We need to enhance IntrinsicElements because we have VComponents that
    // reference other VComponent-based custom elements within the same JET
    // Pack.  The problem is that the IntrinsicElements entries for these
    // components are generated as a side effect of compilation, yet we need
    // some way to make compilation succeed, so we need to add these placeholder
    // entries.  In a real application, rather than referencing the components
    // through the custom element name (eg. "oj-greet-hello"), we would reference
    // the VComponent class (eg. GreetHello) directly.
    interface IntrinsicElements {
      'oj-greet-hello': any;
      'oj-greet-hello-many': any;
      'oj-greet-with-actions': any;
      'oj-greet-with-children': any;
      'oj-greet-with-props': any;
    }
  }
}