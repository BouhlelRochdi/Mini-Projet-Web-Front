import { UpdateDepartDto } from "./depart-dto";
import { UpdateUserDto } from "./user-dto";

export class ProjectBase {
  name?: string;
  client?: string;
  society?: UpdateUserDto;
  depart?: UpdateDepartDto[];
}
export class CreateProjectDto extends ProjectBase {
}
export class UpdateProjectDto extends ProjectBase {
  _id?: string;
}