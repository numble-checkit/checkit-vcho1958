
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  type: string
  email: string
  key: string
  name: string
}

/**
 * Model Doctor
 * 
 */
export type Doctor = {
  id: string
  available_hours: string
  available_weekday: string
  description: string
  doctor_display_name: string
  doctor_image_url: string
  doctor_images: string[]
  doctor_tel: string
  doctor_tel_kakao: string
  professional_statement: string
  subjects: string
  lab_addr: string
  lab_name: string
  lab_postal_code: string
  lab_receiver_name: string
  lab_tel: string
  lat: string
  lng: string
  hospital_name: string
  hospital_address: string
  hospital_img: string
}

/**
 * Model Diagnose
 * 
 */
export type Diagnose = {
  id: string
  doctor_id: string
  address: string
  address_code: string
  store_address: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<GlobalReject>;

  /**
   * `prisma.diagnose`: Exposes CRUD operations for the **Diagnose** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnose.findMany()
    * ```
    */
  get diagnose(): Prisma.DiagnoseDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Doctor: 'Doctor',
    Diagnose: 'Diagnose'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

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

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
   * These options are being passed in to the middleware as "params"
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

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    type: string | null
    email: string | null
    key: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    type: string | null
    email: string | null
    key: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    type: number
    email: number
    key: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    type?: true
    email?: true
    key?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    type?: true
    email?: true
    key?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    type?: true
    email?: true
    key?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    type: string
    email: string
    key: string
    name: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    type?: boolean
    email?: boolean
    key?: boolean
    name?: boolean
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
  }



  /**
   * Model Doctor
   */


  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    available_hours: string | null
    available_weekday: string | null
    description: string | null
    doctor_display_name: string | null
    doctor_image_url: string | null
    doctor_tel: string | null
    doctor_tel_kakao: string | null
    professional_statement: string | null
    subjects: string | null
    lab_addr: string | null
    lab_name: string | null
    lab_postal_code: string | null
    lab_receiver_name: string | null
    lab_tel: string | null
    lat: string | null
    lng: string | null
    hospital_name: string | null
    hospital_address: string | null
    hospital_img: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    available_hours: string | null
    available_weekday: string | null
    description: string | null
    doctor_display_name: string | null
    doctor_image_url: string | null
    doctor_tel: string | null
    doctor_tel_kakao: string | null
    professional_statement: string | null
    subjects: string | null
    lab_addr: string | null
    lab_name: string | null
    lab_postal_code: string | null
    lab_receiver_name: string | null
    lab_tel: string | null
    lat: string | null
    lng: string | null
    hospital_name: string | null
    hospital_address: string | null
    hospital_img: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    available_hours: number
    available_weekday: number
    description: number
    doctor_display_name: number
    doctor_image_url: number
    doctor_images: number
    doctor_tel: number
    doctor_tel_kakao: number
    professional_statement: number
    subjects: number
    lab_addr: number
    lab_name: number
    lab_postal_code: number
    lab_receiver_name: number
    lab_tel: number
    lat: number
    lng: number
    hospital_name: number
    hospital_address: number
    hospital_img: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    available_hours?: true
    available_weekday?: true
    description?: true
    doctor_display_name?: true
    doctor_image_url?: true
    doctor_tel?: true
    doctor_tel_kakao?: true
    professional_statement?: true
    subjects?: true
    lab_addr?: true
    lab_name?: true
    lab_postal_code?: true
    lab_receiver_name?: true
    lab_tel?: true
    lat?: true
    lng?: true
    hospital_name?: true
    hospital_address?: true
    hospital_img?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    available_hours?: true
    available_weekday?: true
    description?: true
    doctor_display_name?: true
    doctor_image_url?: true
    doctor_tel?: true
    doctor_tel_kakao?: true
    professional_statement?: true
    subjects?: true
    lab_addr?: true
    lab_name?: true
    lab_postal_code?: true
    lab_receiver_name?: true
    lab_tel?: true
    lat?: true
    lng?: true
    hospital_name?: true
    hospital_address?: true
    hospital_img?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    available_hours?: true
    available_weekday?: true
    description?: true
    doctor_display_name?: true
    doctor_image_url?: true
    doctor_images?: true
    doctor_tel?: true
    doctor_tel_kakao?: true
    professional_statement?: true
    subjects?: true
    lab_addr?: true
    lab_name?: true
    lab_postal_code?: true
    lab_receiver_name?: true
    lab_tel?: true
    lat?: true
    lng?: true
    hospital_name?: true
    hospital_address?: true
    hospital_img?: true
    _all?: true
  }

  export type DoctorAggregateArgs = {
    /**
     * Filter which Doctor to aggregate.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs = {
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithAggregationInput>
    by: Array<DoctorScalarFieldEnum>
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }


  export type DoctorGroupByOutputType = {
    id: string
    available_hours: string
    available_weekday: string
    description: string
    doctor_display_name: string
    doctor_image_url: string
    doctor_images: string[]
    doctor_tel: string
    doctor_tel_kakao: string
    professional_statement: string
    subjects: string
    lab_addr: string
    lab_name: string
    lab_postal_code: string
    lab_receiver_name: string
    lab_tel: string
    lat: string
    lng: string
    hospital_name: string
    hospital_address: string
    hospital_img: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect = {
    id?: boolean
    available_hours?: boolean
    available_weekday?: boolean
    description?: boolean
    doctor_display_name?: boolean
    doctor_image_url?: boolean
    doctor_images?: boolean
    doctor_tel?: boolean
    doctor_tel_kakao?: boolean
    professional_statement?: boolean
    subjects?: boolean
    lab_addr?: boolean
    lab_name?: boolean
    lab_postal_code?: boolean
    lab_receiver_name?: boolean
    lab_tel?: boolean
    lat?: boolean
    lng?: boolean
    hospital_name?: boolean
    hospital_address?: boolean
    hospital_img?: boolean
  }

  export type DoctorGetPayload<
    S extends boolean | null | undefined | DoctorArgs,
    U = keyof S
      > = S extends true
        ? Doctor
    : S extends undefined
    ? never
    : S extends DoctorArgs | DoctorFindManyArgs
    ?'include' extends U
    ? Doctor 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Doctor ? Doctor[P] : never
  } 
    : Doctor
  : Doctor


  type DoctorCountArgs = Merge<
    Omit<DoctorFindManyArgs, 'select' | 'include'> & {
      select?: DoctorCountAggregateInputType | true
    }
  >

  export interface DoctorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DoctorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Doctor'> extends True ? CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>> : CheckSelect<T, Prisma__DoctorClient<Doctor | null >, Prisma__DoctorClient<DoctorGetPayload<T> | null >>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DoctorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Doctor'> extends True ? CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>> : CheckSelect<T, Prisma__DoctorClient<Doctor | null >, Prisma__DoctorClient<DoctorGetPayload<T> | null >>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DoctorFindManyArgs>(
      args?: SelectSubset<T, DoctorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Doctor>>, PrismaPromise<Array<DoctorGetPayload<T>>>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends DoctorCreateArgs>(
      args: SelectSubset<T, DoctorCreateArgs>
    ): CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>>

    /**
     * Create many Doctors.
     *     @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorCreateManyArgs>(
      args?: SelectSubset<T, DoctorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends DoctorDeleteArgs>(
      args: SelectSubset<T, DoctorDeleteArgs>
    ): CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorUpdateArgs>(
      args: SelectSubset<T, DoctorUpdateArgs>
    ): CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorDeleteManyArgs>(
      args?: SelectSubset<T, DoctorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorUpdateManyArgs>(
      args: SelectSubset<T, DoctorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorUpsertArgs>(
      args: SelectSubset<T, DoctorUpsertArgs>
    ): CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>>

    /**
     * Find zero or more Doctors that matches the filter.
     * @param {DoctorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const doctor = await prisma.doctor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DoctorFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Doctor.
     * @param {DoctorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const doctor = await prisma.doctor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DoctorAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Doctor that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>>

    /**
     * Find the first Doctor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DoctorClient<Doctor>, Prisma__DoctorClient<DoctorGetPayload<T>>>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DoctorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


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
   * Doctor base type for findUnique actions
   */
  export type DoctorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Filter, which Doctor to fetch.
     * 
    **/
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor: findUnique
   */
  export interface DoctorFindUniqueArgs extends DoctorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor base type for findFirst actions
   */
  export type DoctorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Filter, which Doctor to fetch.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     * 
    **/
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }

  /**
   * Doctor: findFirst
   */
  export interface DoctorFindFirstArgs extends DoctorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Filter, which Doctors to fetch.
     * 
    **/
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     * 
    **/
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor create
   */
  export type DoctorCreateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * The data needed to create a Doctor.
     * 
    **/
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }


  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs = {
    /**
     * The data used to create many Doctors.
     * 
    **/
    data: Enumerable<DoctorCreateManyInput>
  }


  /**
   * Doctor update
   */
  export type DoctorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * The data needed to update a Doctor.
     * 
    **/
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     * 
    **/
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs = {
    /**
     * The data used to update Doctors.
     * 
    **/
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     * 
    **/
    where?: DoctorWhereInput
  }


  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     * 
    **/
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     * 
    **/
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }


  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
    /**
     * Filter which Doctor to delete.
     * 
    **/
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs = {
    /**
     * Filter which Doctors to delete
     * 
    **/
    where?: DoctorWhereInput
  }


  /**
   * Doctor findRaw
   */
  export type DoctorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Doctor aggregateRaw
   */
  export type DoctorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Doctor: findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs = DoctorFindUniqueArgsBase
      

  /**
   * Doctor: findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs = DoctorFindFirstArgsBase
      

  /**
   * Doctor without action
   */
  export type DoctorArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     * 
    **/
    select?: DoctorSelect | null
  }



  /**
   * Model Diagnose
   */


  export type AggregateDiagnose = {
    _count: DiagnoseCountAggregateOutputType | null
    _min: DiagnoseMinAggregateOutputType | null
    _max: DiagnoseMaxAggregateOutputType | null
  }

  export type DiagnoseMinAggregateOutputType = {
    id: string | null
    doctor_id: string | null
    address: string | null
    address_code: string | null
    store_address: string | null
  }

  export type DiagnoseMaxAggregateOutputType = {
    id: string | null
    doctor_id: string | null
    address: string | null
    address_code: string | null
    store_address: string | null
  }

  export type DiagnoseCountAggregateOutputType = {
    id: number
    doctor_id: number
    address: number
    address_code: number
    store_address: number
    _all: number
  }


  export type DiagnoseMinAggregateInputType = {
    id?: true
    doctor_id?: true
    address?: true
    address_code?: true
    store_address?: true
  }

  export type DiagnoseMaxAggregateInputType = {
    id?: true
    doctor_id?: true
    address?: true
    address_code?: true
    store_address?: true
  }

  export type DiagnoseCountAggregateInputType = {
    id?: true
    doctor_id?: true
    address?: true
    address_code?: true
    store_address?: true
    _all?: true
  }

  export type DiagnoseAggregateArgs = {
    /**
     * Filter which Diagnose to aggregate.
     * 
    **/
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     * 
    **/
    orderBy?: Enumerable<DiagnoseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnoseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnoseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnoseMaxAggregateInputType
  }

  export type GetDiagnoseAggregateType<T extends DiagnoseAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnose[P]>
      : GetScalarType<T[P], AggregateDiagnose[P]>
  }




  export type DiagnoseGroupByArgs = {
    where?: DiagnoseWhereInput
    orderBy?: Enumerable<DiagnoseOrderByWithAggregationInput>
    by: Array<DiagnoseScalarFieldEnum>
    having?: DiagnoseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnoseCountAggregateInputType | true
    _min?: DiagnoseMinAggregateInputType
    _max?: DiagnoseMaxAggregateInputType
  }


  export type DiagnoseGroupByOutputType = {
    id: string
    doctor_id: string
    address: string
    address_code: string
    store_address: string
    _count: DiagnoseCountAggregateOutputType | null
    _min: DiagnoseMinAggregateOutputType | null
    _max: DiagnoseMaxAggregateOutputType | null
  }

  type GetDiagnoseGroupByPayload<T extends DiagnoseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DiagnoseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnoseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnoseGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnoseGroupByOutputType[P]>
        }
      >
    >


  export type DiagnoseSelect = {
    id?: boolean
    doctor_id?: boolean
    address?: boolean
    address_code?: boolean
    store_address?: boolean
  }

  export type DiagnoseGetPayload<
    S extends boolean | null | undefined | DiagnoseArgs,
    U = keyof S
      > = S extends true
        ? Diagnose
    : S extends undefined
    ? never
    : S extends DiagnoseArgs | DiagnoseFindManyArgs
    ?'include' extends U
    ? Diagnose 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Diagnose ? Diagnose[P] : never
  } 
    : Diagnose
  : Diagnose


  type DiagnoseCountArgs = Merge<
    Omit<DiagnoseFindManyArgs, 'select' | 'include'> & {
      select?: DiagnoseCountAggregateInputType | true
    }
  >

  export interface DiagnoseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Diagnose that matches the filter.
     * @param {DiagnoseFindUniqueArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiagnoseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiagnoseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Diagnose'> extends True ? CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>> : CheckSelect<T, Prisma__DiagnoseClient<Diagnose | null >, Prisma__DiagnoseClient<DiagnoseGetPayload<T> | null >>

    /**
     * Find the first Diagnose that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseFindFirstArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiagnoseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiagnoseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Diagnose'> extends True ? CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>> : CheckSelect<T, Prisma__DiagnoseClient<Diagnose | null >, Prisma__DiagnoseClient<DiagnoseGetPayload<T> | null >>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnose.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnose.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnoseWithIdOnly = await prisma.diagnose.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiagnoseFindManyArgs>(
      args?: SelectSubset<T, DiagnoseFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Diagnose>>, PrismaPromise<Array<DiagnoseGetPayload<T>>>>

    /**
     * Create a Diagnose.
     * @param {DiagnoseCreateArgs} args - Arguments to create a Diagnose.
     * @example
     * // Create one Diagnose
     * const Diagnose = await prisma.diagnose.create({
     *   data: {
     *     // ... data to create a Diagnose
     *   }
     * })
     * 
    **/
    create<T extends DiagnoseCreateArgs>(
      args: SelectSubset<T, DiagnoseCreateArgs>
    ): CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>>

    /**
     * Create many Diagnoses.
     *     @param {DiagnoseCreateManyArgs} args - Arguments to create many Diagnoses.
     *     @example
     *     // Create many Diagnoses
     *     const diagnose = await prisma.diagnose.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiagnoseCreateManyArgs>(
      args?: SelectSubset<T, DiagnoseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnose.
     * @param {DiagnoseDeleteArgs} args - Arguments to delete one Diagnose.
     * @example
     * // Delete one Diagnose
     * const Diagnose = await prisma.diagnose.delete({
     *   where: {
     *     // ... filter to delete one Diagnose
     *   }
     * })
     * 
    **/
    delete<T extends DiagnoseDeleteArgs>(
      args: SelectSubset<T, DiagnoseDeleteArgs>
    ): CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>>

    /**
     * Update one Diagnose.
     * @param {DiagnoseUpdateArgs} args - Arguments to update one Diagnose.
     * @example
     * // Update one Diagnose
     * const diagnose = await prisma.diagnose.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiagnoseUpdateArgs>(
      args: SelectSubset<T, DiagnoseUpdateArgs>
    ): CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnoseDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnose.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiagnoseDeleteManyArgs>(
      args?: SelectSubset<T, DiagnoseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnose = await prisma.diagnose.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiagnoseUpdateManyArgs>(
      args: SelectSubset<T, DiagnoseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnose.
     * @param {DiagnoseUpsertArgs} args - Arguments to update or create a Diagnose.
     * @example
     * // Update or create a Diagnose
     * const diagnose = await prisma.diagnose.upsert({
     *   create: {
     *     // ... data to create a Diagnose
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnose we want to update
     *   }
     * })
    **/
    upsert<T extends DiagnoseUpsertArgs>(
      args: SelectSubset<T, DiagnoseUpsertArgs>
    ): CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * @param {DiagnoseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const diagnose = await prisma.diagnose.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DiagnoseFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Diagnose.
     * @param {DiagnoseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const diagnose = await prisma.diagnose.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DiagnoseAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Diagnose that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DiagnoseFindUniqueOrThrowArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DiagnoseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DiagnoseFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>>

    /**
     * Find the first Diagnose that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseFindFirstOrThrowArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DiagnoseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DiagnoseFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DiagnoseClient<Diagnose>, Prisma__DiagnoseClient<DiagnoseGetPayload<T>>>

    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnose.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnoseCountArgs>(
      args?: Subset<T, DiagnoseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnoseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnoseAggregateArgs>(args: Subset<T, DiagnoseAggregateArgs>): PrismaPromise<GetDiagnoseAggregateType<T>>

    /**
     * Group by Diagnose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseGroupByArgs} args - Group by arguments.
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
      T extends DiagnoseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnoseGroupByArgs['orderBy'] }
        : { orderBy?: DiagnoseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnoseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnoseGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnose.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiagnoseClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


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
   * Diagnose base type for findUnique actions
   */
  export type DiagnoseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * Filter, which Diagnose to fetch.
     * 
    **/
    where: DiagnoseWhereUniqueInput
  }

  /**
   * Diagnose: findUnique
   */
  export interface DiagnoseFindUniqueArgs extends DiagnoseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Diagnose base type for findFirst actions
   */
  export type DiagnoseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * Filter, which Diagnose to fetch.
     * 
    **/
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     * 
    **/
    orderBy?: Enumerable<DiagnoseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     * 
    **/
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     * 
    **/
    distinct?: Enumerable<DiagnoseScalarFieldEnum>
  }

  /**
   * Diagnose: findFirst
   */
  export interface DiagnoseFindFirstArgs extends DiagnoseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Diagnose findMany
   */
  export type DiagnoseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * Filter, which Diagnoses to fetch.
     * 
    **/
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     * 
    **/
    orderBy?: Enumerable<DiagnoseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     * 
    **/
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DiagnoseScalarFieldEnum>
  }


  /**
   * Diagnose create
   */
  export type DiagnoseCreateArgs = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * The data needed to create a Diagnose.
     * 
    **/
    data: XOR<DiagnoseCreateInput, DiagnoseUncheckedCreateInput>
  }


  /**
   * Diagnose createMany
   */
  export type DiagnoseCreateManyArgs = {
    /**
     * The data used to create many Diagnoses.
     * 
    **/
    data: Enumerable<DiagnoseCreateManyInput>
  }


  /**
   * Diagnose update
   */
  export type DiagnoseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * The data needed to update a Diagnose.
     * 
    **/
    data: XOR<DiagnoseUpdateInput, DiagnoseUncheckedUpdateInput>
    /**
     * Choose, which Diagnose to update.
     * 
    **/
    where: DiagnoseWhereUniqueInput
  }


  /**
   * Diagnose updateMany
   */
  export type DiagnoseUpdateManyArgs = {
    /**
     * The data used to update Diagnoses.
     * 
    **/
    data: XOR<DiagnoseUpdateManyMutationInput, DiagnoseUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     * 
    **/
    where?: DiagnoseWhereInput
  }


  /**
   * Diagnose upsert
   */
  export type DiagnoseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * The filter to search for the Diagnose to update in case it exists.
     * 
    **/
    where: DiagnoseWhereUniqueInput
    /**
     * In case the Diagnose found by the `where` argument doesn't exist, create a new Diagnose with this data.
     * 
    **/
    create: XOR<DiagnoseCreateInput, DiagnoseUncheckedCreateInput>
    /**
     * In case the Diagnose was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DiagnoseUpdateInput, DiagnoseUncheckedUpdateInput>
  }


  /**
   * Diagnose delete
   */
  export type DiagnoseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
    /**
     * Filter which Diagnose to delete.
     * 
    **/
    where: DiagnoseWhereUniqueInput
  }


  /**
   * Diagnose deleteMany
   */
  export type DiagnoseDeleteManyArgs = {
    /**
     * Filter which Diagnoses to delete
     * 
    **/
    where?: DiagnoseWhereInput
  }


  /**
   * Diagnose findRaw
   */
  export type DiagnoseFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Diagnose aggregateRaw
   */
  export type DiagnoseAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Diagnose: findUniqueOrThrow
   */
  export type DiagnoseFindUniqueOrThrowArgs = DiagnoseFindUniqueArgsBase
      

  /**
   * Diagnose: findFirstOrThrow
   */
  export type DiagnoseFindFirstOrThrowArgs = DiagnoseFindFirstArgsBase
      

  /**
   * Diagnose without action
   */
  export type DiagnoseArgs = {
    /**
     * Select specific fields to fetch from the Diagnose
     * 
    **/
    select?: DiagnoseSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DiagnoseScalarFieldEnum: {
    id: 'id',
    doctor_id: 'doctor_id',
    address: 'address',
    address_code: 'address_code',
    store_address: 'store_address'
  };

  export type DiagnoseScalarFieldEnum = (typeof DiagnoseScalarFieldEnum)[keyof typeof DiagnoseScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    available_hours: 'available_hours',
    available_weekday: 'available_weekday',
    description: 'description',
    doctor_display_name: 'doctor_display_name',
    doctor_image_url: 'doctor_image_url',
    doctor_images: 'doctor_images',
    doctor_tel: 'doctor_tel',
    doctor_tel_kakao: 'doctor_tel_kakao',
    professional_statement: 'professional_statement',
    subjects: 'subjects',
    lab_addr: 'lab_addr',
    lab_name: 'lab_name',
    lab_postal_code: 'lab_postal_code',
    lab_receiver_name: 'lab_receiver_name',
    lab_tel: 'lab_tel',
    lat: 'lat',
    lng: 'lng',
    hospital_name: 'hospital_name',
    hospital_address: 'hospital_address',
    hospital_img: 'hospital_img'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserScalarFieldEnum: {
    id: 'id',
    type: 'type',
    email: 'email',
    key: 'key',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    type?: StringFilter | string
    email?: StringFilter | string
    key?: StringFilter | string
    name?: StringFilter | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    email?: SortOrder
    key?: SortOrder
    name?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    email?: SortOrder
    key?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    key?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type DoctorWhereInput = {
    AND?: Enumerable<DoctorWhereInput>
    OR?: Enumerable<DoctorWhereInput>
    NOT?: Enumerable<DoctorWhereInput>
    id?: StringFilter | string
    available_hours?: StringFilter | string
    available_weekday?: StringFilter | string
    description?: StringFilter | string
    doctor_display_name?: StringFilter | string
    doctor_image_url?: StringFilter | string
    doctor_images?: StringNullableListFilter
    doctor_tel?: StringFilter | string
    doctor_tel_kakao?: StringFilter | string
    professional_statement?: StringFilter | string
    subjects?: StringFilter | string
    lab_addr?: StringFilter | string
    lab_name?: StringFilter | string
    lab_postal_code?: StringFilter | string
    lab_receiver_name?: StringFilter | string
    lab_tel?: StringFilter | string
    lat?: StringFilter | string
    lng?: StringFilter | string
    hospital_name?: StringFilter | string
    hospital_address?: StringFilter | string
    hospital_img?: StringFilter | string
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    available_hours?: SortOrder
    available_weekday?: SortOrder
    description?: SortOrder
    doctor_display_name?: SortOrder
    doctor_image_url?: SortOrder
    doctor_images?: SortOrder
    doctor_tel?: SortOrder
    doctor_tel_kakao?: SortOrder
    professional_statement?: SortOrder
    subjects?: SortOrder
    lab_addr?: SortOrder
    lab_name?: SortOrder
    lab_postal_code?: SortOrder
    lab_receiver_name?: SortOrder
    lab_tel?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    hospital_name?: SortOrder
    hospital_address?: SortOrder
    hospital_img?: SortOrder
  }

  export type DoctorWhereUniqueInput = {
    id?: string
  }

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    available_hours?: SortOrder
    available_weekday?: SortOrder
    description?: SortOrder
    doctor_display_name?: SortOrder
    doctor_image_url?: SortOrder
    doctor_images?: SortOrder
    doctor_tel?: SortOrder
    doctor_tel_kakao?: SortOrder
    professional_statement?: SortOrder
    subjects?: SortOrder
    lab_addr?: SortOrder
    lab_name?: SortOrder
    lab_postal_code?: SortOrder
    lab_receiver_name?: SortOrder
    lab_tel?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    hospital_name?: SortOrder
    hospital_address?: SortOrder
    hospital_img?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    OR?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    available_hours?: StringWithAggregatesFilter | string
    available_weekday?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    doctor_display_name?: StringWithAggregatesFilter | string
    doctor_image_url?: StringWithAggregatesFilter | string
    doctor_images?: StringNullableListFilter
    doctor_tel?: StringWithAggregatesFilter | string
    doctor_tel_kakao?: StringWithAggregatesFilter | string
    professional_statement?: StringWithAggregatesFilter | string
    subjects?: StringWithAggregatesFilter | string
    lab_addr?: StringWithAggregatesFilter | string
    lab_name?: StringWithAggregatesFilter | string
    lab_postal_code?: StringWithAggregatesFilter | string
    lab_receiver_name?: StringWithAggregatesFilter | string
    lab_tel?: StringWithAggregatesFilter | string
    lat?: StringWithAggregatesFilter | string
    lng?: StringWithAggregatesFilter | string
    hospital_name?: StringWithAggregatesFilter | string
    hospital_address?: StringWithAggregatesFilter | string
    hospital_img?: StringWithAggregatesFilter | string
  }

  export type DiagnoseWhereInput = {
    AND?: Enumerable<DiagnoseWhereInput>
    OR?: Enumerable<DiagnoseWhereInput>
    NOT?: Enumerable<DiagnoseWhereInput>
    id?: StringFilter | string
    doctor_id?: StringFilter | string
    address?: StringFilter | string
    address_code?: StringFilter | string
    store_address?: StringFilter | string
  }

  export type DiagnoseOrderByWithRelationInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    address?: SortOrder
    address_code?: SortOrder
    store_address?: SortOrder
  }

  export type DiagnoseWhereUniqueInput = {
    id?: string
  }

  export type DiagnoseOrderByWithAggregationInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    address?: SortOrder
    address_code?: SortOrder
    store_address?: SortOrder
    _count?: DiagnoseCountOrderByAggregateInput
    _max?: DiagnoseMaxOrderByAggregateInput
    _min?: DiagnoseMinOrderByAggregateInput
  }

  export type DiagnoseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiagnoseScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiagnoseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiagnoseScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    doctor_id?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    address_code?: StringWithAggregatesFilter | string
    store_address?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    type: string
    email: string
    key: string
    name: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    type: string
    email: string
    key: string
    name: string
  }

  export type UserUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    type: string
    email: string
    key: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    id?: string
    available_hours: string
    available_weekday: string
    description: string
    doctor_display_name: string
    doctor_image_url: string
    doctor_images?: DoctorCreatedoctor_imagesInput | Enumerable<string>
    doctor_tel: string
    doctor_tel_kakao: string
    professional_statement: string
    subjects: string
    lab_addr: string
    lab_name: string
    lab_postal_code: string
    lab_receiver_name: string
    lab_tel: string
    lat: string
    lng: string
    hospital_name: string
    hospital_address: string
    hospital_img: string
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    available_hours: string
    available_weekday: string
    description: string
    doctor_display_name: string
    doctor_image_url: string
    doctor_images?: DoctorCreatedoctor_imagesInput | Enumerable<string>
    doctor_tel: string
    doctor_tel_kakao: string
    professional_statement: string
    subjects: string
    lab_addr: string
    lab_name: string
    lab_postal_code: string
    lab_receiver_name: string
    lab_tel: string
    lat: string
    lng: string
    hospital_name: string
    hospital_address: string
    hospital_img: string
  }

  export type DoctorUpdateInput = {
    available_hours?: StringFieldUpdateOperationsInput | string
    available_weekday?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctor_display_name?: StringFieldUpdateOperationsInput | string
    doctor_image_url?: StringFieldUpdateOperationsInput | string
    doctor_images?: DoctorUpdatedoctor_imagesInput | Enumerable<string>
    doctor_tel?: StringFieldUpdateOperationsInput | string
    doctor_tel_kakao?: StringFieldUpdateOperationsInput | string
    professional_statement?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    lab_addr?: StringFieldUpdateOperationsInput | string
    lab_name?: StringFieldUpdateOperationsInput | string
    lab_postal_code?: StringFieldUpdateOperationsInput | string
    lab_receiver_name?: StringFieldUpdateOperationsInput | string
    lab_tel?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    hospital_address?: StringFieldUpdateOperationsInput | string
    hospital_img?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateInput = {
    available_hours?: StringFieldUpdateOperationsInput | string
    available_weekday?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctor_display_name?: StringFieldUpdateOperationsInput | string
    doctor_image_url?: StringFieldUpdateOperationsInput | string
    doctor_images?: DoctorUpdatedoctor_imagesInput | Enumerable<string>
    doctor_tel?: StringFieldUpdateOperationsInput | string
    doctor_tel_kakao?: StringFieldUpdateOperationsInput | string
    professional_statement?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    lab_addr?: StringFieldUpdateOperationsInput | string
    lab_name?: StringFieldUpdateOperationsInput | string
    lab_postal_code?: StringFieldUpdateOperationsInput | string
    lab_receiver_name?: StringFieldUpdateOperationsInput | string
    lab_tel?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    hospital_address?: StringFieldUpdateOperationsInput | string
    hospital_img?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateManyInput = {
    id?: string
    available_hours: string
    available_weekday: string
    description: string
    doctor_display_name: string
    doctor_image_url: string
    doctor_images?: DoctorCreatedoctor_imagesInput | Enumerable<string>
    doctor_tel: string
    doctor_tel_kakao: string
    professional_statement: string
    subjects: string
    lab_addr: string
    lab_name: string
    lab_postal_code: string
    lab_receiver_name: string
    lab_tel: string
    lat: string
    lng: string
    hospital_name: string
    hospital_address: string
    hospital_img: string
  }

  export type DoctorUpdateManyMutationInput = {
    available_hours?: StringFieldUpdateOperationsInput | string
    available_weekday?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctor_display_name?: StringFieldUpdateOperationsInput | string
    doctor_image_url?: StringFieldUpdateOperationsInput | string
    doctor_images?: DoctorUpdatedoctor_imagesInput | Enumerable<string>
    doctor_tel?: StringFieldUpdateOperationsInput | string
    doctor_tel_kakao?: StringFieldUpdateOperationsInput | string
    professional_statement?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    lab_addr?: StringFieldUpdateOperationsInput | string
    lab_name?: StringFieldUpdateOperationsInput | string
    lab_postal_code?: StringFieldUpdateOperationsInput | string
    lab_receiver_name?: StringFieldUpdateOperationsInput | string
    lab_tel?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    hospital_address?: StringFieldUpdateOperationsInput | string
    hospital_img?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    available_hours?: StringFieldUpdateOperationsInput | string
    available_weekday?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctor_display_name?: StringFieldUpdateOperationsInput | string
    doctor_image_url?: StringFieldUpdateOperationsInput | string
    doctor_images?: DoctorUpdatedoctor_imagesInput | Enumerable<string>
    doctor_tel?: StringFieldUpdateOperationsInput | string
    doctor_tel_kakao?: StringFieldUpdateOperationsInput | string
    professional_statement?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    lab_addr?: StringFieldUpdateOperationsInput | string
    lab_name?: StringFieldUpdateOperationsInput | string
    lab_postal_code?: StringFieldUpdateOperationsInput | string
    lab_receiver_name?: StringFieldUpdateOperationsInput | string
    lab_tel?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    hospital_address?: StringFieldUpdateOperationsInput | string
    hospital_img?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnoseCreateInput = {
    id?: string
    doctor_id: string
    address: string
    address_code: string
    store_address: string
  }

  export type DiagnoseUncheckedCreateInput = {
    id?: string
    doctor_id: string
    address: string
    address_code: string
    store_address: string
  }

  export type DiagnoseUpdateInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_code?: StringFieldUpdateOperationsInput | string
    store_address?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnoseUncheckedUpdateInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_code?: StringFieldUpdateOperationsInput | string
    store_address?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnoseCreateManyInput = {
    id?: string
    doctor_id: string
    address: string
    address_code: string
    store_address: string
  }

  export type DiagnoseUpdateManyMutationInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_code?: StringFieldUpdateOperationsInput | string
    store_address?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnoseUncheckedUpdateManyInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_code?: StringFieldUpdateOperationsInput | string
    store_address?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    email?: SortOrder
    key?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    email?: SortOrder
    key?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    email?: SortOrder
    key?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    available_hours?: SortOrder
    available_weekday?: SortOrder
    description?: SortOrder
    doctor_display_name?: SortOrder
    doctor_image_url?: SortOrder
    doctor_images?: SortOrder
    doctor_tel?: SortOrder
    doctor_tel_kakao?: SortOrder
    professional_statement?: SortOrder
    subjects?: SortOrder
    lab_addr?: SortOrder
    lab_name?: SortOrder
    lab_postal_code?: SortOrder
    lab_receiver_name?: SortOrder
    lab_tel?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    hospital_name?: SortOrder
    hospital_address?: SortOrder
    hospital_img?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    available_hours?: SortOrder
    available_weekday?: SortOrder
    description?: SortOrder
    doctor_display_name?: SortOrder
    doctor_image_url?: SortOrder
    doctor_tel?: SortOrder
    doctor_tel_kakao?: SortOrder
    professional_statement?: SortOrder
    subjects?: SortOrder
    lab_addr?: SortOrder
    lab_name?: SortOrder
    lab_postal_code?: SortOrder
    lab_receiver_name?: SortOrder
    lab_tel?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    hospital_name?: SortOrder
    hospital_address?: SortOrder
    hospital_img?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    available_hours?: SortOrder
    available_weekday?: SortOrder
    description?: SortOrder
    doctor_display_name?: SortOrder
    doctor_image_url?: SortOrder
    doctor_tel?: SortOrder
    doctor_tel_kakao?: SortOrder
    professional_statement?: SortOrder
    subjects?: SortOrder
    lab_addr?: SortOrder
    lab_name?: SortOrder
    lab_postal_code?: SortOrder
    lab_receiver_name?: SortOrder
    lab_tel?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    hospital_name?: SortOrder
    hospital_address?: SortOrder
    hospital_img?: SortOrder
  }

  export type DiagnoseCountOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    address?: SortOrder
    address_code?: SortOrder
    store_address?: SortOrder
  }

  export type DiagnoseMaxOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    address?: SortOrder
    address_code?: SortOrder
    store_address?: SortOrder
  }

  export type DiagnoseMinOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    address?: SortOrder
    address_code?: SortOrder
    store_address?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DoctorCreatedoctor_imagesInput = {
    set: Enumerable<string>
  }

  export type DoctorUpdatedoctor_imagesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
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