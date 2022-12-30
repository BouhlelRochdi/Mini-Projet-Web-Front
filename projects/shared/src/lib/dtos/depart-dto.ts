import { UpdateProjectDto } from "./project-dto";
import { UpdateUserDto } from "./user-dto";

export class DepartBase {
  name?: string;
  responsable?: UpdateUserDto;
  project?: UpdateProjectDto[];
}
export class CreateDepartDto extends DepartBase {
}
export class UpdateDepartDto extends DepartBase {
  _id?: string;
}