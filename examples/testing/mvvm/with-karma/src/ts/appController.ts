import * as ko from "knockout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import "ojs/ojknockout";
import "demo-card/loader";


class FooterLink {
  name: string;
  id: string;
  linkTarget: string;
  constructor({ name, id, linkTarget }: {
    name: string;
    id: string;
    linkTarget: string;
  }) {
    this.name = name;
    this.id = id;
    this.linkTarget = linkTarget;
  }
}

class RootViewModel {
  smScreen: ko.Observable<boolean>;
  appName: ko.Observable<string>;
  userLogin: ko.Observable<string>;
  footerLinks: ko.ObservableArray<FooterLink>;
  employees: Array<object>;

  constructor() {
    // media queries for repsonsive layouts
    let smQuery: string | null = ResponsiveUtils.getFrameworkQuery("sm-only");
    if (smQuery) {
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
    }

    // Employees to display as cards
    this.employees = [
      {
        name: 'Deb Raphaely',
        avatar: './js/jet-composites/demo-card/1.0.15/extension/demo/images/deb-raphaely.png',
        title: 'Purchasing Director',
        work: 5171278899,
        email: 'deb.raphaely@oracle.com'
      },
      {
        name: 'Adam Fripp',
        avatar: "./js/jet-composites/demo-card/1.0.15/extension/demo/images/me.jpg",
        title: 'IT Manager',
        work: 6501232234,
        email: 'adam.fripp@oracle.com'
      }
    ];

    // header

    // application Name used in Branding Area
    this.appName = ko.observable("App Name");

    // user Info used in Global Navigation area
    this.userLogin = ko.observable("john.hancock@oracle.com");

    // footer
    this.footerLinks = ko.observableArray([
      new FooterLink({ name: "About Oracle", id: "aboutOracle", linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about" }),
      new FooterLink({ name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" }),
      new FooterLink({ name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" }),
      new FooterLink({ name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" }),
      new FooterLink({ name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" })
    ]);
  }
}

export default new RootViewModel();