Package.describe({
    name: "practicalmeteor:chai",
    summary: "The Chai Assertion Library, v2.1.0",
    version: "2.1.0_1",
    git: "https://github.com/practicalmeteor/meteor-chai.git"
});


Package.onUse(function (api) {
    api.versionsFrom('1.6.1');

    api.use(['meteor', 'coffeescript@2.0.0']);

    api.addFiles(['chai-2.1.0.js', 'chai-string-1.1.1.js', 'config.coffee', 'exports.js']);

    api.export(['chai','assert','expect','should']);
});


Package.onTest(function(api) {
    api.use(['practicalmeteor:chai', 'coffeescript@2.0.0', 'tinytest', 'test-helpers']);

    api.addFiles(['tests/chai.coffee']);
});
