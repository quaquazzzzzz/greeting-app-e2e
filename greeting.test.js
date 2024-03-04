// Diese Beispieltestdatei geht davon aus, dass du eine Funktion hast, die einen Gruß zurückgibt.
// Ersetze 'getGreeting' und 'greetingApp' mit den tatsächlichen Namen deiner Exporte und Dateien.

const getGreeting = require('./greetingApp');

test('greeting returns "Hello, World!" for input "World"', () => {
  expect(getGreeting('World')).toBe('Hello, World!');
});
