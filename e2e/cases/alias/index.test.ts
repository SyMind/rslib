import { expect, test } from 'vitest';
import { buildAndGetResults } from '#shared';

test('source.alias', async () => {
  const fixturePath = __dirname;
  const { entries } = await buildAndGetResults(fixturePath);

  expect(entries.esm).toContain('hello world');
  expect(entries.cjs).toContain('hello world');

  // simple artifacts check
  expect(entries.esm).toMatchSnapshot();
  expect(entries.cjs).toMatchSnapshot();
});
