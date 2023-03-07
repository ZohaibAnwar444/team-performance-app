import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/team-member-type",
    title: "Team Member Type",
    rtlTitle: "الرموز",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/team-member-add",
    title: "Team Member Add",
    rtlTitle: "خرائط",
    icon: "icon-atom",
    class: "" },
  {
    path: "/daily-progress",
    title: "Daily Progress",
    rtlTitle: "إخطارات",
    icon: "icon-align-center",
    class: ""
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
