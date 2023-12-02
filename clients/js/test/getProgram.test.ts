import test from 'ava';
import { MPL_JSON_PROGRAM_ID } from '../src';
import { createUmi } from './_setup';

test('it registers the program', async (t) => {
  // Given a Umi instance using the project's plugin.
  const umi = await createUmi();

  // When we fetch the registered program.
  const program = umi.programs.get('mplJson');

  // Then we expect it to be the same as the program ID constant.
  t.true(program.publicKey === MPL_JSON_PROGRAM_ID);
});
