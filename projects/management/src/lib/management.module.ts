import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'projects/shared/src';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ManagementRoutingModule } from './management.module-routing';
import { ProjetsComponent } from './projets/projets.component';
import { WorkSpaceComponent } from './work-space/work-space.component';



@NgModule({
  declarations: [
    ProjetsComponent,
    CollaboratorComponent,
    DepartmentsComponent,
    WorkSpaceComponent
  ],
  imports: [
    ManagementRoutingModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [
  ]
})
export class ManagementModule { }
