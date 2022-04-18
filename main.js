/**
 * Mock Interpreter
 */
const casual = require("casual");

/**
 * Mocks a call to the interpreter.
 * @param {String} input Input to the interpreter. Ignored.
 * @returns Random string.
 */
function interpret(input) {
  return casual.sentence;
}

module.exports = { interpret };
