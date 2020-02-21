'format cjs';

var engine = require('./engine');
var conventionalCommitTypes = require('mingway-commit-types');

module.exports = engine({
  types: conventionalCommitTypes.types
});