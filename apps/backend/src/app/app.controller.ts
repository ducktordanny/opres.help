import {Controller, Get, Req} from '@nestjs/common';
import {ApiOkResponse} from '@nestjs/swagger';

import constants from '@opres/shared/data/constants';
import {Request} from 'express';

import {ApiInfoClass} from './app.swagger';
import {ApiInfo, Feature} from './app.type';

const getFeatures = (link: string): Array<Feature> => [
  {
    name: 'Transportation problem',
    page: `${link}/transport-problem/all`,
  },
  {
    name: 'Assignment problem',
    page: `${link}/assignment-problem/all`,
  },
  {
    name: 'Travelling salesman problem',
    page: `${link}/tsp/bnb-method`,
  },
];

@Controller()
export class AppController {
  @ApiOkResponse({
    description: 'Get information about the API and the App.',
    type: ApiInfoClass,
  })
  @Get()
  public getApiInfo(@Req() req: Request): ApiInfo {
    const link =
      req.headers.host === 'localhost:4200' ? 'http://localhost:4200' : 'https://opres.help';
    return {
      message: `Welcome to opres.help/api!`,
      createdBy: {
        name: 'Daniel Lazar',
        github: 'https://github.com/ducktordanny',
      },
      github: 'https://github.com/ducktordanny/opres.help',
      appVersion: constants.appVersion,
      ui: `${link}/home`,
      swagger: `${link}/api/swagger`,
      features: getFeatures(link),
    };
  }
}
