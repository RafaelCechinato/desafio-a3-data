
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Procedures
 * 
 */
export type Procedures = $Result.DefaultSelection<Prisma.$ProceduresPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model Rooms
 * 
 */
export type Rooms = $Result.DefaultSelection<Prisma.$RoomsPayload>
/**
 * Model SurgicalRequest
 * 
 */
export type SurgicalRequest = $Result.DefaultSelection<Prisma.$SurgicalRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Procedures
 * const procedures = await prisma.procedures.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Procedures
   * const procedures = await prisma.procedures.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.procedures`: Exposes CRUD operations for the **Procedures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedures
    * const procedures = await prisma.procedures.findMany()
    * ```
    */
  get procedures(): Prisma.ProceduresDelegate<ExtArgs>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **Rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.RoomsDelegate<ExtArgs>;

  /**
   * `prisma.surgicalRequest`: Exposes CRUD operations for the **SurgicalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurgicalRequests
    * const surgicalRequests = await prisma.surgicalRequest.findMany()
    * ```
    */
  get surgicalRequest(): Prisma.SurgicalRequestDelegate<ExtArgs>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Procedures: 'Procedures',
    Hospital: 'Hospital',
    Rooms: 'Rooms',
    SurgicalRequest: 'SurgicalRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'procedures' | 'hospital' | 'rooms' | 'surgicalRequest'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Procedures: {
        payload: Prisma.$ProceduresPayload<ExtArgs>
        fields: Prisma.ProceduresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProceduresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProceduresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          findFirst: {
            args: Prisma.ProceduresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProceduresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          findMany: {
            args: Prisma.ProceduresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>[]
          }
          create: {
            args: Prisma.ProceduresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          createMany: {
            args: Prisma.ProceduresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProceduresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          update: {
            args: Prisma.ProceduresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          deleteMany: {
            args: Prisma.ProceduresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProceduresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProceduresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProceduresPayload>
          }
          aggregate: {
            args: Prisma.ProceduresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProcedures>
          }
          groupBy: {
            args: Prisma.ProceduresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProceduresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProceduresCountArgs<ExtArgs>,
            result: $Utils.Optional<ProceduresCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>,
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      Rooms: {
        payload: Prisma.$RoomsPayload<ExtArgs>
        fields: Prisma.RoomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findFirst: {
            args: Prisma.RoomsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findMany: {
            args: Prisma.RoomsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          create: {
            args: Prisma.RoomsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          createMany: {
            args: Prisma.RoomsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoomsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          update: {
            args: Prisma.RoomsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          deleteMany: {
            args: Prisma.RoomsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoomsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoomsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.RoomsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomsCountArgs<ExtArgs>,
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      SurgicalRequest: {
        payload: Prisma.$SurgicalRequestPayload<ExtArgs>
        fields: Prisma.SurgicalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurgicalRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurgicalRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>
          }
          findFirst: {
            args: Prisma.SurgicalRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurgicalRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>
          }
          findMany: {
            args: Prisma.SurgicalRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>[]
          }
          create: {
            args: Prisma.SurgicalRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>
          }
          createMany: {
            args: Prisma.SurgicalRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SurgicalRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>
          }
          update: {
            args: Prisma.SurgicalRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>
          }
          deleteMany: {
            args: Prisma.SurgicalRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SurgicalRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SurgicalRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurgicalRequestPayload>
          }
          aggregate: {
            args: Prisma.SurgicalRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSurgicalRequest>
          }
          groupBy: {
            args: Prisma.SurgicalRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SurgicalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurgicalRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<SurgicalRequestCountAggregateOutputType> | number
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
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProceduresCountOutputType
   */

  export type ProceduresCountOutputType = {
    surgicalRequests: number
  }

  export type ProceduresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surgicalRequests?: boolean | ProceduresCountOutputTypeCountSurgicalRequestsArgs
  }

  // Custom InputTypes

  /**
   * ProceduresCountOutputType without action
   */
  export type ProceduresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProceduresCountOutputType
     */
    select?: ProceduresCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProceduresCountOutputType without action
   */
  export type ProceduresCountOutputTypeCountSurgicalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurgicalRequestWhereInput
  }



  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    surgicalRequests: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surgicalRequests?: boolean | HospitalCountOutputTypeCountSurgicalRequestsArgs
  }

  // Custom InputTypes

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountSurgicalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurgicalRequestWhereInput
  }



  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    surgicalRequests: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surgicalRequests?: boolean | RoomsCountOutputTypeCountSurgicalRequestsArgs
  }

  // Custom InputTypes

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountSurgicalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurgicalRequestWhereInput
  }



  /**
   * Count Type SurgicalRequestCountOutputType
   */

  export type SurgicalRequestCountOutputType = {
    room: number
    procedures: number
    hospital: number
  }

  export type SurgicalRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | SurgicalRequestCountOutputTypeCountRoomArgs
    procedures?: boolean | SurgicalRequestCountOutputTypeCountProceduresArgs
    hospital?: boolean | SurgicalRequestCountOutputTypeCountHospitalArgs
  }

  // Custom InputTypes

  /**
   * SurgicalRequestCountOutputType without action
   */
  export type SurgicalRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequestCountOutputType
     */
    select?: SurgicalRequestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SurgicalRequestCountOutputType without action
   */
  export type SurgicalRequestCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
  }


  /**
   * SurgicalRequestCountOutputType without action
   */
  export type SurgicalRequestCountOutputTypeCountProceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProceduresWhereInput
  }


  /**
   * SurgicalRequestCountOutputType without action
   */
  export type SurgicalRequestCountOutputTypeCountHospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Procedures
   */

  export type AggregateProcedures = {
    _count: ProceduresCountAggregateOutputType | null
    _avg: ProceduresAvgAggregateOutputType | null
    _sum: ProceduresSumAggregateOutputType | null
    _min: ProceduresMinAggregateOutputType | null
    _max: ProceduresMaxAggregateOutputType | null
  }

  export type ProceduresAvgAggregateOutputType = {
    code: number | null
  }

  export type ProceduresSumAggregateOutputType = {
    code: number | null
  }

  export type ProceduresMinAggregateOutputType = {
    code: number | null
    name: string | null
  }

  export type ProceduresMaxAggregateOutputType = {
    code: number | null
    name: string | null
  }

  export type ProceduresCountAggregateOutputType = {
    code: number
    name: number
    _all: number
  }


  export type ProceduresAvgAggregateInputType = {
    code?: true
  }

  export type ProceduresSumAggregateInputType = {
    code?: true
  }

  export type ProceduresMinAggregateInputType = {
    code?: true
    name?: true
  }

  export type ProceduresMaxAggregateInputType = {
    code?: true
    name?: true
  }

  export type ProceduresCountAggregateInputType = {
    code?: true
    name?: true
    _all?: true
  }

  export type ProceduresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to aggregate.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procedures
    **/
    _count?: true | ProceduresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProceduresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProceduresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProceduresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProceduresMaxAggregateInputType
  }

  export type GetProceduresAggregateType<T extends ProceduresAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedures[P]>
      : GetScalarType<T[P], AggregateProcedures[P]>
  }




  export type ProceduresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProceduresWhereInput
    orderBy?: ProceduresOrderByWithAggregationInput | ProceduresOrderByWithAggregationInput[]
    by: ProceduresScalarFieldEnum[] | ProceduresScalarFieldEnum
    having?: ProceduresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProceduresCountAggregateInputType | true
    _avg?: ProceduresAvgAggregateInputType
    _sum?: ProceduresSumAggregateInputType
    _min?: ProceduresMinAggregateInputType
    _max?: ProceduresMaxAggregateInputType
  }

  export type ProceduresGroupByOutputType = {
    code: number
    name: string
    _count: ProceduresCountAggregateOutputType | null
    _avg: ProceduresAvgAggregateOutputType | null
    _sum: ProceduresSumAggregateOutputType | null
    _min: ProceduresMinAggregateOutputType | null
    _max: ProceduresMaxAggregateOutputType | null
  }

  type GetProceduresGroupByPayload<T extends ProceduresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProceduresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProceduresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProceduresGroupByOutputType[P]>
            : GetScalarType<T[P], ProceduresGroupByOutputType[P]>
        }
      >
    >


  export type ProceduresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    surgicalRequests?: boolean | Procedures$surgicalRequestsArgs<ExtArgs>
    _count?: boolean | ProceduresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedures"]>

  export type ProceduresSelectScalar = {
    code?: boolean
    name?: boolean
  }

  export type ProceduresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surgicalRequests?: boolean | Procedures$surgicalRequestsArgs<ExtArgs>
    _count?: boolean | ProceduresCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProceduresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procedures"
    objects: {
      surgicalRequests: Prisma.$SurgicalRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      name: string
    }, ExtArgs["result"]["procedures"]>
    composites: {}
  }


  type ProceduresGetPayload<S extends boolean | null | undefined | ProceduresDefaultArgs> = $Result.GetResult<Prisma.$ProceduresPayload, S>

  type ProceduresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProceduresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProceduresCountAggregateInputType | true
    }

  export interface ProceduresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procedures'], meta: { name: 'Procedures' } }
    /**
     * Find zero or one Procedures that matches the filter.
     * @param {ProceduresFindUniqueArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProceduresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProceduresFindUniqueArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Procedures that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProceduresFindUniqueOrThrowArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProceduresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProceduresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresFindFirstArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProceduresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProceduresFindFirstArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Procedures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresFindFirstOrThrowArgs} args - Arguments to find a Procedures
     * @example
     * // Get one Procedures
     * const procedures = await prisma.procedures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProceduresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProceduresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procedures
     * const procedures = await prisma.procedures.findMany()
     * 
     * // Get first 10 Procedures
     * const procedures = await prisma.procedures.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const proceduresWithCodeOnly = await prisma.procedures.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends ProceduresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProceduresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Procedures.
     * @param {ProceduresCreateArgs} args - Arguments to create a Procedures.
     * @example
     * // Create one Procedures
     * const Procedures = await prisma.procedures.create({
     *   data: {
     *     // ... data to create a Procedures
     *   }
     * })
     * 
    **/
    create<T extends ProceduresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProceduresCreateArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Procedures.
     *     @param {ProceduresCreateManyArgs} args - Arguments to create many Procedures.
     *     @example
     *     // Create many Procedures
     *     const procedures = await prisma.procedures.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProceduresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProceduresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Procedures.
     * @param {ProceduresDeleteArgs} args - Arguments to delete one Procedures.
     * @example
     * // Delete one Procedures
     * const Procedures = await prisma.procedures.delete({
     *   where: {
     *     // ... filter to delete one Procedures
     *   }
     * })
     * 
    **/
    delete<T extends ProceduresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProceduresDeleteArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Procedures.
     * @param {ProceduresUpdateArgs} args - Arguments to update one Procedures.
     * @example
     * // Update one Procedures
     * const procedures = await prisma.procedures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProceduresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProceduresUpdateArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Procedures.
     * @param {ProceduresDeleteManyArgs} args - Arguments to filter Procedures to delete.
     * @example
     * // Delete a few Procedures
     * const { count } = await prisma.procedures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProceduresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProceduresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procedures
     * const procedures = await prisma.procedures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProceduresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProceduresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Procedures.
     * @param {ProceduresUpsertArgs} args - Arguments to update or create a Procedures.
     * @example
     * // Update or create a Procedures
     * const procedures = await prisma.procedures.upsert({
     *   create: {
     *     // ... data to create a Procedures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procedures we want to update
     *   }
     * })
    **/
    upsert<T extends ProceduresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProceduresUpsertArgs<ExtArgs>>
    ): Prisma__ProceduresClient<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresCountArgs} args - Arguments to filter Procedures to count.
     * @example
     * // Count the number of Procedures
     * const count = await prisma.procedures.count({
     *   where: {
     *     // ... the filter for the Procedures we want to count
     *   }
     * })
    **/
    count<T extends ProceduresCountArgs>(
      args?: Subset<T, ProceduresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProceduresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProceduresAggregateArgs>(args: Subset<T, ProceduresAggregateArgs>): Prisma.PrismaPromise<GetProceduresAggregateType<T>>

    /**
     * Group by Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProceduresGroupByArgs} args - Group by arguments.
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
      T extends ProceduresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProceduresGroupByArgs['orderBy'] }
        : { orderBy?: ProceduresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProceduresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProceduresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procedures model
   */
  readonly fields: ProceduresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procedures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProceduresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    surgicalRequests<T extends Procedures$surgicalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Procedures$surgicalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Procedures model
   */ 
  interface ProceduresFieldRefs {
    readonly code: FieldRef<"Procedures", 'Int'>
    readonly name: FieldRef<"Procedures", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Procedures findUnique
   */
  export type ProceduresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where: ProceduresWhereUniqueInput
  }


  /**
   * Procedures findUniqueOrThrow
   */
  export type ProceduresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where: ProceduresWhereUniqueInput
  }


  /**
   * Procedures findFirst
   */
  export type ProceduresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }


  /**
   * Procedures findFirstOrThrow
   */
  export type ProceduresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }


  /**
   * Procedures findMany
   */
  export type ProceduresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProceduresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procedures.
     */
    cursor?: ProceduresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }


  /**
   * Procedures create
   */
  export type ProceduresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * The data needed to create a Procedures.
     */
    data: XOR<ProceduresCreateInput, ProceduresUncheckedCreateInput>
  }


  /**
   * Procedures createMany
   */
  export type ProceduresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procedures.
     */
    data: ProceduresCreateManyInput | ProceduresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Procedures update
   */
  export type ProceduresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * The data needed to update a Procedures.
     */
    data: XOR<ProceduresUpdateInput, ProceduresUncheckedUpdateInput>
    /**
     * Choose, which Procedures to update.
     */
    where: ProceduresWhereUniqueInput
  }


  /**
   * Procedures updateMany
   */
  export type ProceduresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProceduresUpdateManyMutationInput, ProceduresUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProceduresWhereInput
  }


  /**
   * Procedures upsert
   */
  export type ProceduresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * The filter to search for the Procedures to update in case it exists.
     */
    where: ProceduresWhereUniqueInput
    /**
     * In case the Procedures found by the `where` argument doesn't exist, create a new Procedures with this data.
     */
    create: XOR<ProceduresCreateInput, ProceduresUncheckedCreateInput>
    /**
     * In case the Procedures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProceduresUpdateInput, ProceduresUncheckedUpdateInput>
  }


  /**
   * Procedures delete
   */
  export type ProceduresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    /**
     * Filter which Procedures to delete.
     */
    where: ProceduresWhereUniqueInput
  }


  /**
   * Procedures deleteMany
   */
  export type ProceduresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to delete
     */
    where?: ProceduresWhereInput
  }


  /**
   * Procedures.surgicalRequests
   */
  export type Procedures$surgicalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    where?: SurgicalRequestWhereInput
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    cursor?: SurgicalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurgicalRequestScalarFieldEnum | SurgicalRequestScalarFieldEnum[]
  }


  /**
   * Procedures without action
   */
  export type ProceduresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
  }



  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    code: number | null
  }

  export type HospitalSumAggregateOutputType = {
    code: number | null
  }

  export type HospitalMinAggregateOutputType = {
    code: number | null
    name: string | null
  }

  export type HospitalMaxAggregateOutputType = {
    code: number | null
    name: string | null
  }

  export type HospitalCountAggregateOutputType = {
    code: number
    name: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    code?: true
  }

  export type HospitalSumAggregateInputType = {
    code?: true
  }

  export type HospitalMinAggregateInputType = {
    code?: true
    name?: true
  }

  export type HospitalMaxAggregateInputType = {
    code?: true
    name?: true
  }

  export type HospitalCountAggregateInputType = {
    code?: true
    name?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    code: number
    name: string
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    surgicalRequests?: boolean | Hospital$surgicalRequestsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    code?: boolean
    name?: boolean
  }

  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surgicalRequests?: boolean | Hospital$surgicalRequestsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      surgicalRequests: Prisma.$SurgicalRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      name: string
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }


  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HospitalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hospital that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HospitalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const hospitalWithCodeOnly = await prisma.hospital.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends HospitalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
    **/
    create<T extends HospitalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hospitals.
     *     @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     *     @example
     *     // Create many Hospitals
     *     const hospital = await prisma.hospital.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HospitalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
    **/
    delete<T extends HospitalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HospitalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HospitalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HospitalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
    **/
    upsert<T extends HospitalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>
    ): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    surgicalRequests<T extends Hospital$surgicalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$surgicalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Hospital model
   */ 
  interface HospitalFieldRefs {
    readonly code: FieldRef<"Hospital", 'Int'>
    readonly name: FieldRef<"Hospital", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }


  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
  }


  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }


  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }


  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
  }


  /**
   * Hospital.surgicalRequests
   */
  export type Hospital$surgicalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    where?: SurgicalRequestWhereInput
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    cursor?: SurgicalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurgicalRequestScalarFieldEnum | SurgicalRequestScalarFieldEnum[]
  }


  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
  }



  /**
   * Model Rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    code: number | null
  }

  export type RoomsSumAggregateOutputType = {
    code: number | null
  }

  export type RoomsMinAggregateOutputType = {
    code: number | null
    number: string | null
    floor: string | null
    block: string | null
  }

  export type RoomsMaxAggregateOutputType = {
    code: number | null
    number: string | null
    floor: string | null
    block: string | null
  }

  export type RoomsCountAggregateOutputType = {
    code: number
    number: number
    floor: number
    block: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    code?: true
  }

  export type RoomsSumAggregateInputType = {
    code?: true
  }

  export type RoomsMinAggregateInputType = {
    code?: true
    number?: true
    floor?: true
    block?: true
  }

  export type RoomsMaxAggregateInputType = {
    code?: true
    number?: true
    floor?: true
    block?: true
  }

  export type RoomsCountAggregateInputType = {
    code?: true
    number?: true
    floor?: true
    block?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to aggregate.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type RoomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithAggregationInput | RoomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: RoomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    code: number
    number: string
    floor: string
    block: string
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends RoomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type RoomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    number?: boolean
    floor?: boolean
    block?: boolean
    surgicalRequests?: boolean | Rooms$surgicalRequestsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectScalar = {
    code?: boolean
    number?: boolean
    floor?: boolean
    block?: boolean
  }

  export type RoomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surgicalRequests?: boolean | Rooms$surgicalRequestsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RoomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rooms"
    objects: {
      surgicalRequests: Prisma.$SurgicalRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      number: string
      floor: string
      block: string
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }


  type RoomsGetPayload<S extends boolean | null | undefined | RoomsDefaultArgs> = $Result.GetResult<Prisma.$RoomsPayload, S>

  type RoomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface RoomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rooms'], meta: { name: 'Rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {RoomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoomsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoomsFindUniqueArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rooms that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoomsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoomsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomsFindFirstArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoomsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const roomsWithCodeOnly = await prisma.rooms.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends RoomsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rooms.
     * @param {RoomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
    **/
    create<T extends RoomsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoomsCreateArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rooms.
     *     @param {RoomsCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const rooms = await prisma.rooms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoomsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rooms.
     * @param {RoomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
    **/
    delete<T extends RoomsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoomsDeleteArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rooms.
     * @param {RoomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoomsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoomsUpdateArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoomsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoomsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoomsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoomsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rooms.
     * @param {RoomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
    **/
    upsert<T extends RoomsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoomsUpsertArgs<ExtArgs>>
    ): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomsCountArgs>(
      args?: Subset<T, RoomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsGroupByArgs} args - Group by arguments.
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
      T extends RoomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomsGroupByArgs['orderBy'] }
        : { orderBy?: RoomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rooms model
   */
  readonly fields: RoomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    surgicalRequests<T extends Rooms$surgicalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$surgicalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rooms model
   */ 
  interface RoomsFieldRefs {
    readonly code: FieldRef<"Rooms", 'Int'>
    readonly number: FieldRef<"Rooms", 'String'>
    readonly floor: FieldRef<"Rooms", 'String'>
    readonly block: FieldRef<"Rooms", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Rooms findUnique
   */
  export type RoomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }


  /**
   * Rooms findUniqueOrThrow
   */
  export type RoomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }


  /**
   * Rooms findFirst
   */
  export type RoomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }


  /**
   * Rooms findFirstOrThrow
   */
  export type RoomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }


  /**
   * Rooms findMany
   */
  export type RoomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }


  /**
   * Rooms create
   */
  export type RoomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rooms.
     */
    data: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
  }


  /**
   * Rooms createMany
   */
  export type RoomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rooms update
   */
  export type RoomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rooms.
     */
    data: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
    /**
     * Choose, which Rooms to update.
     */
    where: RoomsWhereUniqueInput
  }


  /**
   * Rooms updateMany
   */
  export type RoomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomsWhereInput
  }


  /**
   * Rooms upsert
   */
  export type RoomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rooms to update in case it exists.
     */
    where: RoomsWhereUniqueInput
    /**
     * In case the Rooms found by the `where` argument doesn't exist, create a new Rooms with this data.
     */
    create: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
    /**
     * In case the Rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
  }


  /**
   * Rooms delete
   */
  export type RoomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter which Rooms to delete.
     */
    where: RoomsWhereUniqueInput
  }


  /**
   * Rooms deleteMany
   */
  export type RoomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomsWhereInput
  }


  /**
   * Rooms.surgicalRequests
   */
  export type Rooms$surgicalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    where?: SurgicalRequestWhereInput
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    cursor?: SurgicalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurgicalRequestScalarFieldEnum | SurgicalRequestScalarFieldEnum[]
  }


  /**
   * Rooms without action
   */
  export type RoomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
  }



  /**
   * Model SurgicalRequest
   */

  export type AggregateSurgicalRequest = {
    _count: SurgicalRequestCountAggregateOutputType | null
    _avg: SurgicalRequestAvgAggregateOutputType | null
    _sum: SurgicalRequestSumAggregateOutputType | null
    _min: SurgicalRequestMinAggregateOutputType | null
    _max: SurgicalRequestMaxAggregateOutputType | null
  }

  export type SurgicalRequestAvgAggregateOutputType = {
    code: number | null
  }

  export type SurgicalRequestSumAggregateOutputType = {
    code: number | null
  }

  export type SurgicalRequestMinAggregateOutputType = {
    code: number | null
    doctor: string | null
    pacient: string | null
    dateSurgical: Date | null
    dateCreate: Date | null
    observations: string | null
  }

  export type SurgicalRequestMaxAggregateOutputType = {
    code: number | null
    doctor: string | null
    pacient: string | null
    dateSurgical: Date | null
    dateCreate: Date | null
    observations: string | null
  }

  export type SurgicalRequestCountAggregateOutputType = {
    code: number
    doctor: number
    pacient: number
    dateSurgical: number
    dateCreate: number
    observations: number
    _all: number
  }


  export type SurgicalRequestAvgAggregateInputType = {
    code?: true
  }

  export type SurgicalRequestSumAggregateInputType = {
    code?: true
  }

  export type SurgicalRequestMinAggregateInputType = {
    code?: true
    doctor?: true
    pacient?: true
    dateSurgical?: true
    dateCreate?: true
    observations?: true
  }

  export type SurgicalRequestMaxAggregateInputType = {
    code?: true
    doctor?: true
    pacient?: true
    dateSurgical?: true
    dateCreate?: true
    observations?: true
  }

  export type SurgicalRequestCountAggregateInputType = {
    code?: true
    doctor?: true
    pacient?: true
    dateSurgical?: true
    dateCreate?: true
    observations?: true
    _all?: true
  }

  export type SurgicalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurgicalRequest to aggregate.
     */
    where?: SurgicalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgicalRequests to fetch.
     */
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurgicalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgicalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgicalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurgicalRequests
    **/
    _count?: true | SurgicalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurgicalRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurgicalRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurgicalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurgicalRequestMaxAggregateInputType
  }

  export type GetSurgicalRequestAggregateType<T extends SurgicalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSurgicalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurgicalRequest[P]>
      : GetScalarType<T[P], AggregateSurgicalRequest[P]>
  }




  export type SurgicalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurgicalRequestWhereInput
    orderBy?: SurgicalRequestOrderByWithAggregationInput | SurgicalRequestOrderByWithAggregationInput[]
    by: SurgicalRequestScalarFieldEnum[] | SurgicalRequestScalarFieldEnum
    having?: SurgicalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurgicalRequestCountAggregateInputType | true
    _avg?: SurgicalRequestAvgAggregateInputType
    _sum?: SurgicalRequestSumAggregateInputType
    _min?: SurgicalRequestMinAggregateInputType
    _max?: SurgicalRequestMaxAggregateInputType
  }

  export type SurgicalRequestGroupByOutputType = {
    code: number
    doctor: string
    pacient: string
    dateSurgical: Date
    dateCreate: Date
    observations: string
    _count: SurgicalRequestCountAggregateOutputType | null
    _avg: SurgicalRequestAvgAggregateOutputType | null
    _sum: SurgicalRequestSumAggregateOutputType | null
    _min: SurgicalRequestMinAggregateOutputType | null
    _max: SurgicalRequestMaxAggregateOutputType | null
  }

  type GetSurgicalRequestGroupByPayload<T extends SurgicalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurgicalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurgicalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurgicalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SurgicalRequestGroupByOutputType[P]>
        }
      >
    >


  export type SurgicalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    doctor?: boolean
    pacient?: boolean
    dateSurgical?: boolean
    dateCreate?: boolean
    observations?: boolean
    room?: boolean | SurgicalRequest$roomArgs<ExtArgs>
    procedures?: boolean | SurgicalRequest$proceduresArgs<ExtArgs>
    hospital?: boolean | SurgicalRequest$hospitalArgs<ExtArgs>
    _count?: boolean | SurgicalRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surgicalRequest"]>

  export type SurgicalRequestSelectScalar = {
    code?: boolean
    doctor?: boolean
    pacient?: boolean
    dateSurgical?: boolean
    dateCreate?: boolean
    observations?: boolean
  }

  export type SurgicalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | SurgicalRequest$roomArgs<ExtArgs>
    procedures?: boolean | SurgicalRequest$proceduresArgs<ExtArgs>
    hospital?: boolean | SurgicalRequest$hospitalArgs<ExtArgs>
    _count?: boolean | SurgicalRequestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SurgicalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurgicalRequest"
    objects: {
      room: Prisma.$RoomsPayload<ExtArgs>[]
      procedures: Prisma.$ProceduresPayload<ExtArgs>[]
      hospital: Prisma.$HospitalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      doctor: string
      pacient: string
      dateSurgical: Date
      dateCreate: Date
      observations: string
    }, ExtArgs["result"]["surgicalRequest"]>
    composites: {}
  }


  type SurgicalRequestGetPayload<S extends boolean | null | undefined | SurgicalRequestDefaultArgs> = $Result.GetResult<Prisma.$SurgicalRequestPayload, S>

  type SurgicalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurgicalRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SurgicalRequestCountAggregateInputType | true
    }

  export interface SurgicalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurgicalRequest'], meta: { name: 'SurgicalRequest' } }
    /**
     * Find zero or one SurgicalRequest that matches the filter.
     * @param {SurgicalRequestFindUniqueArgs} args - Arguments to find a SurgicalRequest
     * @example
     * // Get one SurgicalRequest
     * const surgicalRequest = await prisma.surgicalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurgicalRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SurgicalRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SurgicalRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SurgicalRequestFindUniqueOrThrowArgs} args - Arguments to find a SurgicalRequest
     * @example
     * // Get one SurgicalRequest
     * const surgicalRequest = await prisma.surgicalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurgicalRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SurgicalRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SurgicalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestFindFirstArgs} args - Arguments to find a SurgicalRequest
     * @example
     * // Get one SurgicalRequest
     * const surgicalRequest = await prisma.surgicalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurgicalRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SurgicalRequestFindFirstArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SurgicalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestFindFirstOrThrowArgs} args - Arguments to find a SurgicalRequest
     * @example
     * // Get one SurgicalRequest
     * const surgicalRequest = await prisma.surgicalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurgicalRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SurgicalRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SurgicalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurgicalRequests
     * const surgicalRequests = await prisma.surgicalRequest.findMany()
     * 
     * // Get first 10 SurgicalRequests
     * const surgicalRequests = await prisma.surgicalRequest.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const surgicalRequestWithCodeOnly = await prisma.surgicalRequest.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends SurgicalRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SurgicalRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SurgicalRequest.
     * @param {SurgicalRequestCreateArgs} args - Arguments to create a SurgicalRequest.
     * @example
     * // Create one SurgicalRequest
     * const SurgicalRequest = await prisma.surgicalRequest.create({
     *   data: {
     *     // ... data to create a SurgicalRequest
     *   }
     * })
     * 
    **/
    create<T extends SurgicalRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SurgicalRequestCreateArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SurgicalRequests.
     *     @param {SurgicalRequestCreateManyArgs} args - Arguments to create many SurgicalRequests.
     *     @example
     *     // Create many SurgicalRequests
     *     const surgicalRequest = await prisma.surgicalRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SurgicalRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SurgicalRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SurgicalRequest.
     * @param {SurgicalRequestDeleteArgs} args - Arguments to delete one SurgicalRequest.
     * @example
     * // Delete one SurgicalRequest
     * const SurgicalRequest = await prisma.surgicalRequest.delete({
     *   where: {
     *     // ... filter to delete one SurgicalRequest
     *   }
     * })
     * 
    **/
    delete<T extends SurgicalRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SurgicalRequestDeleteArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SurgicalRequest.
     * @param {SurgicalRequestUpdateArgs} args - Arguments to update one SurgicalRequest.
     * @example
     * // Update one SurgicalRequest
     * const surgicalRequest = await prisma.surgicalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurgicalRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SurgicalRequestUpdateArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SurgicalRequests.
     * @param {SurgicalRequestDeleteManyArgs} args - Arguments to filter SurgicalRequests to delete.
     * @example
     * // Delete a few SurgicalRequests
     * const { count } = await prisma.surgicalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurgicalRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SurgicalRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurgicalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurgicalRequests
     * const surgicalRequest = await prisma.surgicalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurgicalRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SurgicalRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurgicalRequest.
     * @param {SurgicalRequestUpsertArgs} args - Arguments to update or create a SurgicalRequest.
     * @example
     * // Update or create a SurgicalRequest
     * const surgicalRequest = await prisma.surgicalRequest.upsert({
     *   create: {
     *     // ... data to create a SurgicalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurgicalRequest we want to update
     *   }
     * })
    **/
    upsert<T extends SurgicalRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SurgicalRequestUpsertArgs<ExtArgs>>
    ): Prisma__SurgicalRequestClient<$Result.GetResult<Prisma.$SurgicalRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SurgicalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestCountArgs} args - Arguments to filter SurgicalRequests to count.
     * @example
     * // Count the number of SurgicalRequests
     * const count = await prisma.surgicalRequest.count({
     *   where: {
     *     // ... the filter for the SurgicalRequests we want to count
     *   }
     * })
    **/
    count<T extends SurgicalRequestCountArgs>(
      args?: Subset<T, SurgicalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurgicalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurgicalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurgicalRequestAggregateArgs>(args: Subset<T, SurgicalRequestAggregateArgs>): Prisma.PrismaPromise<GetSurgicalRequestAggregateType<T>>

    /**
     * Group by SurgicalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgicalRequestGroupByArgs} args - Group by arguments.
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
      T extends SurgicalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurgicalRequestGroupByArgs['orderBy'] }
        : { orderBy?: SurgicalRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SurgicalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurgicalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurgicalRequest model
   */
  readonly fields: SurgicalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurgicalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurgicalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    room<T extends SurgicalRequest$roomArgs<ExtArgs> = {}>(args?: Subset<T, SurgicalRequest$roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, 'findMany'> | Null>;

    procedures<T extends SurgicalRequest$proceduresArgs<ExtArgs> = {}>(args?: Subset<T, SurgicalRequest$proceduresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProceduresPayload<ExtArgs>, T, 'findMany'> | Null>;

    hospital<T extends SurgicalRequest$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, SurgicalRequest$hospitalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SurgicalRequest model
   */ 
  interface SurgicalRequestFieldRefs {
    readonly code: FieldRef<"SurgicalRequest", 'Int'>
    readonly doctor: FieldRef<"SurgicalRequest", 'String'>
    readonly pacient: FieldRef<"SurgicalRequest", 'String'>
    readonly dateSurgical: FieldRef<"SurgicalRequest", 'DateTime'>
    readonly dateCreate: FieldRef<"SurgicalRequest", 'DateTime'>
    readonly observations: FieldRef<"SurgicalRequest", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SurgicalRequest findUnique
   */
  export type SurgicalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * Filter, which SurgicalRequest to fetch.
     */
    where: SurgicalRequestWhereUniqueInput
  }


  /**
   * SurgicalRequest findUniqueOrThrow
   */
  export type SurgicalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * Filter, which SurgicalRequest to fetch.
     */
    where: SurgicalRequestWhereUniqueInput
  }


  /**
   * SurgicalRequest findFirst
   */
  export type SurgicalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * Filter, which SurgicalRequest to fetch.
     */
    where?: SurgicalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgicalRequests to fetch.
     */
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurgicalRequests.
     */
    cursor?: SurgicalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgicalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgicalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurgicalRequests.
     */
    distinct?: SurgicalRequestScalarFieldEnum | SurgicalRequestScalarFieldEnum[]
  }


  /**
   * SurgicalRequest findFirstOrThrow
   */
  export type SurgicalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * Filter, which SurgicalRequest to fetch.
     */
    where?: SurgicalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgicalRequests to fetch.
     */
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurgicalRequests.
     */
    cursor?: SurgicalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgicalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgicalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurgicalRequests.
     */
    distinct?: SurgicalRequestScalarFieldEnum | SurgicalRequestScalarFieldEnum[]
  }


  /**
   * SurgicalRequest findMany
   */
  export type SurgicalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * Filter, which SurgicalRequests to fetch.
     */
    where?: SurgicalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgicalRequests to fetch.
     */
    orderBy?: SurgicalRequestOrderByWithRelationInput | SurgicalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurgicalRequests.
     */
    cursor?: SurgicalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgicalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgicalRequests.
     */
    skip?: number
    distinct?: SurgicalRequestScalarFieldEnum | SurgicalRequestScalarFieldEnum[]
  }


  /**
   * SurgicalRequest create
   */
  export type SurgicalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a SurgicalRequest.
     */
    data: XOR<SurgicalRequestCreateInput, SurgicalRequestUncheckedCreateInput>
  }


  /**
   * SurgicalRequest createMany
   */
  export type SurgicalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurgicalRequests.
     */
    data: SurgicalRequestCreateManyInput | SurgicalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SurgicalRequest update
   */
  export type SurgicalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a SurgicalRequest.
     */
    data: XOR<SurgicalRequestUpdateInput, SurgicalRequestUncheckedUpdateInput>
    /**
     * Choose, which SurgicalRequest to update.
     */
    where: SurgicalRequestWhereUniqueInput
  }


  /**
   * SurgicalRequest updateMany
   */
  export type SurgicalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurgicalRequests.
     */
    data: XOR<SurgicalRequestUpdateManyMutationInput, SurgicalRequestUncheckedUpdateManyInput>
    /**
     * Filter which SurgicalRequests to update
     */
    where?: SurgicalRequestWhereInput
  }


  /**
   * SurgicalRequest upsert
   */
  export type SurgicalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the SurgicalRequest to update in case it exists.
     */
    where: SurgicalRequestWhereUniqueInput
    /**
     * In case the SurgicalRequest found by the `where` argument doesn't exist, create a new SurgicalRequest with this data.
     */
    create: XOR<SurgicalRequestCreateInput, SurgicalRequestUncheckedCreateInput>
    /**
     * In case the SurgicalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurgicalRequestUpdateInput, SurgicalRequestUncheckedUpdateInput>
  }


  /**
   * SurgicalRequest delete
   */
  export type SurgicalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
    /**
     * Filter which SurgicalRequest to delete.
     */
    where: SurgicalRequestWhereUniqueInput
  }


  /**
   * SurgicalRequest deleteMany
   */
  export type SurgicalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurgicalRequests to delete
     */
    where?: SurgicalRequestWhereInput
  }


  /**
   * SurgicalRequest.room
   */
  export type SurgicalRequest$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoomsInclude<ExtArgs> | null
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    cursor?: RoomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }


  /**
   * SurgicalRequest.procedures
   */
  export type SurgicalRequest$proceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedures
     */
    select?: ProceduresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProceduresInclude<ExtArgs> | null
    where?: ProceduresWhereInput
    orderBy?: ProceduresOrderByWithRelationInput | ProceduresOrderByWithRelationInput[]
    cursor?: ProceduresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProceduresScalarFieldEnum | ProceduresScalarFieldEnum[]
  }


  /**
   * SurgicalRequest.hospital
   */
  export type SurgicalRequest$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    cursor?: HospitalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }


  /**
   * SurgicalRequest without action
   */
  export type SurgicalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgicalRequest
     */
    select?: SurgicalRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurgicalRequestInclude<ExtArgs> | null
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


  export const ProceduresScalarFieldEnum: {
    code: 'code',
    name: 'name'
  };

  export type ProceduresScalarFieldEnum = (typeof ProceduresScalarFieldEnum)[keyof typeof ProceduresScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    code: 'code',
    name: 'name'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    code: 'code',
    number: 'number',
    floor: 'floor',
    block: 'block'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const SurgicalRequestScalarFieldEnum: {
    code: 'code',
    doctor: 'doctor',
    pacient: 'pacient',
    dateSurgical: 'dateSurgical',
    dateCreate: 'dateCreate',
    observations: 'observations'
  };

  export type SurgicalRequestScalarFieldEnum = (typeof SurgicalRequestScalarFieldEnum)[keyof typeof SurgicalRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProceduresWhereInput = {
    AND?: ProceduresWhereInput | ProceduresWhereInput[]
    OR?: ProceduresWhereInput[]
    NOT?: ProceduresWhereInput | ProceduresWhereInput[]
    code?: IntFilter<"Procedures"> | number
    name?: StringFilter<"Procedures"> | string
    surgicalRequests?: SurgicalRequestListRelationFilter
  }

  export type ProceduresOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    surgicalRequests?: SurgicalRequestOrderByRelationAggregateInput
  }

  export type ProceduresWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    name?: string
    AND?: ProceduresWhereInput | ProceduresWhereInput[]
    OR?: ProceduresWhereInput[]
    NOT?: ProceduresWhereInput | ProceduresWhereInput[]
    surgicalRequests?: SurgicalRequestListRelationFilter
  }, "code" | "name">

  export type ProceduresOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    _count?: ProceduresCountOrderByAggregateInput
    _avg?: ProceduresAvgOrderByAggregateInput
    _max?: ProceduresMaxOrderByAggregateInput
    _min?: ProceduresMinOrderByAggregateInput
    _sum?: ProceduresSumOrderByAggregateInput
  }

  export type ProceduresScalarWhereWithAggregatesInput = {
    AND?: ProceduresScalarWhereWithAggregatesInput | ProceduresScalarWhereWithAggregatesInput[]
    OR?: ProceduresScalarWhereWithAggregatesInput[]
    NOT?: ProceduresScalarWhereWithAggregatesInput | ProceduresScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"Procedures"> | number
    name?: StringWithAggregatesFilter<"Procedures"> | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    code?: IntFilter<"Hospital"> | number
    name?: StringFilter<"Hospital"> | string
    surgicalRequests?: SurgicalRequestListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    surgicalRequests?: SurgicalRequestOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    name?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    surgicalRequests?: SurgicalRequestListRelationFilter
  }, "code" | "name">

  export type HospitalOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"Hospital"> | number
    name?: StringWithAggregatesFilter<"Hospital"> | string
  }

  export type RoomsWhereInput = {
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    code?: IntFilter<"Rooms"> | number
    number?: StringFilter<"Rooms"> | string
    floor?: StringFilter<"Rooms"> | string
    block?: StringFilter<"Rooms"> | string
    surgicalRequests?: SurgicalRequestListRelationFilter
  }

  export type RoomsOrderByWithRelationInput = {
    code?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    block?: SortOrder
    surgicalRequests?: SurgicalRequestOrderByRelationAggregateInput
  }

  export type RoomsWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    number?: string
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    floor?: StringFilter<"Rooms"> | string
    block?: StringFilter<"Rooms"> | string
    surgicalRequests?: SurgicalRequestListRelationFilter
  }, "code" | "number">

  export type RoomsOrderByWithAggregationInput = {
    code?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    block?: SortOrder
    _count?: RoomsCountOrderByAggregateInput
    _avg?: RoomsAvgOrderByAggregateInput
    _max?: RoomsMaxOrderByAggregateInput
    _min?: RoomsMinOrderByAggregateInput
    _sum?: RoomsSumOrderByAggregateInput
  }

  export type RoomsScalarWhereWithAggregatesInput = {
    AND?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    OR?: RoomsScalarWhereWithAggregatesInput[]
    NOT?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"Rooms"> | number
    number?: StringWithAggregatesFilter<"Rooms"> | string
    floor?: StringWithAggregatesFilter<"Rooms"> | string
    block?: StringWithAggregatesFilter<"Rooms"> | string
  }

  export type SurgicalRequestWhereInput = {
    AND?: SurgicalRequestWhereInput | SurgicalRequestWhereInput[]
    OR?: SurgicalRequestWhereInput[]
    NOT?: SurgicalRequestWhereInput | SurgicalRequestWhereInput[]
    code?: IntFilter<"SurgicalRequest"> | number
    doctor?: StringFilter<"SurgicalRequest"> | string
    pacient?: StringFilter<"SurgicalRequest"> | string
    dateSurgical?: DateTimeFilter<"SurgicalRequest"> | Date | string
    dateCreate?: DateTimeFilter<"SurgicalRequest"> | Date | string
    observations?: StringFilter<"SurgicalRequest"> | string
    room?: RoomsListRelationFilter
    procedures?: ProceduresListRelationFilter
    hospital?: HospitalListRelationFilter
  }

  export type SurgicalRequestOrderByWithRelationInput = {
    code?: SortOrder
    doctor?: SortOrder
    pacient?: SortOrder
    dateSurgical?: SortOrder
    dateCreate?: SortOrder
    observations?: SortOrder
    room?: RoomsOrderByRelationAggregateInput
    procedures?: ProceduresOrderByRelationAggregateInput
    hospital?: HospitalOrderByRelationAggregateInput
  }

  export type SurgicalRequestWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    AND?: SurgicalRequestWhereInput | SurgicalRequestWhereInput[]
    OR?: SurgicalRequestWhereInput[]
    NOT?: SurgicalRequestWhereInput | SurgicalRequestWhereInput[]
    doctor?: StringFilter<"SurgicalRequest"> | string
    pacient?: StringFilter<"SurgicalRequest"> | string
    dateSurgical?: DateTimeFilter<"SurgicalRequest"> | Date | string
    dateCreate?: DateTimeFilter<"SurgicalRequest"> | Date | string
    observations?: StringFilter<"SurgicalRequest"> | string
    room?: RoomsListRelationFilter
    procedures?: ProceduresListRelationFilter
    hospital?: HospitalListRelationFilter
  }, "code">

  export type SurgicalRequestOrderByWithAggregationInput = {
    code?: SortOrder
    doctor?: SortOrder
    pacient?: SortOrder
    dateSurgical?: SortOrder
    dateCreate?: SortOrder
    observations?: SortOrder
    _count?: SurgicalRequestCountOrderByAggregateInput
    _avg?: SurgicalRequestAvgOrderByAggregateInput
    _max?: SurgicalRequestMaxOrderByAggregateInput
    _min?: SurgicalRequestMinOrderByAggregateInput
    _sum?: SurgicalRequestSumOrderByAggregateInput
  }

  export type SurgicalRequestScalarWhereWithAggregatesInput = {
    AND?: SurgicalRequestScalarWhereWithAggregatesInput | SurgicalRequestScalarWhereWithAggregatesInput[]
    OR?: SurgicalRequestScalarWhereWithAggregatesInput[]
    NOT?: SurgicalRequestScalarWhereWithAggregatesInput | SurgicalRequestScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"SurgicalRequest"> | number
    doctor?: StringWithAggregatesFilter<"SurgicalRequest"> | string
    pacient?: StringWithAggregatesFilter<"SurgicalRequest"> | string
    dateSurgical?: DateTimeWithAggregatesFilter<"SurgicalRequest"> | Date | string
    dateCreate?: DateTimeWithAggregatesFilter<"SurgicalRequest"> | Date | string
    observations?: StringWithAggregatesFilter<"SurgicalRequest"> | string
  }

  export type ProceduresCreateInput = {
    name: string
    surgicalRequests?: SurgicalRequestCreateNestedManyWithoutProceduresInput
  }

  export type ProceduresUncheckedCreateInput = {
    code?: number
    name: string
    surgicalRequests?: SurgicalRequestUncheckedCreateNestedManyWithoutProceduresInput
  }

  export type ProceduresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surgicalRequests?: SurgicalRequestUpdateManyWithoutProceduresNestedInput
  }

  export type ProceduresUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surgicalRequests?: SurgicalRequestUncheckedUpdateManyWithoutProceduresNestedInput
  }

  export type ProceduresCreateManyInput = {
    code?: number
    name: string
  }

  export type ProceduresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProceduresUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalCreateInput = {
    name: string
    surgicalRequests?: SurgicalRequestCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    code?: number
    name: string
    surgicalRequests?: SurgicalRequestUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surgicalRequests?: SurgicalRequestUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surgicalRequests?: SurgicalRequestUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    code?: number
    name: string
  }

  export type HospitalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomsCreateInput = {
    number: string
    floor: string
    block: string
    surgicalRequests?: SurgicalRequestCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateInput = {
    code?: number
    number: string
    floor: string
    block: string
    surgicalRequests?: SurgicalRequestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    surgicalRequests?: SurgicalRequestUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    surgicalRequests?: SurgicalRequestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsCreateManyInput = {
    code?: number
    number: string
    floor: string
    block: string
  }

  export type RoomsUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
  }

  export type RoomsUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
  }

  export type SurgicalRequestCreateInput = {
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    room?: RoomsCreateNestedManyWithoutSurgicalRequestsInput
    procedures?: ProceduresCreateNestedManyWithoutSurgicalRequestsInput
    hospital?: HospitalCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestUncheckedCreateInput = {
    code?: number
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    room?: RoomsUncheckedCreateNestedManyWithoutSurgicalRequestsInput
    procedures?: ProceduresUncheckedCreateNestedManyWithoutSurgicalRequestsInput
    hospital?: HospitalUncheckedCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestUpdateInput = {
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    room?: RoomsUpdateManyWithoutSurgicalRequestsNestedInput
    procedures?: ProceduresUpdateManyWithoutSurgicalRequestsNestedInput
    hospital?: HospitalUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    room?: RoomsUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
    procedures?: ProceduresUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
    hospital?: HospitalUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestCreateManyInput = {
    code?: number
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
  }

  export type SurgicalRequestUpdateManyMutationInput = {
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type SurgicalRequestUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SurgicalRequestListRelationFilter = {
    every?: SurgicalRequestWhereInput
    some?: SurgicalRequestWhereInput
    none?: SurgicalRequestWhereInput
  }

  export type SurgicalRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProceduresCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
  }

  export type ProceduresAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type ProceduresMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
  }

  export type ProceduresMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
  }

  export type ProceduresSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type HospitalCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type RoomsCountOrderByAggregateInput = {
    code?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    block?: SortOrder
  }

  export type RoomsAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type RoomsMaxOrderByAggregateInput = {
    code?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    block?: SortOrder
  }

  export type RoomsMinOrderByAggregateInput = {
    code?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    block?: SortOrder
  }

  export type RoomsSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomsListRelationFilter = {
    every?: RoomsWhereInput
    some?: RoomsWhereInput
    none?: RoomsWhereInput
  }

  export type ProceduresListRelationFilter = {
    every?: ProceduresWhereInput
    some?: ProceduresWhereInput
    none?: ProceduresWhereInput
  }

  export type HospitalListRelationFilter = {
    every?: HospitalWhereInput
    some?: HospitalWhereInput
    none?: HospitalWhereInput
  }

  export type RoomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProceduresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurgicalRequestCountOrderByAggregateInput = {
    code?: SortOrder
    doctor?: SortOrder
    pacient?: SortOrder
    dateSurgical?: SortOrder
    dateCreate?: SortOrder
    observations?: SortOrder
  }

  export type SurgicalRequestAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type SurgicalRequestMaxOrderByAggregateInput = {
    code?: SortOrder
    doctor?: SortOrder
    pacient?: SortOrder
    dateSurgical?: SortOrder
    dateCreate?: SortOrder
    observations?: SortOrder
  }

  export type SurgicalRequestMinOrderByAggregateInput = {
    code?: SortOrder
    doctor?: SortOrder
    pacient?: SortOrder
    dateSurgical?: SortOrder
    dateCreate?: SortOrder
    observations?: SortOrder
  }

  export type SurgicalRequestSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SurgicalRequestCreateNestedManyWithoutProceduresInput = {
    create?: XOR<SurgicalRequestCreateWithoutProceduresInput, SurgicalRequestUncheckedCreateWithoutProceduresInput> | SurgicalRequestCreateWithoutProceduresInput[] | SurgicalRequestUncheckedCreateWithoutProceduresInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutProceduresInput | SurgicalRequestCreateOrConnectWithoutProceduresInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
  }

  export type SurgicalRequestUncheckedCreateNestedManyWithoutProceduresInput = {
    create?: XOR<SurgicalRequestCreateWithoutProceduresInput, SurgicalRequestUncheckedCreateWithoutProceduresInput> | SurgicalRequestCreateWithoutProceduresInput[] | SurgicalRequestUncheckedCreateWithoutProceduresInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutProceduresInput | SurgicalRequestCreateOrConnectWithoutProceduresInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SurgicalRequestUpdateManyWithoutProceduresNestedInput = {
    create?: XOR<SurgicalRequestCreateWithoutProceduresInput, SurgicalRequestUncheckedCreateWithoutProceduresInput> | SurgicalRequestCreateWithoutProceduresInput[] | SurgicalRequestUncheckedCreateWithoutProceduresInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutProceduresInput | SurgicalRequestCreateOrConnectWithoutProceduresInput[]
    upsert?: SurgicalRequestUpsertWithWhereUniqueWithoutProceduresInput | SurgicalRequestUpsertWithWhereUniqueWithoutProceduresInput[]
    set?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    disconnect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    delete?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    update?: SurgicalRequestUpdateWithWhereUniqueWithoutProceduresInput | SurgicalRequestUpdateWithWhereUniqueWithoutProceduresInput[]
    updateMany?: SurgicalRequestUpdateManyWithWhereWithoutProceduresInput | SurgicalRequestUpdateManyWithWhereWithoutProceduresInput[]
    deleteMany?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurgicalRequestUncheckedUpdateManyWithoutProceduresNestedInput = {
    create?: XOR<SurgicalRequestCreateWithoutProceduresInput, SurgicalRequestUncheckedCreateWithoutProceduresInput> | SurgicalRequestCreateWithoutProceduresInput[] | SurgicalRequestUncheckedCreateWithoutProceduresInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutProceduresInput | SurgicalRequestCreateOrConnectWithoutProceduresInput[]
    upsert?: SurgicalRequestUpsertWithWhereUniqueWithoutProceduresInput | SurgicalRequestUpsertWithWhereUniqueWithoutProceduresInput[]
    set?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    disconnect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    delete?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    update?: SurgicalRequestUpdateWithWhereUniqueWithoutProceduresInput | SurgicalRequestUpdateWithWhereUniqueWithoutProceduresInput[]
    updateMany?: SurgicalRequestUpdateManyWithWhereWithoutProceduresInput | SurgicalRequestUpdateManyWithWhereWithoutProceduresInput[]
    deleteMany?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
  }

  export type SurgicalRequestCreateNestedManyWithoutHospitalInput = {
    create?: XOR<SurgicalRequestCreateWithoutHospitalInput, SurgicalRequestUncheckedCreateWithoutHospitalInput> | SurgicalRequestCreateWithoutHospitalInput[] | SurgicalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutHospitalInput | SurgicalRequestCreateOrConnectWithoutHospitalInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
  }

  export type SurgicalRequestUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<SurgicalRequestCreateWithoutHospitalInput, SurgicalRequestUncheckedCreateWithoutHospitalInput> | SurgicalRequestCreateWithoutHospitalInput[] | SurgicalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutHospitalInput | SurgicalRequestCreateOrConnectWithoutHospitalInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
  }

  export type SurgicalRequestUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<SurgicalRequestCreateWithoutHospitalInput, SurgicalRequestUncheckedCreateWithoutHospitalInput> | SurgicalRequestCreateWithoutHospitalInput[] | SurgicalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutHospitalInput | SurgicalRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: SurgicalRequestUpsertWithWhereUniqueWithoutHospitalInput | SurgicalRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    set?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    disconnect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    delete?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    update?: SurgicalRequestUpdateWithWhereUniqueWithoutHospitalInput | SurgicalRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: SurgicalRequestUpdateManyWithWhereWithoutHospitalInput | SurgicalRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
  }

  export type SurgicalRequestUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<SurgicalRequestCreateWithoutHospitalInput, SurgicalRequestUncheckedCreateWithoutHospitalInput> | SurgicalRequestCreateWithoutHospitalInput[] | SurgicalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutHospitalInput | SurgicalRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: SurgicalRequestUpsertWithWhereUniqueWithoutHospitalInput | SurgicalRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    set?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    disconnect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    delete?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    update?: SurgicalRequestUpdateWithWhereUniqueWithoutHospitalInput | SurgicalRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: SurgicalRequestUpdateManyWithWhereWithoutHospitalInput | SurgicalRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
  }

  export type SurgicalRequestCreateNestedManyWithoutRoomInput = {
    create?: XOR<SurgicalRequestCreateWithoutRoomInput, SurgicalRequestUncheckedCreateWithoutRoomInput> | SurgicalRequestCreateWithoutRoomInput[] | SurgicalRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutRoomInput | SurgicalRequestCreateOrConnectWithoutRoomInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
  }

  export type SurgicalRequestUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<SurgicalRequestCreateWithoutRoomInput, SurgicalRequestUncheckedCreateWithoutRoomInput> | SurgicalRequestCreateWithoutRoomInput[] | SurgicalRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutRoomInput | SurgicalRequestCreateOrConnectWithoutRoomInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
  }

  export type SurgicalRequestUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SurgicalRequestCreateWithoutRoomInput, SurgicalRequestUncheckedCreateWithoutRoomInput> | SurgicalRequestCreateWithoutRoomInput[] | SurgicalRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutRoomInput | SurgicalRequestCreateOrConnectWithoutRoomInput[]
    upsert?: SurgicalRequestUpsertWithWhereUniqueWithoutRoomInput | SurgicalRequestUpsertWithWhereUniqueWithoutRoomInput[]
    set?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    disconnect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    delete?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    update?: SurgicalRequestUpdateWithWhereUniqueWithoutRoomInput | SurgicalRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SurgicalRequestUpdateManyWithWhereWithoutRoomInput | SurgicalRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
  }

  export type SurgicalRequestUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SurgicalRequestCreateWithoutRoomInput, SurgicalRequestUncheckedCreateWithoutRoomInput> | SurgicalRequestCreateWithoutRoomInput[] | SurgicalRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SurgicalRequestCreateOrConnectWithoutRoomInput | SurgicalRequestCreateOrConnectWithoutRoomInput[]
    upsert?: SurgicalRequestUpsertWithWhereUniqueWithoutRoomInput | SurgicalRequestUpsertWithWhereUniqueWithoutRoomInput[]
    set?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    disconnect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    delete?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    connect?: SurgicalRequestWhereUniqueInput | SurgicalRequestWhereUniqueInput[]
    update?: SurgicalRequestUpdateWithWhereUniqueWithoutRoomInput | SurgicalRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SurgicalRequestUpdateManyWithWhereWithoutRoomInput | SurgicalRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
  }

  export type RoomsCreateNestedManyWithoutSurgicalRequestsInput = {
    create?: XOR<RoomsCreateWithoutSurgicalRequestsInput, RoomsUncheckedCreateWithoutSurgicalRequestsInput> | RoomsCreateWithoutSurgicalRequestsInput[] | RoomsUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutSurgicalRequestsInput | RoomsCreateOrConnectWithoutSurgicalRequestsInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
  }

  export type ProceduresCreateNestedManyWithoutSurgicalRequestsInput = {
    create?: XOR<ProceduresCreateWithoutSurgicalRequestsInput, ProceduresUncheckedCreateWithoutSurgicalRequestsInput> | ProceduresCreateWithoutSurgicalRequestsInput[] | ProceduresUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: ProceduresCreateOrConnectWithoutSurgicalRequestsInput | ProceduresCreateOrConnectWithoutSurgicalRequestsInput[]
    connect?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
  }

  export type HospitalCreateNestedManyWithoutSurgicalRequestsInput = {
    create?: XOR<HospitalCreateWithoutSurgicalRequestsInput, HospitalUncheckedCreateWithoutSurgicalRequestsInput> | HospitalCreateWithoutSurgicalRequestsInput[] | HospitalUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: HospitalCreateOrConnectWithoutSurgicalRequestsInput | HospitalCreateOrConnectWithoutSurgicalRequestsInput[]
    connect?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
  }

  export type RoomsUncheckedCreateNestedManyWithoutSurgicalRequestsInput = {
    create?: XOR<RoomsCreateWithoutSurgicalRequestsInput, RoomsUncheckedCreateWithoutSurgicalRequestsInput> | RoomsCreateWithoutSurgicalRequestsInput[] | RoomsUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutSurgicalRequestsInput | RoomsCreateOrConnectWithoutSurgicalRequestsInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
  }

  export type ProceduresUncheckedCreateNestedManyWithoutSurgicalRequestsInput = {
    create?: XOR<ProceduresCreateWithoutSurgicalRequestsInput, ProceduresUncheckedCreateWithoutSurgicalRequestsInput> | ProceduresCreateWithoutSurgicalRequestsInput[] | ProceduresUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: ProceduresCreateOrConnectWithoutSurgicalRequestsInput | ProceduresCreateOrConnectWithoutSurgicalRequestsInput[]
    connect?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
  }

  export type HospitalUncheckedCreateNestedManyWithoutSurgicalRequestsInput = {
    create?: XOR<HospitalCreateWithoutSurgicalRequestsInput, HospitalUncheckedCreateWithoutSurgicalRequestsInput> | HospitalCreateWithoutSurgicalRequestsInput[] | HospitalUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: HospitalCreateOrConnectWithoutSurgicalRequestsInput | HospitalCreateOrConnectWithoutSurgicalRequestsInput[]
    connect?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomsUpdateManyWithoutSurgicalRequestsNestedInput = {
    create?: XOR<RoomsCreateWithoutSurgicalRequestsInput, RoomsUncheckedCreateWithoutSurgicalRequestsInput> | RoomsCreateWithoutSurgicalRequestsInput[] | RoomsUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutSurgicalRequestsInput | RoomsCreateOrConnectWithoutSurgicalRequestsInput[]
    upsert?: RoomsUpsertWithWhereUniqueWithoutSurgicalRequestsInput | RoomsUpsertWithWhereUniqueWithoutSurgicalRequestsInput[]
    set?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    disconnect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    delete?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    update?: RoomsUpdateWithWhereUniqueWithoutSurgicalRequestsInput | RoomsUpdateWithWhereUniqueWithoutSurgicalRequestsInput[]
    updateMany?: RoomsUpdateManyWithWhereWithoutSurgicalRequestsInput | RoomsUpdateManyWithWhereWithoutSurgicalRequestsInput[]
    deleteMany?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
  }

  export type ProceduresUpdateManyWithoutSurgicalRequestsNestedInput = {
    create?: XOR<ProceduresCreateWithoutSurgicalRequestsInput, ProceduresUncheckedCreateWithoutSurgicalRequestsInput> | ProceduresCreateWithoutSurgicalRequestsInput[] | ProceduresUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: ProceduresCreateOrConnectWithoutSurgicalRequestsInput | ProceduresCreateOrConnectWithoutSurgicalRequestsInput[]
    upsert?: ProceduresUpsertWithWhereUniqueWithoutSurgicalRequestsInput | ProceduresUpsertWithWhereUniqueWithoutSurgicalRequestsInput[]
    set?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    disconnect?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    delete?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    connect?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    update?: ProceduresUpdateWithWhereUniqueWithoutSurgicalRequestsInput | ProceduresUpdateWithWhereUniqueWithoutSurgicalRequestsInput[]
    updateMany?: ProceduresUpdateManyWithWhereWithoutSurgicalRequestsInput | ProceduresUpdateManyWithWhereWithoutSurgicalRequestsInput[]
    deleteMany?: ProceduresScalarWhereInput | ProceduresScalarWhereInput[]
  }

  export type HospitalUpdateManyWithoutSurgicalRequestsNestedInput = {
    create?: XOR<HospitalCreateWithoutSurgicalRequestsInput, HospitalUncheckedCreateWithoutSurgicalRequestsInput> | HospitalCreateWithoutSurgicalRequestsInput[] | HospitalUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: HospitalCreateOrConnectWithoutSurgicalRequestsInput | HospitalCreateOrConnectWithoutSurgicalRequestsInput[]
    upsert?: HospitalUpsertWithWhereUniqueWithoutSurgicalRequestsInput | HospitalUpsertWithWhereUniqueWithoutSurgicalRequestsInput[]
    set?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    disconnect?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    delete?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    connect?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    update?: HospitalUpdateWithWhereUniqueWithoutSurgicalRequestsInput | HospitalUpdateWithWhereUniqueWithoutSurgicalRequestsInput[]
    updateMany?: HospitalUpdateManyWithWhereWithoutSurgicalRequestsInput | HospitalUpdateManyWithWhereWithoutSurgicalRequestsInput[]
    deleteMany?: HospitalScalarWhereInput | HospitalScalarWhereInput[]
  }

  export type RoomsUncheckedUpdateManyWithoutSurgicalRequestsNestedInput = {
    create?: XOR<RoomsCreateWithoutSurgicalRequestsInput, RoomsUncheckedCreateWithoutSurgicalRequestsInput> | RoomsCreateWithoutSurgicalRequestsInput[] | RoomsUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: RoomsCreateOrConnectWithoutSurgicalRequestsInput | RoomsCreateOrConnectWithoutSurgicalRequestsInput[]
    upsert?: RoomsUpsertWithWhereUniqueWithoutSurgicalRequestsInput | RoomsUpsertWithWhereUniqueWithoutSurgicalRequestsInput[]
    set?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    disconnect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    delete?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    connect?: RoomsWhereUniqueInput | RoomsWhereUniqueInput[]
    update?: RoomsUpdateWithWhereUniqueWithoutSurgicalRequestsInput | RoomsUpdateWithWhereUniqueWithoutSurgicalRequestsInput[]
    updateMany?: RoomsUpdateManyWithWhereWithoutSurgicalRequestsInput | RoomsUpdateManyWithWhereWithoutSurgicalRequestsInput[]
    deleteMany?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
  }

  export type ProceduresUncheckedUpdateManyWithoutSurgicalRequestsNestedInput = {
    create?: XOR<ProceduresCreateWithoutSurgicalRequestsInput, ProceduresUncheckedCreateWithoutSurgicalRequestsInput> | ProceduresCreateWithoutSurgicalRequestsInput[] | ProceduresUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: ProceduresCreateOrConnectWithoutSurgicalRequestsInput | ProceduresCreateOrConnectWithoutSurgicalRequestsInput[]
    upsert?: ProceduresUpsertWithWhereUniqueWithoutSurgicalRequestsInput | ProceduresUpsertWithWhereUniqueWithoutSurgicalRequestsInput[]
    set?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    disconnect?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    delete?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    connect?: ProceduresWhereUniqueInput | ProceduresWhereUniqueInput[]
    update?: ProceduresUpdateWithWhereUniqueWithoutSurgicalRequestsInput | ProceduresUpdateWithWhereUniqueWithoutSurgicalRequestsInput[]
    updateMany?: ProceduresUpdateManyWithWhereWithoutSurgicalRequestsInput | ProceduresUpdateManyWithWhereWithoutSurgicalRequestsInput[]
    deleteMany?: ProceduresScalarWhereInput | ProceduresScalarWhereInput[]
  }

  export type HospitalUncheckedUpdateManyWithoutSurgicalRequestsNestedInput = {
    create?: XOR<HospitalCreateWithoutSurgicalRequestsInput, HospitalUncheckedCreateWithoutSurgicalRequestsInput> | HospitalCreateWithoutSurgicalRequestsInput[] | HospitalUncheckedCreateWithoutSurgicalRequestsInput[]
    connectOrCreate?: HospitalCreateOrConnectWithoutSurgicalRequestsInput | HospitalCreateOrConnectWithoutSurgicalRequestsInput[]
    upsert?: HospitalUpsertWithWhereUniqueWithoutSurgicalRequestsInput | HospitalUpsertWithWhereUniqueWithoutSurgicalRequestsInput[]
    set?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    disconnect?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    delete?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    connect?: HospitalWhereUniqueInput | HospitalWhereUniqueInput[]
    update?: HospitalUpdateWithWhereUniqueWithoutSurgicalRequestsInput | HospitalUpdateWithWhereUniqueWithoutSurgicalRequestsInput[]
    updateMany?: HospitalUpdateManyWithWhereWithoutSurgicalRequestsInput | HospitalUpdateManyWithWhereWithoutSurgicalRequestsInput[]
    deleteMany?: HospitalScalarWhereInput | HospitalScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SurgicalRequestCreateWithoutProceduresInput = {
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    room?: RoomsCreateNestedManyWithoutSurgicalRequestsInput
    hospital?: HospitalCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestUncheckedCreateWithoutProceduresInput = {
    code?: number
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    room?: RoomsUncheckedCreateNestedManyWithoutSurgicalRequestsInput
    hospital?: HospitalUncheckedCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestCreateOrConnectWithoutProceduresInput = {
    where: SurgicalRequestWhereUniqueInput
    create: XOR<SurgicalRequestCreateWithoutProceduresInput, SurgicalRequestUncheckedCreateWithoutProceduresInput>
  }

  export type SurgicalRequestUpsertWithWhereUniqueWithoutProceduresInput = {
    where: SurgicalRequestWhereUniqueInput
    update: XOR<SurgicalRequestUpdateWithoutProceduresInput, SurgicalRequestUncheckedUpdateWithoutProceduresInput>
    create: XOR<SurgicalRequestCreateWithoutProceduresInput, SurgicalRequestUncheckedCreateWithoutProceduresInput>
  }

  export type SurgicalRequestUpdateWithWhereUniqueWithoutProceduresInput = {
    where: SurgicalRequestWhereUniqueInput
    data: XOR<SurgicalRequestUpdateWithoutProceduresInput, SurgicalRequestUncheckedUpdateWithoutProceduresInput>
  }

  export type SurgicalRequestUpdateManyWithWhereWithoutProceduresInput = {
    where: SurgicalRequestScalarWhereInput
    data: XOR<SurgicalRequestUpdateManyMutationInput, SurgicalRequestUncheckedUpdateManyWithoutProceduresInput>
  }

  export type SurgicalRequestScalarWhereInput = {
    AND?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
    OR?: SurgicalRequestScalarWhereInput[]
    NOT?: SurgicalRequestScalarWhereInput | SurgicalRequestScalarWhereInput[]
    code?: IntFilter<"SurgicalRequest"> | number
    doctor?: StringFilter<"SurgicalRequest"> | string
    pacient?: StringFilter<"SurgicalRequest"> | string
    dateSurgical?: DateTimeFilter<"SurgicalRequest"> | Date | string
    dateCreate?: DateTimeFilter<"SurgicalRequest"> | Date | string
    observations?: StringFilter<"SurgicalRequest"> | string
  }

  export type SurgicalRequestCreateWithoutHospitalInput = {
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    room?: RoomsCreateNestedManyWithoutSurgicalRequestsInput
    procedures?: ProceduresCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestUncheckedCreateWithoutHospitalInput = {
    code?: number
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    room?: RoomsUncheckedCreateNestedManyWithoutSurgicalRequestsInput
    procedures?: ProceduresUncheckedCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestCreateOrConnectWithoutHospitalInput = {
    where: SurgicalRequestWhereUniqueInput
    create: XOR<SurgicalRequestCreateWithoutHospitalInput, SurgicalRequestUncheckedCreateWithoutHospitalInput>
  }

  export type SurgicalRequestUpsertWithWhereUniqueWithoutHospitalInput = {
    where: SurgicalRequestWhereUniqueInput
    update: XOR<SurgicalRequestUpdateWithoutHospitalInput, SurgicalRequestUncheckedUpdateWithoutHospitalInput>
    create: XOR<SurgicalRequestCreateWithoutHospitalInput, SurgicalRequestUncheckedCreateWithoutHospitalInput>
  }

  export type SurgicalRequestUpdateWithWhereUniqueWithoutHospitalInput = {
    where: SurgicalRequestWhereUniqueInput
    data: XOR<SurgicalRequestUpdateWithoutHospitalInput, SurgicalRequestUncheckedUpdateWithoutHospitalInput>
  }

  export type SurgicalRequestUpdateManyWithWhereWithoutHospitalInput = {
    where: SurgicalRequestScalarWhereInput
    data: XOR<SurgicalRequestUpdateManyMutationInput, SurgicalRequestUncheckedUpdateManyWithoutHospitalInput>
  }

  export type SurgicalRequestCreateWithoutRoomInput = {
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    procedures?: ProceduresCreateNestedManyWithoutSurgicalRequestsInput
    hospital?: HospitalCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestUncheckedCreateWithoutRoomInput = {
    code?: number
    doctor: string
    pacient: string
    dateSurgical: Date | string
    dateCreate: Date | string
    observations: string
    procedures?: ProceduresUncheckedCreateNestedManyWithoutSurgicalRequestsInput
    hospital?: HospitalUncheckedCreateNestedManyWithoutSurgicalRequestsInput
  }

  export type SurgicalRequestCreateOrConnectWithoutRoomInput = {
    where: SurgicalRequestWhereUniqueInput
    create: XOR<SurgicalRequestCreateWithoutRoomInput, SurgicalRequestUncheckedCreateWithoutRoomInput>
  }

  export type SurgicalRequestUpsertWithWhereUniqueWithoutRoomInput = {
    where: SurgicalRequestWhereUniqueInput
    update: XOR<SurgicalRequestUpdateWithoutRoomInput, SurgicalRequestUncheckedUpdateWithoutRoomInput>
    create: XOR<SurgicalRequestCreateWithoutRoomInput, SurgicalRequestUncheckedCreateWithoutRoomInput>
  }

  export type SurgicalRequestUpdateWithWhereUniqueWithoutRoomInput = {
    where: SurgicalRequestWhereUniqueInput
    data: XOR<SurgicalRequestUpdateWithoutRoomInput, SurgicalRequestUncheckedUpdateWithoutRoomInput>
  }

  export type SurgicalRequestUpdateManyWithWhereWithoutRoomInput = {
    where: SurgicalRequestScalarWhereInput
    data: XOR<SurgicalRequestUpdateManyMutationInput, SurgicalRequestUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomsCreateWithoutSurgicalRequestsInput = {
    number: string
    floor: string
    block: string
  }

  export type RoomsUncheckedCreateWithoutSurgicalRequestsInput = {
    code?: number
    number: string
    floor: string
    block: string
  }

  export type RoomsCreateOrConnectWithoutSurgicalRequestsInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutSurgicalRequestsInput, RoomsUncheckedCreateWithoutSurgicalRequestsInput>
  }

  export type ProceduresCreateWithoutSurgicalRequestsInput = {
    name: string
  }

  export type ProceduresUncheckedCreateWithoutSurgicalRequestsInput = {
    code?: number
    name: string
  }

  export type ProceduresCreateOrConnectWithoutSurgicalRequestsInput = {
    where: ProceduresWhereUniqueInput
    create: XOR<ProceduresCreateWithoutSurgicalRequestsInput, ProceduresUncheckedCreateWithoutSurgicalRequestsInput>
  }

  export type HospitalCreateWithoutSurgicalRequestsInput = {
    name: string
  }

  export type HospitalUncheckedCreateWithoutSurgicalRequestsInput = {
    code?: number
    name: string
  }

  export type HospitalCreateOrConnectWithoutSurgicalRequestsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutSurgicalRequestsInput, HospitalUncheckedCreateWithoutSurgicalRequestsInput>
  }

  export type RoomsUpsertWithWhereUniqueWithoutSurgicalRequestsInput = {
    where: RoomsWhereUniqueInput
    update: XOR<RoomsUpdateWithoutSurgicalRequestsInput, RoomsUncheckedUpdateWithoutSurgicalRequestsInput>
    create: XOR<RoomsCreateWithoutSurgicalRequestsInput, RoomsUncheckedCreateWithoutSurgicalRequestsInput>
  }

  export type RoomsUpdateWithWhereUniqueWithoutSurgicalRequestsInput = {
    where: RoomsWhereUniqueInput
    data: XOR<RoomsUpdateWithoutSurgicalRequestsInput, RoomsUncheckedUpdateWithoutSurgicalRequestsInput>
  }

  export type RoomsUpdateManyWithWhereWithoutSurgicalRequestsInput = {
    where: RoomsScalarWhereInput
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyWithoutSurgicalRequestsInput>
  }

  export type RoomsScalarWhereInput = {
    AND?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
    OR?: RoomsScalarWhereInput[]
    NOT?: RoomsScalarWhereInput | RoomsScalarWhereInput[]
    code?: IntFilter<"Rooms"> | number
    number?: StringFilter<"Rooms"> | string
    floor?: StringFilter<"Rooms"> | string
    block?: StringFilter<"Rooms"> | string
  }

  export type ProceduresUpsertWithWhereUniqueWithoutSurgicalRequestsInput = {
    where: ProceduresWhereUniqueInput
    update: XOR<ProceduresUpdateWithoutSurgicalRequestsInput, ProceduresUncheckedUpdateWithoutSurgicalRequestsInput>
    create: XOR<ProceduresCreateWithoutSurgicalRequestsInput, ProceduresUncheckedCreateWithoutSurgicalRequestsInput>
  }

  export type ProceduresUpdateWithWhereUniqueWithoutSurgicalRequestsInput = {
    where: ProceduresWhereUniqueInput
    data: XOR<ProceduresUpdateWithoutSurgicalRequestsInput, ProceduresUncheckedUpdateWithoutSurgicalRequestsInput>
  }

  export type ProceduresUpdateManyWithWhereWithoutSurgicalRequestsInput = {
    where: ProceduresScalarWhereInput
    data: XOR<ProceduresUpdateManyMutationInput, ProceduresUncheckedUpdateManyWithoutSurgicalRequestsInput>
  }

  export type ProceduresScalarWhereInput = {
    AND?: ProceduresScalarWhereInput | ProceduresScalarWhereInput[]
    OR?: ProceduresScalarWhereInput[]
    NOT?: ProceduresScalarWhereInput | ProceduresScalarWhereInput[]
    code?: IntFilter<"Procedures"> | number
    name?: StringFilter<"Procedures"> | string
  }

  export type HospitalUpsertWithWhereUniqueWithoutSurgicalRequestsInput = {
    where: HospitalWhereUniqueInput
    update: XOR<HospitalUpdateWithoutSurgicalRequestsInput, HospitalUncheckedUpdateWithoutSurgicalRequestsInput>
    create: XOR<HospitalCreateWithoutSurgicalRequestsInput, HospitalUncheckedCreateWithoutSurgicalRequestsInput>
  }

  export type HospitalUpdateWithWhereUniqueWithoutSurgicalRequestsInput = {
    where: HospitalWhereUniqueInput
    data: XOR<HospitalUpdateWithoutSurgicalRequestsInput, HospitalUncheckedUpdateWithoutSurgicalRequestsInput>
  }

  export type HospitalUpdateManyWithWhereWithoutSurgicalRequestsInput = {
    where: HospitalScalarWhereInput
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyWithoutSurgicalRequestsInput>
  }

  export type HospitalScalarWhereInput = {
    AND?: HospitalScalarWhereInput | HospitalScalarWhereInput[]
    OR?: HospitalScalarWhereInput[]
    NOT?: HospitalScalarWhereInput | HospitalScalarWhereInput[]
    code?: IntFilter<"Hospital"> | number
    name?: StringFilter<"Hospital"> | string
  }

  export type SurgicalRequestUpdateWithoutProceduresInput = {
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    room?: RoomsUpdateManyWithoutSurgicalRequestsNestedInput
    hospital?: HospitalUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateWithoutProceduresInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    room?: RoomsUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
    hospital?: HospitalUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateManyWithoutProceduresInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type SurgicalRequestUpdateWithoutHospitalInput = {
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    room?: RoomsUpdateManyWithoutSurgicalRequestsNestedInput
    procedures?: ProceduresUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateWithoutHospitalInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    room?: RoomsUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
    procedures?: ProceduresUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateManyWithoutHospitalInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type SurgicalRequestUpdateWithoutRoomInput = {
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    procedures?: ProceduresUpdateManyWithoutSurgicalRequestsNestedInput
    hospital?: HospitalUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateWithoutRoomInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
    procedures?: ProceduresUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
    hospital?: HospitalUncheckedUpdateManyWithoutSurgicalRequestsNestedInput
  }

  export type SurgicalRequestUncheckedUpdateManyWithoutRoomInput = {
    code?: IntFieldUpdateOperationsInput | number
    doctor?: StringFieldUpdateOperationsInput | string
    pacient?: StringFieldUpdateOperationsInput | string
    dateSurgical?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type RoomsUpdateWithoutSurgicalRequestsInput = {
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
  }

  export type RoomsUncheckedUpdateWithoutSurgicalRequestsInput = {
    code?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
  }

  export type RoomsUncheckedUpdateManyWithoutSurgicalRequestsInput = {
    code?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
  }

  export type ProceduresUpdateWithoutSurgicalRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProceduresUncheckedUpdateWithoutSurgicalRequestsInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProceduresUncheckedUpdateManyWithoutSurgicalRequestsInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUpdateWithoutSurgicalRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateWithoutSurgicalRequestsInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUncheckedUpdateManyWithoutSurgicalRequestsInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProceduresCountOutputTypeDefaultArgs instead
     */
    export type ProceduresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProceduresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HospitalCountOutputTypeDefaultArgs instead
     */
    export type HospitalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HospitalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomsCountOutputTypeDefaultArgs instead
     */
    export type RoomsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurgicalRequestCountOutputTypeDefaultArgs instead
     */
    export type SurgicalRequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurgicalRequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProceduresDefaultArgs instead
     */
    export type ProceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProceduresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HospitalDefaultArgs instead
     */
    export type HospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HospitalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomsDefaultArgs instead
     */
    export type RoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurgicalRequestDefaultArgs instead
     */
    export type SurgicalRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurgicalRequestDefaultArgs<ExtArgs>

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