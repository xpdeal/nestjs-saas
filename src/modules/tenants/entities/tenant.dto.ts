import Entity from 'src/modules/shared/entities/entitie';

enum stages {
  open = 'open',
  waiting = 'waiting',
  progress = 'progress',
  staging = 'staging',
  production = 'production',
  failed = 'failed',
}

export default class TenantDto extends Entity {
  name: string;
  uuid?: string;
  domain: string;
  database: string;
  stage?: stages;
}
