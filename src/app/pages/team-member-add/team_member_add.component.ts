import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { TeamMemberModel } from "src/app/models/team_member.model";
import { TeamMemberService } from "src/app/services/team_member_service";

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}

@Component({
  selector: "app-team-member-add",
  templateUrl: "team_member_add.component.html"
})
export class TeamMemberAddComponent implements OnInit {
  team_member_model : TeamMemberModel = new TeamMemberModel();
  team_member_types : any;
  form: FormGroup;
  constructor(private teamMemberService: TeamMemberService,private formBuilder: FormBuilder,
              private toasterService : ToastrService, private router : Router){
    this.initializeForm()
  }

    ngOnInit() {
      this.loadData();

    }

    initializeForm(){
      this.form = this.formBuilder.group({
        "name" : [this.team_member_model.name,Validators.compose([Validators.required])],
        "team_member_type_id" : [this.team_member_model.team_member_type_id,Validators.compose([Validators.required])],
      });
    }

    loadData(){
      this.teamMemberService.getTeamMemberTypeList().subscribe((response : any) => {
        this.team_member_types = response;
      })
    }

    addTeamMember(){
        if(this.validate(this.form)){
            this.teamMemberService.addTeamMember(this.team_member_model).subscribe(response => {
                this.toasterService.success('success','Successfully Added');
                this.close()
              },(error)=>{
                console.error(error);
                this.toasterService.error('error','Error',error.message)
            })
        }

    }

    close(): void {
        this.form.reset();
    }

    validate(form : any):boolean{
        var valid :boolean = true;
        for (var i in this.form.controls) {
          this.form.controls[i].markAsDirty();
          valid = valid && this.form.controls[i].valid;
        }
        return valid;
      }
}
