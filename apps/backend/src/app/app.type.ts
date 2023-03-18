export interface Feature {
  name: string;
  page: string;
}

export interface CreatedByUser {
  name: string;
  github: string;
}

export interface ApiInfo {
  message: string;
  createdBy: CreatedByUser;
  github: string;
  appVersion: string;
  ui: string;
  swagger: string;
  features: Array<Feature>;
}
