export default class Entity {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  updatedBy: string;
  softDeleteAt?: Date;
}
