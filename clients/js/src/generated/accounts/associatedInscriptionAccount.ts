/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  bytes,
  publicKey as publicKeySerializer,
  string,
  struct,
} from '@metaplex-foundation/umi/serializers';

export type AssociatedInscriptionAccount =
  Account<AssociatedInscriptionAccountAccountData>;

export type AssociatedInscriptionAccountAccountData = { data: Uint8Array };

export type AssociatedInscriptionAccountAccountDataArgs =
  AssociatedInscriptionAccountAccountData;

export function getAssociatedInscriptionAccountAccountDataSerializer(): Serializer<
  AssociatedInscriptionAccountAccountDataArgs,
  AssociatedInscriptionAccountAccountData
> {
  return struct<AssociatedInscriptionAccountAccountData>([['data', bytes()]], {
    description: 'AssociatedInscriptionAccountAccountData',
  }) as Serializer<
    AssociatedInscriptionAccountAccountDataArgs,
    AssociatedInscriptionAccountAccountData
  >;
}

export function deserializeAssociatedInscriptionAccount(
  rawAccount: RpcAccount
): AssociatedInscriptionAccount {
  return deserializeAccount(
    rawAccount,
    getAssociatedInscriptionAccountAccountDataSerializer()
  );
}

export async function fetchAssociatedInscriptionAccount(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<AssociatedInscriptionAccount> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'AssociatedInscriptionAccount');
  return deserializeAssociatedInscriptionAccount(maybeAccount);
}

export async function safeFetchAssociatedInscriptionAccount(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<AssociatedInscriptionAccount | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists
    ? deserializeAssociatedInscriptionAccount(maybeAccount)
    : null;
}

export async function fetchAllAssociatedInscriptionAccount(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<AssociatedInscriptionAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'AssociatedInscriptionAccount');
    return deserializeAssociatedInscriptionAccount(maybeAccount);
  });
}

export async function safeFetchAllAssociatedInscriptionAccount(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<AssociatedInscriptionAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeAssociatedInscriptionAccount(maybeAccount as RpcAccount)
    );
}

export function getAssociatedInscriptionAccountGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplInscription',
    '1NSCRfGeyo7wPUazGbaPBUsTM49e1k2aXewHGARfzSo'
  );
  return gpaBuilder(context, programId)
    .registerFields<{ data: Uint8Array }>({ data: [0, bytes()] })
    .deserializeUsing<AssociatedInscriptionAccount>((account) =>
      deserializeAssociatedInscriptionAccount(account)
    );
}

export function findAssociatedInscriptionAccountPda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The association tag */
    associationTag: string;
    /** The address of the Inscription Metadata Account */
    inscriptionMetadataAccount: PublicKey;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'mplInscription',
    '1NSCRfGeyo7wPUazGbaPBUsTM49e1k2aXewHGARfzSo'
  );
  return context.eddsa.findPda(programId, [
    string({ size: 'variable' }).serialize('Inscription'),
    string({ size: 'variable' }).serialize(seeds.associationTag),
    publicKeySerializer().serialize(seeds.inscriptionMetadataAccount),
  ]);
}

export async function fetchAssociatedInscriptionAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findAssociatedInscriptionAccountPda>[1],
  options?: RpcGetAccountOptions
): Promise<AssociatedInscriptionAccount> {
  return fetchAssociatedInscriptionAccount(
    context,
    findAssociatedInscriptionAccountPda(context, seeds),
    options
  );
}

export async function safeFetchAssociatedInscriptionAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findAssociatedInscriptionAccountPda>[1],
  options?: RpcGetAccountOptions
): Promise<AssociatedInscriptionAccount | null> {
  return safeFetchAssociatedInscriptionAccount(
    context,
    findAssociatedInscriptionAccountPda(context, seeds),
    options
  );
}
