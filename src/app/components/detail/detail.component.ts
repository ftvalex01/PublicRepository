import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';
import { __importDefault } from 'tslib';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService],
})
export class DetailComponent implements OnInit {
  public url : string;
  public project!: Project;
  public confirm:boolean;
  constructor(
      private _router:Router,
      private _route: ActivatedRoute,
      private _projectService: ProjectService
  ) { 
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getProject(id);
    });
  }
  getProject(id: string){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }
  deleteProject(id:string){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/projects']);
        } 
      },
      error => {
        console.log(<any>error)
      }
    );
  }
  updateProject(id:any){
    this._projectService.updateProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/projects']);
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}
