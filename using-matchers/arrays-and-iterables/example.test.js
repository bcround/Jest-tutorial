// toContain을 사용하여 배열이나 이터러블이 특정 아이템을 포함하고있는지 체크할 수 있다.
const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
