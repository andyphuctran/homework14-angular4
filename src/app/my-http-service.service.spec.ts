import { TestBed, inject } from '@angular/core/testing';

import { MyHttpServiceService } from './my-http-service.service';

describe('MyHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHttpServiceService]
    });
  });

  it('should ...', inject([MyHttpServiceService], (service: MyHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
