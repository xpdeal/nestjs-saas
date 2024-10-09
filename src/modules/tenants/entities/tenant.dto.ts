import Entity from 'src/modules/shared/entities/entitie';

export default class TenantDto extends Entity {
  name: string;
  email: string;
  password: string;
  domain: string;
  database: string;
}
