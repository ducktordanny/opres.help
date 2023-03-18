import {ApiProperty} from '@nestjs/swagger';

import {ApiInfo, CreatedByUser, Feature} from './app.type';

class CreatedByUserClass implements CreatedByUser {
  @ApiProperty() name: string;
  @ApiProperty() github: string;
}

class FeatureClass implements Feature {
  @ApiProperty() name: string;
  @ApiProperty() page: string;
}

export class ApiInfoClass implements ApiInfo {
  @ApiProperty() message: string;
  @ApiProperty({type: CreatedByUserClass}) createdBy: CreatedByUser;
  @ApiProperty() github: string;
  @ApiProperty() appVersion: string;
  @ApiProperty() ui: string;
  @ApiProperty() swagger: string;
  @ApiProperty({isArray: true, type: FeatureClass}) features: Array<Feature>;
}
