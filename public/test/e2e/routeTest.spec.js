describe('Routes test', function() {
  beforeEach(module('myApp'));

  var location, route, rootScope;
  beforeEach(
    inject(
      function(_$location_, _$route_, _$rootScope_) {
        location = _$location_;
        route = _$route_;
        rootScope = _$rootScope_;
      }));
  describe('index route', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('views/home.html')
          .respond(200, 'main HTML');
      }));
  //test code goes here
  it('should load the vr page on successful load of /',
  function() {
    location.path('/');
    rootScope.$digest();//call the digest loop
    expect(route.current.controller)
      .toBe('vrController')
  });
});

});
