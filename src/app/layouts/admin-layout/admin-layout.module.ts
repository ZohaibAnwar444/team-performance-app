import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { TeamMemberTypeComponent } from "../../pages/team-member-type/team_member_type.component";
import { TeamMemberAddComponent } from "../../pages/team-member-add/team_member_add.component";
import { DailyProgressComponent } from "../../pages/daily-progress/daily_progress.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardService } from "src/app/services/dashboard.service";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    TeamMemberTypeComponent,
    TypographyComponent,
    DailyProgressComponent,
    TeamMemberAddComponent,
    // RtlComponent
  ],
  providers:[
    DashboardService
  ]
})
export class AdminLayoutModule {}
