module.exports = {
  name: 'ng-sqli',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-sqli',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
