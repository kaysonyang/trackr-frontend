define(['backendMock', 'angular-mocks', 'app'], function(backendMock) {
    'use strict';
    return function() {
        beforeEach(module('app'));
        beforeEach(inject(function($httpBackend) {
            backendMock($httpBackend);
            $httpBackend.flush();
        }));
        afterEach(inject(function($httpBackend) {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }));
    };
});