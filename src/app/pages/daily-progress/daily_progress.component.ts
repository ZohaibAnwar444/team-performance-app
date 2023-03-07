import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { DailyProgressModel } from "src/app/models/daily_progress.model";
import { DailyProgressService } from "src/app/services/daily_progress.service";

@Component({
  selector: "app-daily-progress",
  templateUrl: "daily_progress.component.html"
})
export class DailyProgressComponent implements OnInit {
  daily_progress_model : DailyProgressModel = new DailyProgressModel();
  team_members : any;
  form: FormGroup;
  data : Array<any> = []
  availabilityData : Array<any> = []
  constructor(private dailyProgressService: DailyProgressService,private formBuilder: FormBuilder,
              private toasterService : ToastrService){
    this.initializeForm()
  }

    ngOnInit() {
      this.loadData();

    }

    initializeForm(){
      this.form = this.formBuilder.group({
        "team_member_id" : [this.daily_progress_model.team_member_id,Validators.compose([Validators.required])],
        "delay" : [this.daily_progress_model.delay],
        "absent" : [this.daily_progress_model.absent],
        "availability" : [this.daily_progress_model.availability],
        "late" : [this.daily_progress_model.late],
        "scrum" : [this.daily_progress_model.scrum],
        "task" : [this.daily_progress_model.task],
        "comments" : [this.daily_progress_model.comments]
      });
    }

    loadData(){
      this.dailyProgressService.getTeamMembers().subscribe((response : any) => {
        this.team_members = response;
      });
      this.data.push({
        id:1,
        name: 'Yes'
      },{
        id:0,
        name: 'No'
      });
      this.availabilityData.push({
        id:0,
        name: "Absent"
      },{
        id:1,
        name:"Good"
      },{
        id:2,
        name:"Average"
      },{
        id:3,
        name:"Bad"
      },{
        id:4,
        name:"Very Bad"
      })
    }

    addPerformance(){
      if(this.validate(this.form)){
        this.dailyProgressService.addDailyProgress(this.daily_progress_model).subscribe(response => {
          this.toasterService.success('success','Successfully Added')
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
