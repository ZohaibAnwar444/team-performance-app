import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Chart from 'chart.js';
import { DashboardModel } from "src/app/models/dashboard.model";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
 
  performance_view_model : DashboardModel = new DashboardModel();
  form: FormGroup;
  team_members: any
  performanceData: Array<any> = [];
  availabilityData: Array<any> = [];;
  absent = 0;
  present = 0;
  late = 0;
  scrum = 0;
  delay = 0;
  availabilityAbsent = 0;
  availabilityGood = 0;
  availabilityAverage = 0;
  availabilityBad = 0;
  availabilityVeryBad = 0;
  total : number;
  team_member_id : number;
  barChart1: any;
  barChart2: any;
  constructor(private dashboardService: DashboardService,private formBuilder: FormBuilder ) {
      this.initializeForm()
    }

    ngOnInit(): void {
      this.loadList();
    }
  
    initializeForm(){
      this.form = this.formBuilder.group({
        "team_member_id" : [this.performance_view_model.team_member_id,Validators.compose([Validators.required])],
      });
    }

  loadList(){
      this.dashboardService.getTeamMembers().subscribe(response => {
          this.team_members = response;
      })
  }

  changeTeamMember(event:any){
      this.team_member_id = event.target.value;

      if(this.barChart1){
        this.barChart1.destroy();
      }
      if(this.barChart2){
        this.barChart2.destroy();
      }
      if(this.team_member_id){
        this.absent = 0;
        this.present = 0;
        this.late = 0;
        this.scrum = 0;
        this.delay = 0;
        this.availabilityAbsent = 0;
        this.availabilityGood = 0;
        this.availabilityAverage = 0;
        this.availabilityBad = 0;
        this.availabilityVeryBad = 0;
        this.performanceData = []
        this.availabilityData = []
        this.loadData();
      }
  }

  loadData(){
      this.dashboardService.getDailyProgressList(this.team_member_id).subscribe(response => {
          for(let i = 0; i < response.length; i++){
              if(response[i].absent == 1){
                  this.absent += 1
              }
              if(response[i].absent == 0){
                  this.present += 1;
              }
              if(response[i].late == 1){
                  this.late += 1;
              }
              if(response[i].scrum == 1){
                  this.scrum += 1;
              } 
              if(response[i].delay == 1){
                  this.delay += 1;
              }
              if(response[i].availability == 0){
                  this.availabilityAbsent += 1;
              }
              if(response[i].availability == 1){
                this.availabilityGood += 1;
              }
              if(response[i].availability == 2){
              this.availabilityAverage += 1;
              }
              if(response[i].availability == 3){
                this.availabilityBad += 1;
              }
              if(response[i].availability == 4){
                this.availabilityVeryBad += 1;
              }

          }

          this.total = response.length;
          this.performanceData.push(this.absent, this.present, this.late, this.scrum, this.delay, this.total)
          this.availabilityData.push(this.availabilityAbsent, this.availabilityGood, this.availabilityAverage, this.availabilityBad, this.availabilityVeryBad, this.total)

          if(this.performanceData && this.availabilityData){
              this.loadChart1();
              this.loadChart2();
          }
      });
  }

  loadChart1(){
       const barCanvasEle: any = document.getElementById('bar_chart1')
       this.barChart2 = new Chart(barCanvasEle.getContext('2d'), {
        type: 'bar',
          data: {
            labels: ['Absent','Present','Late','Scrum','Delay','Total'],
            datasets: [{
              label: 'Performance',
              data: this.performanceData,
              backgroundColor: [
                'rgba(218, 40, 70 )',
                'rgba(34, 205, 97)',
                'rgba(32, 193, 183)',
                'rgba(148, 187, 233, 100 )',
                'rgba(241, 234, 11 )',
                'rgba(253, 187, 45, 100 )',
              ],borderColor: [
                  'rgb(218, 40, 70 )',
                  'rgb(34, 205, 97)',
                  'rgb(32, 193, 183)',
                  'rgb(148, 187, 233, 100)',
                  'rgb(241, 234, 11 )',
                  'rgb(253, 187, 45, 100 )',
                ],
                borderWidth: 1
              }]
            },options: {
              responsive: true,
              scales: {
                  y: {
                      beginAtZero: true,
                      min : 0,
                      max : this.total,
                      ticks: {
                        stepSize : 1,
                      }
                  }
              }
            }
          });
  }

  loadChart2(){
      const barCanvasEle: any = document.getElementById('bar_chart2')
      this.barChart2 = new Chart(barCanvasEle.getContext('2d'), {
        type: 'bar',
          data: {
            labels: ['Absent','Good','Average','Bad','Very Bad','Total'],
            datasets: [{
              label: 'Availability',
              data: this.availabilityData,
              backgroundColor: [
                'rgba(218, 40, 70 )',
                'rgba(34, 205, 97)',
                'rgba(32, 193, 183)',
                'rgba(148, 187, 233, 100)',
                'rgba(241, 234, 11 )',
                'rgba(253, 187, 45, 100)',
              ],borderColor: [
                  'rgb(218, 40, 70 )',
                  'rgb(34, 205, 97)',
                  'rgb(32, 193, 183)',
                  'rgb(148, 187, 233, 100)',
                  'rgb(241, 234, 11 )',
                  'rgb(253, 187, 45, 100)',
                ],
                borderWidth: 1
              }]
            },options: {
              responsive: true,
              scales: {
                  y: {
                      beginAtZero: true,
                      min : 0,
                      max : this.total,
                      ticks: {
                        stepSize : 1,
                      }
                  }
              }
            }
          });
  }


}
