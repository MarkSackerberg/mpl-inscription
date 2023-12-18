/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@metaplex-foundation/umi';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** AlreadyInitialized: The account has already been initialized */
export class AlreadyInitializedError extends ProgramError {
  readonly name: string = 'AlreadyInitialized';

  readonly code: number = 0x0; // 0

  constructor(program: Program, cause?: Error) {
    super('The account has already been initialized', program, cause);
  }
}
codeToErrorMap.set(0x0, AlreadyInitializedError);
nameToErrorMap.set('AlreadyInitialized', AlreadyInitializedError);

/** NotInitialized: The account has not yet been initialized */
export class NotInitializedError extends ProgramError {
  readonly name: string = 'NotInitialized';

  readonly code: number = 0x1; // 1

  constructor(program: Program, cause?: Error) {
    super('The account has not yet been initialized', program, cause);
  }
}
codeToErrorMap.set(0x1, NotInitializedError);
nameToErrorMap.set('NotInitialized', NotInitializedError);

/** DerivedKeyInvalid: The key for the account is invalid. */
export class DerivedKeyInvalidError extends ProgramError {
  readonly name: string = 'DerivedKeyInvalid';

  readonly code: number = 0x2; // 2

  constructor(program: Program, cause?: Error) {
    super('The key for the account is invalid.', program, cause);
  }
}
codeToErrorMap.set(0x2, DerivedKeyInvalidError);
nameToErrorMap.set('DerivedKeyInvalid', DerivedKeyInvalidError);

/** InvalidSystemProgram: The system program account is invalid. */
export class InvalidSystemProgramError extends ProgramError {
  readonly name: string = 'InvalidSystemProgram';

  readonly code: number = 0x3; // 3

  constructor(program: Program, cause?: Error) {
    super('The system program account is invalid.', program, cause);
  }
}
codeToErrorMap.set(0x3, InvalidSystemProgramError);
nameToErrorMap.set('InvalidSystemProgram', InvalidSystemProgramError);

/** InvalidJson: The JSON data is invalid. */
export class InvalidJsonError extends ProgramError {
  readonly name: string = 'InvalidJson';

  readonly code: number = 0x4; // 4

  constructor(program: Program, cause?: Error) {
    super('The JSON data is invalid.', program, cause);
  }
}
codeToErrorMap.set(0x4, InvalidJsonError);
nameToErrorMap.set('InvalidJson', InvalidJsonError);

/** BorshSerializeError: Borsh failed to serialize this account. */
export class BorshSerializeErrorError extends ProgramError {
  readonly name: string = 'BorshSerializeError';

  readonly code: number = 0x5; // 5

  constructor(program: Program, cause?: Error) {
    super('Borsh failed to serialize this account.', program, cause);
  }
}
codeToErrorMap.set(0x5, BorshSerializeErrorError);
nameToErrorMap.set('BorshSerializeError', BorshSerializeErrorError);

/** BorshDeserializeError: Borsh failed to deserialize this account. */
export class BorshDeserializeErrorError extends ProgramError {
  readonly name: string = 'BorshDeserializeError';

  readonly code: number = 0x6; // 6

  constructor(program: Program, cause?: Error) {
    super('Borsh failed to deserialize this account.', program, cause);
  }
}
codeToErrorMap.set(0x6, BorshDeserializeErrorError);
nameToErrorMap.set('BorshDeserializeError', BorshDeserializeErrorError);

/** InvalidAuthority: The payer does not have authority to perform this action. */
export class InvalidAuthorityError extends ProgramError {
  readonly name: string = 'InvalidAuthority';

  readonly code: number = 0x7; // 7

  constructor(program: Program, cause?: Error) {
    super(
      'The payer does not have authority to perform this action.',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x7, InvalidAuthorityError);
nameToErrorMap.set('InvalidAuthority', InvalidAuthorityError);

/** NumericalOverflow: Numerical Overflow */
export class NumericalOverflowError extends ProgramError {
  readonly name: string = 'NumericalOverflow';

  readonly code: number = 0x8; // 8

  constructor(program: Program, cause?: Error) {
    super('Numerical Overflow', program, cause);
  }
}
codeToErrorMap.set(0x8, NumericalOverflowError);
nameToErrorMap.set('NumericalOverflow', NumericalOverflowError);

/** IncorrectOwner: Incorrect Owner */
export class IncorrectOwnerError extends ProgramError {
  readonly name: string = 'IncorrectOwner';

  readonly code: number = 0x9; // 9

  constructor(program: Program, cause?: Error) {
    super('Incorrect Owner', program, cause);
  }
}
codeToErrorMap.set(0x9, IncorrectOwnerError);
nameToErrorMap.set('IncorrectOwner', IncorrectOwnerError);

/** MintMismatch: Mint Mismatch between Metadata and Mint Accounts. */
export class MintMismatchError extends ProgramError {
  readonly name: string = 'MintMismatch';

  readonly code: number = 0xa; // 10

  constructor(program: Program, cause?: Error) {
    super('Mint Mismatch between Metadata and Mint Accounts.', program, cause);
  }
}
codeToErrorMap.set(0xa, MintMismatchError);
nameToErrorMap.set('MintMismatch', MintMismatchError);

/** InvalidTokenStandard: Must be a NonFungible Token */
export class InvalidTokenStandardError extends ProgramError {
  readonly name: string = 'InvalidTokenStandard';

  readonly code: number = 0xb; // 11

  constructor(program: Program, cause?: Error) {
    super('Must be a NonFungible Token', program, cause);
  }
}
codeToErrorMap.set(0xb, InvalidTokenStandardError);
nameToErrorMap.set('InvalidTokenStandard', InvalidTokenStandardError);

/** NotEnoughTokens: Not enough tokens in the provided token account. */
export class NotEnoughTokensError extends ProgramError {
  readonly name: string = 'NotEnoughTokens';

  readonly code: number = 0xc; // 12

  constructor(program: Program, cause?: Error) {
    super('Not enough tokens in the provided token account.', program, cause);
  }
}
codeToErrorMap.set(0xc, NotEnoughTokensError);
nameToErrorMap.set('NotEnoughTokens', NotEnoughTokensError);

/** InvalidShardAccount: The shard account is invalid. */
export class InvalidShardAccountError extends ProgramError {
  readonly name: string = 'InvalidShardAccount';

  readonly code: number = 0xd; // 13

  constructor(program: Program, cause?: Error) {
    super('The shard account is invalid.', program, cause);
  }
}
codeToErrorMap.set(0xd, InvalidShardAccountError);
nameToErrorMap.set('InvalidShardAccount', InvalidShardAccountError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getMplInscriptionErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getMplInscriptionErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}