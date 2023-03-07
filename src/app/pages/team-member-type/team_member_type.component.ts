import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { TeamMemberTypeModel } from "src/app/models/team_member_type.model";
import { TeamMemberTypeService } from "src/app/services/team_member_type.service";

@Component({
  selector: "app-team-member-type",
  templateUrl: "team_member_type.component.html"
})
export class TeamMemberTypeComponent implements OnInit {
  team_member_type_model : TeamMemberTypeModel = new TeamMemberTypeModel();
  form: FormGroup;

  constructor(private teamMemberTypeService: TeamMemberTypeService,private formBuilder: FormBuilder,
              private toasterService : ToastrService, private router: Router){
    this.initializeForm()
  }

    ngOnInit() {

    }

    initializeForm(){
      this.form = this.formBuilder.group({
        "name" : [this.team_member_type_model.name,Validators.compose([Validators.required])],
      });
    }


    addTeamMemberType(){
        if(this.validate(this.form)){
            this.teamMemberTypeService.addTeamMemberType(this.team_member_type_model).subscribe(response => {
                this.toasterService.success('success','Successfully Added');
                this.close();
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
