import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface SidebarNode {
  title:string;
  path?: string;
  children?: SidebarNode[];
}

const menuItems: SidebarNode[] = [
  {
    title:"Home",
    path:"",
  },
  {
    title:"Alarms",
    path:"/alarms",
  },
  {
    title:"Cardholders",
    path:"/cardholders",
    children: [
      {
        title: "Access Groups",
        path: "/access-groups"
      },
      {
        title: "Cardholders",
        path: "/cardholders"
      },
    ]
  },
  {
    title:"General",
    children: [
      {
        title: "Anti-Passback Groups",
        path: "/anti-passback-groups"
      },
      {
        title: "Config",
        path: "/config"
      },
      {
        title: "Discrete Control Areas",
        path: "/discrete-control-areas"
      },
      {
        title: "Holidays",
        path: "/holidays"
      },
      {
        title: "Timetables",
        path: "/timetables"
      },
      {
        title: "User",
        path: "/user"
      },
    ]
  },
  {
    title:"Panel",
    children: [
      {
        title: "Input Profiles",
        path: "/input-profiles"
      },
      {
        title: "Panel",
        path: "/panel"
      },
      {
        title: "Calibrate Input Open-Circuit",
        path: "/calibrate"
      },
      {
        title: "Discover DESIs",
        path: "/discover-desis"
      },
      {
        title: "Upgrade EM Firmware",
        path: "/upgrade-em-firmware"
      },
    ]
  },
  {
    title:"Portals",
    path:"/portals",
  },
  {
    title:"State Tables",
    path: "/state",
    // children: [
    //   {
    //     title: "Logical Functions",
    //     path: "/logical-functions"
    //   },
    //   {
    //     title: "State Tables",
    //     path: "/state"
    //   },
    // ]
  },
];

interface FlatNode {
  expandable: boolean;
  item: SidebarNode;
  level: number;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private _transformer = (node: SidebarNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      item: node,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = menuItems;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
