import * as ko from "knockout";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as ResponsiveKnockoutUtils from "ojs/ojresponsiveknockoututils";
import * as OffcanvasUtils from "ojs/ojoffcanvas";
import CoreRouter = require ("ojs/ojcorerouter");
import ModuleRouterAdapter = require("ojs/ojmodulerouter-adapter");
import KnockoutRouterAdapter = require("ojs/ojknockoutrouteradapter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojknockout";
import "ojs/ojmodule-element";
import { ojNavigationList } from "ojs/ojnavigationlist";
import "ojs/ojmodule-element";
import { CoreRouterDetail } from "./appTypes";
import Context = require("ojs/ojcontext");

const _ROUTES = [
  { path: "", redirect: "welcome" },
  { path: "welcome", detail: { label: "Welcome" } },
  { path: "getting-started", detail: { label: "Getting Started" } },
  { path: "hello", detail: { label: "Hello, World!" } },
  { path: "loader-module", detail: { label: "The Loader Module" } },
  { path: "module-layout", detail: { label: "Module Layout" } },
  { path: "metadata", detail: { label: "Metadata" } },
  { path: "nesting", detail: { label: "Nesting" } },
  { path: "props", detail: { label: "Properties" } },
  { path: "children", detail: { label: "Children" } },
  { path: "template-slots", detail: { label: "Template Slots" } },
  { path: "listeners", detail: { label: "Listeners" } },
  { path: "actions", detail: { label: "Actions" } },
  { path: "state", detail: { label: "State" } },
  { path: "writeback", detail: { label: "Writeback" } },
  { path: "unique-ids", detail: { label: "Unique Ids" } },
  { path: "stay-tuned", detail: { label: "Stay Tuned!" } },
];

class RootViewModel {
  manner: ko.Observable<string>;
  message: ko.Observable<string|undefined>;
  smScreen: ko.Observable<boolean>;
  mdScreen: ko.Observable<boolean>;
  router: CoreRouter<CoreRouterDetail>;
  moduleAdapter: ModuleRouterAdapter<CoreRouterDetail>;
  navDataProvider: ojNavigationList<string, CoreRouter.CoreRouterState<CoreRouterDetail>>["data"];
  drawerParams: {
    selector: string;
    content: string;
    edge?: "start" | "end" | "top" | "bottom";
    displayMode?: "push" | "overlay";
    autoDismiss?: "focusLoss" | "none";
    size?: string;
    modality?: "modal" | "modeless";
  };
  appName: ko.Observable<string>;
  userLogin: ko.Observable<string>;
  footerLinks: Array<object>;
  selection: KnockoutRouterAdapter<CoreRouterDetail>;

  constructor() {
    // handle announcements sent when pages change, for Accessibility.
    this.manner = ko.observable("polite");
    this.message = ko.observable();

    let globalBodyElement: HTMLElement = document.getElementById("globalBody") as HTMLElement;
    globalBodyElement.addEventListener("announce", this.announcementHandler, false);

    // media queries for repsonsive layouts
    let smQuery: string | null = ResponsiveUtils.getFrameworkQuery("sm-only");
    if (smQuery){
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
    }

    let mdQuery: string | null = ResponsiveUtils.getFrameworkQuery("md-up");
    if (mdQuery){
      this.mdScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
    }

    const routes = this._getRoutes();

    // router setup
    const router = new CoreRouter<CoreRouterDetail>(routes, {
      urlAdapter: new UrlParamAdapter()
    });
    // release the application bootstrap busy state after router syncs and sets
    // first state
    router.sync()
    .then(() => Context.getPageContext().getBusyContext().applicationBootstrapComplete());

    this.moduleAdapter = new ModuleRouterAdapter(router);

    this.selection = new KnockoutRouterAdapter(router);

    // Setup the navDataProvider with the routes, excluding the first redirected
    // route.
    this.navDataProvider = new ArrayDataProvider(routes.slice(1), {keyAttributes: "path"});

    // drawer

    this.drawerParams = {
      displayMode: "push",
      selector: "#navDrawer",
      content: "#pageContent",
      autoDismiss: "focusLoss"
    };

    // add a close listener so we can move focus back to the toggle button when the drawer closes
    let navDrawerElement: HTMLElement = document.querySelector("#navDrawer") as HTMLElement;
    navDrawerElement.addEventListener("ojclose", () => {
      let drawerToggleButtonElment: HTMLElement = document.querySelector("#drawerToggleButton") as HTMLElement;
      drawerToggleButtonElment.focus();
    });

    // header

    // application Name used in Branding Area
    this.appName = ko.observable("Oracle JET VComponent Tutorial");
    // user Info used in Global Navigation area

    this.userLogin = ko.observable("john.hancock@oracle.com");
    // footer
    this.footerLinks = [
      {name: 'About Oracle', linkId: 'aboutOracle', linkTarget:'http://www.oracle.com/us/corporate/index.html#menu-about'},
      { name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
      { name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
      { name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
      { name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
    ];
  }

  // We enhance the route detail payload with two extra pieces
  // of information:
  //
  // 1. the path/label for the next route
  // 2. the toggleDrawer function
  //
  // This info is used by the topic content in the oj-module
  // to provide a link to the next topic and to the table of
  // contents.
  private _getRoutes() {
    const routes = [..._ROUTES];

    let nextRoute = null;

    for (let i = routes.length - 1; i > 0; i--) {
      const route = routes[i];
      const detail = (route.detail as CoreRouterDetail);

      detail.nextPath = nextRoute?.path;
      detail.toggleDrawer = this.toggleDrawer;
      detail.getLabelForPath = this.getLabelForPath;

      nextRoute = route;
    }

    return routes;
  }

  announcementHandler = (event: any): void => {
      this.message(event.detail.message);
      this.manner(event.detail.manner);
  }

  // called by navigation drawer toggle button and after selection of nav drawer item
  toggleDrawer = (): Promise<boolean> => {
    return OffcanvasUtils.toggle(this.drawerParams);
  }

  private getLabelForPath(path: string) {
    const route = _ROUTES.find((route) => route.path === path);

    return route?.detail?.label;
  }

  scrollToTop = (): void => {
    document.documentElement.scrollTop = 0;
  }
}

export default new RootViewModel();
