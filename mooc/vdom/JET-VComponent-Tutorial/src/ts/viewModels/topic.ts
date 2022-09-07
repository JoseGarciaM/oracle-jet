import "oj-tutorial/next-topic/loader";
import ModuleRouterAdapter = require("ojs/ojmodulerouter-adapter");
import { CoreRouterDetail, Topic } from "appTypes";

export class TopicViewModel {

  nextTopic: Topic;
  toggleDrawer: () => void;
  getTopic: (path: string) => Topic | null;

  constructor(context: ModuleRouterAdapter.ViewModelParameters<CoreRouterDetail, void>) {
    const detail = context.routerState.detail;

    this.toggleDrawer = detail.toggleDrawer;

    this.getTopic = (path) => {
      return path ? {
        path,
        label: detail.getLabelForPath(path)
      } : null;
    };

    this.nextTopic = this.getTopic(detail.nextPath);
  }
}

