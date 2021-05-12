/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessControlService } from './access-control.service';

describe('Service: AccessControl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlService]
    });
  });

  it('should ...', inject([AccessControlService], (service: AccessControlService) => {
    expect(service).toBeTruthy();
  }));
});
