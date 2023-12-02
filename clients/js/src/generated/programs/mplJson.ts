/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  ClusterFilter,
  Context,
  Program,
  PublicKey,
} from '@metaplex-foundation/umi';
import { getMplJsonErrorFromCode, getMplJsonErrorFromName } from '../errors';

export const MPL_JSON_PROGRAM_ID =
  'JSoNoHBzUEFnjpZtcNcNzv5KLzo4tD5v4Z1pT9G4jJa' as PublicKey<'JSoNoHBzUEFnjpZtcNcNzv5KLzo4tD5v4Z1pT9G4jJa'>;

export function createMplJsonProgram(): Program {
  return {
    name: 'mplJson',
    publicKey: MPL_JSON_PROGRAM_ID,
    getErrorFromCode(code: number, cause?: Error) {
      return getMplJsonErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getMplJsonErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}

export function getMplJsonProgram<T extends Program = Program>(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): T {
  return context.programs.get<T>('mplJson', clusterFilter);
}

export function getMplJsonProgramId(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): PublicKey {
  return context.programs.getPublicKey(
    'mplJson',
    MPL_JSON_PROGRAM_ID,
    clusterFilter
  );
}
