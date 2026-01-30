
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type MemberPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Member"
  objects: {
    pendingConfirmations: PendingConfirmationPayload<ExtArgs>[]
    auditLogs: AuditLogPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt: Date | null
    createdAt: Date
  }, ExtArgs["result"]["member"]>
  composites: {}
}

/**
 * Model Member
 * 
 */
export type Member = runtime.Types.DefaultSelection<MemberPayload>
export type PendingConfirmationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PendingConfirmation"
  objects: {
    member: MemberPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    memberId: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail: string | null
    confidenceScore: number | null
    status: string
    expiresAt: Date
    confirmedAt: Date | null
    createdAt: Date
  }, ExtArgs["result"]["pendingConfirmation"]>
  composites: {}
}

/**
 * Model PendingConfirmation
 * 
 */
export type PendingConfirmation = runtime.Types.DefaultSelection<PendingConfirmationPayload>
export type AuditLogPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "AuditLog"
  objects: {
    member: MemberPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    memberId: string
    action: string
    performedBy: string | null
    metadata: Prisma.JsonValue | null
    createdAt: Date
  }, ExtArgs["result"]["auditLog"]>
  composites: {}
}

/**
 * Model AuditLog
 * 
 */
export type AuditLog = runtime.Types.DefaultSelection<AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pendingConfirmation`: Exposes CRUD operations for the **PendingConfirmation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingConfirmations
    * const pendingConfirmations = await prisma.pendingConfirmation.findMany()
    * ```
    */
  get pendingConfirmation(): Prisma.PendingConfirmationDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Member: 'Member',
    PendingConfirmation: 'PendingConfirmation',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'member' | 'pendingConfirmation' | 'auditLog'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Member: {
        payload: MemberPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      PendingConfirmation: {
        payload: PendingConfirmationPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PendingConfirmationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingConfirmationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>
          }
          findFirst: {
            args: Prisma.PendingConfirmationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingConfirmationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>
          }
          findMany: {
            args: Prisma.PendingConfirmationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>[]
          }
          create: {
            args: Prisma.PendingConfirmationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>
          }
          createMany: {
            args: Prisma.PendingConfirmationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PendingConfirmationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>
          }
          update: {
            args: Prisma.PendingConfirmationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>
          }
          deleteMany: {
            args: Prisma.PendingConfirmationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PendingConfirmationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PendingConfirmationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PendingConfirmationPayload>
          }
          aggregate: {
            args: Prisma.PendingConfirmationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePendingConfirmation>
          }
          groupBy: {
            args: Prisma.PendingConfirmationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PendingConfirmationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingConfirmationCountArgs<ExtArgs>,
            result: $Utils.Optional<PendingConfirmationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: AuditLogPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>,
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MemberCountOutputType
   */


  export type MemberCountOutputType = {
    pendingConfirmations: number
    auditLogs: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pendingConfirmations?: boolean | MemberCountOutputTypeCountPendingConfirmationsArgs
    auditLogs?: boolean | MemberCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPendingConfirmationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PendingConfirmationWhereInput
  }


  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Member
   */


  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    currentEmployer: string | null
    currentTitle: string | null
    employmentStatus: string | null
    verificationStatus: string | null
    lastVerifiedAt: Date | null
    createdAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    currentEmployer: string | null
    currentTitle: string | null
    employmentStatus: string | null
    verificationStatus: string | null
    lastVerifiedAt: Date | null
    createdAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    currentEmployer: number
    currentTitle: number
    employmentStatus: number
    verificationStatus: number
    lastVerifiedAt: number
    createdAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    currentEmployer?: true
    currentTitle?: true
    employmentStatus?: true
    verificationStatus?: true
    lastVerifiedAt?: true
    createdAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    currentEmployer?: true
    currentTitle?: true
    employmentStatus?: true
    verificationStatus?: true
    lastVerifiedAt?: true
    createdAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    currentEmployer?: true
    currentTitle?: true
    employmentStatus?: true
    verificationStatus?: true
    lastVerifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: Enumerable<MemberOrderByWithAggregationInput>
    by: MemberScalarFieldEnum[]
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }


  export type MemberGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt: Date | null
    createdAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    currentEmployer?: boolean
    currentTitle?: boolean
    employmentStatus?: boolean
    verificationStatus?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    pendingConfirmations?: boolean | Member$pendingConfirmationsArgs<ExtArgs>
    auditLogs?: boolean | Member$auditLogsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    currentEmployer?: boolean
    currentTitle?: boolean
    employmentStatus?: boolean
    verificationStatus?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pendingConfirmations?: boolean | Member$pendingConfirmationsArgs<ExtArgs>
    auditLogs?: boolean | Member$auditLogsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeArgs<ExtArgs>
  }


  type MemberGetPayload<S extends boolean | null | undefined | MemberArgs> = $Types.GetResult<MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Member'> extends True ? Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Member'> extends True ? Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberCreateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    pendingConfirmations<T extends Member$pendingConfirmationsArgs<ExtArgs> = {}>(args?: Subset<T, Member$pendingConfirmationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findMany', never>| Null>;

    auditLogs<T extends Member$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Member$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Member base type for findUnique actions
   */
  export type MemberFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUnique
   */
  export interface MemberFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MemberFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member base type for findFirst actions
   */
  export type MemberFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: Enumerable<MemberScalarFieldEnum>
  }

  /**
   * Member findFirst
   */
  export interface MemberFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MemberFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: Enumerable<MemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }


  /**
   * Member.pendingConfirmations
   */
  export type Member$pendingConfirmationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    where?: PendingConfirmationWhereInput
    orderBy?: Enumerable<PendingConfirmationOrderByWithRelationInput>
    cursor?: PendingConfirmationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PendingConfirmationScalarFieldEnum>
  }


  /**
   * Member.auditLogs
   */
  export type Member$auditLogsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: Enumerable<AuditLogOrderByWithRelationInput>
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AuditLogScalarFieldEnum>
  }


  /**
   * Member without action
   */
  export type MemberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
  }



  /**
   * Model PendingConfirmation
   */


  export type AggregatePendingConfirmation = {
    _count: PendingConfirmationCountAggregateOutputType | null
    _avg: PendingConfirmationAvgAggregateOutputType | null
    _sum: PendingConfirmationSumAggregateOutputType | null
    _min: PendingConfirmationMinAggregateOutputType | null
    _max: PendingConfirmationMaxAggregateOutputType | null
  }

  export type PendingConfirmationAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type PendingConfirmationSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type PendingConfirmationMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    confirmationToken: string | null
    proposedEmployer: string | null
    proposedTitle: string | null
    enrichmentEmail: string | null
    confidenceScore: number | null
    status: string | null
    expiresAt: Date | null
    confirmedAt: Date | null
    createdAt: Date | null
  }

  export type PendingConfirmationMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    confirmationToken: string | null
    proposedEmployer: string | null
    proposedTitle: string | null
    enrichmentEmail: string | null
    confidenceScore: number | null
    status: string | null
    expiresAt: Date | null
    confirmedAt: Date | null
    createdAt: Date | null
  }

  export type PendingConfirmationCountAggregateOutputType = {
    id: number
    memberId: number
    confirmationToken: number
    proposedEmployer: number
    proposedTitle: number
    enrichmentEmail: number
    confidenceScore: number
    status: number
    expiresAt: number
    confirmedAt: number
    createdAt: number
    _all: number
  }


  export type PendingConfirmationAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type PendingConfirmationSumAggregateInputType = {
    confidenceScore?: true
  }

  export type PendingConfirmationMinAggregateInputType = {
    id?: true
    memberId?: true
    confirmationToken?: true
    proposedEmployer?: true
    proposedTitle?: true
    enrichmentEmail?: true
    confidenceScore?: true
    status?: true
    expiresAt?: true
    confirmedAt?: true
    createdAt?: true
  }

  export type PendingConfirmationMaxAggregateInputType = {
    id?: true
    memberId?: true
    confirmationToken?: true
    proposedEmployer?: true
    proposedTitle?: true
    enrichmentEmail?: true
    confidenceScore?: true
    status?: true
    expiresAt?: true
    confirmedAt?: true
    createdAt?: true
  }

  export type PendingConfirmationCountAggregateInputType = {
    id?: true
    memberId?: true
    confirmationToken?: true
    proposedEmployer?: true
    proposedTitle?: true
    enrichmentEmail?: true
    confidenceScore?: true
    status?: true
    expiresAt?: true
    confirmedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PendingConfirmationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingConfirmation to aggregate.
     */
    where?: PendingConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingConfirmations to fetch.
     */
    orderBy?: Enumerable<PendingConfirmationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingConfirmations
    **/
    _count?: true | PendingConfirmationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingConfirmationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingConfirmationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingConfirmationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingConfirmationMaxAggregateInputType
  }

  export type GetPendingConfirmationAggregateType<T extends PendingConfirmationAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingConfirmation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingConfirmation[P]>
      : GetScalarType<T[P], AggregatePendingConfirmation[P]>
  }




  export type PendingConfirmationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PendingConfirmationWhereInput
    orderBy?: Enumerable<PendingConfirmationOrderByWithAggregationInput>
    by: PendingConfirmationScalarFieldEnum[]
    having?: PendingConfirmationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingConfirmationCountAggregateInputType | true
    _avg?: PendingConfirmationAvgAggregateInputType
    _sum?: PendingConfirmationSumAggregateInputType
    _min?: PendingConfirmationMinAggregateInputType
    _max?: PendingConfirmationMaxAggregateInputType
  }


  export type PendingConfirmationGroupByOutputType = {
    id: string
    memberId: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail: string | null
    confidenceScore: number | null
    status: string
    expiresAt: Date
    confirmedAt: Date | null
    createdAt: Date
    _count: PendingConfirmationCountAggregateOutputType | null
    _avg: PendingConfirmationAvgAggregateOutputType | null
    _sum: PendingConfirmationSumAggregateOutputType | null
    _min: PendingConfirmationMinAggregateOutputType | null
    _max: PendingConfirmationMaxAggregateOutputType | null
  }

  type GetPendingConfirmationGroupByPayload<T extends PendingConfirmationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PendingConfirmationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingConfirmationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingConfirmationGroupByOutputType[P]>
            : GetScalarType<T[P], PendingConfirmationGroupByOutputType[P]>
        }
      >
    >


  export type PendingConfirmationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    confirmationToken?: boolean
    proposedEmployer?: boolean
    proposedTitle?: boolean
    enrichmentEmail?: boolean
    confidenceScore?: boolean
    status?: boolean
    expiresAt?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    member?: boolean | MemberArgs<ExtArgs>
  }, ExtArgs["result"]["pendingConfirmation"]>

  export type PendingConfirmationSelectScalar = {
    id?: boolean
    memberId?: boolean
    confirmationToken?: boolean
    proposedEmployer?: boolean
    proposedTitle?: boolean
    enrichmentEmail?: boolean
    confidenceScore?: boolean
    status?: boolean
    expiresAt?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
  }

  export type PendingConfirmationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    member?: boolean | MemberArgs<ExtArgs>
  }


  type PendingConfirmationGetPayload<S extends boolean | null | undefined | PendingConfirmationArgs> = $Types.GetResult<PendingConfirmationPayload, S>

  type PendingConfirmationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PendingConfirmationFindManyArgs, 'select' | 'include'> & {
      select?: PendingConfirmationCountAggregateInputType | true
    }

  export interface PendingConfirmationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingConfirmation'], meta: { name: 'PendingConfirmation' } }
    /**
     * Find zero or one PendingConfirmation that matches the filter.
     * @param {PendingConfirmationFindUniqueArgs} args - Arguments to find a PendingConfirmation
     * @example
     * // Get one PendingConfirmation
     * const pendingConfirmation = await prisma.pendingConfirmation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PendingConfirmationFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PendingConfirmationFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PendingConfirmation'> extends True ? Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PendingConfirmation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PendingConfirmationFindUniqueOrThrowArgs} args - Arguments to find a PendingConfirmation
     * @example
     * // Get one PendingConfirmation
     * const pendingConfirmation = await prisma.pendingConfirmation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PendingConfirmationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingConfirmationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PendingConfirmation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationFindFirstArgs} args - Arguments to find a PendingConfirmation
     * @example
     * // Get one PendingConfirmation
     * const pendingConfirmation = await prisma.pendingConfirmation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PendingConfirmationFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PendingConfirmationFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PendingConfirmation'> extends True ? Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PendingConfirmation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationFindFirstOrThrowArgs} args - Arguments to find a PendingConfirmation
     * @example
     * // Get one PendingConfirmation
     * const pendingConfirmation = await prisma.pendingConfirmation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PendingConfirmationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingConfirmationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PendingConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingConfirmations
     * const pendingConfirmations = await prisma.pendingConfirmation.findMany()
     * 
     * // Get first 10 PendingConfirmations
     * const pendingConfirmations = await prisma.pendingConfirmation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingConfirmationWithIdOnly = await prisma.pendingConfirmation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PendingConfirmationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingConfirmationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PendingConfirmation.
     * @param {PendingConfirmationCreateArgs} args - Arguments to create a PendingConfirmation.
     * @example
     * // Create one PendingConfirmation
     * const PendingConfirmation = await prisma.pendingConfirmation.create({
     *   data: {
     *     // ... data to create a PendingConfirmation
     *   }
     * })
     * 
    **/
    create<T extends PendingConfirmationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PendingConfirmationCreateArgs<ExtArgs>>
    ): Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PendingConfirmations.
     *     @param {PendingConfirmationCreateManyArgs} args - Arguments to create many PendingConfirmations.
     *     @example
     *     // Create many PendingConfirmations
     *     const pendingConfirmation = await prisma.pendingConfirmation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PendingConfirmationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingConfirmationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PendingConfirmation.
     * @param {PendingConfirmationDeleteArgs} args - Arguments to delete one PendingConfirmation.
     * @example
     * // Delete one PendingConfirmation
     * const PendingConfirmation = await prisma.pendingConfirmation.delete({
     *   where: {
     *     // ... filter to delete one PendingConfirmation
     *   }
     * })
     * 
    **/
    delete<T extends PendingConfirmationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PendingConfirmationDeleteArgs<ExtArgs>>
    ): Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PendingConfirmation.
     * @param {PendingConfirmationUpdateArgs} args - Arguments to update one PendingConfirmation.
     * @example
     * // Update one PendingConfirmation
     * const pendingConfirmation = await prisma.pendingConfirmation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PendingConfirmationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PendingConfirmationUpdateArgs<ExtArgs>>
    ): Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PendingConfirmations.
     * @param {PendingConfirmationDeleteManyArgs} args - Arguments to filter PendingConfirmations to delete.
     * @example
     * // Delete a few PendingConfirmations
     * const { count } = await prisma.pendingConfirmation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PendingConfirmationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingConfirmationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingConfirmations
     * const pendingConfirmation = await prisma.pendingConfirmation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PendingConfirmationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PendingConfirmationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingConfirmation.
     * @param {PendingConfirmationUpsertArgs} args - Arguments to update or create a PendingConfirmation.
     * @example
     * // Update or create a PendingConfirmation
     * const pendingConfirmation = await prisma.pendingConfirmation.upsert({
     *   create: {
     *     // ... data to create a PendingConfirmation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingConfirmation we want to update
     *   }
     * })
    **/
    upsert<T extends PendingConfirmationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PendingConfirmationUpsertArgs<ExtArgs>>
    ): Prisma__PendingConfirmationClient<$Types.GetResult<PendingConfirmationPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PendingConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationCountArgs} args - Arguments to filter PendingConfirmations to count.
     * @example
     * // Count the number of PendingConfirmations
     * const count = await prisma.pendingConfirmation.count({
     *   where: {
     *     // ... the filter for the PendingConfirmations we want to count
     *   }
     * })
    **/
    count<T extends PendingConfirmationCountArgs>(
      args?: Subset<T, PendingConfirmationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingConfirmationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingConfirmationAggregateArgs>(args: Subset<T, PendingConfirmationAggregateArgs>): Prisma.PrismaPromise<GetPendingConfirmationAggregateType<T>>

    /**
     * Group by PendingConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingConfirmationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendingConfirmationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingConfirmationGroupByArgs['orderBy'] }
        : { orderBy?: PendingConfirmationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendingConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingConfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PendingConfirmationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    member<T extends MemberArgs<ExtArgs> = {}>(args?: Subset<T, MemberArgs<ExtArgs>>): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PendingConfirmation base type for findUnique actions
   */
  export type PendingConfirmationFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PendingConfirmation to fetch.
     */
    where: PendingConfirmationWhereUniqueInput
  }

  /**
   * PendingConfirmation findUnique
   */
  export interface PendingConfirmationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PendingConfirmationFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PendingConfirmation findUniqueOrThrow
   */
  export type PendingConfirmationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PendingConfirmation to fetch.
     */
    where: PendingConfirmationWhereUniqueInput
  }


  /**
   * PendingConfirmation base type for findFirst actions
   */
  export type PendingConfirmationFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PendingConfirmation to fetch.
     */
    where?: PendingConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingConfirmations to fetch.
     */
    orderBy?: Enumerable<PendingConfirmationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingConfirmations.
     */
    cursor?: PendingConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingConfirmations.
     */
    distinct?: Enumerable<PendingConfirmationScalarFieldEnum>
  }

  /**
   * PendingConfirmation findFirst
   */
  export interface PendingConfirmationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PendingConfirmationFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PendingConfirmation findFirstOrThrow
   */
  export type PendingConfirmationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PendingConfirmation to fetch.
     */
    where?: PendingConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingConfirmations to fetch.
     */
    orderBy?: Enumerable<PendingConfirmationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingConfirmations.
     */
    cursor?: PendingConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingConfirmations.
     */
    distinct?: Enumerable<PendingConfirmationScalarFieldEnum>
  }


  /**
   * PendingConfirmation findMany
   */
  export type PendingConfirmationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which PendingConfirmations to fetch.
     */
    where?: PendingConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingConfirmations to fetch.
     */
    orderBy?: Enumerable<PendingConfirmationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingConfirmations.
     */
    cursor?: PendingConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingConfirmations.
     */
    skip?: number
    distinct?: Enumerable<PendingConfirmationScalarFieldEnum>
  }


  /**
   * PendingConfirmation create
   */
  export type PendingConfirmationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingConfirmation.
     */
    data: XOR<PendingConfirmationCreateInput, PendingConfirmationUncheckedCreateInput>
  }


  /**
   * PendingConfirmation createMany
   */
  export type PendingConfirmationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingConfirmations.
     */
    data: Enumerable<PendingConfirmationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PendingConfirmation update
   */
  export type PendingConfirmationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingConfirmation.
     */
    data: XOR<PendingConfirmationUpdateInput, PendingConfirmationUncheckedUpdateInput>
    /**
     * Choose, which PendingConfirmation to update.
     */
    where: PendingConfirmationWhereUniqueInput
  }


  /**
   * PendingConfirmation updateMany
   */
  export type PendingConfirmationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingConfirmations.
     */
    data: XOR<PendingConfirmationUpdateManyMutationInput, PendingConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which PendingConfirmations to update
     */
    where?: PendingConfirmationWhereInput
  }


  /**
   * PendingConfirmation upsert
   */
  export type PendingConfirmationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingConfirmation to update in case it exists.
     */
    where: PendingConfirmationWhereUniqueInput
    /**
     * In case the PendingConfirmation found by the `where` argument doesn't exist, create a new PendingConfirmation with this data.
     */
    create: XOR<PendingConfirmationCreateInput, PendingConfirmationUncheckedCreateInput>
    /**
     * In case the PendingConfirmation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingConfirmationUpdateInput, PendingConfirmationUncheckedUpdateInput>
  }


  /**
   * PendingConfirmation delete
   */
  export type PendingConfirmationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
    /**
     * Filter which PendingConfirmation to delete.
     */
    where: PendingConfirmationWhereUniqueInput
  }


  /**
   * PendingConfirmation deleteMany
   */
  export type PendingConfirmationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingConfirmations to delete
     */
    where?: PendingConfirmationWhereInput
  }


  /**
   * PendingConfirmation without action
   */
  export type PendingConfirmationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingConfirmation
     */
    select?: PendingConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PendingConfirmationInclude<ExtArgs> | null
  }



  /**
   * Model AuditLog
   */


  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    action: string | null
    performedBy: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    action: string | null
    performedBy: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    memberId: number
    action: number
    performedBy: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    memberId?: true
    action?: true
    performedBy?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    memberId?: true
    action?: true
    performedBy?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    memberId?: true
    action?: true
    performedBy?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: Enumerable<AuditLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: Enumerable<AuditLogOrderByWithAggregationInput>
    by: AuditLogScalarFieldEnum[]
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }


  export type AuditLogGroupByOutputType = {
    id: string
    memberId: string
    action: string
    performedBy: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    action?: boolean
    performedBy?: boolean
    metadata?: boolean
    createdAt?: boolean
    member?: boolean | MemberArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    memberId?: boolean
    action?: boolean
    performedBy?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    member?: boolean | MemberArgs<ExtArgs>
  }


  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogArgs> = $Types.GetResult<AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditLogFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AuditLog'> extends True ? Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditLogFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AuditLog'> extends True ? Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
    **/
    create<T extends AuditLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many AuditLogs.
     *     @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     *     @example
     *     // Create many AuditLogs
     *     const auditLog = await prisma.auditLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuditLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
    **/
    delete<T extends AuditLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
    **/
    upsert<T extends AuditLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>
    ): Prisma__AuditLogClient<$Types.GetResult<AuditLogPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    member<T extends MemberArgs<ExtArgs> = {}>(args?: Subset<T, MemberArgs<ExtArgs>>): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AuditLog base type for findUnique actions
   */
  export type AuditLogFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUnique
   */
  export interface AuditLogFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AuditLogFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog base type for findFirst actions
   */
  export type AuditLogFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: Enumerable<AuditLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: Enumerable<AuditLogScalarFieldEnum>
  }

  /**
   * AuditLog findFirst
   */
  export interface AuditLogFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AuditLogFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: Enumerable<AuditLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: Enumerable<AuditLogScalarFieldEnum>
  }


  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: Enumerable<AuditLogOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: Enumerable<AuditLogScalarFieldEnum>
  }


  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }


  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: Enumerable<AuditLogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }


  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }


  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }


  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }


  /**
   * AuditLog without action
   */
  export type AuditLogArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuditLogInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    currentEmployer: 'currentEmployer',
    currentTitle: 'currentTitle',
    employmentStatus: 'employmentStatus',
    verificationStatus: 'verificationStatus',
    lastVerifiedAt: 'lastVerifiedAt',
    createdAt: 'createdAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const PendingConfirmationScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    confirmationToken: 'confirmationToken',
    proposedEmployer: 'proposedEmployer',
    proposedTitle: 'proposedTitle',
    enrichmentEmail: 'enrichmentEmail',
    confidenceScore: 'confidenceScore',
    status: 'status',
    expiresAt: 'expiresAt',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt'
  };

  export type PendingConfirmationScalarFieldEnum = (typeof PendingConfirmationScalarFieldEnum)[keyof typeof PendingConfirmationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    action: 'action',
    performedBy: 'performedBy',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: Enumerable<MemberWhereInput>
    OR?: Enumerable<MemberWhereInput>
    NOT?: Enumerable<MemberWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    currentEmployer?: StringFilter | string
    currentTitle?: StringFilter | string
    employmentStatus?: StringFilter | string
    verificationStatus?: StringFilter | string
    lastVerifiedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    pendingConfirmations?: PendingConfirmationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentEmployer?: SortOrder
    currentTitle?: SortOrder
    employmentStatus?: SortOrder
    verificationStatus?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pendingConfirmations?: PendingConfirmationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentEmployer?: SortOrder
    currentTitle?: SortOrder
    employmentStatus?: SortOrder
    verificationStatus?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<MemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MemberScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    currentEmployer?: StringWithAggregatesFilter | string
    currentTitle?: StringWithAggregatesFilter | string
    employmentStatus?: StringWithAggregatesFilter | string
    verificationStatus?: StringWithAggregatesFilter | string
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PendingConfirmationWhereInput = {
    AND?: Enumerable<PendingConfirmationWhereInput>
    OR?: Enumerable<PendingConfirmationWhereInput>
    NOT?: Enumerable<PendingConfirmationWhereInput>
    id?: StringFilter | string
    memberId?: StringFilter | string
    confirmationToken?: StringFilter | string
    proposedEmployer?: StringFilter | string
    proposedTitle?: StringFilter | string
    enrichmentEmail?: StringNullableFilter | string | null
    confidenceScore?: FloatNullableFilter | number | null
    status?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    confirmedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    member?: XOR<MemberRelationFilter, MemberWhereInput>
  }

  export type PendingConfirmationOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    confirmationToken?: SortOrder
    proposedEmployer?: SortOrder
    proposedTitle?: SortOrder
    enrichmentEmail?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type PendingConfirmationWhereUniqueInput = {
    id?: string
    confirmationToken?: string
  }

  export type PendingConfirmationOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    confirmationToken?: SortOrder
    proposedEmployer?: SortOrder
    proposedTitle?: SortOrder
    enrichmentEmail?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PendingConfirmationCountOrderByAggregateInput
    _avg?: PendingConfirmationAvgOrderByAggregateInput
    _max?: PendingConfirmationMaxOrderByAggregateInput
    _min?: PendingConfirmationMinOrderByAggregateInput
    _sum?: PendingConfirmationSumOrderByAggregateInput
  }

  export type PendingConfirmationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PendingConfirmationScalarWhereWithAggregatesInput>
    OR?: Enumerable<PendingConfirmationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PendingConfirmationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    memberId?: StringWithAggregatesFilter | string
    confirmationToken?: StringWithAggregatesFilter | string
    proposedEmployer?: StringWithAggregatesFilter | string
    proposedTitle?: StringWithAggregatesFilter | string
    enrichmentEmail?: StringNullableWithAggregatesFilter | string | null
    confidenceScore?: FloatNullableWithAggregatesFilter | number | null
    status?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: Enumerable<AuditLogWhereInput>
    OR?: Enumerable<AuditLogWhereInput>
    NOT?: Enumerable<AuditLogWhereInput>
    id?: StringFilter | string
    memberId?: StringFilter | string
    action?: StringFilter | string
    performedBy?: StringNullableFilter | string | null
    metadata?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    member?: XOR<MemberRelationFilter, MemberWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = {
    id?: string
  }

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuditLogScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuditLogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuditLogScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    memberId?: StringWithAggregatesFilter | string
    action?: StringWithAggregatesFilter | string
    performedBy?: StringNullableWithAggregatesFilter | string | null
    metadata?: JsonNullableWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    pendingConfirmations?: PendingConfirmationCreateNestedManyWithoutMemberInput
    auditLogs?: AuditLogCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    pendingConfirmations?: PendingConfirmationUncheckedCreateNestedManyWithoutMemberInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingConfirmations?: PendingConfirmationUpdateManyWithoutMemberNestedInput
    auditLogs?: AuditLogUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingConfirmations?: PendingConfirmationUncheckedUpdateManyWithoutMemberNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingConfirmationCreateInput = {
    id?: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail?: string | null
    confidenceScore?: number | null
    status: string
    expiresAt: Date | string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutPendingConfirmationsInput
  }

  export type PendingConfirmationUncheckedCreateInput = {
    id?: string
    memberId: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail?: string | null
    confidenceScore?: number | null
    status: string
    expiresAt: Date | string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PendingConfirmationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutPendingConfirmationsNestedInput
  }

  export type PendingConfirmationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingConfirmationCreateManyInput = {
    id?: string
    memberId: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail?: string | null
    confidenceScore?: number | null
    status: string
    expiresAt: Date | string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PendingConfirmationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingConfirmationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    performedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    memberId: string
    action: string
    performedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    memberId: string
    action: string
    performedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PendingConfirmationListRelationFilter = {
    every?: PendingConfirmationWhereInput
    some?: PendingConfirmationWhereInput
    none?: PendingConfirmationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PendingConfirmationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentEmployer?: SortOrder
    currentTitle?: SortOrder
    employmentStatus?: SortOrder
    verificationStatus?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentEmployer?: SortOrder
    currentTitle?: SortOrder
    employmentStatus?: SortOrder
    verificationStatus?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentEmployer?: SortOrder
    currentTitle?: SortOrder
    employmentStatus?: SortOrder
    verificationStatus?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type MemberRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type PendingConfirmationCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    confirmationToken?: SortOrder
    proposedEmployer?: SortOrder
    proposedTitle?: SortOrder
    enrichmentEmail?: SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingConfirmationAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type PendingConfirmationMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    confirmationToken?: SortOrder
    proposedEmployer?: SortOrder
    proposedTitle?: SortOrder
    enrichmentEmail?: SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingConfirmationMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    confirmationToken?: SortOrder
    proposedEmployer?: SortOrder
    proposedTitle?: SortOrder
    enrichmentEmail?: SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingConfirmationSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type PendingConfirmationCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<PendingConfirmationCreateWithoutMemberInput>, Enumerable<PendingConfirmationUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<PendingConfirmationCreateOrConnectWithoutMemberInput>
    createMany?: PendingConfirmationCreateManyMemberInputEnvelope
    connect?: Enumerable<PendingConfirmationWhereUniqueInput>
  }

  export type AuditLogCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<AuditLogCreateWithoutMemberInput>, Enumerable<AuditLogUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AuditLogCreateOrConnectWithoutMemberInput>
    createMany?: AuditLogCreateManyMemberInputEnvelope
    connect?: Enumerable<AuditLogWhereUniqueInput>
  }

  export type PendingConfirmationUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<PendingConfirmationCreateWithoutMemberInput>, Enumerable<PendingConfirmationUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<PendingConfirmationCreateOrConnectWithoutMemberInput>
    createMany?: PendingConfirmationCreateManyMemberInputEnvelope
    connect?: Enumerable<PendingConfirmationWhereUniqueInput>
  }

  export type AuditLogUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<AuditLogCreateWithoutMemberInput>, Enumerable<AuditLogUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AuditLogCreateOrConnectWithoutMemberInput>
    createMany?: AuditLogCreateManyMemberInputEnvelope
    connect?: Enumerable<AuditLogWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PendingConfirmationUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<PendingConfirmationCreateWithoutMemberInput>, Enumerable<PendingConfirmationUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<PendingConfirmationCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<PendingConfirmationUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: PendingConfirmationCreateManyMemberInputEnvelope
    set?: Enumerable<PendingConfirmationWhereUniqueInput>
    disconnect?: Enumerable<PendingConfirmationWhereUniqueInput>
    delete?: Enumerable<PendingConfirmationWhereUniqueInput>
    connect?: Enumerable<PendingConfirmationWhereUniqueInput>
    update?: Enumerable<PendingConfirmationUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<PendingConfirmationUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<PendingConfirmationScalarWhereInput>
  }

  export type AuditLogUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<AuditLogCreateWithoutMemberInput>, Enumerable<AuditLogUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AuditLogCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<AuditLogUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: AuditLogCreateManyMemberInputEnvelope
    set?: Enumerable<AuditLogWhereUniqueInput>
    disconnect?: Enumerable<AuditLogWhereUniqueInput>
    delete?: Enumerable<AuditLogWhereUniqueInput>
    connect?: Enumerable<AuditLogWhereUniqueInput>
    update?: Enumerable<AuditLogUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<AuditLogUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<AuditLogScalarWhereInput>
  }

  export type PendingConfirmationUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<PendingConfirmationCreateWithoutMemberInput>, Enumerable<PendingConfirmationUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<PendingConfirmationCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<PendingConfirmationUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: PendingConfirmationCreateManyMemberInputEnvelope
    set?: Enumerable<PendingConfirmationWhereUniqueInput>
    disconnect?: Enumerable<PendingConfirmationWhereUniqueInput>
    delete?: Enumerable<PendingConfirmationWhereUniqueInput>
    connect?: Enumerable<PendingConfirmationWhereUniqueInput>
    update?: Enumerable<PendingConfirmationUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<PendingConfirmationUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<PendingConfirmationScalarWhereInput>
  }

  export type AuditLogUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<AuditLogCreateWithoutMemberInput>, Enumerable<AuditLogUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<AuditLogCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<AuditLogUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: AuditLogCreateManyMemberInputEnvelope
    set?: Enumerable<AuditLogWhereUniqueInput>
    disconnect?: Enumerable<AuditLogWhereUniqueInput>
    delete?: Enumerable<AuditLogWhereUniqueInput>
    connect?: Enumerable<AuditLogWhereUniqueInput>
    update?: Enumerable<AuditLogUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<AuditLogUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<AuditLogScalarWhereInput>
  }

  export type MemberCreateNestedOneWithoutPendingConfirmationsInput = {
    create?: XOR<MemberCreateWithoutPendingConfirmationsInput, MemberUncheckedCreateWithoutPendingConfirmationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPendingConfirmationsInput
    connect?: MemberWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberUpdateOneRequiredWithoutPendingConfirmationsNestedInput = {
    create?: XOR<MemberCreateWithoutPendingConfirmationsInput, MemberUncheckedCreateWithoutPendingConfirmationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPendingConfirmationsInput
    upsert?: MemberUpsertWithoutPendingConfirmationsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<MemberUpdateWithoutPendingConfirmationsInput, MemberUncheckedUpdateWithoutPendingConfirmationsInput>
  }

  export type MemberCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<MemberCreateWithoutAuditLogsInput, MemberUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAuditLogsInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<MemberCreateWithoutAuditLogsInput, MemberUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAuditLogsInput
    upsert?: MemberUpsertWithoutAuditLogsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<MemberUpdateWithoutAuditLogsInput, MemberUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type PendingConfirmationCreateWithoutMemberInput = {
    id?: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail?: string | null
    confidenceScore?: number | null
    status: string
    expiresAt: Date | string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PendingConfirmationUncheckedCreateWithoutMemberInput = {
    id?: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail?: string | null
    confidenceScore?: number | null
    status: string
    expiresAt: Date | string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PendingConfirmationCreateOrConnectWithoutMemberInput = {
    where: PendingConfirmationWhereUniqueInput
    create: XOR<PendingConfirmationCreateWithoutMemberInput, PendingConfirmationUncheckedCreateWithoutMemberInput>
  }

  export type PendingConfirmationCreateManyMemberInputEnvelope = {
    data: Enumerable<PendingConfirmationCreateManyMemberInput>
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutMemberInput = {
    id?: string
    action: string
    performedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutMemberInput = {
    id?: string
    action: string
    performedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutMemberInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutMemberInput, AuditLogUncheckedCreateWithoutMemberInput>
  }

  export type AuditLogCreateManyMemberInputEnvelope = {
    data: Enumerable<AuditLogCreateManyMemberInput>
    skipDuplicates?: boolean
  }

  export type PendingConfirmationUpsertWithWhereUniqueWithoutMemberInput = {
    where: PendingConfirmationWhereUniqueInput
    update: XOR<PendingConfirmationUpdateWithoutMemberInput, PendingConfirmationUncheckedUpdateWithoutMemberInput>
    create: XOR<PendingConfirmationCreateWithoutMemberInput, PendingConfirmationUncheckedCreateWithoutMemberInput>
  }

  export type PendingConfirmationUpdateWithWhereUniqueWithoutMemberInput = {
    where: PendingConfirmationWhereUniqueInput
    data: XOR<PendingConfirmationUpdateWithoutMemberInput, PendingConfirmationUncheckedUpdateWithoutMemberInput>
  }

  export type PendingConfirmationUpdateManyWithWhereWithoutMemberInput = {
    where: PendingConfirmationScalarWhereInput
    data: XOR<PendingConfirmationUpdateManyMutationInput, PendingConfirmationUncheckedUpdateManyWithoutPendingConfirmationsInput>
  }

  export type PendingConfirmationScalarWhereInput = {
    AND?: Enumerable<PendingConfirmationScalarWhereInput>
    OR?: Enumerable<PendingConfirmationScalarWhereInput>
    NOT?: Enumerable<PendingConfirmationScalarWhereInput>
    id?: StringFilter | string
    memberId?: StringFilter | string
    confirmationToken?: StringFilter | string
    proposedEmployer?: StringFilter | string
    proposedTitle?: StringFilter | string
    enrichmentEmail?: StringNullableFilter | string | null
    confidenceScore?: FloatNullableFilter | number | null
    status?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    confirmedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutMemberInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutMemberInput, AuditLogUncheckedUpdateWithoutMemberInput>
    create: XOR<AuditLogCreateWithoutMemberInput, AuditLogUncheckedCreateWithoutMemberInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutMemberInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutMemberInput, AuditLogUncheckedUpdateWithoutMemberInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutMemberInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutAuditLogsInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: Enumerable<AuditLogScalarWhereInput>
    OR?: Enumerable<AuditLogScalarWhereInput>
    NOT?: Enumerable<AuditLogScalarWhereInput>
    id?: StringFilter | string
    memberId?: StringFilter | string
    action?: StringFilter | string
    performedBy?: StringNullableFilter | string | null
    metadata?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type MemberCreateWithoutPendingConfirmationsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutPendingConfirmationsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutPendingConfirmationsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPendingConfirmationsInput, MemberUncheckedCreateWithoutPendingConfirmationsInput>
  }

  export type MemberUpsertWithoutPendingConfirmationsInput = {
    update: XOR<MemberUpdateWithoutPendingConfirmationsInput, MemberUncheckedUpdateWithoutPendingConfirmationsInput>
    create: XOR<MemberCreateWithoutPendingConfirmationsInput, MemberUncheckedCreateWithoutPendingConfirmationsInput>
  }

  export type MemberUpdateWithoutPendingConfirmationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutPendingConfirmationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    pendingConfirmations?: PendingConfirmationCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    currentEmployer: string
    currentTitle: string
    employmentStatus: string
    verificationStatus: string
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    pendingConfirmations?: PendingConfirmationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutAuditLogsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAuditLogsInput, MemberUncheckedCreateWithoutAuditLogsInput>
  }

  export type MemberUpsertWithoutAuditLogsInput = {
    update: XOR<MemberUpdateWithoutAuditLogsInput, MemberUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<MemberCreateWithoutAuditLogsInput, MemberUncheckedCreateWithoutAuditLogsInput>
  }

  export type MemberUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingConfirmations?: PendingConfirmationUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentEmployer?: StringFieldUpdateOperationsInput | string
    currentTitle?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    verificationStatus?: StringFieldUpdateOperationsInput | string
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingConfirmations?: PendingConfirmationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PendingConfirmationCreateManyMemberInput = {
    id?: string
    confirmationToken: string
    proposedEmployer: string
    proposedTitle: string
    enrichmentEmail?: string | null
    confidenceScore?: number | null
    status: string
    expiresAt: Date | string
    confirmedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyMemberInput = {
    id?: string
    action: string
    performedBy?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PendingConfirmationUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingConfirmationUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingConfirmationUncheckedUpdateManyWithoutPendingConfirmationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    confirmationToken?: StringFieldUpdateOperationsInput | string
    proposedEmployer?: StringFieldUpdateOperationsInput | string
    proposedTitle?: StringFieldUpdateOperationsInput | string
    enrichmentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}