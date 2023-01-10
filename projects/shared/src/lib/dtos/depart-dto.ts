import { UpdateUserDto } from "./user-dto";

export class DepartBase {
  name?: string;
  responsable?: UpdateUserDto;
}
export class CreateDepartDto extends DepartBase {
}
export class UpdateDepartDto extends DepartBase {
  _id?: string;
}