export interface Route {
    path: string;
    index: boolean;
    parentpath: string;
    element: React.ReactElement;
    icon: string | React.ReactElement;
    exact: boolean;
    secured: boolean;
    sidenavlinked: boolean;
    type: string;
    name: string;
    description: string;
    pagesgroupId: string;
    pagesgroupName: string;
    offlinecanRender: boolean;
    pageAccessPrivilege: string[];
  }
  
export interface CoreRoute {
    title: string;
    layout: string;
    showInSidenav: boolean;
    pages: Route[];
  }
  export interface Todos {
    [key: string]: string;
  }
  
  