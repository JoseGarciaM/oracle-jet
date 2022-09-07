export interface Topic {
  path: string;
  label: string;
}

export interface CoreRouterDetail {
  label: string;
  nextPath: string;
  toggleDrawer: () => void;
  getLabelForPath: (path: string) => string;
};