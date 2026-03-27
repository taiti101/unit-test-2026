const { isPalindrome } = require('./palindrome');

test('racecar is palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('hello is not palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});