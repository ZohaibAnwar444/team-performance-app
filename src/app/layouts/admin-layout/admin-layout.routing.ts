import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { TeamMemberTypeComponent } from "../../pages/team-member-type/team_member_type.component";
import { TeamMemberAddComponent } from "../../pages/team-member-add/team_member_add.component";
import { DailyProgressComponent } from "../../pages/daily-progress/daily_progress.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "team-member-type", component: TeamMemberTypeComponent },
  { path: "team-member-add", component: TeamMemberAddComponent },
  { path: "daily-progress", component: DailyProgressComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
