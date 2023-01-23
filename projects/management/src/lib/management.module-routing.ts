import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProjetsComponent } from './projets/projets.component';
import { WorkSpaceComponent } from './work-space/work-space.component';

const routes: Routes = [
    {
        path: 'project',
        component:ProjetsComponent
      
      },
      {
        path: 'departments',
        component:DepartmentsComponent
      
      },
      {
        path: 'collab',
        component:CollaboratorComponent
      
      },
      {
        path: 'space-work',
        component:WorkSpaceComponent
      
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }
