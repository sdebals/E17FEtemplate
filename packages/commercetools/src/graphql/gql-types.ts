import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  Country: { input: any; output: any; }
  Currency: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Json: { input: any; output: any; }
  KeyReferenceInput: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Set: { input: any; output: any; }
  Time: { input: any; output: any; }
  YearMonth: { input: any; output: any; }
};

/** API Clients can be used to obtain OAuth 2 access tokens. The secret is only shown once in the response of creating the API Client. */
export type ApiClientWithSecret = {
  accessTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleteAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastUsedAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  refreshTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  scope: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

/** API Clients can be used to obtain OAuth 2 access tokens */
export type ApiClientWithoutSecret = {
  accessTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleteAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastUsedAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  refreshTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  scope: Scalars['String']['output'];
};

export type ApiClientWithoutSecretQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ApiClientWithoutSecret>;
  total: Scalars['Long']['output'];
};

export type AwsLambdaDestination = ExtensionDestination & {
  accessKey: Scalars['String']['output'];
  accessSecret: Scalars['String']['output'];
  arn: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AwsLambdaDestinationInput = {
  accessKey: Scalars['String']['input'];
  accessSecret: Scalars['String']['input'];
  arn: Scalars['String']['input'];
};

export type AbsoluteCartDiscountValue = CartDiscountValue & {
  applicationMode: DiscountApplicationMode;
  money: Array<Money>;
  type: Scalars['String']['output'];
};

export type AbsoluteCartDiscountValueInput = {
  applicationMode: DiscountApplicationMode;
  money: Array<MoneyInput>;
};

export type AbsoluteDiscountValue = CartDiscountValue & ProductDiscountValue & {
  money: Array<Money>;
  type: Scalars['String']['output'];
};

export type AbsoluteDiscountValueInput = {
  money: Array<MoneyInput>;
};

export enum ActionType {
  Create = 'Create',
  Update = 'Update'
}

/** A field to access the active cart. */
export type ActiveCartInterface = {
  activeCart?: Maybe<Cart>;
};

export type AddAssociateRolePermission = {
  permission: Permission;
};

export type AddAttributeGroupAttribute = {
  attribute: AttributeReferenceInput;
};

export type AddBusinessUnitAddress = {
  address: AddressInput;
};

export type AddBusinessUnitAssociate = {
  associate: AssociateDraft;
};

export type AddBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddBusinessUnitStore = {
  store: ResourceIdentifierInput;
};

export type AddCartCustomLineItem = {
  custom?: InputMaybe<CustomFieldsDraft>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  priceMode?: InputMaybe<CustomLineItemPriceMode>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  slug: Scalars['String']['input'];
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type AddCartCustomShippingMethod = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveries?: InputMaybe<Array<DeliveryDraft>>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingAddress: AddressInput;
  shippingKey: Scalars['String']['input'];
  shippingMethodName: Scalars['String']['input'];
  shippingRate: ShippingRateDraft;
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type AddCartDiscountCode = {
  code: Scalars['String']['input'];
  validateDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddCartDiscountStore = {
  store: ResourceIdentifierInput;
};

export type AddCartItemShippingAddress = {
  address: AddressInput;
};

export type AddCartLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  inventoryMode?: InputMaybe<InventoryMode>;
  key?: InputMaybe<Scalars['String']['input']>;
  perMethodExternalTaxRate?: InputMaybe<Array<MethodExternalTaxRateDraft>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddCartPayment = {
  payment: ResourceIdentifierInput;
};

export type AddCartShippingMethod = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveries?: InputMaybe<Array<DeliveryDraft>>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingAddress: AddressInput;
  shippingKey: Scalars['String']['input'];
  shippingMethod: ResourceIdentifierInput;
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
};

export type AddCartShoppingList = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  shoppingList: ResourceIdentifierInput;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type AddCategoryAsset = {
  asset: AssetDraftInput;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type AddChannelRoles = {
  roles: Array<ChannelRole>;
};

export type AddCustomerAddress = {
  address: AddressInput;
};

export type AddCustomerBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddCustomerGroupAssignment = {
  customerGroupAssignment: CustomerGroupAssignmentDraft;
};

export type AddCustomerShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddCustomerStore = {
  store: ResourceIdentifierInput;
};

export type AddInventoryEntryQuantity = {
  quantity: Scalars['Long']['input'];
};

export type AddMyBusinessUnitAddress = {
  address: AddressInput;
};

export type AddMyBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddMyBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddMyCartLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddMyPaymentTransaction = {
  transaction: MyTransactionDraft;
};

export type AddOrderDelivery = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  parcels?: InputMaybe<Array<ParcelDataDraftType>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddOrderEditStagedAction = {
  stagedAction: StagedOrderUpdateAction;
};

export type AddOrderItemShippingAddress = {
  address: AddressInput;
};

export type AddOrderParcelToDelivery = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type AddOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type AddOrderReturnInfo = {
  items: Array<ReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']['input']>;
  returnTrackingId?: InputMaybe<Scalars['String']['input']>;
};

export type AddPaymentInterfaceInteraction = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddPaymentTransaction = {
  transaction: TransactionDraft;
};

export type AddProductAsset = {
  asset: AssetDraftInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddProductExternalImage = {
  image: ImageInput;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddProductPrice = {
  price: ProductPriceDataInput;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddProductSelectionProduct = {
  product: ResourceIdentifierInput;
  variantSelection?: InputMaybe<ProductVariantSelectionDraft>;
};

export type AddProductTailoringAsset = {
  asset: AssetDraftInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddProductTailoringExternalImage = {
  image: ImageInput;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddProductToCategory = {
  category: ResourceIdentifierInput;
  orderHint?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddProductVariant = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  attributes?: InputMaybe<Array<ProductAttributeInput>>;
  images?: InputMaybe<Array<ImageInput>>;
  key?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<ProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddProductVariantTailoring = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<ImageInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddShippingMethodShippingRate = {
  shippingRate: ShippingRateDraft;
  zone: ResourceIdentifierInput;
};

export type AddShippingMethodZone = {
  zone: ResourceIdentifierInput;
};

export type AddShoppingListLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddShoppingListTextLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type AddStagedOrderCustomLineItem = {
  custom?: InputMaybe<CustomFieldsDraft>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  priceMode?: InputMaybe<CustomLineItemPriceMode>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
  slug: Scalars['String']['input'];
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type AddStagedOrderCustomLineItemOutput = StagedOrderUpdateActionOutput & {
  draft: CustomLineItemDraftOutput;
  type: Scalars['String']['output'];
};

export type AddStagedOrderDelivery = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  parcels?: InputMaybe<Array<ParcelDataDraftType>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type AddStagedOrderDeliveryOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  custom?: Maybe<CustomFieldsCommand>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  items: Array<DeliveryItem>;
  parcels: Array<ParcelData>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type AddStagedOrderDiscountCode = {
  code: Scalars['String']['input'];
  validateDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddStagedOrderDiscountCodeOutput = StagedOrderUpdateActionOutput & {
  code: Scalars['String']['output'];
  type: Scalars['String']['output'];
  validateDuplicates: Scalars['Boolean']['output'];
};

export type AddStagedOrderItemShippingAddress = {
  address: AddressInput;
};

export type AddStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  type: Scalars['String']['output'];
};

export type AddStagedOrderLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  inventoryMode?: InputMaybe<InventoryMode>;
  key?: InputMaybe<Scalars['String']['input']>;
  perMethodExternalTaxRate?: InputMaybe<Array<MethodExternalTaxRateDraft>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type AddStagedOrderLineItemOutput = StagedOrderUpdateActionOutput & {
  draft: LineItemDraftOutput;
  type: Scalars['String']['output'];
};

export type AddStagedOrderParcelToDelivery = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type AddStagedOrderParcelToDeliveryOutput = StagedOrderUpdateActionOutput & {
  custom?: Maybe<CustomFieldsCommand>;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  items: Array<DeliveryItem>;
  measurements?: Maybe<ParcelMeasurements>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  trackingData?: Maybe<TrackingData>;
  type: Scalars['String']['output'];
};

export type AddStagedOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type AddStagedOrderPaymentOutput = StagedOrderUpdateActionOutput & {
  paymentResId: ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type AddStagedOrderReturnInfo = {
  items: Array<ReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']['input']>;
  returnTrackingId?: InputMaybe<Scalars['String']['input']>;
};

export type AddStagedOrderReturnInfoOutput = StagedOrderUpdateActionOutput & {
  items: Array<ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type AddStagedOrderShoppingList = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  shoppingList: ResourceIdentifierInput;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type AddStagedOrderShoppingListOutput = StagedOrderUpdateActionOutput & {
  distributionChannelResId?: Maybe<ChannelReferenceIdentifier>;
  shoppingListResId: ResourceIdentifier;
  supplyChannelResId?: Maybe<ChannelReferenceIdentifier>;
  type: Scalars['String']['output'];
};

export type AddStandalonePriceTier = {
  tier: ProductPriceTierInput;
};

export type AddStateRoles = {
  roles: Array<StateRole>;
};

export type AddStoreCountry = {
  country: StoreCountryInput;
};

export type AddStoreDistributionChannel = {
  distributionChannel: ResourceIdentifierInput;
};

export type AddStoreProductSelection = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  productSelection: ResourceIdentifierInput;
};

export type AddStoreSupplyChannel = {
  supplyChannel: ResourceIdentifierInput;
};

export type AddTypeEnumValue = {
  fieldName: Scalars['String']['input'];
  value: EnumValueInput;
};

export type AddTypeFieldDefinition = {
  fieldDefinition: FieldDefinitionInput;
};

export type AddTypeLocalizedEnumValue = {
  fieldName: Scalars['String']['input'];
  value: LocalizedEnumValueInput;
};

export type AddZoneLocation = {
  location: ZoneLocation;
};

/** An address represents a postal address. */
export type Address = {
  additionalAddressInfo?: Maybe<Scalars['String']['output']>;
  additionalStreetInfo?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['Country']['output'];
  custom?: Maybe<CustomFieldsType>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AddressDraft = {
  additionalAddressInfo?: Maybe<Scalars['String']['output']>;
  additionalStreetInfo?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['Country']['output'];
  custom?: Maybe<CustomFieldsCommand>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  additionalAddressInfo?: InputMaybe<Scalars['String']['input']>;
  additionalStreetInfo?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['Country']['input'];
  custom?: InputMaybe<CustomFieldsDraft>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  pOBox?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetName?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum AnonymousCartSignInMode {
  /**
   * `LineItem`s of the anonymous cart will be copied to the customer’s active cart that has been modified most recently.
   *
   * The `CartState` of the anonymous cart gets changed to `Merged` while the `CartState` of the customer’s cart remains `Active`.
   *
   * `CustomLineItems` and `CustomFields` of the anonymous cart will not be copied to the customers cart.
   *
   * If a `LineItem` in the anonymous cart matches an existing line item in the customer’s cart (same product ID and variant ID), the maximum quantity of both LineItems is used as the new quantity. In that case `CustomFields` on the `LineItem` of the anonymous cart will not be in the resulting `LineItem`.
   */
  MergeWithExistingCustomerCart = 'MergeWithExistingCustomerCart',
  /** The anonymous cart is used as new active customer cart. No `LineItem`s get merged. */
  UseAsNewActiveCustomerCart = 'UseAsNewActiveCustomerCart'
}

export type Applied = OrderEditResult & {
  appliedAt: Scalars['DateTime']['output'];
  excerptAfterEdit: OrderExcerpt;
  excerptBeforeEdit: OrderExcerpt;
  type: Scalars['String']['output'];
};

export type ApplyCartDeltaToCustomLineItemShippingDetailsTargets = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  targetsDelta?: InputMaybe<Array<ShippingTargetDraft>>;
  targetsDeltaDraft?: InputMaybe<ItemShippingDetailsDraft>;
};

export type ApplyCartDeltaToLineItemShippingDetailsTargets = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  targetsDelta?: InputMaybe<Array<ShippingTargetDraft>>;
  targetsDeltaDraft?: InputMaybe<ItemShippingDetailsDraft>;
};

export type ApplyStagedChanges = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type ApprovalFlow = Versioned & {
  approvals: Array<ApprovalFlowApproval>;
  businessUnit: BusinessUnit;
  businessUnitRef: KeyReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  currentTierPendingApprovers: Array<RuleApprover>;
  custom?: Maybe<CustomFieldsType>;
  eligibleApprovers: Array<RuleApprover>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  order?: Maybe<Order>;
  orderRef: Reference;
  pendingApprovers: Array<RuleApprover>;
  rejection?: Maybe<ApprovalFlowRejection>;
  rules: Array<ApprovalRule>;
  status: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type ApprovalFlowApproval = {
  approvedAt: Scalars['DateTime']['output'];
  approver: Associate;
};

export type ApprovalFlowApproved = MessagePayload & {
  associate?: Maybe<Customer>;
  associateRef?: Maybe<Reference>;
  order?: Maybe<Order>;
  orderRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type ApprovalFlowCompleted = MessagePayload & {
  order?: Maybe<Order>;
  orderRef?: Maybe<Reference>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ApprovalFlowCreated = MessagePayload & {
  approvalFlow: ApprovalFlow;
  type: Scalars['String']['output'];
};

export type ApprovalFlowQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ApprovalFlow>;
  total: Scalars['Long']['output'];
};

export type ApprovalFlowRejected = MessagePayload & {
  associate?: Maybe<Customer>;
  associateRef?: Maybe<Reference>;
  order?: Maybe<Order>;
  orderRef?: Maybe<Reference>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ApprovalFlowRejection = {
  reason?: Maybe<Scalars['String']['output']>;
  rejectedAt: Scalars['DateTime']['output'];
  rejecter: Associate;
};

export type ApprovalFlowUpdateAction = {
  approve?: InputMaybe<ApproveApprovalFlow>;
  reject?: InputMaybe<RejectApprovalFlow>;
  setCustomField?: InputMaybe<SetApprovalFlowCustomField>;
  setCustomType?: InputMaybe<SetApprovalFlowCustomType>;
};

export type ApprovalRule = Versioned & {
  approvers: ApproverHierarchy;
  businessUnit: BusinessUnit;
  businessUnitRef: KeyReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name: Scalars['String']['output'];
  predicate: Scalars['String']['output'];
  requesters: Array<RuleRequester>;
  status: ApprovalRuleStatus;
  version: Scalars['Long']['output'];
};

export type ApprovalRuleApproversSet = MessagePayload & {
  approvers: ApproverHierarchy;
  oldApprovers: ApproverHierarchy;
  type: Scalars['String']['output'];
};

export type ApprovalRuleCreated = MessagePayload & {
  approvalRule: ApprovalRule;
  type: Scalars['String']['output'];
};

export type ApprovalRuleDescriptionSet = MessagePayload & {
  description?: Maybe<Scalars['String']['output']>;
  oldDescription?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ApprovalRuleDraft = {
  approvers: ApproverHierarchyDraft;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  predicate: Scalars['String']['input'];
  requesters: Array<RuleRequesterDraft>;
  status: ApprovalRuleStatus;
};

export type ApprovalRuleKeySet = MessagePayload & {
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ApprovalRuleNameSet = MessagePayload & {
  name: Scalars['String']['output'];
  oldName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ApprovalRulePredicateSet = MessagePayload & {
  oldPredicate: Scalars['String']['output'];
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ApprovalRuleQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ApprovalRule>;
  total: Scalars['Long']['output'];
};

export type ApprovalRuleRequestersSet = MessagePayload & {
  oldRequesters: Array<RuleRequester>;
  requesters: Array<RuleRequester>;
  type: Scalars['String']['output'];
};

export enum ApprovalRuleStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type ApprovalRuleStatusSet = MessagePayload & {
  oldStatus: ApprovalRuleStatus;
  status: ApprovalRuleStatus;
  type: Scalars['String']['output'];
};

export type ApprovalRuleUpdateAction = {
  setApprovers?: InputMaybe<SetApprovalRuleApprovers>;
  setDescription?: InputMaybe<SetApprovalRuleDescription>;
  setKey?: InputMaybe<SetApprovalRuleKey>;
  setName?: InputMaybe<SetApprovalRuleName>;
  setPredicate?: InputMaybe<SetApprovalRulePredicate>;
  setRequesters?: InputMaybe<SetApprovalRuleRequesters>;
  setStatus?: InputMaybe<SetApprovalRuleStatus>;
};

export type ApproveApprovalFlow = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type ApproverConjunction = {
  and: Array<ApproverDisjunction>;
};

export type ApproverConjunctionDraft = {
  and: Array<ApproverDisjunctionDraft>;
};

export type ApproverDisjunction = {
  or: Array<RuleApprover>;
};

export type ApproverDisjunctionDraft = {
  or: Array<RuleApproverDraft>;
};

export type ApproverHierarchy = {
  tiers: Array<ApproverConjunction>;
};

export type ApproverHierarchyDraft = {
  tiers: Array<ApproverConjunctionDraft>;
};

export type AsAssociate = CartQueryInterface & OrderQueryInterface & QuoteQueryInterface & QuoteRequestQueryInterface & {
  approvalFlow?: Maybe<ApprovalFlow>;
  approvalFlows: ApprovalFlowQueryResult;
  approvalRule?: Maybe<ApprovalRule>;
  approvalRules: ApprovalRuleQueryResult;
  businessUnit?: Maybe<BusinessUnit>;
  businessUnits: BusinessUnitQueryResult;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  quote?: Maybe<Quote>;
  quoteRequest?: Maybe<QuoteRequest>;
  quoteRequests: QuoteRequestQueryResult;
  quotes: QuoteQueryResult;
};


export type AsAssociateApprovalFlowArgs = {
  id: Scalars['String']['input'];
};


export type AsAssociateApprovalFlowsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateApprovalRuleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateApprovalRulesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateBusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateBusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateCartArgs = {
  id: Scalars['String']['input'];
};


export type AsAssociateCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateQuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type AsAssociateQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type AsAssociateArgument = {
  associateId: Scalars['String']['input'];
  businessUnitKey: Scalars['KeyReferenceInput']['input'];
};

export type Asset = {
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  sources: Array<AssetSource>;
  tags: Array<Scalars['String']['output']>;
};


export type AssetDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type AssetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type AssetDimensions = {
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type AssetDimensionsInput = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type AssetDraftInput = {
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<ResourceIdentifierInput>;
};

export type AssetSource = {
  contentType?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<AssetDimensions>;
  key?: Maybe<Scalars['String']['output']>;
  uri: Scalars['String']['output'];
};

export type AssetSourceInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<AssetDimensionsInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  uri: Scalars['String']['input'];
};

export type Associate = {
  associateRoleAssignments: Array<AssociateRoleAssignment>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
};

export type AssociateDraft = {
  associateRoleAssignments?: InputMaybe<Array<AssociateRoleAssignmentDraft>>;
  customer: ResourceIdentifierInput;
};

export enum AssociateInheritanceMode {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export type AssociateRole = ReferenceExpandable & Versioned & {
  buyerAssignable: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  permissions: Array<Permission>;
  version: Scalars['Long']['output'];
};

export type AssociateRoleAssignment = {
  associateRole: AssociateRole;
  associateRoleRef?: Maybe<KeyReference>;
  inheritance: AssociateInheritanceMode;
};

export type AssociateRoleAssignmentDraft = {
  associateRole: ResourceIdentifierInput;
  inheritance?: InputMaybe<AssociateInheritanceMode>;
};

export type AssociateRoleBuyerAssignableChanged = MessagePayload & {
  buyerAssignable: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type AssociateRoleCreated = MessagePayload & {
  associateRole: AssociateRole;
  type: Scalars['String']['output'];
};

export type AssociateRoleDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type AssociateRoleDraft = {
  buyerAssignable: Scalars['Boolean']['input'];
  custom?: InputMaybe<CustomFieldsDraft>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Permission>>;
};

export type AssociateRoleNameSet = MessagePayload & {
  name?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type AssociateRolePermissionAdded = MessagePayload & {
  permission: Permission;
  type: Scalars['String']['output'];
};

export type AssociateRolePermissionRemoved = MessagePayload & {
  permission: Permission;
  type: Scalars['String']['output'];
};

export type AssociateRolePermissionsSet = MessagePayload & {
  permissions?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
};

export type AssociateRoleQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<AssociateRole>;
  total: Scalars['Long']['output'];
};

export type AssociateRoleUpdateAction = {
  addPermission?: InputMaybe<AddAssociateRolePermission>;
  changeBuyerAssignable?: InputMaybe<ChangeAssociateRoleBuyerAssignable>;
  removePermission?: InputMaybe<RemoveAssociateRolePermission>;
  setCustomField?: InputMaybe<SetAssociateRoleCustomField>;
  setCustomType?: InputMaybe<SetAssociateRoleCustomType>;
  setName?: InputMaybe<SetAssociateRoleName>;
  setPermissions?: InputMaybe<SetAssociateRolePermissions>;
};

export type Attribute = {
  name: Scalars['String']['output'];
};

export enum AttributeConstraint {
  /** A set of attributes, that have this constraint, should have different combinations in each variant */
  CombinationUnique = 'CombinationUnique',
  /** No constraints are applied to the attribute */
  None = 'None',
  /** Attribute value should be the same in all variants */
  SameForAll = 'SameForAll',
  /** Attribute value should be different in each variant */
  Unique = 'Unique'
}

export type AttributeDefinition = {
  attributeConstraint: AttributeConstraint;
  inputHint: TextInputHint;
  inputTip?: Maybe<Scalars['String']['output']>;
  inputTipAllLocales?: Maybe<Array<LocalizedString>>;
  isRequired: Scalars['Boolean']['output'];
  isSearchable: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<LocalizedString>;
  name: Scalars['String']['output'];
  type: AttributeDefinitionType;
};


export type AttributeDefinitionInputTipArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type AttributeDefinitionLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type AttributeDefinitionDraft = {
  attributeConstraint?: InputMaybe<AttributeConstraint>;
  inputHint?: InputMaybe<TextInputHint>;
  inputTip?: InputMaybe<Array<LocalizedStringItemInputType>>;
  isRequired: Scalars['Boolean']['input'];
  isSearchable: Scalars['Boolean']['input'];
  label: Array<LocalizedStringItemInputType>;
  name: Scalars['String']['input'];
  type: AttributeTypeDraft;
};

export type AttributeDefinitionResult = {
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<AttributeDefinition>;
  total: Scalars['Int']['output'];
};

/** (https://docs.commercetools.com/api/projects/productTypes#attributetype)[https://docs.commercetools.com/api/projects/productTypes#attributetype] */
export type AttributeDefinitionType = {
  name: Scalars['String']['output'];
};

export type AttributeGroup = Versioned & {
  attributes: Array<AttributeReference>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  version: Scalars['Long']['output'];
};


export type AttributeGroupDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type AttributeGroupNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type AttributeGroupDraft = {
  attributes: Array<AttributeReferenceInput>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
};

export type AttributeGroupLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type AttributeGroupLimitsProjection = {
  total: AttributeGroupLimitWithCurrent;
};

export type AttributeGroupQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<AttributeGroup>;
  total: Scalars['Long']['output'];
};

export type AttributeGroupUpdateAction = {
  addAttribute?: InputMaybe<AddAttributeGroupAttribute>;
  changeName?: InputMaybe<ChangeAttributeGroupName>;
  removeAttribute?: InputMaybe<RemoveAttributeGroupAttribute>;
  setAttributes?: InputMaybe<SetAttributeGroupAttributes>;
  setDescription?: InputMaybe<SetAttributeGroupDescription>;
  setKey?: InputMaybe<SetAttributeGroupKey>;
};

export type AttributeReference = {
  key: Scalars['String']['output'];
};

export type AttributeReferenceInput = {
  key: Scalars['String']['input'];
};

export type AttributeSetElementTypeDraft = {
  boolean?: InputMaybe<SimpleAttributeTypeDraft>;
  date?: InputMaybe<SimpleAttributeTypeDraft>;
  datetime?: InputMaybe<SimpleAttributeTypeDraft>;
  enum?: InputMaybe<EnumTypeDraft>;
  lenum?: InputMaybe<LocalizableEnumTypeDraft>;
  ltext?: InputMaybe<SimpleAttributeTypeDraft>;
  money?: InputMaybe<SimpleAttributeTypeDraft>;
  number?: InputMaybe<SimpleAttributeTypeDraft>;
  reference?: InputMaybe<ReferenceTypeDefinitionDraft>;
  text?: InputMaybe<SimpleAttributeTypeDraft>;
  time?: InputMaybe<SimpleAttributeTypeDraft>;
};

export type AttributeSetTypeDraft = {
  elementType: AttributeSetElementTypeDraft;
};

export type AttributeTypeDraft = {
  boolean?: InputMaybe<SimpleAttributeTypeDraft>;
  date?: InputMaybe<SimpleAttributeTypeDraft>;
  datetime?: InputMaybe<SimpleAttributeTypeDraft>;
  enum?: InputMaybe<EnumTypeDraft>;
  lenum?: InputMaybe<LocalizableEnumTypeDraft>;
  ltext?: InputMaybe<SimpleAttributeTypeDraft>;
  money?: InputMaybe<SimpleAttributeTypeDraft>;
  number?: InputMaybe<SimpleAttributeTypeDraft>;
  reference?: InputMaybe<ReferenceTypeDefinitionDraft>;
  set?: InputMaybe<AttributeSetTypeDraft>;
  text?: InputMaybe<SimpleAttributeTypeDraft>;
  time?: InputMaybe<SimpleAttributeTypeDraft>;
};

export type Attribution = {
  clientId?: Maybe<Scalars['String']['output']>;
  source: AttributionSource;
  userRef?: Maybe<Reference>;
};

export enum AttributionSource {
  Export = 'Export',
  Import = 'Import'
}

/** AuthenticationMode values. */
export enum AuthenticationMode {
  ExternalAuth = 'ExternalAuth',
  Password = 'Password'
}

export type AuthorizationHeader = HttpDestinationAuthentication & {
  headerValue: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AuthorizationHeaderInput = {
  headerValue: Scalars['String']['input'];
};

export enum AwsAuthenticationMode {
  Credentials = 'Credentials',
  Iam = 'IAM'
}

export type AzureFunctionsAuthentication = HttpDestinationAuthentication & {
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AzureFunctionsAuthenticationInput = {
  key: Scalars['String']['input'];
};

export type AzureServiceBusDestination = Destination & {
  connectionString: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AzureServiceBusDestinationInput = {
  connectionString: Scalars['String']['input'];
};

export type BaseMoney = {
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  fractionDigits: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type BaseMoneyInput = {
  centPrecision?: InputMaybe<MoneyInput>;
  highPrecision?: InputMaybe<HighPrecisionMoneyInput>;
};

export type BaseSearchKeywordInput = {
  custom?: InputMaybe<CustomSuggestTokenizerInput>;
  whitespace?: InputMaybe<WhitespaceSuggestTokenizerInput>;
};

export type BooleanAttribute = Attribute & {
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type BooleanAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type BooleanField = CustomField & {
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type BooleanType = FieldType & {
  name: Scalars['String']['output'];
};

export type BusinessUnit = ReferenceExpandable & Versioned & {
  addresses: Array<Address>;
  /** This field contains the BusinessUnits KeyReferences from the Company to the parent Division of this BusinessUnit in that order. */
  ancestors: Array<BusinessUnit>;
  approvalRuleMode: BusinessUnitApprovalRuleMode;
  associateMode: BusinessUnitAssociateMode;
  associates: Array<Associate>;
  billingAddressIds: Array<Scalars['String']['output']>;
  billingAddresses: Array<Address>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  defaultBillingAddress?: Maybe<Address>;
  defaultBillingAddressId?: Maybe<Scalars['String']['output']>;
  defaultShippingAddress?: Maybe<Address>;
  defaultShippingAddressId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  inheritedAssociates?: Maybe<Array<InheritedAssociate>>;
  /** This field contains the inherited stores from its parentUnit if storeMode is set to FromParent. */
  inheritedStores?: Maybe<Array<InheritedStore>>;
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name: Scalars['String']['output'];
  parentUnit?: Maybe<BusinessUnit>;
  parentUnitRef?: Maybe<KeyReference>;
  shippingAddressIds: Array<Scalars['String']['output']>;
  shippingAddresses: Array<Address>;
  status: BusinessUnitStatus;
  storeMode?: Maybe<Scalars['String']['output']>;
  stores?: Maybe<Array<Store>>;
  storesRef?: Maybe<Array<KeyReference>>;
  topLevelUnit: BusinessUnit;
  topLevelUnitRef?: Maybe<KeyReference>;
  unitType: BusinessUnitType;
  version: Scalars['Long']['output'];
};

export type BusinessUnitAddressAdded = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type BusinessUnitAddressChanged = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type BusinessUnitAddressCustomFieldAdded = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type BusinessUnitAddressCustomFieldChanged = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type BusinessUnitAddressCustomFieldRemoved = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BusinessUnitAddressCustomTypeRemoved = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BusinessUnitAddressCustomTypeSet = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  customFields: CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BusinessUnitAddressRemoved = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export enum BusinessUnitApprovalRuleMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent'
}

export type BusinessUnitApprovalRuleModeChanged = MessagePayload & {
  approvalRuleMode: BusinessUnitApprovalRuleMode;
  oldApprovalRuleMode?: Maybe<BusinessUnitApprovalRuleMode>;
  type: Scalars['String']['output'];
};

export type BusinessUnitAssociateAdded = MessagePayload & {
  associate: Associate;
  type: Scalars['String']['output'];
};

export type BusinessUnitAssociateChanged = MessagePayload & {
  associate: Associate;
  type: Scalars['String']['output'];
};

export enum BusinessUnitAssociateMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent'
}

export type BusinessUnitAssociateModeChanged = MessagePayload & {
  associateMode: BusinessUnitAssociateMode;
  oldAssociateMode?: Maybe<BusinessUnitAssociateMode>;
  type: Scalars['String']['output'];
};

export type BusinessUnitAssociateRemoved = MessagePayload & {
  associate: Associate;
  type: Scalars['String']['output'];
};

export type BusinessUnitAssociatesSet = MessagePayload & {
  associates: Array<Associate>;
  type: Scalars['String']['output'];
};

export type BusinessUnitBillingAddressAdded = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type BusinessUnitBillingAddressRemoved = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type BusinessUnitConfiguration = {
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  myBusinessUnitAssociateRoleOnCreation?: Maybe<AssociateRole>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  myBusinessUnitAssociateRoleOnCreationRef?: Maybe<KeyReference>;
  myBusinessUnitStatusOnCreation: BusinessUnitConfigurationStatus;
};

export enum BusinessUnitConfigurationStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type BusinessUnitContactEmailSet = MessagePayload & {
  contactEmail?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BusinessUnitCreated = MessagePayload & {
  businessUnit: BusinessUnit;
  type: Scalars['String']['output'];
};

export type BusinessUnitCustomFieldAdded = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type BusinessUnitCustomFieldChanged = MessagePayload & {
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type BusinessUnitCustomFieldRemoved = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BusinessUnitCustomTypeRemoved = MessagePayload & {
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BusinessUnitCustomTypeSet = MessagePayload & {
  customFields: CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BusinessUnitDefaultBillingAddressSet = MessagePayload & {
  address?: Maybe<Address>;
  type: Scalars['String']['output'];
};

export type BusinessUnitDefaultShippingAddressSet = MessagePayload & {
  address?: Maybe<Address>;
  type: Scalars['String']['output'];
};

export type BusinessUnitDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type BusinessUnitDraft = {
  addresses?: InputMaybe<Array<AddressInput>>;
  approvalRuleMode?: InputMaybe<BusinessUnitApprovalRuleMode>;
  associateMode?: InputMaybe<BusinessUnitAssociateMode>;
  associates?: InputMaybe<Array<AssociateDraft>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentUnit?: InputMaybe<ResourceIdentifierInput>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  storeMode?: InputMaybe<Scalars['String']['input']>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
  unitType: BusinessUnitType;
};

export type BusinessUnitLimitsProjection = {
  maxAssociateRoles: Limit;
  maxAssociates: Limit;
  maxDepthLimit: Limit;
  maxDivisions: Limit;
};

export type BusinessUnitNameChanged = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BusinessUnitParentChanged = MessagePayload & {
  newParentUnit?: Maybe<BusinessUnit>;
  newParentUnitRef?: Maybe<KeyReference>;
  oldParentUnit?: Maybe<BusinessUnit>;
  oldParentUnitRef?: Maybe<KeyReference>;
  type: Scalars['String']['output'];
};

export type BusinessUnitQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<BusinessUnit>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type BusinessUnitSearchConfiguration = {
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  status: BusinessUnitSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum BusinessUnitSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated'
}

export type BusinessUnitShippingAddressAdded = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type BusinessUnitShippingAddressRemoved = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export enum BusinessUnitStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type BusinessUnitStatusChanged = MessagePayload & {
  status: BusinessUnitStatus;
  type: Scalars['String']['output'];
};

export type BusinessUnitStoreAdded = MessagePayload & {
  store: Store;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type BusinessUnitStoreModeChanged = MessagePayload & {
  oldStoreMode: Scalars['String']['output'];
  oldStores?: Maybe<Array<Store>>;
  oldStoresRef?: Maybe<Array<KeyReference>>;
  storeMode: Scalars['String']['output'];
  stores?: Maybe<Array<Store>>;
  storesRef?: Maybe<Array<KeyReference>>;
  type: Scalars['String']['output'];
};

export type BusinessUnitStoreRemoved = MessagePayload & {
  store: Store;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type BusinessUnitStoresSet = MessagePayload & {
  stores: Array<Store>;
  storesRef: Array<KeyReference>;
  type: Scalars['String']['output'];
};

export enum BusinessUnitType {
  Company = 'Company',
  Division = 'Division'
}

export type BusinessUnitUpdateAction = {
  addAddress?: InputMaybe<AddBusinessUnitAddress>;
  addAssociate?: InputMaybe<AddBusinessUnitAssociate>;
  addBillingAddressId?: InputMaybe<AddBusinessUnitBillingAddressId>;
  addShippingAddressId?: InputMaybe<AddBusinessUnitShippingAddressId>;
  addStore?: InputMaybe<AddBusinessUnitStore>;
  changeAddress?: InputMaybe<ChangeBusinessUnitAddress>;
  changeApprovalRuleMode?: InputMaybe<ChangeBusinessUnitApprovalRuleMode>;
  changeAssociate?: InputMaybe<ChangeBusinessUnitAssociate>;
  changeAssociateMode?: InputMaybe<ChangeBusinessUnitAssociateMode>;
  changeName?: InputMaybe<ChangeBusinessUnitName>;
  changeParentUnit?: InputMaybe<ChangeBusinessUnitParentUnit>;
  changeStatus?: InputMaybe<ChangeBusinessUnitStatus>;
  removeAddress?: InputMaybe<RemoveBusinessUnitAddress>;
  removeAssociate?: InputMaybe<RemoveBusinessUnitAssociate>;
  removeBillingAddressId?: InputMaybe<RemoveBusinessUnitBillingAddressId>;
  removeShippingAddressId?: InputMaybe<RemoveBusinessUnitShippingAddressId>;
  removeStore?: InputMaybe<RemoveBusinessUnitStore>;
  setAddressCustomField?: InputMaybe<SetBusinessUnitAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetBusinessUnitAddressCustomType>;
  setAssociates?: InputMaybe<SetBusinessUnitAssociates>;
  setContactEmail?: InputMaybe<SetBusinessUnitContactEmail>;
  setCustomField?: InputMaybe<SetBusinessUnitCustomField>;
  setCustomType?: InputMaybe<SetBusinessUnitCustomType>;
  setDefaultBillingAddress?: InputMaybe<SetBusinessUnitDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<SetBusinessUnitDefaultShippingAddress>;
  setStoreMode?: InputMaybe<SetBusinessUnitStoreMode>;
  setStores?: InputMaybe<SetBusinessUnitStores>;
};

export type CancelQuoteRequest = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type Cart = ReferenceExpandable & Versioned & {
  anonymousId?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  businessUnit?: Maybe<BusinessUnit>;
  businessUnitRef?: Maybe<KeyReference>;
  cartState: CartState;
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customLineItems: Array<CustomLineItem>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  customerId?: Maybe<Scalars['String']['output']>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
  directDiscounts: Array<DirectDiscount>;
  discountCodes: Array<DiscountCodeInfo>;
  discountOnTotalPrice?: Maybe<DiscountOnTotalPrice>;
  id: Scalars['String']['output'];
  inventoryMode: InventoryMode;
  itemShippingAddresses: Array<Address>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  lineItems: Array<LineItem>;
  locale?: Maybe<Scalars['Locale']['output']>;
  origin: CartOrigin;
  paymentInfo?: Maybe<PaymentInfo>;
  refusedGifts: Array<CartDiscount>;
  refusedGiftsRefs: Array<Reference>;
  shipping: Array<Shipping>;
  shippingAddress?: Maybe<Address>;
  shippingCustomFields?: Maybe<CustomFieldsType>;
  shippingInfo?: Maybe<ShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingMode: ShippingMode;
  shippingRateInput?: Maybe<ShippingRateInput>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  taxCalculationMode: TaxCalculationMode;
  taxMode: TaxMode;
  taxRoundingMode: RoundingMode;
  taxedPrice?: Maybe<TaxedPrice>;
  taxedShippingPrice?: Maybe<TaxedPrice>;
  totalLineItemQuantity?: Maybe<Scalars['Long']['output']>;
  totalPrice: Money;
  version: Scalars['Long']['output'];
};


/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type CartLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CartClassificationInput = {
  values: Array<LocalizedEnumValueInput>;
};

export type CartClassificationType = ShippingRateInputType & {
  type: Scalars['String']['output'];
  values: Array<ShippingRateInputLocalizedEnumValue>;
};

export type CartCreated = MessagePayload & {
  discountCodesRefs: Array<Reference>;
  lineItemCount: Scalars['Int']['output'];
  totalPrice: Money;
  type: Scalars['String']['output'];
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type CartDiscount = ReferenceExpandable & Versioned & {
  cartPredicate: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  referenceRefs: Array<Reference>;
  requiresDiscountCode: Scalars['Boolean']['output'];
  sortOrder: Scalars['String']['output'];
  stackingMode: StackingMode;
  stores: Array<Store>;
  storesRef: Array<KeyReference>;
  target?: Maybe<CartDiscountTarget>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: CartDiscountValue;
  version: Scalars['Long']['output'];
};


/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type CartDiscountDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type CartDiscountNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type CartDiscountCreated = MessagePayload & {
  cartDiscount: CartDiscount;
  type: Scalars['String']['output'];
};

export type CartDiscountDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type CartDiscountDraft = {
  cartPredicate: Scalars['String']['input'];
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  requiresDiscountCode?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder: Scalars['String']['input'];
  stackingMode?: InputMaybe<StackingMode>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
  target?: InputMaybe<CartDiscountTargetInput>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  value: CartDiscountValueInput;
};

export type CartDiscountLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type CartDiscountLimitsProjection = {
  totalActiveWithoutDiscountCodes: CartDiscountLimitWithCurrent;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type CartDiscountQueryInterface = {
  cartDiscount?: Maybe<CartDiscount>;
  cartDiscounts: CartDiscountQueryResult;
};


/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type CartDiscountQueryInterfaceCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type CartDiscountQueryInterfaceCartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type CartDiscountQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<CartDiscount>;
  total: Scalars['Long']['output'];
};

export type CartDiscountStoreAdded = MessagePayload & {
  store: Store;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type CartDiscountStoreRemoved = MessagePayload & {
  store: Store;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type CartDiscountStoresSet = MessagePayload & {
  stores: Array<Store>;
  storesRef: Array<KeyReference>;
  type: Scalars['String']['output'];
};

export type CartDiscountTarget = {
  type: Scalars['String']['output'];
};

export type CartDiscountTargetInput = {
  customLineItems?: InputMaybe<CustomLineItemsTargetInput>;
  lineItems?: InputMaybe<LineItemsTargetInput>;
  multiBuyCustomLineItems?: InputMaybe<MultiBuyCustomLineItemsTargetInput>;
  multiBuyLineItems?: InputMaybe<MultiBuyLineItemsTargetInput>;
  shipping?: InputMaybe<ShippingTargetInput>;
  totalPrice?: InputMaybe<CartDiscountTotalPriceTargetInput>;
};

export type CartDiscountTotalPriceTarget = CartDiscountTarget & {
  type: Scalars['String']['output'];
};

export type CartDiscountTotalPriceTargetInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type CartDiscountUpdateAction = {
  addStore?: InputMaybe<AddCartDiscountStore>;
  changeCartPredicate?: InputMaybe<ChangeCartDiscountCartPredicate>;
  changeIsActive?: InputMaybe<ChangeCartDiscountIsActive>;
  changeName?: InputMaybe<ChangeCartDiscountName>;
  changeRequiresDiscountCode?: InputMaybe<ChangeCartDiscountRequiresDiscountCode>;
  changeSortOrder?: InputMaybe<ChangeCartDiscountSortOrder>;
  changeStackingMode?: InputMaybe<ChangeCartDiscountStackingMode>;
  changeTarget?: InputMaybe<ChangeCartDiscountTarget>;
  changeValue?: InputMaybe<ChangeCartDiscountValue>;
  removeStore?: InputMaybe<RemoveCartDiscountStore>;
  setCustomField?: InputMaybe<SetCartDiscountCustomField>;
  setCustomType?: InputMaybe<SetCartDiscountCustomType>;
  setDescription?: InputMaybe<SetCartDiscountDescription>;
  setKey?: InputMaybe<SetCartDiscountKey>;
  setStores?: InputMaybe<SetCartDiscountStores>;
  setValidFrom?: InputMaybe<SetCartDiscountValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetCartDiscountValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetCartDiscountValidUntil>;
};

export type CartDiscountValue = {
  type: Scalars['String']['output'];
};

export type CartDiscountValueBaseMoneyInput = {
  /** CurrencyCode and centAmount are deprecated. Please use `Money`(centPrecision) or `HighPrecisionMoney`(highPrecision). */
  centAmount?: InputMaybe<Scalars['Long']['input']>;
  centPrecision?: InputMaybe<MoneyInput>;
  /** CurrencyCode and centAmount are deprecated. Please use `Money`(centPrecision) or `HighPrecisionMoney`(highPrecision). */
  currencyCode?: InputMaybe<Scalars['Currency']['input']>;
  highPrecision?: InputMaybe<HighPrecisionMoneyInput>;
};

export type CartDiscountValueInput = {
  absolute?: InputMaybe<AbsoluteDiscountValueInput>;
  absoluteCart?: InputMaybe<AbsoluteCartDiscountValueInput>;
  fixed?: InputMaybe<FixedPriceDiscountValueInput>;
  giftLineItem?: InputMaybe<GiftLineItemValueInput>;
  relative?: InputMaybe<RelativeDiscountValueInput>;
};

export type CartDraft = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  businessUnit?: InputMaybe<ResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  custom?: InputMaybe<CustomFieldsDraft>;
  customLineItems?: InputMaybe<Array<CustomLineItemDraft>>;
  customShipping?: InputMaybe<Array<CustomShippingDraft>>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  externalTaxRateForShippingMethod?: InputMaybe<ExternalTaxRateDraft>;
  inventoryMode?: InputMaybe<InventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<AddressInput>>;
  key?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<Array<LineItemDraft>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  origin?: InputMaybe<CartOrigin>;
  shipping?: InputMaybe<Array<ShippingDraft>>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
  shippingMode?: InputMaybe<ShippingMode>;
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
  store?: InputMaybe<ResourceIdentifierInput>;
  taxCalculationMode?: InputMaybe<TaxCalculationMode>;
  taxMode?: InputMaybe<TaxMode>;
  taxRoundingMode?: InputMaybe<RoundingMode>;
};

export type CartLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type CartLimitsProjection = {
  total: CartLimitWithCurrent;
};

export enum CartOrigin {
  /** The cart was created by the customer. This is the default value */
  Customer = 'Customer',
  /** The cart was created by the merchant on behalf of the customer */
  Merchant = 'Merchant',
  /** The cart was created by our platform and belongs to a Quote. */
  Quote = 'Quote'
}

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterface = {
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
};


/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterfaceCartArgs = {
  id: Scalars['String']['input'];
};


/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterfaceCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type CartQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Cart>;
  total: Scalars['Long']['output'];
};

export type CartScoreInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type CartScoreType = ShippingRateInputType & {
  type: Scalars['String']['output'];
};

export enum CartState {
  /** The cart can be updated and ordered. It is the default state. */
  Active = 'Active',
  /** The cart is frozen. The cart is ready for checkout and a few update actions are not allowed. */
  Frozen = 'Frozen',
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */
  Merged = 'Merged',
  /** The cart was ordered. No further operations on the cart are allowed. */
  Ordered = 'Ordered'
}

export type CartUpdateAction = {
  addCustomLineItem?: InputMaybe<AddCartCustomLineItem>;
  addCustomShippingMethod?: InputMaybe<AddCartCustomShippingMethod>;
  addDiscountCode?: InputMaybe<AddCartDiscountCode>;
  addItemShippingAddress?: InputMaybe<AddCartItemShippingAddress>;
  addLineItem?: InputMaybe<AddCartLineItem>;
  addPayment?: InputMaybe<AddCartPayment>;
  addShippingMethod?: InputMaybe<AddCartShippingMethod>;
  addShoppingList?: InputMaybe<AddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeCustomLineItemMoney?: InputMaybe<ChangeCartCustomLineItemMoney>;
  changeCustomLineItemPriceMode?: InputMaybe<ChangeCartCustomLineItemPriceMode>;
  changeCustomLineItemQuantity?: InputMaybe<ChangeCartCustomLineItemQuantity>;
  changeLineItemQuantity?: InputMaybe<ChangeCartLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<ChangeCartLineItemsOrder>;
  changeTaxCalculationMode?: InputMaybe<ChangeCartTaxCalculationMode>;
  changeTaxMode?: InputMaybe<ChangeCartTaxMode>;
  changeTaxRoundingMode?: InputMaybe<ChangeCartTaxRoundingMode>;
  freezeCart?: InputMaybe<FreezeCart>;
  recalculate?: InputMaybe<RecalculateCart>;
  removeCustomLineItem?: InputMaybe<RemoveCartCustomLineItem>;
  removeDiscountCode?: InputMaybe<RemoveCartDiscountCode>;
  removeItemShippingAddress?: InputMaybe<RemoveCartItemShippingAddress>;
  removeLineItem?: InputMaybe<RemoveCartLineItem>;
  removePayment?: InputMaybe<RemoveCartPayment>;
  removeShippingMethod?: InputMaybe<RemoveCartShippingMethod>;
  setAnonymousId?: InputMaybe<SetCartAnonymousId>;
  setBillingAddress?: InputMaybe<SetCartBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetCartBillingAddressCustomType>;
  setBusinessUnit?: InputMaybe<SetCartBusinessUnit>;
  setCartTotalTax?: InputMaybe<SetCartTotalTax>;
  setCountry?: InputMaybe<SetCartCountry>;
  setCustomField?: InputMaybe<SetCartCustomField>;
  setCustomLineItemCustomField?: InputMaybe<SetCartCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<SetCartCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<SetCartCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: InputMaybe<SetCartCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: InputMaybe<SetCartCustomLineItemTaxRate>;
  setCustomShippingMethod?: InputMaybe<SetCartCustomShippingMethod>;
  setCustomType?: InputMaybe<SetCartCustomType>;
  setCustomerEmail?: InputMaybe<SetCartCustomerEmail>;
  setCustomerGroup?: InputMaybe<SetCartCustomerGroup>;
  setCustomerId?: InputMaybe<SetCartCustomerId>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetCartDeleteDaysAfterLastModification>;
  setDirectDiscounts?: InputMaybe<SetCartDirectDiscounts>;
  setItemShippingAddressCustomField?: InputMaybe<SetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetCartItemShippingAddressCustomType>;
  setKey?: InputMaybe<SetCartKey>;
  setLineItemCustomField?: InputMaybe<SetCartLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetCartLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<SetCartLineItemDistributionChannel>;
  setLineItemInventoryMode?: InputMaybe<SetCartLineItemInventoryMode>;
  setLineItemPrice?: InputMaybe<SetCartLineItemPrice>;
  setLineItemShippingDetails?: InputMaybe<SetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: InputMaybe<SetCartLineItemSupplyChannel>;
  setLineItemTaxAmount?: InputMaybe<SetCartLineItemTaxAmount>;
  setLineItemTaxRate?: InputMaybe<SetCartLineItemTaxRate>;
  setLineItemTotalPrice?: InputMaybe<SetCartLineItemTotalPrice>;
  setLocale?: InputMaybe<SetCartLocale>;
  setShippingAddress?: InputMaybe<SetCartShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<SetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetCartShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<SetCartShippingCustomField>;
  setShippingCustomType?: InputMaybe<SetCartShippingCustomType>;
  setShippingMethod?: InputMaybe<SetCartShippingMethod>;
  setShippingMethodTaxAmount?: InputMaybe<SetCartShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: InputMaybe<SetCartShippingMethodTaxRate>;
  setShippingRateInput?: InputMaybe<SetCartShippingRateInput>;
  unfreezeCart?: InputMaybe<UnfreezeCart>;
  updateItemShippingAddress?: InputMaybe<UpdateCartItemShippingAddress>;
};

export type CartValueInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type CartValueType = ShippingRateInputType & {
  type: Scalars['String']['output'];
};

export type CartsConfiguration = {
  allowAddingUnpublishedProducts: Scalars['Boolean']['output'];
  countryTaxRateFallbackEnabled: Scalars['Boolean']['output'];
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
};

export type CartsConfigurationInput = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = ReferenceExpandable & Versioned & {
  ancestors: Array<Category>;
  ancestorsRef: Array<Reference>;
  assets: Array<Asset>;
  /** Number of direct child categories. */
  childCount: Scalars['Int']['output'];
  /** Direct child categories. */
  children?: Maybe<Array<Category>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  orderHint: Scalars['String']['output'];
  parent?: Maybe<Category>;
  parentRef?: Maybe<Reference>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<LocalizedString>;
  /** Number of staged products in the category subtree. */
  stagedProductCount: Scalars['Int']['output'];
  version: Scalars['Long']['output'];
};


export type CategoryDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type CategoryMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type CategoryMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type CategoryMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type CategoryNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type CategorySlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type CategoryCreated = MessagePayload & {
  category: Category;
  type: Scalars['String']['output'];
};

export type CategoryDraft = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
  orderHint?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<ResourceIdentifierInput>;
  slug: Array<LocalizedStringItemInputType>;
};

export type CategoryLimitsProjection = {
  maxCategories: Limit;
};

export type CategoryOrderHint = {
  categoryId: Scalars['String']['output'];
  orderHint: Scalars['String']['output'];
};

export type CategoryOrderHintInput = {
  orderHint: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};

export type CategoryOrderHintProductSearch = {
  categoryId: Scalars['String']['output'];
  orderHint: Scalars['String']['output'];
};

export type CategoryQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Category>;
  total: Scalars['Long']['output'];
};

export type CategorySlugChanged = MessagePayload & {
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<LocalizedString>;
  type: Scalars['String']['output'];
};


export type CategorySlugChangedOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type CategorySlugChangedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type CategoryUpdateAction = {
  addAsset?: InputMaybe<AddCategoryAsset>;
  changeAssetName?: InputMaybe<ChangeCategoryAssetName>;
  changeAssetOrder?: InputMaybe<ChangeCategoryAssetOrder>;
  changeName?: InputMaybe<ChangeCategoryName>;
  changeOrderHint?: InputMaybe<ChangeCategoryOrderHint>;
  changeParent?: InputMaybe<ChangeCategoryParent>;
  changeSlug?: InputMaybe<ChangeCategorySlug>;
  removeAsset?: InputMaybe<RemoveCategoryAsset>;
  setAssetCustomField?: InputMaybe<SetCategoryAssetCustomField>;
  setAssetCustomType?: InputMaybe<SetCategoryAssetCustomType>;
  setAssetDescription?: InputMaybe<SetCategoryAssetDescription>;
  setAssetKey?: InputMaybe<SetCategoryAssetKey>;
  setAssetSources?: InputMaybe<SetCategoryAssetSources>;
  setAssetTags?: InputMaybe<SetCategoryAssetTags>;
  setCustomField?: InputMaybe<SetCategoryCustomField>;
  setCustomType?: InputMaybe<SetCategoryCustomType>;
  setDescription?: InputMaybe<SetCategoryDescription>;
  setExternalId?: InputMaybe<SetCategoryExternalId>;
  setKey?: InputMaybe<SetCategoryKey>;
  setMetaDescription?: InputMaybe<SetCategoryMetaDescription>;
  setMetaKeywords?: InputMaybe<SetCategoryMetaKeywords>;
  setMetaTitle?: InputMaybe<SetCategoryMetaTitle>;
};

export type ChangeAssociateRoleBuyerAssignable = {
  buyerAssignable: Scalars['Boolean']['input'];
};

export type ChangeAttributeGroupName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeBusinessUnitAddress = {
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeBusinessUnitApprovalRuleMode = {
  approvalRuleMode: BusinessUnitApprovalRuleMode;
};

export type ChangeBusinessUnitAssociate = {
  associate: AssociateDraft;
};

export type ChangeBusinessUnitAssociateMode = {
  associateMode: BusinessUnitAssociateMode;
};

export type ChangeBusinessUnitName = {
  name: Scalars['String']['input'];
};

export type ChangeBusinessUnitParentUnit = {
  parentUnit: ResourceIdentifierInput;
};

export type ChangeBusinessUnitStatus = {
  status: BusinessUnitStatus;
};

export type ChangeCartCustomLineItemMoney = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  money: BaseMoneyInput;
};

export type ChangeCartCustomLineItemPriceMode = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  mode: CustomLineItemPriceMode;
};

export type ChangeCartCustomLineItemQuantity = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type ChangeCartDiscountCartPredicate = {
  cartPredicate: Scalars['String']['input'];
};

export type ChangeCartDiscountIsActive = {
  isActive: Scalars['Boolean']['input'];
};

export type ChangeCartDiscountName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCartDiscountRequiresDiscountCode = {
  requiresDiscountCode: Scalars['Boolean']['input'];
};

export type ChangeCartDiscountSortOrder = {
  sortOrder: Scalars['String']['input'];
};

export type ChangeCartDiscountStackingMode = {
  stackingMode: StackingMode;
};

export type ChangeCartDiscountTarget = {
  target: CartDiscountTargetInput;
};

export type ChangeCartDiscountValue = {
  value: CartDiscountValueInput;
};

export type ChangeCartLineItemQuantity = {
  /** Only valid for the general Carts API. Ignored for the My Carts API. */
  externalPrice?: InputMaybe<BaseMoneyInput>;
  /** Only valid for the general Carts API. Ignored for the My Carts API. */
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type ChangeCartLineItemsOrder = {
  lineItemOrder: Array<Scalars['String']['input']>;
};

export type ChangeCartTaxCalculationMode = {
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeCartTaxMode = {
  taxMode: TaxMode;
};

export type ChangeCartTaxRoundingMode = {
  taxRoundingMode: RoundingMode;
};

export type ChangeCategoryAssetName = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCategoryAssetOrder = {
  assetOrder: Array<Scalars['String']['input']>;
};

export type ChangeCategoryName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCategoryOrderHint = {
  orderHint: Scalars['String']['input'];
};

export type ChangeCategoryParent = {
  parent: ResourceIdentifierInput;
};

export type ChangeCategorySlug = {
  slug: Array<LocalizedStringItemInputType>;
};

export type ChangeChannelDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type ChangeChannelKey = {
  key: Scalars['String']['input'];
};

export type ChangeChannelName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type ChangeCustomerAddress = {
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeCustomerEmail = {
  email: Scalars['String']['input'];
};

export type ChangeCustomerGroupName = {
  name: Scalars['String']['input'];
};

export type ChangeDiscountCodeCartDiscounts = {
  cartDiscounts: Array<ResourceIdentifierInput>;
};

export type ChangeDiscountCodeGroups = {
  groups: Array<Scalars['String']['input']>;
};

export type ChangeDiscountCodeIsActive = {
  isActive: Scalars['Boolean']['input'];
};

export type ChangeExtensionDestination = {
  destination: ExtensionDestinationInput;
};

export type ChangeExtensionTriggers = {
  triggers: Array<TriggerInput>;
};

export type ChangeInventoryEntryQuantity = {
  quantity: Scalars['Long']['input'];
};

export type ChangeMyBusinessUnitAddress = {
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeMyBusinessUnitAssociate = {
  associate: AssociateDraft;
};

export type ChangeMyBusinessUnitName = {
  name: Scalars['String']['input'];
};

export type ChangeMyBusinessUnitParentUnit = {
  parentUnit: ResourceIdentifierInput;
};

export type ChangeMyCartTaxMode = {
  taxMode: TaxMode;
};

export type ChangeMyQuoteMyQuoteState = {
  quoteState: MyQuoteState;
};

export type ChangeOrderPaymentState = {
  paymentState: PaymentState;
};

export type ChangeOrderShipmentState = {
  shipmentState: ShipmentState;
};

export type ChangeOrderState = {
  orderState: OrderState;
};

export type ChangePaymentAmountPlanned = {
  amount: MoneyInput;
};

export type ChangePaymentTransactionInteractionId = {
  interactionId: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type ChangePaymentTransactionState = {
  state: TransactionState;
  transactionId: Scalars['String']['input'];
};

export type ChangePaymentTransactionTimestamp = {
  timestamp: Scalars['DateTime']['input'];
  transactionId: Scalars['String']['input'];
};

export type ChangeProductAssetName = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeProductAssetOrder = {
  assetOrder: Array<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeProductDiscountIsActive = {
  isActive: Scalars['Boolean']['input'];
};

export type ChangeProductDiscountName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeProductDiscountPredicate = {
  predicate: Scalars['String']['input'];
};

export type ChangeProductDiscountSortOrder = {
  sortOrder: Scalars['String']['input'];
};

export type ChangeProductDiscountValue = {
  value: ProductDiscountValueInput;
};

export type ChangeProductImageLabel = {
  imageUrl: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeProductMasterVariant = {
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeProductName = {
  name: Array<LocalizedStringItemInputType>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChangeProductPrice = {
  price: ProductPriceDataInput;
  priceId?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeProductSelectionName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeProductSlug = {
  slug: Array<LocalizedStringItemInputType>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChangeProductTailoringAssetName = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeProductTailoringAssetOrder = {
  assetOrder: Array<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type ChangeProjectSettingsBusinessUnitSearchStatus = {
  status: BusinessUnitSearchStatus;
};

export type ChangeProjectSettingsCartsConfiguration = {
  cartsConfiguration: CartsConfigurationInput;
};

export type ChangeProjectSettingsCountries = {
  countries: Array<Scalars['Country']['input']>;
};

export type ChangeProjectSettingsCountryTaxRateFallbackEnabled = {
  countryTaxRateFallbackEnabled: Scalars['Boolean']['input'];
};

export type ChangeProjectSettingsCurrencies = {
  currencies: Array<Scalars['Currency']['input']>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type ChangeProjectSettingsCustomerSearchStatus = {
  status: CustomerSearchStatus;
};

export type ChangeProjectSettingsLanguages = {
  languages: Array<Scalars['Locale']['input']>;
};

export type ChangeProjectSettingsMessagesConfiguration = {
  messagesConfiguration: MessagesConfigurationDraft;
};

export type ChangeProjectSettingsMessagesEnabled = {
  messagesEnabled: Scalars['Boolean']['input'];
};

export type ChangeProjectSettingsMyBusinessUnitStatusOnCreation = {
  status: BusinessUnitConfigurationStatus;
};

export type ChangeProjectSettingsName = {
  name: Scalars['String']['input'];
};

export type ChangeProjectSettingsOrderSearchStatus = {
  status: OrderSearchStatus;
};

export type ChangeProjectSettingsProductSearchIndexingEnabled = {
  enabled: Scalars['Boolean']['input'];
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  mode?: InputMaybe<ProductSearchIndexingMode>;
};

export type ChangeProjectSettingsShoppingListsConfiguration = {
  shoppingListsConfiguration: ShoppingListsConfigurationInput;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type ChangeProjectSettingsStandalonePriceSearchStatus = {
  status: StandalonePriceSearchStatus;
};

export type ChangeQuoteCustomer = {
  customer: ResourceIdentifierInput;
};

export type ChangeQuoteRequestCustomer = {
  customer: ResourceIdentifierInput;
};

export type ChangeQuoteRequestState = {
  quoteRequestState: QuoteRequestState;
};

export type ChangeQuoteState = {
  quoteState: QuoteState;
};

export type ChangeShippingMethodActive = {
  active: Scalars['Boolean']['input'];
};

export type ChangeShippingMethodIsDefault = {
  isDefault: Scalars['Boolean']['input'];
};

export type ChangeShippingMethodName = {
  name: Scalars['String']['input'];
};

export type ChangeShippingMethodTaxCategory = {
  taxCategory: ResourceIdentifierInput;
};

export type ChangeShoppingListLineItemQuantity = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type ChangeShoppingListLineItemsOrder = {
  lineItemOrder: Array<Scalars['String']['input']>;
};

export type ChangeShoppingListName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeShoppingListTextLineItemName = {
  name: Array<LocalizedStringItemInputType>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeShoppingListTextLineItemQuantity = {
  quantity: Scalars['Int']['input'];
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeShoppingListTextLineItemsOrder = {
  textLineItemOrder: Array<Scalars['String']['input']>;
};

export type ChangeStagedOrderCustomLineItemMoney = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  money: BaseMoneyInput;
};

export type ChangeStagedOrderCustomLineItemMoneyOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  money: BaseMoney;
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderCustomLineItemQuantity = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type ChangeStagedOrderCustomLineItemQuantityOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderLineItemQuantity = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type ChangeStagedOrderLineItemQuantityOutput = StagedOrderUpdateActionOutput & {
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderOrderState = {
  orderState: OrderState;
};

export type ChangeStagedOrderOrderStateOutput = StagedOrderUpdateActionOutput & {
  orderState: OrderState;
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderPaymentState = {
  paymentState: PaymentState;
};

export type ChangeStagedOrderPaymentStateOutput = StagedOrderUpdateActionOutput & {
  paymentState: PaymentState;
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderShipmentState = {
  shipmentState: ShipmentState;
};

export type ChangeStagedOrderShipmentStateOutput = StagedOrderUpdateActionOutput & {
  shipmentState: ShipmentState;
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderTaxCalculationMode = {
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeStagedOrderTaxCalculationModeOutput = StagedOrderUpdateActionOutput & {
  taxCalculationMode: TaxCalculationMode;
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderTaxMode = {
  taxMode: TaxMode;
};

export type ChangeStagedOrderTaxModeOutput = StagedOrderUpdateActionOutput & {
  taxMode: TaxMode;
  type: Scalars['String']['output'];
};

export type ChangeStagedOrderTaxRoundingMode = {
  taxRoundingMode: RoundingMode;
};

export type ChangeStagedOrderTaxRoundingModeOutput = StagedOrderUpdateActionOutput & {
  taxRoundingMode: RoundingMode;
  type: Scalars['String']['output'];
};

export type ChangeStagedQuoteState = {
  stagedQuoteState: StagedQuoteState;
};

export type ChangeStandalonePriceActive = {
  active: Scalars['Boolean']['input'];
};

export type ChangeStandalonePriceValue = {
  /** default is `false` */
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value: BaseMoneyInput;
};

export type ChangeStateInitial = {
  initial: Scalars['Boolean']['input'];
};

export type ChangeStateKey = {
  key: Scalars['String']['input'];
};

export type ChangeStateType = {
  type: StateType;
};

export type ChangeStoreProductSelectionActive = {
  active: Scalars['Boolean']['input'];
  productSelection: ResourceIdentifierInput;
};

export type ChangeSubscription = {
  resourceTypeId: Scalars['String']['output'];
};

export type ChangeSubscriptionDestination = {
  destination: DestinationInput;
};

export type ChangeSubscriptionInput = {
  resourceTypeId: Scalars['String']['input'];
};

export type ChangeTypeEnumValueLabel = {
  fieldName: Scalars['String']['input'];
  value: EnumValueInput;
};

export type ChangeTypeEnumValueOrder = {
  fieldName: Scalars['String']['input'];
  keys: Array<Scalars['String']['input']>;
};

export type ChangeTypeFieldDefinitionOrder = {
  fieldNames: Array<Scalars['String']['input']>;
};

export type ChangeTypeInputHint = {
  fieldName: Scalars['String']['input'];
  inputHint: TextInputHint;
};

export type ChangeTypeKey = {
  key: Scalars['String']['input'];
};

export type ChangeTypeLabel = {
  fieldName: Scalars['String']['input'];
  label: Array<LocalizedStringItemInputType>;
};

export type ChangeTypeLocalizedEnumValueLabel = {
  fieldName: Scalars['String']['input'];
  value: LocalizedEnumValueInput;
};

export type ChangeTypeLocalizedEnumValueOrder = {
  fieldName: Scalars['String']['input'];
  keys: Array<Scalars['String']['input']>;
};

export type ChangeTypeName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeZoneName = {
  name: Scalars['String']['input'];
};

export type Channel = ReferenceExpandable & ReviewTarget & Versioned & {
  address?: Maybe<Address>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  geoLocation?: Maybe<Geometry>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  roles: Array<ChannelRole>;
  version: Scalars['Long']['output'];
};


export type ChannelDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ChannelNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ChannelDraft = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  geoLocation?: InputMaybe<GeometryInput>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  roles: Array<ChannelRole>;
};

export type ChannelQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Channel>;
  total: Scalars['Long']['output'];
};

export type ChannelReferenceIdentifier = {
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export enum ChannelRole {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  InventorySupply = 'InventorySupply',
  /** Role tells that this channel can be used to track order export activities. */
  OrderExport = 'OrderExport',
  /** Role tells that this channel can be used to track order import activities. */
  OrderImport = 'OrderImport',
  /** This role can be combined with some other roles (e.g. with `InventorySupply`) to represent the fact that this particular channel is the primary/master channel among the channels of the same type. */
  Primary = 'Primary',
  /** Role tells that this channel can be used to expose products to a specific distribution channel. It can be used by the cart to select a product price. */
  ProductDistribution = 'ProductDistribution'
}

export type ChannelUpdateAction = {
  addRoles?: InputMaybe<AddChannelRoles>;
  changeDescription?: InputMaybe<ChangeChannelDescription>;
  changeKey?: InputMaybe<ChangeChannelKey>;
  changeName?: InputMaybe<ChangeChannelName>;
  removeRoles?: InputMaybe<RemoveChannelRoles>;
  setAddress?: InputMaybe<SetChannelAddress>;
  setAddressCustomField?: InputMaybe<SetChannelAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetChannelAddressCustomType>;
  setCustomField?: InputMaybe<SetChannelCustomField>;
  setCustomType?: InputMaybe<SetChannelCustomType>;
  setGeoLocation?: InputMaybe<SetChannelGeoLocation>;
  setRoles?: InputMaybe<SetChannelRoles>;
};

export type ClassificationShippingRateInput = ShippingRateInput & {
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<LocalizedString>;
  type: Scalars['String']['output'];
};


export type ClassificationShippingRateInputLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ClassificationShippingRateInputDraft = {
  key: Scalars['String']['input'];
};

export type ClassificationShippingRateInputDraftOutput = ShippingRateInputDraftOutput & {
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CloudEventsSubscriptionsFormat = NotificationFormat & {
  cloudEventsVersion: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CloudEventsSubscriptionsFormatInput = {
  cloudEventsVersion: Scalars['String']['input'];
};

export type CommercetoolsSubscription = Versioned & {
  changes: Array<ChangeSubscription>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  destination: Destination;
  format: NotificationFormat;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  messages: Array<MessageSubscription>;
  status: SubscriptionHealthStatus;
  version: Scalars['Long']['output'];
};

export type CommercetoolsSubscriptionQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<CommercetoolsSubscription>;
  total: Scalars['Long']['output'];
};

export type ConfluentCloudDestination = Destination & {
  acks: Scalars['String']['output'];
  apiKey: Scalars['String']['output'];
  apiSecret: Scalars['String']['output'];
  bootstrapServer: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  topic: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ConfluentCloudDestinationInput = {
  acks: Scalars['String']['input'];
  apiKey: Scalars['String']['input'];
  apiSecret: Scalars['String']['input'];
  bootstrapServer: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  topic: Scalars['String']['input'];
};

export type CreateApiClient = {
  accessTokenValiditySeconds?: InputMaybe<Scalars['Int']['input']>;
  deleteDaysAfterCreation?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  refreshTokenValiditySeconds?: InputMaybe<Scalars['Int']['input']>;
  scope: Scalars['String']['input'];
};

export type CreateProductSelectionDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<ProductSelectionMode>;
  name: Array<LocalizedStringItemInputType>;
};

export type CreateStandalonePrice = {
  active?: Scalars['Boolean']['input'];
  channel?: InputMaybe<ResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
  discounted?: InputMaybe<DiscountedProductPriceValueInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  sku: Scalars['String']['input'];
  staged?: InputMaybe<StagedPriceDraft>;
  tiers?: InputMaybe<Array<ProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  value: BaseMoneyInput;
};

export type CreateStore = {
  countries?: InputMaybe<Array<StoreCountryInput>>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
  key: Scalars['String']['input'];
  languages?: InputMaybe<Array<Scalars['Locale']['input']>>;
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  productSelections?: InputMaybe<Array<ProductSelectionSettingDraft>>;
  supplyChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type CreateZone = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<ZoneLocation>>;
  name: Scalars['String']['input'];
};

export type CustomField = {
  name: Scalars['String']['output'];
};

/**
 * A key-value pair representing the field name and value of one single custom field.
 *
 * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
 *
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
 */
export type CustomFieldInput = {
  name: Scalars['String']['input'];
  /**
   * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
   *
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
   */
  value: Scalars['String']['input'];
};

export type CustomFieldsCommand = {
  fields: Scalars['Json']['output'];
  typeId?: Maybe<Scalars['String']['output']>;
  typeKey?: Maybe<Scalars['String']['output']>;
  typeResId?: Maybe<ResourceIdentifier>;
};

export type CustomFieldsDraft = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldsType = {
  /** This field contains non-typed data. */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  type?: Maybe<TypeDefinition>;
  typeRef: Reference;
};


export type CustomFieldsTypeCustomFieldsRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItem = {
  custom?: Maybe<CustomFieldsType>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  money: BaseMoney;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  perMethodTaxRate: Array<MethodTaxRate>;
  priceMode: CustomLineItemPriceMode;
  quantity: Scalars['Long']['output'];
  shippingDetails?: Maybe<ItemShippingDetails>;
  slug: Scalars['String']['output'];
  state: Array<ItemState>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  taxedPricePortions: Array<MethodTaxedPrice>;
  totalPrice: Money;
};


/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type CustomLineItemDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  priceMode?: InputMaybe<CustomLineItemPriceMode>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  slug: Scalars['String']['input'];
  taxCategory?: InputMaybe<ReferenceInput>;
};

export type CustomLineItemDraftOutput = {
  custom?: Maybe<CustomFieldsCommand>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  key?: Maybe<Scalars['String']['output']>;
  money: BaseMoney;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  priceMode: CustomLineItemPriceMode;
  quantity?: Maybe<Scalars['Long']['output']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  slug: Scalars['String']['output'];
  taxCategoryResId?: Maybe<ResourceIdentifier>;
};


export type CustomLineItemDraftOutputNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type CustomLineItemImportDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  priceMode?: InputMaybe<CustomLineItemPriceMode>;
  quantity: Scalars['Long']['input'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  slug: Scalars['String']['input'];
  state?: InputMaybe<Array<ItemStateDraftType>>;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
  taxRate?: InputMaybe<TaxRateInput>;
};

export enum CustomLineItemPriceMode {
  /** Cart discounts are deactivated for the custom line items with this price mode. */
  External = 'External',
  /** This is the default mode. */
  Standard = 'Standard'
}

export type CustomLineItemReturnItem = ReturnItem & {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  customLineItemId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  paymentState: ReturnPaymentState;
  quantity: Scalars['Long']['output'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type CustomLineItemStateTransition = MessagePayload & OrderMessagePayload & {
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  fromState?: Maybe<State>;
  fromStateRef: Reference;
  quantity: Scalars['Long']['output'];
  toState?: Maybe<State>;
  toStateRef: Reference;
  transitionDate: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type CustomLineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CustomLineItemsTargetInput = {
  predicate: Scalars['String']['input'];
};

export type CustomObject = ReferenceExpandable & Versioned & {
  container: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  value: Scalars['Json']['output'];
  version: Scalars['Long']['output'];
};

/**
 * An input object used to create a new, or update an existing Custom Object.
 *
 * The value should be passed in a form of escaped JSON.
 *
 * Example for `value` field:
 *
 * ```
 * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
 * ```
 */
export type CustomObjectDraft = {
  container: Scalars['String']['input'];
  key: Scalars['String']['input'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   * Example for `value` field:
   *
   * ```
   * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
   * ```
   */
  value: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};

export type CustomObjectLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type CustomObjectLimitsProjection = {
  total: CustomObjectLimitWithCurrent;
};

export type CustomObjectQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<CustomObject>;
  total: Scalars['Long']['output'];
};

export type CustomShippingDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveries?: InputMaybe<Array<DeliveryDraft>>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  key: Scalars['String']['input'];
  shippingAddress: AddressInput;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: ShippingRateDraft;
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
  taxCategory?: InputMaybe<ReferenceInput>;
};

export type CustomSuggestTokenizer = SuggestTokenizer & {
  inputs: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomSuggestTokenizerInput = {
  inputs: Array<Scalars['String']['input']>;
};

export type CustomSuggestTokenizerProductSearch = SuggestTokenizerProductSearch & {
  inputs: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type Customer = ReferenceExpandable & Versioned & {
  addresses: Array<Address>;
  authenticationMode?: Maybe<AuthenticationMode>;
  billingAddressIds: Array<Scalars['String']['output']>;
  billingAddresses: Array<Address>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  customerGroupAssignments?: Maybe<Array<CustomerGroupAssignment>>;
  customerGroupRef?: Maybe<Reference>;
  customerNumber?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  defaultBillingAddress?: Maybe<Address>;
  defaultBillingAddressId?: Maybe<Scalars['String']['output']>;
  defaultShippingAddress?: Maybe<Address>;
  defaultShippingAddressId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  lastName?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['Locale']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  shippingAddressIds: Array<Scalars['String']['output']>;
  shippingAddresses: Array<Address>;
  stores: Array<Store>;
  storesRef: Array<KeyReference>;
  title?: Maybe<Scalars['String']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
  version: Scalars['Long']['output'];
};

/** A field to access a customer's active cart. */
export type CustomerActiveCartInterface = {
  customerActiveCart?: Maybe<Cart>;
};


/** A field to access a customer's active cart. */
export type CustomerActiveCartInterfaceCustomerActiveCartArgs = {
  customerId: Scalars['String']['input'];
};

export type CustomerAddressAdded = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type CustomerAddressChanged = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type CustomerAddressCustomFieldAdded = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type CustomerAddressCustomFieldChanged = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type CustomerAddressCustomFieldRemoved = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CustomerAddressCustomTypeRemoved = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerAddressCustomTypeSet = MessagePayload & {
  addressId?: Maybe<Scalars['String']['output']>;
  customFields: CustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerAddressRemoved = MessagePayload & {
  address: Address;
  type: Scalars['String']['output'];
};

export type CustomerCompanyNameSet = MessagePayload & {
  companyName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerCreated = MessagePayload & {
  customer: Customer;
  type: Scalars['String']['output'];
};

export type CustomerCustomFieldAdded = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type CustomerCustomFieldChanged = MessagePayload & {
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type CustomerCustomFieldRemoved = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CustomerCustomTypeRemoved = MessagePayload & {
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerCustomTypeSet = MessagePayload & {
  customFields: CustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerDateOfBirthSet = MessagePayload & {
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type CustomerEmailChanged = MessagePayload & {
  email: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CustomerEmailToken = Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  value: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type CustomerEmailTokenCreated = MessagePayload & {
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type CustomerEmailVerified = MessagePayload & {
  type: Scalars['String']['output'];
};

export type CustomerFirstNameSet = MessagePayload & {
  firstName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** A customer can be a member in a customer group (e.g. reseller, gold member). A customer group can be used in price calculations with special prices being assigned to certain customer groups. */
export type CustomerGroup = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type CustomerGroupAssignment = {
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type CustomerGroupAssignmentAdded = MessagePayload & {
  customerGroupAssignment: CustomerGroupAssignment;
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type CustomerGroupAssignmentDraft = {
  customerGroup: ResourceIdentifierInput;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type CustomerGroupAssignmentRemoved = MessagePayload & {
  customerGroupAssignment: CustomerGroupAssignment;
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type CustomerGroupAssignmentsSet = MessagePayload & {
  customerGroupAssignments: Array<CustomerGroupAssignment>;
  type: Scalars['String']['output'];
};

export type CustomerGroupCustomFieldAdded = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type CustomerGroupCustomFieldChanged = MessagePayload & {
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type CustomerGroupCustomFieldRemoved = MessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CustomerGroupCustomTypeRemoved = MessagePayload & {
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerGroupCustomTypeSet = MessagePayload & {
  customFields: CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerGroupDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  groupName: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerGroupLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type CustomerGroupLimitsProjection = {
  total: CustomerGroupLimitWithCurrent;
};

export type CustomerGroupQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<CustomerGroup>;
  total: Scalars['Long']['output'];
};

export type CustomerGroupReferenceIdentifier = {
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type CustomerGroupSet = MessagePayload & {
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type CustomerGroupUpdateAction = {
  changeName?: InputMaybe<ChangeCustomerGroupName>;
  setCustomField?: InputMaybe<SetCustomerGroupCustomField>;
  setCustomType?: InputMaybe<SetCustomerGroupCustomType>;
  setKey?: InputMaybe<SetCustomerGroupKey>;
};

export type CustomerLastNameSet = MessagePayload & {
  lastName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type CustomerLimitsProjection = {
  total: CustomerLimitWithCurrent;
};

export type CustomerPasswordToken = Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  value: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type CustomerPasswordTokenCreated = MessagePayload & {
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type CustomerPasswordUpdated = MessagePayload & {
  reset: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterface = {
  customer?: Maybe<Customer>;
  customers: CustomerQueryResult;
};


/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterfaceCustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  passwordToken?: InputMaybe<Scalars['String']['input']>;
};


/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterfaceCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Customer>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type CustomerSearchConfiguration = {
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  status: CustomerSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum CustomerSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated'
}

export type CustomerSignInDraft = {
  anonymousCart?: InputMaybe<ResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: InputMaybe<Scalars['String']['input']>;
  anonymousCartSignInMode?: InputMaybe<AnonymousCartSignInMode>;
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  updateProductData?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerSignInResult = {
  cart?: Maybe<Cart>;
  customer: Customer;
};

export type CustomerSignMeInDraft = {
  activeCartSignInMode?: InputMaybe<AnonymousCartSignInMode>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  updateProductData?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerSignMeUpDraft = {
  addresses?: InputMaybe<Array<AddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
  vatId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerSignUpDraft = {
  addresses?: InputMaybe<Array<AddressInput>>;
  anonymousCart?: InputMaybe<ResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: InputMaybe<Scalars['String']['input']>;
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  authenticationMode?: InputMaybe<AuthenticationMode>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  customerGroupAssignments?: InputMaybe<Array<CustomerGroupAssignmentDraft>>;
  customerNumber?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
  vatId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerTitleSet = MessagePayload & {
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CustomerUpdateAction = {
  addAddress?: InputMaybe<AddCustomerAddress>;
  addBillingAddressId?: InputMaybe<AddCustomerBillingAddressId>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  addCustomerGroupAssignment?: InputMaybe<AddCustomerGroupAssignment>;
  addShippingAddressId?: InputMaybe<AddCustomerShippingAddressId>;
  addStore?: InputMaybe<AddCustomerStore>;
  changeAddress?: InputMaybe<ChangeCustomerAddress>;
  changeEmail?: InputMaybe<ChangeCustomerEmail>;
  removeAddress?: InputMaybe<RemoveCustomerAddress>;
  removeBillingAddressId?: InputMaybe<RemoveCustomerBillingAddressId>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  removeCustomerGroupAssignment?: InputMaybe<RemoveCustomerGroupAssignment>;
  removeShippingAddressId?: InputMaybe<RemoveCustomerShippingAddressId>;
  removeStore?: InputMaybe<RemoveCustomerStore>;
  setAddressCustomField?: InputMaybe<SetCustomerAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetCustomerAddressCustomType>;
  setAuthenticationMode?: InputMaybe<SetCustomerAuthenticationMode>;
  setCompanyName?: InputMaybe<SetCustomerCompanyName>;
  setCustomField?: InputMaybe<SetCustomerCustomField>;
  setCustomType?: InputMaybe<SetCustomerCustomType>;
  setCustomerGroup?: InputMaybe<SetCustomerGroup>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setCustomerGroupAssignments?: InputMaybe<SetCustomerGroupAssignments>;
  setCustomerNumber?: InputMaybe<SetCustomerNumber>;
  setDateOfBirth?: InputMaybe<SetCustomerDateOfBirth>;
  setDefaultBillingAddress?: InputMaybe<SetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<SetCustomerDefaultShippingAddress>;
  setExternalId?: InputMaybe<SetCustomerExternalId>;
  setFirstName?: InputMaybe<SetCustomerFirstName>;
  setKey?: InputMaybe<SetCustomerKey>;
  setLastName?: InputMaybe<SetCustomerLastName>;
  setLocale?: InputMaybe<SetCustomerLocale>;
  setMiddleName?: InputMaybe<SetCustomerMiddleName>;
  setSalutation?: InputMaybe<SetCustomerSalutation>;
  setStores?: InputMaybe<SetCustomerStores>;
  setTitle?: InputMaybe<SetCustomerTitle>;
  setVatId?: InputMaybe<SetCustomerVatId>;
};

export type DateAttribute = Attribute & {
  name: Scalars['String']['output'];
  value: Scalars['Date']['output'];
};

export type DateAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type DateField = CustomField & {
  name: Scalars['String']['output'];
  value: Scalars['Date']['output'];
};

export type DateTimeAttribute = Attribute & {
  name: Scalars['String']['output'];
  value: Scalars['DateTime']['output'];
};

export type DateTimeAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type DateTimeField = CustomField & {
  name: Scalars['String']['output'];
  value: Scalars['DateTime']['output'];
};

export type DateTimeType = FieldType & {
  name: Scalars['String']['output'];
};

export type DateType = FieldType & {
  name: Scalars['String']['output'];
};

export type Delivery = {
  address?: Maybe<Address>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  items: Array<DeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  parcels: Array<Parcel>;
};

export type DeliveryAdded = MessagePayload & OrderMessagePayload & {
  delivery: Delivery;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DeliveryAddressSet = MessagePayload & OrderMessagePayload & {
  address?: Maybe<Address>;
  deliveryId: Scalars['String']['output'];
  oldAddress?: Maybe<Address>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DeliveryCustomFieldAdded = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type DeliveryCustomFieldChanged = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type DeliveryCustomFieldRemoved = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type DeliveryCustomTypeRemoved = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DeliveryCustomTypeSet = MessagePayload & OrderMessagePayload & {
  customFields: CustomFieldsType;
  deliveryId: Scalars['String']['output'];
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DeliveryDraft = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  items: Array<DeliveryItemDraftType>;
  key?: InputMaybe<Scalars['String']['input']>;
  parcels: Array<ParcelDraft>;
};

export type DeliveryItem = {
  id: Scalars['String']['output'];
  quantity: Scalars['Long']['output'];
};

export type DeliveryItemDraftType = {
  id: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
};

export type DeliveryItemsUpdated = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  items: Array<DeliveryItem>;
  oldItems: Array<DeliveryItem>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DeliveryRemoved = MessagePayload & OrderMessagePayload & {
  delivery: Delivery;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Destination = {
  type: Scalars['String']['output'];
};

export type DestinationInput = {
  AzureServiceBus?: InputMaybe<AzureServiceBusDestinationInput>;
  ConfluentCloud?: InputMaybe<ConfluentCloudDestinationInput>;
  EventBridge?: InputMaybe<EventBridgeDestinationInput>;
  EventGrid?: InputMaybe<EventGridDestinationInput>;
  GoogleCloudPubSub?: InputMaybe<GoogleCloudPubSubDestinationInput>;
  SNS?: InputMaybe<SnsDestinationInput>;
  SQS?: InputMaybe<SqsDestinationInput>;
};

export type Dimensions = {
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type DimensionsInput = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type DimensionsProductSearch = {
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type DirectDiscount = {
  id: Scalars['String']['output'];
  target?: Maybe<CartDiscountTarget>;
  value: CartDiscountValue;
};

export type DirectDiscountDraft = {
  target?: InputMaybe<CartDiscountTargetInput>;
  value: CartDiscountValueInput;
};

export type DirectDiscountDraftOutput = {
  target?: Maybe<CartDiscountTarget>;
  value: CartDiscountValue;
};

export enum DiscountApplicationMode {
  EvenDistribution = 'EvenDistribution',
  IndividualApplication = 'IndividualApplication',
  ProportionateDistribution = 'ProportionateDistribution'
}

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCode = ReferenceExpandable & Versioned & {
  /** How many times this discount code was applied (only applications that were part of a successful checkout are considered) */
  applicationCount: Scalars['Long']['output'];
  applicationVersion?: Maybe<Scalars['Long']['output']>;
  cartDiscountRefs: Array<Reference>;
  cartDiscounts: Array<CartDiscount>;
  cartPredicate?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  groups: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  maxApplications?: Maybe<Scalars['Long']['output']>;
  maxApplicationsPerCustomer?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  referenceRefs: Array<Reference>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Long']['output'];
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type DiscountCodeCreated = MessagePayload & {
  discountCode: DiscountCode;
  type: Scalars['String']['output'];
};

export type DiscountCodeDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type DiscountCodeDraft = {
  /** Specify what CartDiscounts the API applies when you add the DiscountCode to the Cart. */
  cartDiscounts: Array<ResourceIdentifierInput>;
  /** DiscountCode can only be applied to Carts that match this predicate. */
  cartPredicate?: InputMaybe<Scalars['String']['input']>;
  /**
   * User-defined unique identifier for the DiscountCode that can be added to the Cart to apply the related CartDiscounts.
   * It cannot be modified after the DiscountCode is created.
   */
  code: Scalars['String']['input'];
  /** Custom Fields for the DiscountCode. */
  custom?: InputMaybe<CustomFieldsDraft>;
  /** The description of the DiscountCode. */
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  /** Groups to which the DiscountCode will belong to. */
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Only active DiscountCodes can be applied to the Cart. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User-defined unique identifier for the DiscountCode. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Number of times the DiscountCode can be applied. If not set, the DiscountCode can be applied any number of times. */
  maxApplications?: InputMaybe<Scalars['Long']['input']>;
  /** Number of times the DiscountCode can be applied per Customer. If not set, the DiscountCode can be applied any number of times. */
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Long']['input']>;
  /** Name of the DiscountCode. */
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  /** Date and time (UTC) from which the DiscountCode is effective. Must be earlier than `validUntil`. */
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date and time (UTC) until which the DiscountCode is effective. Must be later than `validFrom`. */
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DiscountCodeInfo = {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  state?: Maybe<DiscountCodeState>;
};

export type DiscountCodeKeySet = MessagePayload & {
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DiscountCodeQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<DiscountCode>;
  total: Scalars['Long']['output'];
};

export enum DiscountCodeState {
  /** The discount code is active and none of the discounts were applied because the discount application was stopped by one discount that has the StackingMode of StopAfterThisDiscount defined */
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',
  /** The discount code is active and it contains at least one active and valid CartDiscount. But its cart predicate does not match the cart or none of the contained active discount’s cart predicates match the cart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** The discount code is active and it contains at least one active and valid CartDiscount. The discount code cartPredicate matches the cart and at least one of the contained active discount’s cart predicates matches the cart. */
  MatchesCart = 'MatchesCart',
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */
  MaxApplicationReached = 'MaxApplicationReached',
  /** The discount code is not active or it does not contain any active cart discounts. */
  NotActive = 'NotActive',
  /** The discount code is not valid or it does not contain any valid cart discounts. Validity is determined based on the validFrom and validUntil dates */
  NotValid = 'NotValid'
}

export type DiscountCodeUpdateAction = {
  changeCartDiscounts?: InputMaybe<ChangeDiscountCodeCartDiscounts>;
  changeGroups?: InputMaybe<ChangeDiscountCodeGroups>;
  changeIsActive?: InputMaybe<ChangeDiscountCodeIsActive>;
  setCartPredicate?: InputMaybe<SetDiscountCodeCartPredicate>;
  setCustomField?: InputMaybe<SetDiscountCodeCustomField>;
  setCustomType?: InputMaybe<SetDiscountCodeCustomType>;
  setDescription?: InputMaybe<SetDiscountCodeDescription>;
  setKey?: InputMaybe<SetDiscountCodeKey>;
  setMaxApplications?: InputMaybe<SetDiscountCodeMaxApplications>;
  setMaxApplicationsPerCustomer?: InputMaybe<SetDiscountCodeMaxApplicationsPerCustomer>;
  setName?: InputMaybe<SetDiscountCodeName>;
  setValidFrom?: InputMaybe<SetDiscountCodeValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetDiscountCodeValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetDiscountCodeValidUntil>;
};

export type DiscountOnTotalPrice = {
  discountedAmount: BaseMoney;
  discountedGrossAmount?: Maybe<BaseMoney>;
  discountedNetAmount?: Maybe<BaseMoney>;
  includedDiscounts: Array<DiscountedTotalPricePortion>;
};

export type DiscountedLineItemPortion = {
  discount?: Maybe<CartDiscount>;
  discountRef: Reference;
  discountedAmount: BaseMoney;
};

export type DiscountedLineItemPortionDraft = {
  discount: ReferenceInput;
  discountedAmount: BaseMoneyInput;
};

export type DiscountedLineItemPrice = {
  includedDiscounts: Array<DiscountedLineItemPortion>;
  value: BaseMoney;
};

export type DiscountedLineItemPriceDraft = {
  includedDiscounts?: InputMaybe<Array<DiscountedLineItemPortionDraft>>;
  value: BaseMoneyInput;
};

export type DiscountedLineItemPriceForQuantity = {
  discountedPrice: DiscountedLineItemPrice;
  quantity: Scalars['Long']['output'];
};

export type DiscountedProductPriceValue = {
  discount?: Maybe<ProductDiscount>;
  discountRef: Reference;
  value: BaseMoney;
};

export type DiscountedProductPriceValueInput = {
  discount: ResourceIdentifierInput;
  value: BaseMoneyInput;
};

export type DiscountedProductSearchPriceValue = {
  discount?: Maybe<ProductDiscount>;
  discountRef: Reference;
  value: BaseMoney;
};

export type DiscountedTotalPricePortion = {
  discount?: Maybe<CartDiscount>;
  discountRef: Reference;
  discountedAmount: BaseMoney;
};

export type EnumAttribute = Attribute & {
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EnumAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
  values: PlainEnumValueResult;
};


export type EnumAttributeDefinitionTypeValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EnumField = CustomField & {
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EnumType = FieldType & {
  name: Scalars['String']['output'];
  values: Array<EnumValue>;
};

export type EnumTypeDraft = {
  values: Array<PlainEnumValueDraft>;
};

export type EnumValue = {
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type EnumValueInput = {
  key: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type EventBridgeDestination = Destination & {
  accountId: Scalars['String']['output'];
  region: Scalars['String']['output'];
  source: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type EventBridgeDestinationInput = {
  accountId: Scalars['String']['input'];
  region: Scalars['String']['input'];
};

export type EventGridDestination = Destination & {
  accessKey: Scalars['String']['output'];
  type: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type EventGridDestinationInput = {
  accessKey: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ExcludeProductSelectionProduct = {
  product: ResourceIdentifierInput;
  variantExclusion?: InputMaybe<ProductVariantExclusionDraft>;
};

export type ExistsFilterInput = {
  path: Scalars['String']['input'];
};

export type Extension = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  destination: ExtensionDestination;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  timeoutInMs?: Maybe<Scalars['Int']['output']>;
  triggers: Array<Trigger>;
  version: Scalars['Long']['output'];
};

export type ExtensionDestination = {
  type: Scalars['String']['output'];
};

export type ExtensionDestinationInput = {
  AWSLambda?: InputMaybe<AwsLambdaDestinationInput>;
  GoogleCloudFunction?: InputMaybe<GoogleCloudFunctionDestinationInput>;
  HTTP?: InputMaybe<HttpDestinationInput>;
};

export type ExtensionDraft = {
  destination: ExtensionDestinationInput;
  key?: InputMaybe<Scalars['String']['input']>;
  timeoutInMs?: InputMaybe<Scalars['Int']['input']>;
  triggers: Array<TriggerInput>;
};

export type ExtensionLimitsProjection = {
  timeoutInMs: Limit;
};

export type ExtensionQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Extension>;
  total: Scalars['Long']['output'];
};

export type ExtensionUpdateAction = {
  changeDestination?: InputMaybe<ChangeExtensionDestination>;
  changeTriggers?: InputMaybe<ChangeExtensionTriggers>;
  setKey?: InputMaybe<SetExtensionKey>;
  setTimeoutInMs?: InputMaybe<SetExtensionTimeoutInMs>;
};

export type ExternalDiscountValue = ProductDiscountValue & {
  type: Scalars['String']['output'];
};

export type ExternalDiscountValueInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalLineItemTotalPrice = {
  price: BaseMoney;
  totalPrice: Money;
};

export type ExternalLineItemTotalPriceDraft = {
  price: BaseMoneyInput;
  totalPrice: MoneyInput;
};

export type ExternalOAuth = {
  authorizationHeader: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ExternalOAuthDraft = {
  authorizationHeader: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ExternalTaxAmountDraft = {
  taxRate: ExternalTaxRateDraft;
  totalGross: MoneyInput;
};

export type ExternalTaxAmountDraftOutput = {
  taxRate: ExternalTaxRateDraftOutput;
  totalGross: Money;
};

export type ExternalTaxRateDraft = {
  amount: Scalars['Float']['input'];
  country: Scalars['Country']['input'];
  includedInPrice?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subRates?: InputMaybe<Array<SubRateDraft>>;
};

export type ExternalTaxRateDraftOutput = {
  amount?: Maybe<Scalars['Float']['output']>;
  country: Scalars['Country']['output'];
  includedInPrice: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subRates: Array<SubRate>;
};

export type FacetResult = {
  type: Scalars['String']['output'];
};

export type FacetResultValue = {
  facet: Scalars['String']['output'];
  value: FacetResult;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type FieldDefinition = {
  inputHint: TextInputHint;
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<LocalizedString>;
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: FieldType;
};


/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type FieldDefinitionLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type FieldDefinitionInput = {
  inputHint: TextInputHint;
  label: Array<LocalizedStringItemInputType>;
  name: Scalars['String']['input'];
  required: Scalars['Boolean']['input'];
  type: FieldTypeInput;
};

export type FieldType = {
  name: Scalars['String']['output'];
};

export type FieldTypeEnumTypeDraft = {
  values: Array<EnumValueInput>;
};

export type FieldTypeInput = {
  Boolean?: InputMaybe<SimpleFieldTypeDraft>;
  Date?: InputMaybe<SimpleFieldTypeDraft>;
  DateTime?: InputMaybe<SimpleFieldTypeDraft>;
  Enum?: InputMaybe<FieldTypeEnumTypeDraft>;
  LocalizedEnum?: InputMaybe<FieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: InputMaybe<SimpleFieldTypeDraft>;
  Money?: InputMaybe<SimpleFieldTypeDraft>;
  Number?: InputMaybe<SimpleFieldTypeDraft>;
  Reference?: InputMaybe<FieldTypeReferenceTypeDraft>;
  Set?: InputMaybe<FieldTypeSetTypeDraft>;
  String?: InputMaybe<SimpleFieldTypeDraft>;
  Time?: InputMaybe<SimpleFieldTypeDraft>;
};

export type FieldTypeLocalizedEnumTypeDraft = {
  values: Array<LocalizedEnumValueInput>;
};

export type FieldTypeReferenceTypeDraft = {
  referenceTypeId: Scalars['String']['input'];
};

export type FieldTypeSetElementTypeDraft = {
  Boolean?: InputMaybe<SimpleFieldTypeDraft>;
  Date?: InputMaybe<SimpleFieldTypeDraft>;
  DateTime?: InputMaybe<SimpleFieldTypeDraft>;
  Enum?: InputMaybe<FieldTypeEnumTypeDraft>;
  LocalizedEnum?: InputMaybe<FieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: InputMaybe<SimpleFieldTypeDraft>;
  Money?: InputMaybe<SimpleFieldTypeDraft>;
  Number?: InputMaybe<SimpleFieldTypeDraft>;
  Reference?: InputMaybe<FieldTypeReferenceTypeDraft>;
  String?: InputMaybe<SimpleFieldTypeDraft>;
  Time?: InputMaybe<SimpleFieldTypeDraft>;
};

export type FieldTypeSetTypeDraft = {
  elementType: FieldTypeSetElementTypeDraft;
};

export type FixedPriceDiscountValue = CartDiscountValue & {
  money: Array<BaseMoney>;
  type: Scalars['String']['output'];
};

export type FixedPriceDiscountValueInput = {
  money: Array<CartDiscountValueBaseMoneyInput>;
};

export type FreezeCart = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type Geometry = {
  type: Scalars['String']['output'];
};

export type GeometryInput = {
  coordinates?: InputMaybe<Array<Scalars['Float']['input']>>;
  type: Scalars['String']['input'];
};

export type GiftLineItemValue = CartDiscountValue & {
  distributionChannelRef?: Maybe<ChannelReferenceIdentifier>;
  productRef: ProductReferenceIdentifier;
  supplyChannelRef?: Maybe<ChannelReferenceIdentifier>;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type GiftLineItemValueInput = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  product: ResourceIdentifierInput;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId: Scalars['Int']['input'];
};

export type GoogleCloudFunctionDestination = ExtensionDestination & {
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GoogleCloudFunctionDestinationInput = {
  url: Scalars['String']['input'];
};

export type GoogleCloudPubSubDestination = Destination & {
  projectId: Scalars['String']['output'];
  topic: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type GoogleCloudPubSubDestinationInput = {
  projectId: Scalars['String']['input'];
  topic: Scalars['String']['input'];
};

export type HasProductTailoringData = {
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
  variants: Array<ProductVariantTailoring>;
};


export type HasProductTailoringDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type HasProductTailoringDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type HasProductTailoringDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type HasProductTailoringDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type HasProductTailoringDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type HasProductTailoringDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type HighPrecisionMoney = BaseMoney & {
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  fractionDigits: Scalars['Int']['output'];
  preciseAmount: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type HighPrecisionMoneyInput = {
  centAmount?: InputMaybe<Scalars['Long']['input']>;
  currencyCode: Scalars['Currency']['input'];
  fractionDigits: Scalars['Int']['input'];
  preciseAmount: Scalars['Long']['input'];
};

export type HttpDestination = ExtensionDestination & {
  authentication?: Maybe<HttpDestinationAuthentication>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type HttpDestinationAuthentication = {
  type: Scalars['String']['output'];
};

export type HttpDestinationAuthenticationInput = {
  AuthorizationHeader?: InputMaybe<AuthorizationHeaderInput>;
  AzureFunctions?: InputMaybe<AzureFunctionsAuthenticationInput>;
};

export type HttpDestinationInput = {
  authentication?: InputMaybe<HttpDestinationAuthenticationInput>;
  url: Scalars['String']['input'];
};

export type Image = {
  dimensions: Dimensions;
  label?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ImageInput = {
  dimensions: DimensionsInput;
  label?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type ImageProductSearch = {
  dimensions: DimensionsProductSearch;
  label?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ImportOrderCustomLineItemState = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<ItemStateDraftType>;
};

export type ImportOrderDraft = {
  billingAddress?: InputMaybe<AddressInput>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customLineItems?: Array<CustomLineItemImportDraft>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerGroup?: InputMaybe<ReferenceInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  inventoryMode?: InputMaybe<InventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<AddressInput>>;
  lineItems?: Array<LineItemImportDraft>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderState?: InputMaybe<OrderState>;
  origin?: InputMaybe<CartOrigin>;
  paymentInfo?: InputMaybe<ReferenceInput>;
  paymentState?: InputMaybe<PaymentState>;
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  shipmentState?: InputMaybe<ShipmentState>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  shippingInfo?: InputMaybe<ShippingInfoImportDraft>;
  state?: InputMaybe<ReferenceInput>;
  store?: InputMaybe<ReferenceInput>;
  taxCalculationMode?: InputMaybe<TaxCalculationMode>;
  taxedPrice?: InputMaybe<TaxedPriceDraft>;
  totalPrice: MoneyInput;
};

export type ImportOrderLineItemState = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderCustomLineItemState = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderCustomLineItemStateOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  state: Scalars['Set']['output'];
  type: Scalars['String']['output'];
};

export type ImportStagedOrderLineItemState = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderLineItemStateOutput = StagedOrderUpdateActionOutput & {
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  state: Scalars['Set']['output'];
  type: Scalars['String']['output'];
};

export type InStore = CartDiscountQueryInterface & CartQueryInterface & CustomerActiveCartInterface & CustomerQueryInterface & MeFieldInterface & OrderQueryInterface & ShippingMethodsByCartInterface & {
  cart?: Maybe<Cart>;
  cartDiscount?: Maybe<CartDiscount>;
  cartDiscounts: CartDiscountQueryResult;
  carts: CartQueryResult;
  customer?: Maybe<Customer>;
  customerActiveCart?: Maybe<Cart>;
  customers: CustomerQueryResult;
  /**
   * This field can only be used with an access token created with the password flow or with an anonymous session.
   *
   * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
   */
  me: InStoreMe;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  product?: Maybe<Product>;
  productSelectionAssignments: ProductAssignmentQueryResult;
  productTailoring?: Maybe<ProductTailoring>;
  productTailoringList: ProductTailoringQueryResult;
  quote?: Maybe<Quote>;
  quoteRequest?: Maybe<QuoteRequest>;
  quoteRequests: QuoteRequestQueryResult;
  quotes: QuoteQueryResult;
  shippingMethodsByCart: Array<ShippingMethod>;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
  stagedQuote?: Maybe<StagedQuote>;
  stagedQuotes: StagedQuoteQueryResult;
};


export type InStoreCartArgs = {
  id: Scalars['String']['input'];
};


export type InStoreCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreCartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreCustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  passwordToken?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreCustomerActiveCartArgs = {
  customerId: Scalars['String']['input'];
};


export type InStoreCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantKey?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreProductTailoringArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreProductTailoringListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreQuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreShippingMethodsByCartArgs = {
  id: Scalars['String']['input'];
};


export type InStoreShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreStagedQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreStagedQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type InStoreMe = ActiveCartInterface & CartQueryInterface & MeQueryInterface & OrderQueryInterface & ShoppingListQueryInterface & {
  activeCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  cart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  carts: CartQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customer?: Maybe<Customer>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  order?: Maybe<Order>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  orders: OrderQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  shoppingList?: Maybe<ShoppingList>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  shoppingLists: ShoppingListQueryResult;
};


export type InStoreMeCartArgs = {
  id: Scalars['String']['input'];
};


export type InStoreMeCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreMeOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreMeOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreMeShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type InStoreMeShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type InheritedAssociate = {
  associateRoleAssignments: Array<InheritedAssociateRoleAssignment>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
};

export type InheritedAssociateRoleAssignment = {
  associateRole: AssociateRole;
  associateRoleRef: KeyReference;
  source: BusinessUnit;
  sourceRef: KeyReference;
};

export type InheritedStore = {
  store?: Maybe<Store>;
  storeRef: KeyReference;
};

export type Initiator = {
  anonymousId?: Maybe<Scalars['String']['output']>;
  associateRef?: Maybe<Reference>;
  attributedTo?: Maybe<Attribution>;
  clientId?: Maybe<Scalars['String']['output']>;
  customerRef?: Maybe<Reference>;
  externalUserId?: Maybe<Scalars['String']['output']>;
  isPlatformClient?: Maybe<Scalars['Boolean']['output']>;
  userRef?: Maybe<Reference>;
};

export type InterfaceInteractionsRaw = {
  fields: Array<RawCustomField>;
  type?: Maybe<TypeDefinition>;
  typeRef: Reference;
};


export type InterfaceInteractionsRawFieldsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type InterfaceInteractionsRawResult = {
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<InterfaceInteractionsRaw>;
  total: Scalars['Int']['output'];
};

/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type InventoryEntry = ReferenceExpandable & Versioned & {
  availableQuantity: Scalars['Long']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  expectedDelivery?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  quantityOnStock: Scalars['Long']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  sku: Scalars['String']['output'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  version: Scalars['Long']['output'];
};

export type InventoryEntryCreated = MessagePayload & {
  inventoryEntry: InventoryEntry;
  type: Scalars['String']['output'];
};

export type InventoryEntryDeleted = MessagePayload & {
  sku: Scalars['String']['output'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type InventoryEntryDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  expectedDelivery?: InputMaybe<Scalars['DateTime']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  quantityOnStock: Scalars['Long']['input'];
  restockableInDays?: InputMaybe<Scalars['Int']['input']>;
  sku: Scalars['String']['input'];
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type InventoryEntryQuantitySet = MessagePayload & {
  newAvailableQuantity: Scalars['Long']['output'];
  newQuantityOnStock: Scalars['Long']['output'];
  oldAvailableQuantity: Scalars['Long']['output'];
  oldQuantityOnStock: Scalars['Long']['output'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type InventoryEntryQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<InventoryEntry>;
  total: Scalars['Long']['output'];
};

export type InventoryEntryUpdateAction = {
  addQuantity?: InputMaybe<AddInventoryEntryQuantity>;
  changeQuantity?: InputMaybe<ChangeInventoryEntryQuantity>;
  removeQuantity?: InputMaybe<RemoveInventoryEntryQuantity>;
  setCustomField?: InputMaybe<SetInventoryEntryCustomField>;
  setCustomType?: InputMaybe<SetInventoryEntryCustomType>;
  setExpectedDelivery?: InputMaybe<SetInventoryEntryExpectedDelivery>;
  setRestockableInDays?: InputMaybe<SetInventoryEntryRestockableInDays>;
  setSupplyChannel?: InputMaybe<SetInventoryEntrySupplyChannel>;
};

export enum InventoryMode {
  /**
   * Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  None = 'None',
  /**
   * Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */
  ReserveOnOrder = 'ReserveOnOrder',
  /**
   * Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */
  TrackOnly = 'TrackOnly'
}

export type ItemShippingAddressTargetDraft = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
};

export type ItemShippingAddressTargetDraftOutput = {
  addressKey: Scalars['String']['output'];
  quantity: Scalars['Long']['output'];
};

export type ItemShippingAddressTargetDraftType = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
};

export type ItemShippingDetails = {
  targets: Array<ItemShippingTarget>;
  valid: Scalars['Boolean']['output'];
};

export type ItemShippingDetailsDraft = {
  itemShippingAddressTargets?: InputMaybe<Array<ItemShippingAddressTargetDraft>>;
  shippingTargets?: InputMaybe<Array<ShippingMethodTargetDraft>>;
  targets?: Array<ShippingTargetDraft>;
};

export type ItemShippingDetailsDraftOutput = {
  itemShippingAddressTargets: Array<ItemShippingAddressTargetDraftOutput>;
  shippingTargets: Array<ShippingMethodTargetDraftOutput>;
  targets: Array<ItemShippingTarget>;
};

export type ItemShippingDetailsDraftType = {
  itemShippingAddressTargets?: InputMaybe<Array<ItemShippingAddressTargetDraftType>>;
  shippingTargets?: InputMaybe<Array<ShippingMethodTargetDraftType>>;
  targets?: InputMaybe<Array<ShippingTargetDraftType>>;
};

export type ItemShippingTarget = {
  addressKey: Scalars['String']['output'];
  quantity: Scalars['Long']['output'];
  shippingMethodKey?: Maybe<Scalars['String']['output']>;
};

export type ItemState = {
  quantity: Scalars['Long']['output'];
  state?: Maybe<State>;
  stateRef: Reference;
};

export type ItemStateDraftType = {
  quantity: Scalars['Long']['input'];
  state: ReferenceInput;
};

export type KeyReference = {
  key: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type Limit = {
  limit?: Maybe<Scalars['Long']['output']>;
};

export type LimitWithCurrent = {
  current?: Maybe<Scalars['Long']['output']>;
  limit?: Maybe<Scalars['Long']['output']>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItem = {
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  custom?: Maybe<CustomFieldsType>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  distributionChannel?: Maybe<Channel>;
  distributionChannelRef?: Maybe<Reference>;
  id: Scalars['String']['output'];
  inventoryMode?: Maybe<InventoryMode>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lineItemMode: LineItemMode;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  perMethodTaxRate: Array<MethodTaxRate>;
  price: ProductPrice;
  priceMode: LineItemPriceMode;
  productId: Scalars['String']['output'];
  productKey?: Maybe<Scalars['String']['output']>;
  productSlug?: Maybe<Scalars['String']['output']>;
  productSlugAllLocales?: Maybe<Array<LocalizedString>>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef?: Maybe<Reference>;
  quantity: Scalars['Long']['output'];
  shippingDetails?: Maybe<ItemShippingDetails>;
  state: Array<ItemState>;
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  taxedPricePortions: Array<MethodTaxedPrice>;
  totalPrice?: Maybe<Money>;
  variant?: Maybe<ProductVariant>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type LineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  inventoryMode?: InputMaybe<InventoryMode>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type LineItemDraftOutput = {
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  custom?: Maybe<CustomFieldsCommand>;
  distributionChannelResId?: Maybe<ResourceIdentifier>;
  externalPrice?: Maybe<BaseMoney>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  inventoryMode?: Maybe<InventoryMode>;
  key?: Maybe<Scalars['String']['output']>;
  perMethodExternalTaxRate: Array<MethodExternalTaxRateDraftOutput>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Long']['output']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  sku?: Maybe<Scalars['String']['output']>;
  supplyChannelResId?: Maybe<ResourceIdentifier>;
  variantId?: Maybe<Scalars['Int']['output']>;
};

export type LineItemImportDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  price: ProductPriceDataInput;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  state?: InputMaybe<Array<ItemStateDraftType>>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  taxRate?: InputMaybe<TaxRateInput>;
  variant: ProductVariantImportDraft;
};

export enum LineItemMode {
  /**
   * The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  GiftLineItem = 'GiftLineItem',
  /**
   * The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */
  Standard = 'Standard'
}

export enum LineItemPriceMode {
  /** The line item price was set externally. Cart discounts can apply to line items with this price mode. All update actions that change the quantity of a line item with this price mode require the externalPrice field to be given. */
  ExternalPrice = 'ExternalPrice',
  /** The line item price with the total was set externally. */
  ExternalTotal = 'ExternalTotal',
  /** The price is selected form the product variant. This is the default mode. */
  Platform = 'Platform'
}

export type LineItemReturnItem = ReturnItem & {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lineItemId: Scalars['String']['output'];
  paymentState: ReturnPaymentState;
  quantity: Scalars['Long']['output'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type LineItemStateTransition = MessagePayload & OrderMessagePayload & {
  fromState?: Maybe<State>;
  fromStateRef: Reference;
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Long']['output'];
  toState?: Maybe<State>;
  toStateRef: Reference;
  transitionDate: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type LineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type LineItemsTargetInput = {
  predicate: Scalars['String']['input'];
};

export type LocalizableEnumAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
  values: LocalizableEnumValueTypeResult;
};


export type LocalizableEnumAttributeDefinitionTypeValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LocalizableEnumTypeDraft = {
  values: Array<LocalizedEnumValueDraft>;
};

export type LocalizableEnumValueType = {
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<LocalizedString>;
};


export type LocalizableEnumValueTypeLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type LocalizableEnumValueTypeResult = {
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<LocalizableEnumValueType>;
  total: Scalars['Int']['output'];
};

export type LocalizableTextAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type LocalizedEnumAttribute = Attribute & {
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};


export type LocalizedEnumAttributeLabelArgs = {
  locale: Scalars['Locale']['input'];
};

export type LocalizedEnumField = CustomField & {
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};


export type LocalizedEnumFieldLabelArgs = {
  locale: Scalars['Locale']['input'];
};

export type LocalizedEnumType = FieldType & {
  name: Scalars['String']['output'];
  values: Array<LocalizedEnumValue>;
};

export type LocalizedEnumValue = {
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<LocalizedString>;
};


export type LocalizedEnumValueLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type LocalizedEnumValueDraft = {
  key: Scalars['String']['input'];
  label: Array<LocalizedStringItemInputType>;
};

export type LocalizedEnumValueInput = {
  key: Scalars['String']['input'];
  label: Array<LocalizedStringItemInputType>;
};

export type LocalizedString = {
  locale: Scalars['Locale']['output'];
  value: Scalars['String']['output'];
};

export type LocalizedStringAttribute = Attribute & {
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};


export type LocalizedStringAttributeValueArgs = {
  locale: Scalars['Locale']['input'];
};

export type LocalizedStringField = CustomField & {
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};


export type LocalizedStringFieldValueArgs = {
  locale: Scalars['Locale']['input'];
};

export type LocalizedStringItemInputType = {
  locale: Scalars['Locale']['input'];
  value: Scalars['String']['input'];
};

export type LocalizedStringType = FieldType & {
  name: Scalars['String']['output'];
};

export type Location = {
  country: Scalars['Country']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type Me = ActiveCartInterface & CartQueryInterface & MeQueryInterface & OrderQueryInterface & ShoppingListQueryInterface & {
  activeCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  businessUnit?: Maybe<BusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  businessUnits: BusinessUnitQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  cart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  carts: CartQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customer?: Maybe<Customer>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  order?: Maybe<Order>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  orders: OrderQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  payment?: Maybe<MyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  payments: MyPaymentQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  quote?: Maybe<Quote>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  quoteRequest?: Maybe<QuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  quoteRequests: QuoteRequestQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  quotes: QuoteQueryResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  shoppingList?: Maybe<ShoppingList>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  shoppingLists: ShoppingListQueryResult;
};


export type MeBusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type MeBusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeCartArgs = {
  id: Scalars['String']['input'];
};


export type MeCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MeOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MePaymentArgs = {
  id: Scalars['String']['input'];
};


export type MePaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type MeQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type MeQuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type MeShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

/** The me field gives access to the data that is specific to the customer or anonymous session linked to the access token. */
export type MeFieldInterface = {
  me: MeQueryInterface;
};

export type MeQueryInterface = {
  activeCart?: Maybe<Cart>;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};


export type MeQueryInterfaceCartArgs = {
  id: Scalars['String']['input'];
};


export type MeQueryInterfaceCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeQueryInterfaceOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MeQueryInterfaceOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type MeQueryInterfaceShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type MeQueryInterfaceShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type Message = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  payload: MessagePayload;
  resourceRef: Reference;
  resourceVersion: Scalars['Long']['output'];
  sequenceNumber: Scalars['Long']['output'];
  type: Scalars['String']['output'];
  userProvidedIdentifiers?: Maybe<UserProvidedIdentifiers>;
  version: Scalars['Long']['output'];
};

export type MessagePayload = {
  type: Scalars['String']['output'];
};

export type MessageQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Message>;
  total: Scalars['Long']['output'];
};

export type MessageSubscription = {
  resourceTypeId: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type MessageSubscriptionInput = {
  resourceTypeId: Scalars['String']['input'];
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MessagesConfiguration = {
  deleteDaysAfterCreation?: Maybe<Scalars['Int']['output']>;
  enabled: Scalars['Boolean']['output'];
};

export type MessagesConfigurationDraft = {
  deleteDaysAfterCreation: Scalars['Int']['input'];
  enabled: Scalars['Boolean']['input'];
};

export type MethodExternalTaxRateDraft = {
  shippingMethodKey: Scalars['String']['input'];
  taxRate?: InputMaybe<ExternalTaxRateDraft>;
};

export type MethodExternalTaxRateDraftOutput = {
  shippingMethodKey: Scalars['String']['output'];
  taxRate?: Maybe<ExternalTaxRateDraftOutput>;
};

export type MethodTaxRate = {
  shippingMethodKey: Scalars['String']['output'];
  taxRate?: Maybe<TaxRate>;
};

export type MethodTaxedPrice = {
  shippingMethodKey: Scalars['String']['output'];
  taxedPrice?: Maybe<TaxedItemPrice>;
};

export type MissingFilterInput = {
  path: Scalars['String']['input'];
};

export type Money = BaseMoney & {
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type MoneyAttribute = Attribute & {
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  name: Scalars['String']['output'];
};

export type MoneyAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type MoneyDraft = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['Currency']['input'];
};

export type MoneyField = CustomField & {
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  name: Scalars['String']['output'];
};

export type MoneyInput = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['Currency']['input'];
};

export type MoneyType = FieldType & {
  name: Scalars['String']['output'];
};

export type MoveProductImageToPosition = {
  imageUrl: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type MoveProductTailoringImageToPosition = {
  imageUrl: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type MultiBuyCustomLineItemsTarget = CartDiscountTarget & {
  discountedQuantity: Scalars['Long']['output'];
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  selectionMode: SelectionMode;
  triggerQuantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type MultiBuyCustomLineItemsTargetInput = {
  discountedQuantity: Scalars['Long']['input'];
  maxOccurrence?: InputMaybe<Scalars['Int']['input']>;
  predicate: Scalars['String']['input'];
  selectionMode?: InputMaybe<SelectionMode>;
  triggerQuantity: Scalars['Long']['input'];
};

export type MultiBuyLineItemsTarget = CartDiscountTarget & {
  discountedQuantity: Scalars['Long']['output'];
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  selectionMode: SelectionMode;
  triggerQuantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type MultiBuyLineItemsTargetInput = {
  discountedQuantity: Scalars['Long']['input'];
  maxOccurrence?: InputMaybe<Scalars['Int']['input']>;
  predicate: Scalars['String']['input'];
  selectionMode?: InputMaybe<SelectionMode>;
  triggerQuantity: Scalars['Long']['input'];
};

export type Mutation = {
  createApiClient?: Maybe<ApiClientWithSecret>;
  createApprovalRule?: Maybe<ApprovalRule>;
  createAssociateRole?: Maybe<AssociateRole>;
  createAttributeGroup?: Maybe<AttributeGroup>;
  createBusinessUnit?: Maybe<BusinessUnit>;
  createCart?: Maybe<Cart>;
  createCartDiscount?: Maybe<CartDiscount>;
  createCategory?: Maybe<Category>;
  createChannel?: Maybe<Channel>;
  createCustomerGroup?: Maybe<CustomerGroup>;
  createDiscountCode?: Maybe<DiscountCode>;
  createExtension?: Maybe<Extension>;
  createInventoryEntry?: Maybe<InventoryEntry>;
  createMyBusinessUnit?: Maybe<BusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromCart?: Maybe<Order>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromQuote?: Maybe<Order>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyPayment?: Maybe<MyPayment>;
  createMyQuoteRequest?: Maybe<QuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyShoppingList?: Maybe<ShoppingList>;
  createOrUpdateCustomObject?: Maybe<CustomObject>;
  createOrderEdit?: Maybe<OrderEdit>;
  createOrderFromCart?: Maybe<Order>;
  createOrderFromQuote?: Maybe<Order>;
  createPayment?: Maybe<Payment>;
  createProduct?: Maybe<Product>;
  createProductDiscount?: Maybe<ProductDiscount>;
  createProductSelection?: Maybe<ProductSelection>;
  createProductTailoring?: Maybe<ProductTailoring>;
  createProductType?: Maybe<ProductTypeDefinition>;
  createQuote?: Maybe<Quote>;
  createQuoteRequest?: Maybe<QuoteRequest>;
  createReview?: Maybe<Review>;
  createShippingMethod?: Maybe<ShippingMethod>;
  createShoppingList?: Maybe<ShoppingList>;
  createStagedQuote?: Maybe<StagedQuote>;
  createStandalonePrice?: Maybe<StandalonePrice>;
  createState?: Maybe<State>;
  createStore?: Maybe<Store>;
  createSubscription?: Maybe<CommercetoolsSubscription>;
  createTaxCategory?: Maybe<TaxCategory>;
  createTypeDefinition?: Maybe<TypeDefinition>;
  createZone?: Maybe<Zone>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerChangeMyPassword?: Maybe<Customer>;
  customerChangePassword?: Maybe<Customer>;
  /** Verifies customer's email using a token. */
  customerConfirmEmail?: Maybe<Customer>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerConfirmMyEmail?: Maybe<Customer>;
  customerCreateEmailVerificationToken: CustomerEmailToken;
  /** The token value is used to reset the password of the customer with the given email. The token is valid only for 10 minutes. */
  customerCreatePasswordResetToken?: Maybe<CustomerPasswordToken>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerResetMyPassword?: Maybe<Customer>;
  /**
   * The following workflow can be used to reset the customer’s password:
   *
   * 1. Create a password reset token and send it embedded in a link to the customer.
   * 2. When the customer clicks on the link, you may optionally retrieve customer by password token.
   * 3. When the customer entered new password, use reset customer’s password to reset the password.
   */
  customerResetPassword?: Maybe<Customer>;
  /**
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * There may be carts and orders created before the sign in that should be assigned to the customer account. With the `anonymousCartId`, a single anonymous cart can be assigned. With the `anonymousId`, all orders and carts that have this `anonymousId` set will be assigned to the customer.
   * If both `anonymousCartId` and `anonymousId` are given, the anonymous cart must have the `anonymousId`.
   *
   * Additionally, there might also exist one or more active customer carts from an earlier session. On customer sign in there are several ways how to proceed with this cart and the cart referenced by the `anonymousCartId`.
   *
   * * If the customer does not have a cart yet, the anonymous cart becomes the customer's cart.
   * * If the customer already has one or more carts, the content of the anonymous cart will be copied to the customer's active cart that has been modified most recently.
   *
   *   In this case the `CartState` of the anonymous cart gets changed to `Merged` while the customer's cart remains the `Active` cart.
   *
   *   If a `LineItem` in the anonymous cart matches an existing line item, or a `CustomLineItem` matches an existing custom line item in the customer's cart, the maximum quantity of both line items is used as the new quantity.
   *
   *   `ItemShippingDetails` are copied from the item with the highest quantity.
   *
   *   If `itemShippingAddresses` are different in the two carts, the resulting cart contains the addresses of both the customer cart and the anonymous cart.
   *
   *   Note, that it is not possible to merge carts that differ in their currency (set during creation of the cart).
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignIn: CustomerSignInResult;
  /**
   * BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta
   *
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * If used with an access token for Anonymous Sessions, all orders and carts belonging to the `anonymousId` will be assigned to the newly created customer.
   *
   * * If the customer does not have a cart yet, the anonymous cart that was modified most recently becomes the customer's cart.
   * * If the customer already has a cart, the most recently modified anonymous cart will be handled according to the `AnonymousCartSignInMode`.
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignMeIn: CustomerSignInResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta If used with an access token for Anonymous Sessions, all orders and carts belonging to the anonymousId will be assigned to the newly created customer. */
  customerSignMeUp: CustomerSignInResult;
  /** Creates a customer. If an anonymous cart is given then the cart is assigned to the created customer and the version number of the Cart will increase. If the id of an anonymous session is given, all carts and orders will be assigned to the created customer. */
  customerSignUp: CustomerSignInResult;
  deleteApiClient?: Maybe<ApiClientWithoutSecret>;
  deleteAssociateRole?: Maybe<AssociateRole>;
  deleteAttributeGroup?: Maybe<AttributeGroup>;
  deleteBusinessUnit?: Maybe<BusinessUnit>;
  deleteCart?: Maybe<Cart>;
  deleteCartDiscount?: Maybe<CartDiscount>;
  deleteCategory?: Maybe<Category>;
  deleteChannel?: Maybe<Channel>;
  deleteCustomObject?: Maybe<CustomObject>;
  deleteCustomer?: Maybe<Customer>;
  deleteCustomerGroup?: Maybe<CustomerGroup>;
  deleteDiscountCode?: Maybe<DiscountCode>;
  deleteExtension?: Maybe<Extension>;
  deleteInventoryEntry?: Maybe<InventoryEntry>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCustomer?: Maybe<Customer>;
  deleteMyPayment?: Maybe<MyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyShoppingList?: Maybe<ShoppingList>;
  deleteOrder?: Maybe<Order>;
  deleteOrderEdit?: Maybe<OrderEdit>;
  deletePayment?: Maybe<Payment>;
  deleteProduct?: Maybe<Product>;
  deleteProductDiscount?: Maybe<ProductDiscount>;
  deleteProductSelection?: Maybe<ProductSelection>;
  deleteProductTailoring?: Maybe<ProductTailoring>;
  deleteProductType?: Maybe<ProductTypeDefinition>;
  deleteQuote?: Maybe<Quote>;
  deleteQuoteRequest?: Maybe<QuoteRequest>;
  deleteReview?: Maybe<Review>;
  deleteShippingMethod?: Maybe<ShippingMethod>;
  deleteShoppingList?: Maybe<ShoppingList>;
  deleteStagedQuote?: Maybe<StagedQuote>;
  deleteStandalonePrice?: Maybe<StandalonePrice>;
  deleteState?: Maybe<State>;
  deleteStore?: Maybe<Store>;
  deleteSubscription?: Maybe<CommercetoolsSubscription>;
  deleteTaxCategory?: Maybe<TaxCategory>;
  deleteTypeDefinition?: Maybe<TypeDefinition>;
  deleteZone?: Maybe<Zone>;
  importOrder?: Maybe<Order>;
  replicateCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  replicateMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta Signs up a new customer and associates it with the business unit. */
  signUpInMyBusinessUnit: CustomerSignInResult;
  updateApprovalFlow?: Maybe<ApprovalFlow>;
  updateApprovalRule?: Maybe<ApprovalRule>;
  updateAssociateRole?: Maybe<AssociateRole>;
  updateAttributeGroup?: Maybe<AttributeGroup>;
  updateBusinessUnit?: Maybe<BusinessUnit>;
  updateCart?: Maybe<Cart>;
  updateCartDiscount?: Maybe<CartDiscount>;
  updateCategory?: Maybe<Category>;
  updateChannel?: Maybe<Channel>;
  updateCustomer?: Maybe<Customer>;
  updateCustomerGroup?: Maybe<CustomerGroup>;
  updateDiscountCode?: Maybe<DiscountCode>;
  updateExtension?: Maybe<Extension>;
  updateInventoryEntry?: Maybe<InventoryEntry>;
  updateMyBusinessUnit?: Maybe<BusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCustomer?: Maybe<Customer>;
  updateMyPayment?: Maybe<MyPayment>;
  updateMyQuote?: Maybe<Quote>;
  updateMyQuoteRequest?: Maybe<QuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyShoppingList?: Maybe<ShoppingList>;
  updateOrder?: Maybe<Order>;
  updateOrderEdit?: Maybe<OrderEdit>;
  updatePayment?: Maybe<Payment>;
  updateProduct?: Maybe<Product>;
  updateProductDiscount?: Maybe<ProductDiscount>;
  updateProductSelection?: Maybe<ProductSelection>;
  updateProductTailoring?: Maybe<ProductTailoring>;
  updateProductType?: Maybe<ProductTypeDefinition>;
  updateProject?: Maybe<ProjectProjection>;
  updateQuote?: Maybe<Quote>;
  updateQuoteRequest?: Maybe<QuoteRequest>;
  updateReview?: Maybe<Review>;
  updateShippingMethod?: Maybe<ShippingMethod>;
  updateShoppingList?: Maybe<ShoppingList>;
  updateStagedQuote?: Maybe<StagedQuote>;
  updateStandalonePrice?: Maybe<StandalonePrice>;
  updateState?: Maybe<State>;
  updateStore?: Maybe<Store>;
  updateSubscription?: Maybe<CommercetoolsSubscription>;
  updateTaxCategory?: Maybe<TaxCategory>;
  updateTypeDefinition?: Maybe<TypeDefinition>;
  updateZone?: Maybe<Zone>;
};


export type MutationCreateApiClientArgs = {
  draft: CreateApiClient;
};


export type MutationCreateApprovalRuleArgs = {
  asAssociate: AsAssociateArgument;
  draft: ApprovalRuleDraft;
};


export type MutationCreateAssociateRoleArgs = {
  draft: AssociateRoleDraft;
};


export type MutationCreateAttributeGroupArgs = {
  draft: AttributeGroupDraft;
};


export type MutationCreateBusinessUnitArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  draft: BusinessUnitDraft;
};


export type MutationCreateCartArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  draft: CartDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateCartDiscountArgs = {
  draft: CartDiscountDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateCategoryArgs = {
  draft: CategoryDraft;
};


export type MutationCreateChannelArgs = {
  draft: ChannelDraft;
};


export type MutationCreateCustomerGroupArgs = {
  draft: CustomerGroupDraft;
};


export type MutationCreateDiscountCodeArgs = {
  draft: DiscountCodeDraft;
};


export type MutationCreateExtensionArgs = {
  draft: ExtensionDraft;
};


export type MutationCreateInventoryEntryArgs = {
  draft: InventoryEntryDraft;
};


export type MutationCreateMyBusinessUnitArgs = {
  draft: MyBusinessUnitDraft;
};


export type MutationCreateMyCartArgs = {
  draft: MyCartDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateMyOrderFromCartArgs = {
  draft: OrderMyCartCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateMyOrderFromQuoteArgs = {
  draft: OrderMyQuoteCommand;
};


export type MutationCreateMyPaymentArgs = {
  draft: MyPaymentDraft;
};


export type MutationCreateMyQuoteRequestArgs = {
  draft: MyQuoteRequestDraft;
};


export type MutationCreateMyShoppingListArgs = {
  draft: MyShoppingListDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateOrUpdateCustomObjectArgs = {
  draft: CustomObjectDraft;
};


export type MutationCreateOrderEditArgs = {
  draft: OrderEditDraft;
};


export type MutationCreateOrderFromCartArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  draft: OrderCartCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateOrderFromQuoteArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  draft: OrderQuoteCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreatePaymentArgs = {
  draft: PaymentDraft;
};


export type MutationCreateProductArgs = {
  draft: ProductDraft;
};


export type MutationCreateProductDiscountArgs = {
  draft: ProductDiscountDraft;
};


export type MutationCreateProductSelectionArgs = {
  draft: CreateProductSelectionDraft;
};


export type MutationCreateProductTailoringArgs = {
  draft: ProductTailoringDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateProductTypeArgs = {
  draft: ProductTypeDraft;
};


export type MutationCreateQuoteArgs = {
  draft: QuoteDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateQuoteRequestArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  draft: QuoteRequestDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateReviewArgs = {
  draft: ReviewDraft;
};


export type MutationCreateShippingMethodArgs = {
  draft: ShippingMethodDraft;
};


export type MutationCreateShoppingListArgs = {
  draft: ShoppingListDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateStagedQuoteArgs = {
  draft: StagedQuoteDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCreateStandalonePriceArgs = {
  draft: CreateStandalonePrice;
};


export type MutationCreateStateArgs = {
  draft: StateDraft;
};


export type MutationCreateStoreArgs = {
  draft: CreateStore;
};


export type MutationCreateSubscriptionArgs = {
  draft: SubscriptionDraft;
};


export type MutationCreateTaxCategoryArgs = {
  draft: TaxCategoryDraft;
};


export type MutationCreateTypeDefinitionArgs = {
  draft: TypeDefinitionDraft;
};


export type MutationCreateZoneArgs = {
  draft: CreateZone;
};


export type MutationCustomerChangeMyPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationCustomerChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationCustomerConfirmEmailArgs = {
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};


export type MutationCustomerConfirmMyEmailArgs = {
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
};


export type MutationCustomerCreateEmailVerificationTokenArgs = {
  id: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  ttlMinutes: Scalars['Int']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};


export type MutationCustomerCreatePasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  ttlMinutes?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCustomerResetMyPasswordArgs = {
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
};


export type MutationCustomerResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};


export type MutationCustomerSignInArgs = {
  draft: CustomerSignInDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCustomerSignMeInArgs = {
  draft: CustomerSignMeInDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCustomerSignMeUpArgs = {
  draft: CustomerSignMeUpDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationCustomerSignUpArgs = {
  draft: CustomerSignUpDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationDeleteApiClientArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAssociateRoleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteAttributeGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteBusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteCartArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteChannelArgs = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};


export type MutationDeleteCustomObjectArgs = {
  container?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version?: InputMaybe<Scalars['Long']['input']>;
};


export type MutationDeleteCustomerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteCustomerGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteDiscountCodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteExtensionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteInventoryEntryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteMyCartArgs = {
  id: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteMyCustomerArgs = {
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteMyPaymentArgs = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};


export type MutationDeleteMyShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteOrderEditArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeletePaymentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteProductDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteProductSelectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteProductTailoringArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteProductTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteReviewArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteShippingMethodArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteStagedQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteStandalonePriceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteStateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteStoreArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteTaxCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteTypeDefinitionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationDeleteZoneArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationImportOrderArgs = {
  draft: ImportOrderDraft;
};


export type MutationReplicateCartArgs = {
  asAssociate?: InputMaybe<AsAssociateArgument>;
  key?: InputMaybe<Scalars['String']['input']>;
  reference: ReferenceInput;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type MutationReplicateMyCartArgs = {
  reference: ReferenceInput;
};


export type MutationSignUpInMyBusinessUnitArgs = {
  draft: SignUpInMyBusinessUnitDraft;
};


export type MutationUpdateApprovalFlowArgs = {
  actions: Array<ApprovalFlowUpdateAction>;
  asAssociate: AsAssociateArgument;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};


export type MutationUpdateApprovalRuleArgs = {
  actions: Array<ApprovalRuleUpdateAction>;
  asAssociate: AsAssociateArgument;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateAssociateRoleArgs = {
  actions: Array<AssociateRoleUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateAttributeGroupArgs = {
  actions: Array<AttributeGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateBusinessUnitArgs = {
  actions: Array<BusinessUnitUpdateAction>;
  asAssociate?: InputMaybe<AsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateCartArgs = {
  actions: Array<CartUpdateAction>;
  asAssociate?: InputMaybe<AsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateCartDiscountArgs = {
  actions: Array<CartDiscountUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateCategoryArgs = {
  actions: Array<CategoryUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateChannelArgs = {
  actions: Array<ChannelUpdateAction>;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};


export type MutationUpdateCustomerArgs = {
  actions: Array<CustomerUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateCustomerGroupArgs = {
  actions: Array<CustomerGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateDiscountCodeArgs = {
  actions: Array<DiscountCodeUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateExtensionArgs = {
  actions: Array<ExtensionUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateInventoryEntryArgs = {
  actions: Array<InventoryEntryUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyBusinessUnitArgs = {
  actions: Array<MyBusinessUnitUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyCartArgs = {
  actions: Array<MyCartUpdateAction>;
  id: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyCustomerArgs = {
  actions: Array<MyCustomerUpdateAction>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyPaymentArgs = {
  actions: Array<MyPaymentUpdateAction>;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyQuoteArgs = {
  actions: Array<MyQuoteUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyQuoteRequestArgs = {
  actions: Array<MyQuoteRequestUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateMyShoppingListArgs = {
  actions: Array<MyShoppingListUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateOrderArgs = {
  actions: Array<OrderUpdateAction>;
  asAssociate?: InputMaybe<AsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateOrderEditArgs = {
  actions: Array<OrderEditUpdateAction>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdatePaymentArgs = {
  actions: Array<PaymentUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateProductArgs = {
  actions: Array<ProductUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateProductDiscountArgs = {
  actions: Array<ProductDiscountUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateProductSelectionArgs = {
  actions: Array<ProductSelectionUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateProductTailoringArgs = {
  actions: Array<ProductTailoringUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateProductTypeArgs = {
  actions: Array<ProductTypeUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateProjectArgs = {
  actions: Array<ProjectSettingsUpdateAction>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateQuoteArgs = {
  actions: Array<QuoteUpdateAction>;
  asAssociate?: InputMaybe<AsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateQuoteRequestArgs = {
  actions: Array<QuoteRequestUpdateAction>;
  asAssociate?: InputMaybe<AsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateReviewArgs = {
  actions: Array<ReviewUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateShippingMethodArgs = {
  actions: Array<ShippingMethodUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateShoppingListArgs = {
  actions: Array<ShoppingListUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateStagedQuoteArgs = {
  actions: Array<StagedQuoteUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateStandalonePriceArgs = {
  actions: Array<StandalonePriceUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateStateArgs = {
  actions: Array<StateUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateStoreArgs = {
  actions: Array<StoreUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateSubscriptionArgs = {
  actions: Array<SubscriptionUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateTaxCategoryArgs = {
  actions: Array<TaxCategoryUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateTypeDefinitionArgs = {
  actions: Array<TypeUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};


export type MutationUpdateZoneArgs = {
  actions: Array<ZoneUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type MyBusinessUnitDraft = {
  addresses?: InputMaybe<Array<AddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentUnit?: InputMaybe<ResourceIdentifierInput>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  storeMode?: InputMaybe<Scalars['String']['input']>;
  unitType: BusinessUnitType;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type MyBusinessUnitUpdateAction = {
  addAddress?: InputMaybe<AddMyBusinessUnitAddress>;
  addBillingAddressId?: InputMaybe<AddMyBusinessUnitBillingAddressId>;
  addShippingAddressId?: InputMaybe<AddMyBusinessUnitShippingAddressId>;
  changeAddress?: InputMaybe<ChangeMyBusinessUnitAddress>;
  changeAssociate?: InputMaybe<ChangeMyBusinessUnitAssociate>;
  changeName?: InputMaybe<ChangeMyBusinessUnitName>;
  changeParentUnit?: InputMaybe<ChangeMyBusinessUnitParentUnit>;
  removeAddress?: InputMaybe<RemoveMyBusinessUnitAddress>;
  removeAssociate?: InputMaybe<RemoveMyBusinessUnitAssociate>;
  removeBillingAddressId?: InputMaybe<RemoveMyBusinessUnitBillingAddressId>;
  removeShippingAddressId?: InputMaybe<RemoveMyBusinessUnitShippingAddressId>;
  setAddressCustomField?: InputMaybe<SetMyBusinessUnitAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetMyBusinessUnitAddressCustomType>;
  setContactEmail?: InputMaybe<SetMyBusinessUnitContactEmail>;
  setCustomField?: InputMaybe<SetMyBusinessUnitCustomField>;
  setCustomType?: InputMaybe<SetMyBusinessUnitCustomType>;
  setDefaultBillingAddress?: InputMaybe<SetMyBusinessUnitDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<SetMyBusinessUnitDefaultShippingAddress>;
};

export type MyCartDraft = {
  billingAddress?: InputMaybe<AddressInput>;
  businessUnit?: InputMaybe<ResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  custom?: InputMaybe<CustomFieldsDraft>;
  customShipping?: InputMaybe<Array<CustomShippingDraft>>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  inventoryMode?: InputMaybe<InventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<AddressInput>>;
  lineItems?: InputMaybe<Array<MyLineItemDraft>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  shipping?: InputMaybe<Array<ShippingDraft>>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
  shippingMode?: InputMaybe<ShippingMode>;
  store?: InputMaybe<ResourceIdentifierInput>;
  taxMode?: InputMaybe<TaxMode>;
};

export type MyCartUpdateAction = {
  addDiscountCode?: InputMaybe<AddCartDiscountCode>;
  addItemShippingAddress?: InputMaybe<AddCartItemShippingAddress>;
  addLineItem?: InputMaybe<AddMyCartLineItem>;
  addPayment?: InputMaybe<AddCartPayment>;
  addShoppingList?: InputMaybe<AddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeLineItemQuantity?: InputMaybe<ChangeCartLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<ChangeCartLineItemsOrder>;
  changeTaxMode?: InputMaybe<ChangeMyCartTaxMode>;
  recalculate?: InputMaybe<RecalculateCart>;
  removeDiscountCode?: InputMaybe<RemoveCartDiscountCode>;
  removeItemShippingAddress?: InputMaybe<RemoveCartItemShippingAddress>;
  removeLineItem?: InputMaybe<RemoveCartLineItem>;
  removePayment?: InputMaybe<RemoveCartPayment>;
  setBillingAddress?: InputMaybe<SetCartBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetCartBillingAddressCustomType>;
  setBusinessUnit?: InputMaybe<SetCartBusinessUnit>;
  setCountry?: InputMaybe<SetCartCountry>;
  setCustomField?: InputMaybe<SetCartCustomField>;
  setCustomType?: InputMaybe<SetCartCustomType>;
  setCustomerEmail?: InputMaybe<SetCartCustomerEmail>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: InputMaybe<SetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetCartItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<SetCartLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetCartLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<SetCartLineItemDistributionChannel>;
  setLineItemShippingDetails?: InputMaybe<SetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: InputMaybe<SetCartLineItemSupplyChannel>;
  setLocale?: InputMaybe<SetCartLocale>;
  setShippingAddress?: InputMaybe<SetCartShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<SetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetCartShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<SetCartShippingCustomField>;
  setShippingCustomType?: InputMaybe<SetCartShippingCustomType>;
  setShippingMethod?: InputMaybe<SetMyCartShippingMethod>;
  updateItemShippingAddress?: InputMaybe<UpdateCartItemShippingAddress>;
};

export type MyCustomerUpdateAction = {
  addAddress?: InputMaybe<AddCustomerAddress>;
  addBillingAddressId?: InputMaybe<AddCustomerBillingAddressId>;
  addShippingAddressId?: InputMaybe<AddCustomerShippingAddressId>;
  changeAddress?: InputMaybe<ChangeCustomerAddress>;
  changeEmail?: InputMaybe<ChangeCustomerEmail>;
  removeAddress?: InputMaybe<RemoveCustomerAddress>;
  removeBillingAddressId?: InputMaybe<RemoveCustomerBillingAddressId>;
  removeShippingAddressId?: InputMaybe<RemoveCustomerShippingAddressId>;
  setAddressCustomField?: InputMaybe<SetCustomerAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetCustomerAddressCustomType>;
  setCompanyName?: InputMaybe<SetCustomerCompanyName>;
  setCustomField?: InputMaybe<SetCustomerCustomField>;
  setCustomType?: InputMaybe<SetCustomerCustomType>;
  setDateOfBirth?: InputMaybe<SetCustomerDateOfBirth>;
  setDefaultBillingAddress?: InputMaybe<SetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<SetCustomerDefaultShippingAddress>;
  setFirstName?: InputMaybe<SetCustomerFirstName>;
  setLastName?: InputMaybe<SetCustomerLastName>;
  setLocale?: InputMaybe<SetCustomerLocale>;
  setMiddleName?: InputMaybe<SetCustomerMiddleName>;
  setSalutation?: InputMaybe<SetCustomerSalutation>;
  setTitle?: InputMaybe<SetCustomerTitle>;
  setVatId?: InputMaybe<SetCustomerVatId>;
};

export type MyLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * My Payments endpoint provides access to payments scoped to a specific user.
 * [documentation](https://docs.commercetools.com/api/projects/me-payments#mypayment)
 */
export type MyPayment = {
  amountPlanned: Money;
  anonymousId?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  id: Scalars['String']['output'];
  paymentMethodInfo: PaymentMethodInfo;
  transactions: Array<Transaction>;
  version: Scalars['Long']['output'];
};

export type MyPaymentDraft = {
  amountPlanned: MoneyInput;
  custom?: InputMaybe<CustomFieldsDraft>;
  paymentMethodInfo?: InputMaybe<PaymentMethodInfoInput>;
  transaction?: InputMaybe<MyTransactionDraft>;
};

export type MyPaymentQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<MyPayment>;
  total: Scalars['Long']['output'];
};

export type MyPaymentUpdateAction = {
  addTransaction?: InputMaybe<AddMyPaymentTransaction>;
  changeAmountPlanned?: InputMaybe<ChangePaymentAmountPlanned>;
  setCustomField?: InputMaybe<SetPaymentCustomField>;
  setMethodInfoInterface?: InputMaybe<SetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: InputMaybe<SetPaymentMethodInfoMethod>;
  setMethodInfoName?: InputMaybe<SetPaymentMethodInfoName>;
};

export type MyQuoteRequestDraft = {
  cartId: Scalars['String']['input'];
  cartVersion: Scalars['Long']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
};

export type MyQuoteRequestUpdateAction = {
  cancelQuoteRequest?: InputMaybe<CancelQuoteRequest>;
  setCustomField?: InputMaybe<SetMyQuoteRequestCustomField>;
  setCustomType?: InputMaybe<SetMyQuoteRequestCustomType>;
};

export enum MyQuoteState {
  Accepted = 'Accepted',
  Declined = 'Declined'
}

export type MyQuoteUpdateAction = {
  changeMyQuoteState?: InputMaybe<ChangeMyQuoteMyQuoteState>;
  requestQuoteRenegotiation?: InputMaybe<RequestQuoteRenegotiation>;
  setCustomField?: InputMaybe<SetQuoteCustomField>;
  setCustomType?: InputMaybe<SetQuoteCustomType>;
};

export type MyShoppingListDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  lineItems?: InputMaybe<Array<ShoppingListLineItemDraft>>;
  name: Array<LocalizedStringItemInputType>;
  textLineItems?: InputMaybe<Array<TextLineItemDraft>>;
};

export type MyShoppingListUpdateAction = {
  addLineItem?: InputMaybe<AddShoppingListLineItem>;
  addTextLineItem?: InputMaybe<AddShoppingListTextLineItem>;
  changeLineItemQuantity?: InputMaybe<ChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<ChangeShoppingListLineItemsOrder>;
  changeName?: InputMaybe<ChangeShoppingListName>;
  changeTextLineItemName?: InputMaybe<ChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: InputMaybe<ChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: InputMaybe<ChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: InputMaybe<RemoveShoppingListLineItem>;
  removeTextLineItem?: InputMaybe<RemoveShoppingListTextLineItem>;
  setCustomField?: InputMaybe<SetShoppingListCustomField>;
  setCustomType?: InputMaybe<SetShoppingListCustomType>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: InputMaybe<SetShoppingListDescription>;
  setLineItemCustomField?: InputMaybe<SetShoppingListLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetShoppingListLineItemCustomType>;
  setStore?: InputMaybe<SetShoppingListStore>;
  setTextLineItemCustomField?: InputMaybe<SetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: InputMaybe<SetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: InputMaybe<SetShoppingListTextLineItemDescription>;
};

export type MyTransactionDraft = {
  amount: MoneyInput;
  custom?: InputMaybe<CustomFieldsDraft>;
  interactionId?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: TransactionType;
};

export type NestedAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
  typeRef: Reference;
};

export type NotProcessed = OrderEditResult & {
  type: Scalars['String']['output'];
};

export type NotificationFormat = {
  type: Scalars['String']['output'];
};

export type NumberAttribute = Attribute & {
  name: Scalars['String']['output'];
  value: Scalars['BigDecimal']['output'];
};

export type NumberAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type NumberField = CustomField & {
  name: Scalars['String']['output'];
  value: Scalars['BigDecimal']['output'];
};

export type NumberType = FieldType & {
  name: Scalars['String']['output'];
};

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type Order = ReferenceExpandable & Versioned & {
  anonymousId?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  businessUnit?: Maybe<BusinessUnit>;
  businessUnitRef?: Maybe<KeyReference>;
  cart?: Maybe<Cart>;
  cartRef?: Maybe<Reference>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customLineItems: Array<CustomLineItem>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  customerId?: Maybe<Scalars['String']['output']>;
  directDiscounts: Array<DirectDiscount>;
  discountCodes: Array<DiscountCodeInfo>;
  discountOnTotalPrice?: Maybe<DiscountOnTotalPrice>;
  id: Scalars['String']['output'];
  inventoryMode: InventoryMode;
  itemShippingAddresses: Array<Address>;
  /** @deprecated An internal field that should not be used in customer logic */
  lastMessageSequenceNumber: Scalars['Long']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  lineItems: Array<LineItem>;
  locale?: Maybe<Scalars['Locale']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  orderState: OrderState;
  origin: CartOrigin;
  paymentInfo?: Maybe<PaymentInfo>;
  paymentState?: Maybe<PaymentState>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Quote>;
  quoteRef?: Maybe<Reference>;
  refusedGifts: Array<CartDiscount>;
  refusedGiftsRefs: Array<Reference>;
  returnInfo: Array<ReturnInfo>;
  shipmentState?: Maybe<ShipmentState>;
  shipping: Array<Shipping>;
  shippingAddress?: Maybe<Address>;
  shippingCustomFields?: Maybe<CustomFieldsType>;
  shippingInfo?: Maybe<ShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingMode: ShippingMode;
  shippingRateInput?: Maybe<ShippingRateInput>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  syncInfo: Array<SyncInfo>;
  taxCalculationMode: TaxCalculationMode;
  taxMode: TaxMode;
  taxRoundingMode: RoundingMode;
  taxedPrice?: Maybe<TaxedPrice>;
  taxedShippingPrice?: Maybe<TaxedPrice>;
  totalPrice: Money;
  version: Scalars['Long']['output'];
};


/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type OrderLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBillingAddressSet = MessagePayload & OrderMessagePayload & {
  address?: Maybe<Address>;
  oldAddress?: Maybe<Address>;
  type: Scalars['String']['output'];
};

export type OrderCartCommand = {
  cart?: InputMaybe<ResourceIdentifierInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderState?: InputMaybe<OrderState>;
  paymentState?: InputMaybe<PaymentState>;
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  shipmentState?: InputMaybe<ShipmentState>;
  state?: InputMaybe<ResourceIdentifierInput>;
  version: Scalars['Long']['input'];
};

export type OrderCreated = MessagePayload & OrderMessagePayload & {
  order: Order;
  type: Scalars['String']['output'];
};

export type OrderCustomFieldAdded = MessagePayload & OrderMessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type OrderCustomFieldChanged = MessagePayload & OrderMessagePayload & {
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type OrderCustomFieldRemoved = MessagePayload & OrderMessagePayload & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type OrderCustomLineItemAdded = MessagePayload & OrderMessagePayload & {
  customLineItem: CustomLineItem;
  type: Scalars['String']['output'];
};

export type OrderCustomLineItemDiscountSet = MessagePayload & OrderMessagePayload & {
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  type: Scalars['String']['output'];
};

export type OrderCustomLineItemQuantityChanged = MessagePayload & OrderMessagePayload & {
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  oldQuantity?: Maybe<Scalars['Long']['output']>;
  quantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type OrderCustomLineItemRemoved = MessagePayload & OrderMessagePayload & {
  customLineItem?: Maybe<CustomLineItem>;
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type OrderCustomTypeRemoved = MessagePayload & OrderMessagePayload & {
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type OrderCustomTypeSet = MessagePayload & OrderMessagePayload & {
  customFields: CustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type OrderCustomerEmailSet = MessagePayload & OrderMessagePayload & {
  email?: Maybe<Scalars['String']['output']>;
  oldEmail?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type OrderCustomerGroupSet = MessagePayload & OrderMessagePayload & {
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  oldCustomerGroup?: Maybe<CustomerGroup>;
  oldCustomerGroupRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type OrderCustomerSet = MessagePayload & OrderMessagePayload & {
  customer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  customerRef?: Maybe<Reference>;
  oldCustomer?: Maybe<Customer>;
  oldCustomerGroup?: Maybe<CustomerGroup>;
  oldCustomerGroupRef?: Maybe<Reference>;
  oldCustomerRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type OrderDeleted = MessagePayload & OrderMessagePayload & {
  order?: Maybe<Order>;
  type: Scalars['String']['output'];
};

export type OrderDiscountCodeAdded = MessagePayload & OrderMessagePayload & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String']['output'];
};

export type OrderDiscountCodeRemoved = MessagePayload & OrderMessagePayload & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String']['output'];
};

export type OrderDiscountCodeStateSet = MessagePayload & OrderMessagePayload & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  oldState?: Maybe<DiscountCodeState>;
  state: DiscountCodeState;
  type: Scalars['String']['output'];
};

export type OrderEdit = Versioned & {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  resource?: Maybe<Order>;
  resourceRef: Reference;
  result: OrderEditResult;
  stagedActions: Array<StagedOrderUpdateActionOutput>;
  version: Scalars['Long']['output'];
};

export type OrderEditApplied = MessagePayload & OrderMessagePayload & {
  edit?: Maybe<OrderEdit>;
  editRef: Reference;
  result: Applied;
  type: Scalars['String']['output'];
};

export type OrderEditDraft = {
  comment?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  resource: ReferenceInput;
  stagedActions: Array<StagedOrderUpdateAction>;
};

export type OrderEditLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type OrderEditLimitsProjection = {
  total: OrderEditLimitWithCurrent;
};

export type OrderEditQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<OrderEdit>;
  total: Scalars['Long']['output'];
};

export type OrderEditResult = {
  type: Scalars['String']['output'];
};

export type OrderEditUpdateAction = {
  addStagedAction?: InputMaybe<AddOrderEditStagedAction>;
  setComment?: InputMaybe<SetOrderEditComment>;
  setCustomField?: InputMaybe<SetOrderEditCustomField>;
  setCustomType?: InputMaybe<SetOrderEditCustomType>;
  setKey?: InputMaybe<SetOrderEditKey>;
  setStagedActions?: InputMaybe<SetOrderEditStagedActions>;
};

export type OrderExcerpt = {
  taxedPrice?: Maybe<TaxedPrice>;
  totalPrice: Money;
  version?: Maybe<Scalars['Long']['output']>;
};

export type OrderImported = MessagePayload & OrderMessagePayload & {
  order: Order;
  type: Scalars['String']['output'];
};

export type OrderLineItemAdded = MessagePayload & OrderMessagePayload & {
  addedQuantity: Scalars['Long']['output'];
  lineItem: LineItem;
  type: Scalars['String']['output'];
};

export type OrderLineItemDiscountSet = MessagePayload & OrderMessagePayload & {
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  taxedPricePortions: Array<MethodTaxedPrice>;
  totalPrice: Money;
  type: Scalars['String']['output'];
};

export type OrderLineItemDistributionChannelSet = MessagePayload & OrderMessagePayload & {
  distributionChannel?: Maybe<Channel>;
  distributionChannelRef?: Maybe<Reference>;
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type OrderLineItemRemoved = MessagePayload & OrderMessagePayload & {
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  newPrice?: Maybe<ProductPrice>;
  newQuantity: Scalars['Long']['output'];
  newShippingDetails?: Maybe<ItemShippingDetails>;
  newState: Scalars['Set']['output'];
  newTaxedPrice?: Maybe<TaxedItemPrice>;
  newTotalPrice: Money;
  removedQuantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type OrderMessagePayload = {
  type: Scalars['String']['output'];
};

export type OrderMyCartCommand = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type OrderMyQuoteCommand = {
  id: Scalars['String']['input'];
  quoteStateToAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};

export type OrderPaymentAdded = MessagePayload & OrderMessagePayload & {
  paymentRef: Reference;
  type: Scalars['String']['output'];
};

export type OrderPaymentRemoved = MessagePayload & OrderMessagePayload & {
  paymentRef: Reference;
  removedPaymentInfo: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type OrderPaymentStateChanged = MessagePayload & OrderMessagePayload & {
  oldPaymentState?: Maybe<PaymentState>;
  paymentState: PaymentState;
  type: Scalars['String']['output'];
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterface = {
  order?: Maybe<Order>;
  orders: OrderQueryResult;
};


/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterfaceOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterfaceOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type OrderQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Order>;
  total: Scalars['Long']['output'];
};

export type OrderQuoteCommand = {
  custom?: InputMaybe<CustomFieldsDraft>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderState?: InputMaybe<OrderState>;
  paymentState?: InputMaybe<PaymentState>;
  quote?: InputMaybe<ResourceIdentifierInput>;
  quoteStateToAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  shipmentState?: InputMaybe<ShipmentState>;
  state?: InputMaybe<ResourceIdentifierInput>;
  version: Scalars['Long']['input'];
};

export type OrderReturnShipmentStateChanged = MessagePayload & OrderMessagePayload & {
  returnItemId: Scalars['String']['output'];
  returnShipmentState: ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type OrderSearchConfiguration = {
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  status: OrderSearchStatus;
};

export enum OrderSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated'
}

export type OrderShipmentStateChanged = MessagePayload & OrderMessagePayload & {
  oldShipmentState?: Maybe<ShipmentState>;
  shipmentState: ShipmentState;
  type: Scalars['String']['output'];
};

export type OrderShippingAddressSet = MessagePayload & OrderMessagePayload & {
  address?: Maybe<Address>;
  oldAddress?: Maybe<Address>;
  type: Scalars['String']['output'];
};

export type OrderShippingInfoSet = MessagePayload & OrderMessagePayload & {
  oldShippingInfo?: Maybe<ShippingInfo>;
  shippingInfo?: Maybe<ShippingInfo>;
  type: Scalars['String']['output'];
};

export type OrderShippingRateInputSet = MessagePayload & OrderMessagePayload & {
  oldShippingRateInput?: Maybe<ShippingRateInput>;
  shippingRateInput?: Maybe<ShippingRateInput>;
  type: Scalars['String']['output'];
};

export enum OrderState {
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Confirmed = 'Confirmed',
  Open = 'Open'
}

export type OrderStateChanged = MessagePayload & OrderMessagePayload & {
  oldOrderState?: Maybe<OrderState>;
  orderId: Scalars['String']['output'];
  orderState: OrderState;
  type: Scalars['String']['output'];
};

export type OrderStateTransition = MessagePayload & OrderMessagePayload & {
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<State>;
  oldStateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String']['output'];
};

export type OrderStoreSet = MessagePayload & OrderMessagePayload & {
  oldStore?: Maybe<Store>;
  oldStoreRef?: Maybe<KeyReference>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  type: Scalars['String']['output'];
};

export type OrderUpdateAction = {
  addDelivery?: InputMaybe<AddOrderDelivery>;
  addItemShippingAddress?: InputMaybe<AddOrderItemShippingAddress>;
  addParcelToDelivery?: InputMaybe<AddOrderParcelToDelivery>;
  addPayment?: InputMaybe<AddOrderPayment>;
  addReturnInfo?: InputMaybe<AddOrderReturnInfo>;
  changeOrderState?: InputMaybe<ChangeOrderState>;
  changePaymentState?: InputMaybe<ChangeOrderPaymentState>;
  changeShipmentState?: InputMaybe<ChangeOrderShipmentState>;
  importCustomLineItemState?: InputMaybe<ImportOrderCustomLineItemState>;
  importLineItemState?: InputMaybe<ImportOrderLineItemState>;
  removeDelivery?: InputMaybe<RemoveOrderDelivery>;
  removeItemShippingAddress?: InputMaybe<RemoveOrderItemShippingAddress>;
  removeParcelFromDelivery?: InputMaybe<RemoveOrderParcelFromDelivery>;
  removePayment?: InputMaybe<RemoveOrderPayment>;
  setBillingAddress?: InputMaybe<SetOrderBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetOrderBillingAddressCustomType>;
  setCustomField?: InputMaybe<SetOrderCustomField>;
  setCustomLineItemCustomField?: InputMaybe<SetOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<SetOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<SetOrderCustomLineItemShippingDetails>;
  setCustomType?: InputMaybe<SetOrderCustomType>;
  setCustomerEmail?: InputMaybe<SetOrderCustomerEmail>;
  setCustomerId?: InputMaybe<SetOrderCustomerId>;
  setDeliveryAddress?: InputMaybe<SetOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: InputMaybe<SetOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: InputMaybe<SetOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: InputMaybe<SetOrderDeliveryCustomField>;
  setDeliveryCustomType?: InputMaybe<SetOrderDeliveryCustomType>;
  setDeliveryItems?: InputMaybe<SetOrderDeliveryItems>;
  setItemShippingAddressCustomField?: InputMaybe<SetOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<SetOrderLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetOrderLineItemCustomType>;
  setLineItemShippingDetails?: InputMaybe<SetOrderLineItemShippingDetails>;
  setLocale?: InputMaybe<SetOrderLocale>;
  setOrderNumber?: InputMaybe<SetOrderNumber>;
  setParcelCustomField?: InputMaybe<SetOrderParcelCustomField>;
  setParcelCustomType?: InputMaybe<SetOrderParcelCustomType>;
  setParcelItems?: InputMaybe<SetOrderParcelItems>;
  setParcelMeasurements?: InputMaybe<SetOrderParcelMeasurements>;
  setParcelTrackingData?: InputMaybe<SetOrderParcelTrackingData>;
  setPurchaseOrderNumber?: InputMaybe<SetOrderPurchaseOrderNumber>;
  setReturnInfo?: InputMaybe<SetOrderReturnInfo>;
  setReturnItemCustomField?: InputMaybe<SetOrderReturnItemCustomField>;
  setReturnItemCustomType?: InputMaybe<SetOrderReturnItemCustomType>;
  setReturnPaymentState?: InputMaybe<SetOrderReturnPaymentState>;
  setReturnShipmentState?: InputMaybe<SetOrderReturnShipmentState>;
  setShippingAddress?: InputMaybe<SetOrderShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<SetOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetOrderShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<SetOrderShippingCustomField>;
  setShippingCustomType?: InputMaybe<SetOrderShippingCustomType>;
  setStore?: InputMaybe<SetOrderStore>;
  transitionCustomLineItemState?: InputMaybe<TransitionOrderCustomLineItemState>;
  transitionLineItemState?: InputMaybe<TransitionOrderLineItemState>;
  transitionState?: InputMaybe<TransitionOrderState>;
  updateItemShippingAddress?: InputMaybe<UpdateOrderItemShippingAddress>;
  updateSyncInfo?: InputMaybe<UpdateOrderSyncInfo>;
};

export type Parcel = {
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  items: Array<DeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
};

export type ParcelAddedToDelivery = MessagePayload & OrderMessagePayload & {
  delivery: Delivery;
  parcel: Parcel;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ParcelData = {
  custom?: Maybe<CustomFieldsCommand>;
  items: Array<DeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
};

export type ParcelDataDraftType = {
  custom?: InputMaybe<CustomFieldsDraft>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type ParcelDraft = {
  createdAt: Scalars['DateTime']['input'];
  custom?: InputMaybe<CustomFieldsDraft>;
  id: Scalars['String']['input'];
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type ParcelItemsUpdated = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  items: Array<DeliveryItem>;
  oldItems: Array<DeliveryItem>;
  parcelId: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ParcelMeasurements = {
  heightInMillimeter?: Maybe<Scalars['Int']['output']>;
  lengthInMillimeter?: Maybe<Scalars['Int']['output']>;
  weightInGram?: Maybe<Scalars['Int']['output']>;
  widthInMillimeter?: Maybe<Scalars['Int']['output']>;
};

export type ParcelMeasurementsDraftType = {
  heightInMillimeter?: InputMaybe<Scalars['Int']['input']>;
  lengthInMillimeter?: InputMaybe<Scalars['Int']['input']>;
  weightInGram?: InputMaybe<Scalars['Int']['input']>;
  widthInMillimeter?: InputMaybe<Scalars['Int']['input']>;
};

export type ParcelMeasurementsUpdated = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  measurements?: Maybe<ParcelMeasurements>;
  parcelId: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ParcelRemovedFromDelivery = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  parcel: Parcel;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ParcelTrackingDataUpdated = MessagePayload & OrderMessagePayload & {
  deliveryId: Scalars['String']['output'];
  parcelId: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  trackingData?: Maybe<TrackingData>;
  type: Scalars['String']['output'];
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type Payment = Versioned & {
  amountPlanned: Money;
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  id: Scalars['String']['output'];
  interfaceId?: Maybe<Scalars['String']['output']>;
  interfaceInteractionsRaw: InterfaceInteractionsRawResult;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  paymentMethodInfo: PaymentMethodInfo;
  paymentStatus: PaymentStatus;
  transactions: Array<Transaction>;
  version: Scalars['Long']['output'];
};


/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type PaymentInterfaceInteractionsRawArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentCreated = MessagePayload & {
  payment: Payment;
  type: Scalars['String']['output'];
};

export type PaymentDraft = {
  amountPlanned: MoneyInput;
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customer?: InputMaybe<ResourceIdentifierInput>;
  interfaceId?: InputMaybe<Scalars['String']['input']>;
  interfaceInteractions?: InputMaybe<Array<CustomFieldsDraft>>;
  key?: InputMaybe<Scalars['String']['input']>;
  paymentMethodInfo?: InputMaybe<PaymentMethodInfoInput>;
  paymentStatus?: InputMaybe<PaymentStatusInput>;
  transactions?: InputMaybe<Array<TransactionDraft>>;
};

export type PaymentInfo = {
  paymentRefs: Array<Reference>;
  payments: Array<Payment>;
};

export type PaymentInteractionAdded = MessagePayload & {
  interaction: CustomFieldsType;
  type: Scalars['String']['output'];
};

export type PaymentMethodInfo = {
  method?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  paymentInterface?: Maybe<Scalars['String']['output']>;
};


export type PaymentMethodInfoNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type PaymentMethodInfoInput = {
  method?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  paymentInterface?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Payment>;
  total: Scalars['Long']['output'];
};

export enum PaymentState {
  BalanceDue = 'BalanceDue',
  CreditOwed = 'CreditOwed',
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending'
}

export type PaymentStatus = {
  interfaceCode?: Maybe<Scalars['String']['output']>;
  interfaceText?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
};

export type PaymentStatusInput = {
  interfaceCode?: InputMaybe<Scalars['String']['input']>;
  interfaceText?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<ResourceIdentifierInput>;
};

export type PaymentStatusInterfaceCodeSet = MessagePayload & {
  interfaceCode?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PaymentStatusStateTransition = MessagePayload & {
  force: Scalars['Boolean']['output'];
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type PaymentTransactionAdded = MessagePayload & {
  transaction: Transaction;
  type: Scalars['String']['output'];
};

export type PaymentTransactionStateChanged = MessagePayload & {
  state: TransactionState;
  transactionId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PaymentUpdateAction = {
  addInterfaceInteraction?: InputMaybe<AddPaymentInterfaceInteraction>;
  addTransaction?: InputMaybe<AddPaymentTransaction>;
  changeAmountPlanned?: InputMaybe<ChangePaymentAmountPlanned>;
  changeTransactionInteractionId?: InputMaybe<ChangePaymentTransactionInteractionId>;
  changeTransactionState?: InputMaybe<ChangePaymentTransactionState>;
  changeTransactionTimestamp?: InputMaybe<ChangePaymentTransactionTimestamp>;
  setAmountPaid?: InputMaybe<SetPaymentAmountPaid>;
  setAmountRefunded?: InputMaybe<SetPaymentAmountRefunded>;
  setAnonymousId?: InputMaybe<SetPaymentAnonymousId>;
  setAuthorization?: InputMaybe<SetPaymentAuthorization>;
  setCustomField?: InputMaybe<SetPaymentCustomField>;
  setCustomType?: InputMaybe<SetPaymentCustomType>;
  setCustomer?: InputMaybe<SetPaymentCustomer>;
  setExternalId?: InputMaybe<SetPaymentExternalId>;
  setInterfaceId?: InputMaybe<SetPaymentInterfaceId>;
  setKey?: InputMaybe<SetPaymentKey>;
  setMethodInfoInterface?: InputMaybe<SetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: InputMaybe<SetPaymentMethodInfoMethod>;
  setMethodInfoName?: InputMaybe<SetPaymentMethodInfoName>;
  setStatusInterfaceCode?: InputMaybe<SetPaymentStatusInterfaceCode>;
  setStatusInterfaceText?: InputMaybe<SetPaymentStatusInterfaceText>;
  setTransactionCustomField?: InputMaybe<SetPaymentTransactionCustomField>;
  setTransactionCustomType?: InputMaybe<SetPaymentTransactionCustomType>;
  transitionState?: InputMaybe<TransitionPaymentState>;
};

export enum Permission {
  AcceptMyQuotes = 'AcceptMyQuotes',
  AcceptOthersQuotes = 'AcceptOthersQuotes',
  AddChildUnits = 'AddChildUnits',
  CreateApprovalRules = 'CreateApprovalRules',
  CreateMyCarts = 'CreateMyCarts',
  CreateMyOrdersFromMyCarts = 'CreateMyOrdersFromMyCarts',
  CreateMyOrdersFromMyQuotes = 'CreateMyOrdersFromMyQuotes',
  CreateMyQuoteRequestsFromMyCarts = 'CreateMyQuoteRequestsFromMyCarts',
  CreateOrdersFromOthersCarts = 'CreateOrdersFromOthersCarts',
  CreateOrdersFromOthersQuotes = 'CreateOrdersFromOthersQuotes',
  CreateOthersCarts = 'CreateOthersCarts',
  CreateQuoteRequestsFromOthersCarts = 'CreateQuoteRequestsFromOthersCarts',
  DeclineMyQuotes = 'DeclineMyQuotes',
  DeclineOthersQuotes = 'DeclineOthersQuotes',
  DeleteMyCarts = 'DeleteMyCarts',
  DeleteOthersCarts = 'DeleteOthersCarts',
  ReassignMyQuotes = 'ReassignMyQuotes',
  ReassignOthersQuotes = 'ReassignOthersQuotes',
  RenegotiateMyQuotes = 'RenegotiateMyQuotes',
  RenegotiateOthersQuotes = 'RenegotiateOthersQuotes',
  UpdateApprovalFlows = 'UpdateApprovalFlows',
  UpdateApprovalRules = 'UpdateApprovalRules',
  UpdateAssociates = 'UpdateAssociates',
  UpdateBusinessUnitDetails = 'UpdateBusinessUnitDetails',
  UpdateMyCarts = 'UpdateMyCarts',
  UpdateMyOrders = 'UpdateMyOrders',
  UpdateMyQuoteRequests = 'UpdateMyQuoteRequests',
  UpdateOthersCarts = 'UpdateOthersCarts',
  UpdateOthersOrders = 'UpdateOthersOrders',
  UpdateOthersQuoteRequests = 'UpdateOthersQuoteRequests',
  UpdateParentUnit = 'UpdateParentUnit',
  ViewMyCarts = 'ViewMyCarts',
  ViewMyOrders = 'ViewMyOrders',
  ViewMyQuoteRequests = 'ViewMyQuoteRequests',
  ViewMyQuotes = 'ViewMyQuotes',
  ViewOthersCarts = 'ViewOthersCarts',
  ViewOthersOrders = 'ViewOthersOrders',
  ViewOthersQuoteRequests = 'ViewOthersQuoteRequests',
  ViewOthersQuotes = 'ViewOthersQuotes'
}

export type PlainEnumValue = {
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type PlainEnumValueDraft = {
  key: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type PlainEnumValueResult = {
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<PlainEnumValue>;
  total: Scalars['Int']['output'];
};

export type PlatformFormat = NotificationFormat & {
  type: Scalars['String']['output'];
};

export type PlatformFormatInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type Point = Geometry & {
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type PreviewFailure = OrderEditResult & {
  errors: Array<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
};

export type PreviewSuccess = OrderEditResult & {
  messagePayloads: Array<OrderMessagePayload>;
  preview: Order;
  type: Scalars['String']['output'];
};

export type PriceFunction = {
  currencyCode: Scalars['Currency']['output'];
  function: Scalars['String']['output'];
};

export type PriceFunctionDraft = {
  currencyCode: Scalars['Currency']['input'];
  function: Scalars['String']['input'];
};

/**
 * This mode determines which type of Prices the system uses for
 * Product Price Selection as well as for LineItem Price selection
 */
export enum PriceMode {
  /** The system looks up prices from the `prices` field of the ProductVariant inside a Product. */
  Embedded = 'Embedded',
  /** The system looks up prices from Standalone Prices, stored separately from Products. */
  Standalone = 'Standalone'
}

export type PriceSelectorInput = {
  channel?: InputMaybe<ReferenceInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroup?: InputMaybe<ReferenceInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product = ReferenceExpandable & ReviewTarget & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  masterData: ProductCatalogData;
  priceMode?: Maybe<PriceMode>;
  productSelectionRefs: SelectionOfProductQueryResult;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef: Reference;
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  skus: Array<Scalars['String']['output']>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  version: Scalars['Long']['output'];
};


export type ProductProductSelectionRefsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type ProductAddedToCategory = MessagePayload & {
  category: ReferenceId;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type ProductAssignment = {
  product?: Maybe<Product>;
  productRef: Reference;
  productSelection?: Maybe<ProductSelection>;
  productSelectionRef: Reference;
  variantExclusion?: Maybe<ProductVariantExclusion>;
  variantSelection?: Maybe<ProductVariantSelection>;
};

export type ProductAssignmentQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ProductAssignment>;
  total: Scalars['Long']['output'];
};

/**
 * An input object used to define a ProductAttribute.
 *
 * The value should be passed in a form of escaped JSON.
 *
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
 */
export type ProductAttributeInput = {
  name: Scalars['String']['input'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
   */
  value: Scalars['String']['input'];
};

export type ProductCatalogData = {
  current?: Maybe<ProductData>;
  hasStagedChanges: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  staged?: Maybe<ProductData>;
};

export type ProductCreated = MessagePayload & {
  productProjection: ProductProjectionMessagePayload;
  type: Scalars['String']['output'];
};

export type ProductData = {
  allVariants: Array<ProductVariant>;
  categories: Array<Category>;
  categoriesRef: Array<Reference>;
  categoryOrderHint?: Maybe<Scalars['String']['output']>;
  categoryOrderHints: Array<CategoryOrderHint>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  masterVariant: ProductVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  searchKeyword?: Maybe<Array<SearchKeyword>>;
  searchKeywords: Array<SearchKeywords>;
  skus: Array<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<LocalizedString>;
  variant?: Maybe<ProductVariant>;
  variants: Array<ProductVariant>;
};


export type ProductDataAllVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  isOnStock?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ProductDataCategoryOrderHintArgs = {
  categoryId: Scalars['String']['input'];
};


export type ProductDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductDataSearchKeywordArgs = {
  locale: Scalars['Locale']['input'];
};


export type ProductDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductDataVariantArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type ProductDataVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  isOnStock?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductDeleted = MessagePayload & {
  currentProjection?: Maybe<ProductProjectionMessagePayload>;
  removedImageUrls: Scalars['Set']['output'];
  type: Scalars['String']['output'];
};

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type ProductDiscount = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isValid: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  predicate: Scalars['String']['output'];
  referenceRefs: Array<Reference>;
  sortOrder: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: ProductDiscountValue;
  version: Scalars['Long']['output'];
};


/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type ProductDiscountDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type ProductDiscountNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductDiscountDraft = {
  /** Description of the ProductDiscount. */
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  /** Set to `true` to activate the ProductDiscount, set to `false` to deactivate it (even though the `predicate` matches). */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User-defined unique identifier for the ProductDiscount. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Name of the ProductDiscount. */
  name: Array<LocalizedStringItemInputType>;
  /** A valid ProductDiscount Predicate. */
  predicate: Scalars['String']['input'];
  /**
   * Decimal value between 0 and 1 (passed as String literal) that defines the order of ProductDiscounts to apply in case more than one is applicable and active. A ProductDiscount with a higher `sortOrder` is prioritized.
   * The value must be **unique** among all ProductDiscounts in the Project.
   */
  sortOrder: Scalars['String']['input'];
  /** Date and time (UTC) from which the Discount is effective. */
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date and time (UTC) until which the Discount is effective. */
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  /** Type of Discount and its corresponding value. */
  value: ProductDiscountValueInput;
};

export type ProductDiscountLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type ProductDiscountLimitsProjection = {
  totalActive: ProductDiscountLimitWithCurrent;
};

export type ProductDiscountQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ProductDiscount>;
  total: Scalars['Long']['output'];
};

export type ProductDiscountUpdateAction = {
  changeIsActive?: InputMaybe<ChangeProductDiscountIsActive>;
  changeName?: InputMaybe<ChangeProductDiscountName>;
  changePredicate?: InputMaybe<ChangeProductDiscountPredicate>;
  changeSortOrder?: InputMaybe<ChangeProductDiscountSortOrder>;
  changeValue?: InputMaybe<ChangeProductDiscountValue>;
  setDescription?: InputMaybe<SetProductDiscountDescription>;
  setKey?: InputMaybe<SetProductDiscountKey>;
  setValidFrom?: InputMaybe<SetProductDiscountValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetProductDiscountValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetProductDiscountValidUntil>;
};

export type ProductDiscountValue = {
  type: Scalars['String']['output'];
};

export type ProductDiscountValueInput = {
  absolute?: InputMaybe<AbsoluteDiscountValueInput>;
  external?: InputMaybe<ExternalDiscountValueInput>;
  relative?: InputMaybe<RelativeDiscountValueInput>;
};

export type ProductDraft = {
  categories?: InputMaybe<Array<ResourceIdentifierInput>>;
  categoryOrderHints?: InputMaybe<Array<CategoryOrderHintInput>>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  masterVariant?: InputMaybe<ProductVariantInput>;
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
  priceMode?: InputMaybe<PriceMode>;
  productType: ResourceIdentifierInput;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  searchKeywords?: InputMaybe<Array<SearchKeywordInput>>;
  slug: Array<LocalizedStringItemInputType>;
  state?: InputMaybe<ResourceIdentifierInput>;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

export type ProductImageAdded = MessagePayload & {
  image: Image;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductLimitsProjection = {
  pricesPerVariant: Limit;
  productTailoring: Limit;
  variants: Limit;
};

export type ProductOfSelection = {
  product?: Maybe<Product>;
  productRef: Reference;
  variantExclusion?: Maybe<ProductVariantExclusion>;
  variantSelection?: Maybe<ProductVariantSelection>;
};

export type ProductOfSelectionQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ProductOfSelection>;
  total: Scalars['Long']['output'];
};

export type ProductPrice = {
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']['output']>;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductPriceValue>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  tiers?: Maybe<Array<ProductPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: BaseMoney;
};

export type ProductPriceAdded = MessagePayload & {
  price: ProductPrice;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceChanged = MessagePayload & {
  newPrice: ProductPrice;
  oldPrice: ProductPrice;
  oldStagedPrice?: Maybe<ProductPrice>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceCustomFieldAdded = MessagePayload & {
  name: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceCustomFieldChanged = MessagePayload & {
  name: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceCustomFieldRemoved = MessagePayload & {
  name: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceCustomFieldsRemoved = MessagePayload & {
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceCustomFieldsSet = MessagePayload & {
  customField: CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceDataInput = {
  channel?: InputMaybe<ResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customerGroup?: InputMaybe<ReferenceInput>;
  discounted?: InputMaybe<DiscountedProductPriceValueInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  tiers?: InputMaybe<Array<ProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  value: BaseMoneyInput;
};

export type ProductPriceDiscountUpdateMessagePayload = {
  discounted?: Maybe<DiscountedProductPriceValue>;
  priceId: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  variantId: Scalars['Int']['output'];
  variantKey?: Maybe<Scalars['String']['output']>;
};

export type ProductPriceDiscountsSet = MessagePayload & {
  type: Scalars['String']['output'];
  updatedPrices: Array<ProductPriceDiscountUpdateMessagePayload>;
};

export type ProductPriceExternalDiscountSet = MessagePayload & {
  discounted?: Maybe<DiscountedProductPriceValue>;
  priceId: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
  variantKey?: Maybe<Scalars['String']['output']>;
};

export type ProductPriceKeySet = MessagePayload & {
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  priceId?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceModeSet = MessagePayload & {
  to?: Maybe<PriceMode>;
  type: Scalars['String']['output'];
};

export type ProductPriceRemoved = MessagePayload & {
  price: ProductPrice;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductPriceSearch = {
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']['output']>;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductSearchPriceValue>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  tiers?: Maybe<Array<ProductSearchPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: BaseMoney;
};

export type ProductPriceTier = {
  minimumQuantity: Scalars['Int']['output'];
  value: BaseMoney;
};

export type ProductPriceTierInput = {
  minimumQuantity: Scalars['Int']['input'];
  value: BaseMoneyInput;
};

export type ProductPricesSet = MessagePayload & {
  prices: Array<ProductPrice>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductProjection = {
  categories: Array<Category>;
  categoriesRef: Array<Reference>;
  categoryOrderHints: Array<CategoryOrderHintProductSearch>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  masterVariant: ProductSearchVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef: Reference;
  published: Scalars['Boolean']['output'];
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  searchKeywords: Array<SearchKeywordsProductSearch>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<LocalizedString>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  variants: Array<ProductSearchVariant>;
  version: Scalars['Long']['output'];
};


export type ProductProjectionDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductProjectionMessagePayload = {
  categories: Array<Category>;
  categoriesRef: Array<Reference>;
  categoryOrderHints: Array<CategoryOrderHint>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  masterVariant: ProductVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef: Reference;
  published: Scalars['Boolean']['output'];
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  searchKeywords: Array<SearchKeywords>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<LocalizedString>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  variants: Array<ProductVariant>;
  version: Scalars['Long']['output'];
};


export type ProductProjectionMessagePayloadDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMessagePayloadMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMessagePayloadMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMessagePayloadMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMessagePayloadNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductProjectionMessagePayloadSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductProjectionSearchResult = {
  count: Scalars['Int']['output'];
  facets: Array<FacetResultValue>;
  offset: Scalars['Int']['output'];
  results: Array<ProductProjection>;
  total: Scalars['Int']['output'];
};

export type ProductPublished = MessagePayload & {
  productProjection: ProductProjectionMessagePayload;
  removedImageUrls: Array<Scalars['String']['output']>;
  scope: PublishScope;
  type: Scalars['String']['output'];
};

export type ProductQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Product>;
  total: Scalars['Long']['output'];
};

export type ProductReferenceIdentifier = {
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type ProductRemovedFromCategory = MessagePayload & {
  category: ReferenceId;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type ProductRevertedStagedChanges = MessagePayload & {
  removedImageUrls: Scalars['Set']['output'];
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum ProductSearchIndexingMode {
  ProductProjectionsSearch = 'ProductProjectionsSearch',
  ProductsSearch = 'ProductsSearch'
}

export type ProductSearchPriceTier = {
  minimumQuantity: Scalars['Int']['output'];
  value: BaseMoney;
};

export type ProductSearchVariant = {
  assets: Array<Asset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<RawProductSearchAttribute>;
  availability?: Maybe<ProductSearchVariantAvailabilityWithChannels>;
  id: Scalars['Int']['output'];
  images: Array<ImageProductSearch>;
  isMatchingVariant?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<ProductPriceSearch>;
  prices?: Maybe<Array<ProductPriceSearch>>;
  scopedPrice?: Maybe<ScopedPrice>;
  scopedPriceDiscounted?: Maybe<Scalars['Boolean']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};


export type ProductSearchVariantAttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ProductSearchVariantPriceArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Product variant availabilities */
export type ProductSearchVariantAvailabilitiesResult = {
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<ProductSearchVariantAvailabilityWithChannel>;
  total: Scalars['Int']['output'];
};

/** Product variant availability */
export type ProductSearchVariantAvailability = {
  availableQuantity?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOnStock: Scalars['Boolean']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Long']['output']>;
};

export type ProductSearchVariantAvailabilityWithChannel = {
  availability: ProductSearchVariantAvailability;
  channel?: Maybe<Channel>;
  channelRef: Reference;
};

export type ProductSearchVariantAvailabilityWithChannels = {
  channels: ProductSearchVariantAvailabilitiesResult;
  noChannel?: Maybe<ProductSearchVariantAvailability>;
};


export type ProductSearchVariantAvailabilityWithChannelsChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSelection = Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  mode: ProductSelectionMode;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  productCount: Scalars['Int']['output'];
  productRefs: ProductOfSelectionQueryResult;
  version: Scalars['Long']['output'];
};


export type ProductSelectionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductSelectionProductRefsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSelectionCreated = MessagePayload & {
  productSelection: ProductSelection;
  type: Scalars['String']['output'];
};

export type ProductSelectionDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export enum ProductSelectionMode {
  /** Mode of Product Selection used to include a specific list of individual Products */
  Individual = 'Individual',
  /** Mode of Product Selection used to exclude a specific list of individual Products */
  IndividualExclusion = 'IndividualExclusion'
}

export type ProductSelectionProductAdded = MessagePayload & {
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String']['output'];
  variantSelection?: Maybe<ProductVariantSelection>;
};

export type ProductSelectionProductExcluded = MessagePayload & {
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String']['output'];
  variantExclusion?: Maybe<ProductVariantExclusion>;
};

export type ProductSelectionProductRemoved = MessagePayload & {
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String']['output'];
};

/** Fields to access product selection assignments. */
export type ProductSelectionQueryInterface = {
  productSelectionAssignments: ProductAssignmentQueryResult;
};


/** Fields to access product selection assignments. */
export type ProductSelectionQueryInterfaceProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSelectionQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ProductSelection>;
  total: Scalars['Long']['output'];
};

export type ProductSelectionSetting = {
  active: Scalars['Boolean']['output'];
  productSelection?: Maybe<ProductSelection>;
  productSelectionRef: Reference;
};

export type ProductSelectionSettingDraft = {
  active: Scalars['Boolean']['input'];
  productSelection: ResourceIdentifierInput;
};

export type ProductSelectionSettingInActionInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  productSelection: ResourceIdentifierInput;
};

export type ProductSelectionUpdateAction = {
  addProduct?: InputMaybe<AddProductSelectionProduct>;
  changeName?: InputMaybe<ChangeProductSelectionName>;
  excludeProduct?: InputMaybe<ExcludeProductSelectionProduct>;
  removeProduct?: InputMaybe<RemoveProductSelectionProduct>;
  setCustomField?: InputMaybe<SetProductSelectionCustomField>;
  setCustomType?: InputMaybe<SetProductSelectionCustomType>;
  setKey?: InputMaybe<SetProductSelectionKey>;
  setVariantExclusion?: InputMaybe<SetProductSelectionVariantExclusion>;
  setVariantSelection?: InputMaybe<SetProductSelectionVariantSelection>;
};

export type ProductSelectionVariantExclusionChanged = MessagePayload & {
  newVariantExclusion?: Maybe<ProductVariantExclusion>;
  oldVariantExclusion?: Maybe<ProductVariantExclusion>;
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String']['output'];
};

export type ProductSelectionVariantSelectionChanged = MessagePayload & {
  newVariantSelection?: Maybe<ProductVariantSelection>;
  oldVariantSelection?: Maybe<ProductVariantSelection>;
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String']['output'];
};

export type ProductSlugChanged = MessagePayload & {
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<LocalizedString>;
  type: Scalars['String']['output'];
};


export type ProductSlugChangedOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductSlugChangedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductStateTransition = MessagePayload & {
  force: Scalars['Boolean']['output'];
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String']['output'];
};

export type ProductTailoring = Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  current?: Maybe<ProductTailoringData>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  product?: Maybe<Product>;
  productRef: Reference;
  published: Scalars['Boolean']['output'];
  staged?: Maybe<ProductTailoringData>;
  store?: Maybe<Store>;
  storeRef: KeyReference;
  version: Scalars['Long']['output'];
};

export type ProductTailoringCreated = HasProductTailoringData & MessagePayload & {
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  key?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  publish: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
  variants: Array<ProductVariantTailoring>;
};


export type ProductTailoringCreatedDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringCreatedMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringCreatedMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringCreatedMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringCreatedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringCreatedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductTailoringData = HasProductTailoringData & {
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
  variants: Array<ProductVariantTailoring>;
};


export type ProductTailoringDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductTailoringDeleted = MessagePayload & {
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type ProductTailoringDescriptionSet = MessagePayload & {
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  oldDescription?: Maybe<Scalars['String']['output']>;
  oldDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};


export type ProductTailoringDescriptionSetDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringDescriptionSetOldDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductTailoringDraft = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  product: ResourceIdentifierInput;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Array<LocalizedStringItemInputType>>;
  variants?: InputMaybe<Array<ProductVariantTailoringInput>>;
};

export type ProductTailoringImageAdded = MessagePayload & {
  image: Image;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductTailoringImagesSet = MessagePayload & {
  images: Array<Image>;
  oldImages: Array<Image>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type ProductTailoringNameSet = MessagePayload & {
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  oldName?: Maybe<Scalars['String']['output']>;
  oldNameAllLocales?: Maybe<Array<LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};


export type ProductTailoringNameSetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringNameSetOldNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductTailoringPublished = MessagePayload & {
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type ProductTailoringQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ProductTailoring>;
  total: Scalars['Long']['output'];
};

export type ProductTailoringSlugSet = MessagePayload & {
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};


export type ProductTailoringSlugSetOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ProductTailoringSlugSetSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ProductTailoringUnpublished = MessagePayload & {
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
};

export type ProductTailoringUpdateAction = {
  addAsset?: InputMaybe<AddProductTailoringAsset>;
  addExternalImage?: InputMaybe<AddProductTailoringExternalImage>;
  addVariant?: InputMaybe<AddProductVariantTailoring>;
  changeAssetName?: InputMaybe<ChangeProductTailoringAssetName>;
  changeAssetOrder?: InputMaybe<ChangeProductTailoringAssetOrder>;
  moveImageToPosition?: InputMaybe<MoveProductTailoringImageToPosition>;
  publish?: InputMaybe<PublishTailoring>;
  removeAsset?: InputMaybe<RemoveProductTailoringAsset>;
  removeImage?: InputMaybe<RemoveProductTailoringImage>;
  removeVariant?: InputMaybe<RemoveProductVariantTailoring>;
  setAssetCustomField?: InputMaybe<SetProductTailoringAssetCustomField>;
  setAssetCustomType?: InputMaybe<SetProductTailoringAssetCustomType>;
  setAssetDescription?: InputMaybe<SetProductTailoringAssetDescription>;
  setAssetKey?: InputMaybe<SetProductTailoringAssetKey>;
  setAssetSources?: InputMaybe<SetProductTailoringAssetSources>;
  setAssetTags?: InputMaybe<SetProductTailoringAssetTags>;
  setDescription?: InputMaybe<SetProductTailoringDescription>;
  setImageLabel?: InputMaybe<SetProductTailoringImageLabel>;
  setImages?: InputMaybe<SetProductTailoringImages>;
  setMetaAttributes?: InputMaybe<SetProductTailoringMetaAttributes>;
  setMetaDescription?: InputMaybe<SetProductTailoringMetaDescription>;
  setMetaKeywords?: InputMaybe<SetProductTailoringMetaKeywords>;
  setMetaTitle?: InputMaybe<SetProductTailoringMetaTitle>;
  setName?: InputMaybe<SetProductTailoringName>;
  setSlug?: InputMaybe<SetProductTailoringSlug>;
  unpublish?: InputMaybe<UnpublishTailoring>;
};

export type ProductTypeDefinition = ReferenceExpandable & Versioned & {
  attributeDefinitions: AttributeDefinitionResult;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};


export type ProductTypeDefinitionAttributeDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductTypeDefinitionQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ProductTypeDefinition>;
  total: Scalars['Long']['output'];
};

export type ProductTypeDraft = {
  attributeDefinitions?: InputMaybe<Array<AttributeDefinitionDraft>>;
  description: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ProductTypeLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type ProductTypeLimitsProjection = {
  total: ProductTypeLimitWithCurrent;
};

export type ProductTypeUpdateAction = {
  addAttributeDefinition?: InputMaybe<AddAttributeDefinition>;
  addLocalizedEnumValue?: InputMaybe<AddLocalizedEnumValue>;
  addPlainEnumValue?: InputMaybe<AddPlainEnumValue>;
  changeAttributeName?: InputMaybe<ChangeAttributeName>;
  changeAttributeOrder?: InputMaybe<ChangeAttributeOrder>;
  changeAttributeOrderByName?: InputMaybe<ChangeAttributeOrderByName>;
  changeDescription?: InputMaybe<ChangeDescription>;
  changeEnumKey?: InputMaybe<ChangeEnumKey>;
  changeInputHint?: InputMaybe<ChangeInputHint>;
  changeIsSearchable?: InputMaybe<ChangeIsSearchable>;
  changeLabel?: InputMaybe<ChangeLabel>;
  changeLocalizedEnumValueLabel?: InputMaybe<ChangeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: InputMaybe<ChangeLocalizedEnumValueOrder>;
  changeName?: InputMaybe<ChangeName>;
  changePlainEnumValueLabel?: InputMaybe<ChangePlainEnumValueLabel>;
  changePlainEnumValueOrder?: InputMaybe<ChangePlainEnumValueOrder>;
  removeAttributeDefinition?: InputMaybe<RemoveAttributeDefinition>;
  removeEnumValues?: InputMaybe<RemoveEnumValues>;
  setInputTip?: InputMaybe<SetInputTip>;
  setKey?: InputMaybe<SetKey>;
};

export type ProductUnpublished = MessagePayload & {
  type: Scalars['String']['output'];
};

export type ProductUpdateAction = {
  addAsset?: InputMaybe<AddProductAsset>;
  addExternalImage?: InputMaybe<AddProductExternalImage>;
  addPrice?: InputMaybe<AddProductPrice>;
  addToCategory?: InputMaybe<AddProductToCategory>;
  addVariant?: InputMaybe<AddProductVariant>;
  changeAssetName?: InputMaybe<ChangeProductAssetName>;
  changeAssetOrder?: InputMaybe<ChangeProductAssetOrder>;
  changeImageLabel?: InputMaybe<ChangeProductImageLabel>;
  changeMasterVariant?: InputMaybe<ChangeProductMasterVariant>;
  changeName?: InputMaybe<ChangeProductName>;
  changePrice?: InputMaybe<ChangeProductPrice>;
  changeSlug?: InputMaybe<ChangeProductSlug>;
  moveImageToPosition?: InputMaybe<MoveProductImageToPosition>;
  publish?: InputMaybe<PublishProduct>;
  removeAsset?: InputMaybe<RemoveProductAsset>;
  removeFromCategory?: InputMaybe<RemoveProductFromCategory>;
  removeImage?: InputMaybe<RemoveProductImage>;
  removePrice?: InputMaybe<RemoveProductPrice>;
  removeVariant?: InputMaybe<RemoveProductVariant>;
  revertStagedChanges?: InputMaybe<RevertStagedChanges>;
  revertStagedVariantChanges?: InputMaybe<RevertStagedVariantChanges>;
  setAssetCustomField?: InputMaybe<SetProductAssetCustomField>;
  setAssetCustomType?: InputMaybe<SetProductAssetCustomType>;
  setAssetDescription?: InputMaybe<SetProductAssetDescription>;
  setAssetKey?: InputMaybe<SetProductAssetKey>;
  setAssetSources?: InputMaybe<SetProductAssetSources>;
  setAssetTags?: InputMaybe<SetProductAssetTags>;
  setAttribute?: InputMaybe<SetProductAttribute>;
  setAttributeInAllVariants?: InputMaybe<SetProductAttributeInAllVariants>;
  setCategoryOrderHint?: InputMaybe<SetProductCategoryOrderHint>;
  setDescription?: InputMaybe<SetProductDescription>;
  setDiscountedPrice?: InputMaybe<SetProductDiscountedPrice>;
  setImageLabel?: InputMaybe<SetProductImageLabel>;
  setKey?: InputMaybe<SetProductKey>;
  setMetaAttributes?: InputMaybe<SetProductMetaAttributes>;
  setMetaDescription?: InputMaybe<SetProductMetaDescription>;
  setMetaKeywords?: InputMaybe<SetProductMetaKeywords>;
  setMetaTitle?: InputMaybe<SetProductMetaTitle>;
  setPriceKey?: InputMaybe<SetProductPriceKey>;
  setPriceMode?: InputMaybe<SetProductPriceMode>;
  setPrices?: InputMaybe<SetProductPrices>;
  setProductPriceCustomField?: InputMaybe<SetProductPriceCustomField>;
  setProductPriceCustomType?: InputMaybe<SetProductPriceCustomType>;
  setProductVariantKey?: InputMaybe<SetProductVariantKey>;
  setSearchKeywords?: InputMaybe<SetSearchKeywords>;
  setSku?: InputMaybe<SetProductSku>;
  setTaxCategory?: InputMaybe<SetProductTaxCategory>;
  transitionState?: InputMaybe<TransitionProductState>;
  unpublish?: InputMaybe<UnpublishProduct>;
};

export type ProductVariant = {
  assets: Array<Asset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<RawProductAttribute>;
  availability?: Maybe<ProductVariantAvailabilityWithChannels>;
  id: Scalars['Int']['output'];
  images: Array<Image>;
  key?: Maybe<Scalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<ProductPrice>;
  prices?: Maybe<Array<ProductPrice>>;
  sku?: Maybe<Scalars['String']['output']>;
};


export type ProductVariantAttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ProductVariantPriceArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroupAssignmentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantAdded = MessagePayload & {
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variant: ProductVariant;
};

/** Product variant availabilities */
export type ProductVariantAvailabilitiesResult = {
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<ProductVariantAvailabilityWithChannel>;
  total: Scalars['Int']['output'];
};

/** Product variant availability */
export type ProductVariantAvailability = {
  availableQuantity?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOnStock: Scalars['Boolean']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Long']['output']>;
};

export type ProductVariantAvailabilityWithChannel = {
  availability: ProductVariantAvailability;
  channel?: Maybe<Channel>;
  channelRef: Reference;
};

export type ProductVariantAvailabilityWithChannels = {
  channels: ProductVariantAvailabilitiesResult;
  noChannel?: Maybe<ProductVariantAvailability>;
};


export type ProductVariantAvailabilityWithChannelsChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductVariantDeleted = MessagePayload & {
  removedImageUrls: Scalars['Set']['output'];
  staged?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantExclusion = {
  skus: Array<Scalars['String']['output']>;
};

export type ProductVariantExclusionDraft = {
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductVariantImportDraft = {
  attributes?: InputMaybe<Array<ProductAttributeInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<ImageInput>>;
  prices?: InputMaybe<Array<ProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantInput = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  attributes?: InputMaybe<Array<ProductAttributeInput>>;
  images?: InputMaybe<Array<ImageInput>>;
  key?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<ProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantSelection = {
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ProductVariantSelectionDraft = {
  includeAllExcept?: InputMaybe<Array<Scalars['String']['input']>>;
  includeOnly?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductVariantSelectionIncludeAllExcept = ProductVariantSelection & {
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ProductVariantSelectionIncludeOnly = ProductVariantSelection & {
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ProductVariantTailoring = {
  assets: Array<Asset>;
  id: Scalars['Int']['output'];
  images: Array<Image>;
};

export type ProductVariantTailoringAdded = MessagePayload & {
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
  variant: VariantTailoring;
  variantId: Scalars['Int']['output'];
};

export type ProductVariantTailoringInput = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<ImageInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantTailoringRemoved = MessagePayload & {
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Reference;
  storeRef: KeyReference;
  type: Scalars['String']['output'];
  variant: VariantTailoring;
  variantId: Scalars['Int']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type ProductsSearchConfiguration = {
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  status: ProductsSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum ProductsSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated'
}

/** Contains information about the limits of your project. */
export type ProjectCustomLimitsProjection = {
  attributeGroups: AttributeGroupLimitsProjection;
  businessUnits: BusinessUnitLimitsProjection;
  cartDiscounts: CartDiscountLimitsProjection;
  carts: CartLimitsProjection;
  category: CategoryLimitsProjection;
  customObjects: CustomObjectLimitsProjection;
  customerGroups: CustomerGroupLimitsProjection;
  customers: CustomerLimitsProjection;
  extensions: ExtensionLimitsProjection;
  orderEdits: OrderEditLimitsProjection;
  productDiscounts: ProductDiscountLimitsProjection;
  productType: ProductTypeLimitsProjection;
  products: ProductLimitsProjection;
  query: QueryLimitsProjection;
  refreshTokens: RefreshTokenLimitsProjection;
  search: SearchLimitsProjection;
  shippingMethods: ShippingMethodLimitsProjection;
  shoppingLists: ShoppingListLimitsProjection;
  stores: StoreLimitsProjection;
  subscriptions: SubscriptionsLimitsProjection;
  taxCategories: TaxCategoryLimitsProjection;
  zones: ZoneLimitsProjection;
};

/** Project contains information about project. */
export type ProjectProjection = {
  businessUnits?: Maybe<BusinessUnitConfiguration>;
  carts: CartsConfiguration;
  countries: Array<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  currencies: Array<Scalars['Currency']['output']>;
  externalOAuth?: Maybe<ExternalOAuth>;
  key: Scalars['String']['output'];
  languages: Array<Scalars['Locale']['output']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Initiator>;
  messages: MessagesConfiguration;
  name: Scalars['String']['output'];
  searchIndexing?: Maybe<SearchIndexingConfiguration>;
  shippingRateInputType?: Maybe<ShippingRateInputType>;
  shoppingLists: ShoppingListsConfiguration;
  trialUntil?: Maybe<Scalars['YearMonth']['output']>;
  version: Scalars['Long']['output'];
};

export type ProjectSettingsUpdateAction = {
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeBusinessUnitSearchStatus?: InputMaybe<ChangeProjectSettingsBusinessUnitSearchStatus>;
  changeCartsConfiguration?: InputMaybe<ChangeProjectSettingsCartsConfiguration>;
  changeCountries?: InputMaybe<ChangeProjectSettingsCountries>;
  changeCountryTaxRateFallbackEnabled?: InputMaybe<ChangeProjectSettingsCountryTaxRateFallbackEnabled>;
  changeCurrencies?: InputMaybe<ChangeProjectSettingsCurrencies>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeCustomerSearchStatus?: InputMaybe<ChangeProjectSettingsCustomerSearchStatus>;
  changeLanguages?: InputMaybe<ChangeProjectSettingsLanguages>;
  changeMessagesConfiguration?: InputMaybe<ChangeProjectSettingsMessagesConfiguration>;
  changeMessagesEnabled?: InputMaybe<ChangeProjectSettingsMessagesEnabled>;
  changeMyBusinessUnitStatusOnCreation?: InputMaybe<ChangeProjectSettingsMyBusinessUnitStatusOnCreation>;
  changeName?: InputMaybe<ChangeProjectSettingsName>;
  changeOrderSearchStatus?: InputMaybe<ChangeProjectSettingsOrderSearchStatus>;
  changeProductSearchIndexingEnabled?: InputMaybe<ChangeProjectSettingsProductSearchIndexingEnabled>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeProjectSettingsProductSearchIndexingEnabled?: InputMaybe<ChangeProjectSettingsProductSearchIndexingEnabled>;
  changeShoppingListsConfiguration?: InputMaybe<ChangeProjectSettingsShoppingListsConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeStandalonePriceSearchStatus?: InputMaybe<ChangeProjectSettingsStandalonePriceSearchStatus>;
  setExternalOAuth?: InputMaybe<SetProjectSettingsExternalOAuth>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  setMyBusinessUnitAssociateRoleOnCreation?: InputMaybe<SetProjectSettingsMyBusinessUnitAssociateRoleOnCreation>;
  setShippingRateInputType?: InputMaybe<SetProjectSettingsShippingRateInputType>;
};

export type PublishProduct = {
  scope?: InputMaybe<PublishScope>;
};

export enum PublishScope {
  /** Publishes the complete staged projection */
  All = 'All',
  /** Publishes only prices on the staged projection */
  Prices = 'Prices'
}

export type PublishTailoring = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type PurchaseOrderNumberSet = MessagePayload & OrderMessagePayload & {
  oldPurchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Query = CartQueryInterface & CustomerActiveCartInterface & CustomerQueryInterface & MeFieldInterface & OrderQueryInterface & ProductSelectionQueryInterface & ShippingMethodsByCartInterface & ShoppingListQueryInterface & {
  apiClient?: Maybe<ApiClientWithoutSecret>;
  apiClients: ApiClientWithoutSecretQueryResult;
  /** This field gives access to the resources (such as carts) as an associate of a given business unit. */
  asAssociate: AsAssociate;
  associateRole?: Maybe<AssociateRole>;
  associateRoles: AssociateRoleQueryResult;
  attributeGroup?: Maybe<AttributeGroup>;
  attributeGroups: AttributeGroupQueryResult;
  businessUnit?: Maybe<BusinessUnit>;
  businessUnits: BusinessUnitQueryResult;
  cart?: Maybe<Cart>;
  cartDiscount?: Maybe<CartDiscount>;
  cartDiscounts: CartDiscountQueryResult;
  carts: CartQueryResult;
  categories: CategoryQueryResult;
  category?: Maybe<Category>;
  channel?: Maybe<Channel>;
  channels: ChannelQueryResult;
  customObject?: Maybe<CustomObject>;
  customObjects: CustomObjectQueryResult;
  customer?: Maybe<Customer>;
  customerActiveCart?: Maybe<Cart>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups: CustomerGroupQueryResult;
  customers: CustomerQueryResult;
  discountCode?: Maybe<DiscountCode>;
  discountCodes: DiscountCodeQueryResult;
  extension?: Maybe<Extension>;
  extensions: ExtensionQueryResult;
  /** This field gives access to the resources (such as carts) that are inside the given store. */
  inStore: InStore;
  /** This field gives access to the resources (such as carts) that are inside one of the given stores. */
  inStores: InStore;
  inventoryEntries: InventoryEntryQueryResult;
  inventoryEntry?: Maybe<InventoryEntry>;
  limits: ProjectCustomLimitsProjection;
  /**
   * This field can only be used with an access token created with the password flow or with an anonymous session.
   *
   * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
   */
  me: Me;
  message?: Maybe<Message>;
  messages: MessageQueryResult;
  order?: Maybe<Order>;
  orderEdit?: Maybe<OrderEdit>;
  orderEdits: OrderEditQueryResult;
  orders: OrderQueryResult;
  payment?: Maybe<Payment>;
  payments: PaymentQueryResult;
  product?: Maybe<Product>;
  productDiscount?: Maybe<ProductDiscount>;
  productDiscounts: ProductDiscountQueryResult;
  productProjectionSearch: ProductProjectionSearchResult;
  productProjectionsSuggest: SuggestResult;
  productSelection?: Maybe<ProductSelection>;
  productSelectionAssignments: ProductAssignmentQueryResult;
  productSelections: ProductSelectionQueryResult;
  productTailoring?: Maybe<ProductTailoring>;
  productTailoringList: ProductTailoringQueryResult;
  productType?: Maybe<ProductTypeDefinition>;
  productTypes: ProductTypeDefinitionQueryResult;
  products: ProductQueryResult;
  project: ProjectProjection;
  quote?: Maybe<Quote>;
  quoteRequest?: Maybe<QuoteRequest>;
  quoteRequests: QuoteRequestQueryResult;
  quotes: QuoteQueryResult;
  review?: Maybe<Review>;
  reviews: ReviewQueryResult;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodQueryResult;
  shippingMethodsByCart: Array<ShippingMethod>;
  shippingMethodsByLocation: Array<ShippingMethod>;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
  stagedQuote?: Maybe<StagedQuote>;
  stagedQuotes: StagedQuoteQueryResult;
  /**
   * StandalonePrices are managed and queried through the StandalonePrices API
   * and associated to a ProductVariant through the sku field.
   */
  standalonePrice?: Maybe<StandalonePrice>;
  /**
   * StandalonePrices are managed and queried through the StandalonePrices API
   * and associated to a ProductVariant through the sku field.
   */
  standalonePrices: StandalonePriceQueryResult;
  state?: Maybe<State>;
  states: StateQueryResult;
  store?: Maybe<Store>;
  stores: StoreQueryResult;
  subscription?: Maybe<CommercetoolsSubscription>;
  subscriptions: CommercetoolsSubscriptionQueryResult;
  taxCategories: TaxCategoryQueryResult;
  taxCategory?: Maybe<TaxCategory>;
  typeDefinition?: Maybe<TypeDefinition>;
  typeDefinitions: TypeDefinitionQueryResult;
  zone?: Maybe<Zone>;
  zones: ZoneQueryResult;
};


export type QueryApiClientArgs = {
  id: Scalars['String']['input'];
};


export type QueryApiClientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAsAssociateArgs = {
  associateId: Scalars['String']['input'];
  businessUnitKey: Scalars['KeyReferenceInput']['input'];
};


export type QueryAssociateRoleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssociateRolesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributeGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributeGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCartArgs = {
  id: Scalars['String']['input'];
};


export type QueryCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomObjectArgs = {
  container?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomObjectsArgs = {
  container: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  passwordToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomerActiveCartArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryCustomerGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomerGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDiscountCodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDiscountCodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExtensionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExtensionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInStoreArgs = {
  key: Scalars['KeyReferenceInput']['input'];
};


export type QueryInStoresArgs = {
  keys: Array<Scalars['KeyReferenceInput']['input']>;
};


export type QueryInventoryEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInventoryEntryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMessageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderEditArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderEditsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantKey?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductProjectionSearchArgs = {
  facetFilters?: InputMaybe<Array<SearchFilterInput>>;
  facets?: InputMaybe<Array<SearchFacetInput>>;
  filters?: InputMaybe<Array<SearchFilterInput>>;
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  markMatchingVariant?: InputMaybe<Scalars['Boolean']['input']>;
  markMatchingVariants?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceSelector?: InputMaybe<PriceSelectorInput>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  queryFilters?: InputMaybe<Array<SearchFilterInput>>;
  sorts?: InputMaybe<Array<Scalars['String']['input']>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  storeProjection?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductProjectionsSuggestArgs = {
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  searchKeywords: Array<SearchKeywordArgument>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductSelectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductSelectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTailoringArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};


export type QueryProductTailoringListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShippingMethodArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShippingMethodsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShippingMethodsByCartArgs = {
  id: Scalars['String']['input'];
};


export type QueryShippingMethodsByLocationArgs = {
  country: Scalars['Country']['input'];
  currency?: InputMaybe<Scalars['Currency']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStagedQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStagedQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStandalonePriceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStandalonePricesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoreArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTaxCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTaxCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDefinitionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDefinitionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};


export type QueryZoneArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryZonesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLimitsProjection = {
  offset: Limit;
};

export type Quote = Versioned & {
  billingAddress?: Maybe<Address>;
  businessUnit?: Maybe<BusinessUnit>;
  businessUnitRef?: Maybe<KeyReference>;
  buyerComment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customLineItems: Array<CustomLineItem>;
  customer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  customerRef?: Maybe<Reference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<DirectDiscount>;
  id: Scalars['String']['output'];
  inventoryMode: InventoryMode;
  itemShippingAddresses: Array<Address>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  lineItems: Array<LineItem>;
  paymentInfo?: Maybe<PaymentInfo>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quoteRequest?: Maybe<QuoteRequest>;
  quoteRequestRef: Reference;
  quoteState: QuoteState;
  sellerComment?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<Address>;
  shippingInfo?: Maybe<ShippingInfo>;
  shippingRateInput?: Maybe<ShippingRateInput>;
  stagedQuote?: Maybe<StagedQuote>;
  stagedQuoteRef: Reference;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  taxCalculationMode: TaxCalculationMode;
  taxMode: TaxMode;
  taxRoundingMode: RoundingMode;
  taxedPrice?: Maybe<TaxedPrice>;
  totalPrice: Money;
  validTo?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Long']['output'];
};


export type QuoteLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteCreated = MessagePayload & {
  quote: Quote;
  type: Scalars['String']['output'];
};

export type QuoteCustomerChanged = MessagePayload & {
  customer?: Maybe<Customer>;
  customerRef: Reference;
  previousCustomer?: Maybe<Customer>;
  previousCustomerRef: Reference;
  type: Scalars['String']['output'];
};

export type QuoteDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type QuoteDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  stagedQuote?: InputMaybe<ResourceIdentifierInput>;
  stagedQuoteStateToSent?: InputMaybe<Scalars['Boolean']['input']>;
  stagedQuoteVersion?: InputMaybe<Scalars['Long']['input']>;
  state?: InputMaybe<ReferenceInput>;
};

/** Fields to access Quotes. */
export type QuoteQueryInterface = {
  quote?: Maybe<Quote>;
  quotes: QuoteQueryResult;
};


/** Fields to access Quotes. */
export type QuoteQueryInterfaceQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


/** Fields to access Quotes. */
export type QuoteQueryInterfaceQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Quote>;
  total: Scalars['Long']['output'];
};

export type QuoteRenegotiationRequested = MessagePayload & {
  buyerComment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type QuoteRequest = Versioned & {
  billingAddress?: Maybe<Address>;
  businessUnit?: Maybe<BusinessUnit>;
  businessUnitRef?: Maybe<KeyReference>;
  cartRef?: Maybe<Reference>;
  comment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customLineItems: Array<CustomLineItem>;
  customer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  customerRef?: Maybe<Reference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<DirectDiscount>;
  id: Scalars['String']['output'];
  inventoryMode: InventoryMode;
  itemShippingAddresses: Array<Address>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  lineItems: Array<LineItem>;
  paymentInfo?: Maybe<PaymentInfo>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quoteRequestState: QuoteRequestState;
  shippingAddress?: Maybe<Address>;
  shippingInfo?: Maybe<ShippingInfo>;
  shippingRateInput?: Maybe<ShippingRateInput>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  taxCalculationMode: TaxCalculationMode;
  taxMode: TaxMode;
  taxRoundingMode: RoundingMode;
  taxedPrice?: Maybe<TaxedPrice>;
  totalPrice: Money;
  version: Scalars['Long']['output'];
};


export type QuoteRequestLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteRequestCreated = MessagePayload & {
  quoteRequest: QuoteRequest;
  type: Scalars['String']['output'];
};

export type QuoteRequestCustomerChanged = MessagePayload & {
  customer?: Maybe<Customer>;
  customerRef: Reference;
  previousCustomer?: Maybe<Customer>;
  previousCustomerRef: Reference;
  type: Scalars['String']['output'];
};

export type QuoteRequestDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type QuoteRequestDraft = {
  cart?: InputMaybe<ResourceIdentifierInput>;
  cartVersion?: InputMaybe<Scalars['Long']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<ReferenceInput>;
};

/** Fields to access QuoteRequests. */
export type QuoteRequestQueryInterface = {
  quoteRequest?: Maybe<QuoteRequest>;
  quoteRequests: QuoteRequestQueryResult;
};


/** Fields to access QuoteRequests. */
export type QuoteRequestQueryInterfaceQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


/** Fields to access QuoteRequests. */
export type QuoteRequestQueryInterfaceQuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteRequestQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<QuoteRequest>;
  total: Scalars['Long']['output'];
};

export enum QuoteRequestState {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Closed = 'Closed',
  Rejected = 'Rejected',
  Submitted = 'Submitted',
  UnderReview = 'UnderReview'
}

export type QuoteRequestStateChanged = MessagePayload & {
  oldQuoteRequestState: QuoteRequestState;
  quoteRequestState: QuoteRequestState;
  type: Scalars['String']['output'];
};

export type QuoteRequestStateTransition = MessagePayload & {
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<State>;
  oldStateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String']['output'];
};

export type QuoteRequestUpdateAction = {
  changeCustomer?: InputMaybe<ChangeQuoteRequestCustomer>;
  changeQuoteRequestState?: InputMaybe<ChangeQuoteRequestState>;
  setCustomField?: InputMaybe<SetQuoteRequestCustomField>;
  setCustomType?: InputMaybe<SetQuoteRequestCustomType>;
  transitionState?: InputMaybe<TransitionQuoteRequestState>;
};

export enum QuoteState {
  Accepted = 'Accepted',
  Declined = 'Declined',
  DeclinedForRenegotiation = 'DeclinedForRenegotiation',
  Pending = 'Pending',
  RenegotiationAddressed = 'RenegotiationAddressed',
  Withdrawn = 'Withdrawn'
}

export type QuoteStateChanged = MessagePayload & {
  oldQuoteState: QuoteState;
  quoteState: QuoteState;
  type: Scalars['String']['output'];
};

export type QuoteStateTransition = MessagePayload & {
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<State>;
  oldStateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String']['output'];
};

export type QuoteUpdateAction = {
  changeCustomer?: InputMaybe<ChangeQuoteCustomer>;
  changeQuoteState?: InputMaybe<ChangeQuoteState>;
  requestQuoteRenegotiation?: InputMaybe<RequestQuoteRenegotiation>;
  setCustomField?: InputMaybe<SetQuoteCustomField>;
  setCustomType?: InputMaybe<SetQuoteCustomType>;
  transitionState?: InputMaybe<TransitionQuoteState>;
};

export type RangeCount = {
  type: Scalars['String']['output'];
};

export type RangeCountDouble = RangeCount & {
  count: Scalars['Int']['output'];
  from: Scalars['Float']['output'];
  fromStr: Scalars['String']['output'];
  max: Scalars['Float']['output'];
  mean: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  to: Scalars['Float']['output'];
  toStr: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type RangeCountLong = RangeCount & {
  count: Scalars['Int']['output'];
  from: Scalars['Long']['output'];
  fromStr: Scalars['String']['output'];
  max: Scalars['Long']['output'];
  mean: Scalars['Float']['output'];
  min: Scalars['Long']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  to: Scalars['Long']['output'];
  toStr: Scalars['String']['output'];
  total: Scalars['Long']['output'];
  totalCount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type RangeElementInput = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type RangeFacetInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  countProducts?: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
  ranges: Array<RangeElementInput>;
};

export type RangeFacetResult = FacetResult & {
  dataType: Scalars['String']['output'];
  ranges: Array<RangeCount>;
  type: Scalars['String']['output'];
};

export type RangeFilterInput = {
  path: Scalars['String']['input'];
  ranges: Array<RangeElementInput>;
};

export type RawCustomField = {
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<ReferenceExpandable>;
  value: Scalars['Json']['output'];
};

export type RawProductAttribute = {
  attributeDefinition?: Maybe<AttributeDefinition>;
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<ReferenceExpandable>;
  value: Scalars['Json']['output'];
};

export type RawProductSearchAttribute = {
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<ReferenceExpandable>;
  value: Scalars['Json']['output'];
};

export type RecalculateCart = {
  updateProductData?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Reference = {
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type ReferenceAttribute = Attribute & {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type ReferenceAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
  referenceTypeId: Scalars['String']['output'];
};

export type ReferenceExpandable = {
  id: Scalars['String']['output'];
};

export type ReferenceField = CustomField & {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type ReferenceId = {
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type ReferenceInput = {
  id: Scalars['String']['input'];
  typeId: Scalars['String']['input'];
};

export type ReferenceType = FieldType & {
  name: Scalars['String']['output'];
  referenceTypeId: Scalars['String']['output'];
};

export type ReferenceTypeDefinitionDraft = {
  referenceTypeId: Scalars['String']['input'];
};

export type RefreshTokenLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type RefreshTokenLimitsProjection = {
  total: RefreshTokenLimitWithCurrent;
};

export type RejectApprovalFlow = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type RelativeDiscountValue = CartDiscountValue & ProductDiscountValue & {
  permyriad: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type RelativeDiscountValueInput = {
  permyriad: Scalars['Int']['input'];
};

export type RemoveAssociateRolePermission = {
  permission: Permission;
};

export type RemoveAttributeGroupAttribute = {
  attribute: AttributeReferenceInput;
};

export type RemoveBusinessUnitAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveBusinessUnitAssociate = {
  customer: ResourceIdentifierInput;
};

export type RemoveBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveBusinessUnitStore = {
  store: ResourceIdentifierInput;
};

export type RemoveCartCustomLineItem = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCartDiscountCode = {
  discountCode: ReferenceInput;
};

export type RemoveCartDiscountStore = {
  store: ResourceIdentifierInput;
};

export type RemoveCartItemShippingAddress = {
  addressKey: Scalars['String']['input'];
};

export type RemoveCartLineItem = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetailsToRemove?: InputMaybe<ItemShippingDetailsDraft>;
};

export type RemoveCartPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveCartShippingMethod = {
  shippingKey: Scalars['String']['input'];
};

export type RemoveCategoryAsset = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveChannelRoles = {
  roles: Array<ChannelRole>;
};

export type RemoveCustomerAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCustomerBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCustomerGroupAssignment = {
  customerGroup: ResourceIdentifierInput;
};

export type RemoveCustomerShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCustomerStore = {
  store: ResourceIdentifierInput;
};

export type RemoveInventoryEntryQuantity = {
  quantity: Scalars['Long']['input'];
};

export type RemoveMyBusinessUnitAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveMyBusinessUnitAssociate = {
  customer: ResourceIdentifierInput;
};

export type RemoveMyBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveMyBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveOrderDelivery = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveOrderItemShippingAddress = {
  addressKey: Scalars['String']['input'];
};

export type RemoveOrderParcelFromDelivery = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveProductAsset = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveProductFromCategory = {
  category: ResourceIdentifierInput;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveProductImage = {
  imageUrl: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveProductPrice = {
  priceId?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveProductSelectionProduct = {
  product: ResourceIdentifierInput;
};

export type RemoveProductTailoringAsset = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveProductTailoringImage = {
  imageUrl: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveProductVariant = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveProductVariantTailoring = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveShippingMethodShippingRate = {
  shippingRate: ShippingRateDraft;
  zone: ResourceIdentifierInput;
};

export type RemoveShippingMethodZone = {
  zone: ResourceIdentifierInput;
};

export type RemoveShoppingListLineItem = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type RemoveShoppingListTextLineItem = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveStagedChanges = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveStagedOrderCustomLineItem = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveStagedOrderCustomLineItemOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type RemoveStagedOrderDelivery = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveStagedOrderDeliveryOutput = StagedOrderUpdateActionOutput & {
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type RemoveStagedOrderDiscountCode = {
  discountCode: ReferenceInput;
};

export type RemoveStagedOrderDiscountCodeOutput = StagedOrderUpdateActionOutput & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String']['output'];
};

export type RemoveStagedOrderItemShippingAddress = {
  addressKey: Scalars['String']['input'];
};

export type RemoveStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  addressKey: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type RemoveStagedOrderLineItem = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetailsToRemove?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type RemoveStagedOrderLineItemOutput = StagedOrderUpdateActionOutput & {
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Long']['output']>;
  shippingDetailsToRemove?: Maybe<ItemShippingDetailsDraftOutput>;
  type: Scalars['String']['output'];
};

export type RemoveStagedOrderParcelFromDelivery = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveStagedOrderParcelFromDeliveryOutput = StagedOrderUpdateActionOutput & {
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type RemoveStagedOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveStagedOrderPaymentOutput = StagedOrderUpdateActionOutput & {
  paymentResId: ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type RemoveStandalonePriceTier = {
  minimumQuantity: Scalars['Int']['input'];
};

export type RemoveStateRoles = {
  roles: Array<StateRole>;
};

export type RemoveStoreCountry = {
  country: StoreCountryInput;
};

export type RemoveStoreDistributionChannel = {
  distributionChannel: ResourceIdentifierInput;
};

export type RemoveStoreProductSelection = {
  productSelection: ResourceIdentifierInput;
};

export type RemoveStoreSupplyChannel = {
  supplyChannel: ResourceIdentifierInput;
};

export type RemoveTypeFieldDefinition = {
  fieldName: Scalars['String']['input'];
};

export type RemoveZoneLocation = {
  location: ZoneLocation;
};

export type RequestQuoteRenegotiation = {
  buyerComment?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceIdentifier = {
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type ResourceIdentifierInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
};

/** Stores information about returns connected to this order. */
export type ReturnInfo = {
  items: Array<ReturnItem>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
};

export type ReturnInfoAdded = MessagePayload & OrderMessagePayload & {
  returnInfo: ReturnInfo;
  type: Scalars['String']['output'];
};

export type ReturnInfoDraftType = {
  items: Array<ReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']['input']>;
  returnTrackingId?: InputMaybe<Scalars['String']['input']>;
};

export type ReturnInfoDraftTypeOutput = {
  items: Array<ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
};

export type ReturnInfoSet = MessagePayload & OrderMessagePayload & {
  returnInfo?: Maybe<Array<ReturnInfo>>;
  type: Scalars['String']['output'];
};

export type ReturnItem = {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  paymentState: ReturnPaymentState;
  quantity: Scalars['Long']['output'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type ReturnItemDraftType = {
  comment?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  shipmentState: ReturnShipmentState;
};

export type ReturnItemDraftTypeOutput = {
  comment?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<CustomFieldsCommand>;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Long']['output'];
  shipmentState: ReturnShipmentState;
};

export enum ReturnPaymentState {
  Initial = 'Initial',
  NonRefundable = 'NonRefundable',
  NotRefunded = 'NotRefunded',
  Refunded = 'Refunded'
}

export enum ReturnShipmentState {
  Advised = 'Advised',
  BackInStock = 'BackInStock',
  Returned = 'Returned',
  Unusable = 'Unusable'
}

export type RevertStagedChanges = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type RevertStagedVariantChanges = {
  variantId: Scalars['Int']['input'];
};

export type Review = ReferenceExpandable & Versioned & {
  authorName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  id: Scalars['String']['output'];
  includedInStatistics: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  locale?: Maybe<Scalars['Locale']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  target?: Maybe<ReviewTarget>;
  targetRef?: Maybe<Reference>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uniquenessValue?: Maybe<Scalars['String']['output']>;
  version: Scalars['Long']['output'];
};

export type ReviewCreated = MessagePayload & {
  review: Review;
  type: Scalars['String']['output'];
};

export type ReviewDraft = {
  authorName?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customer?: InputMaybe<ResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<ResourceIdentifierInput>;
  target?: InputMaybe<TargetReferenceInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uniquenessValue?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Review>;
  total: Scalars['Long']['output'];
};

export type ReviewRatingSet = MessagePayload & {
  includedInStatistics: Scalars['Boolean']['output'];
  newRating?: Maybe<Scalars['Int']['output']>;
  oldRating?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<ReviewTarget>;
  targetRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type ReviewRatingStatistics = {
  averageRating: Scalars['Float']['output'];
  count: Scalars['Long']['output'];
  highestRating: Scalars['Int']['output'];
  lowestRating: Scalars['Int']['output'];
  ratingsDistribution: Scalars['Json']['output'];
};

export type ReviewStateTransition = MessagePayload & {
  force: Scalars['Boolean']['output'];
  newIncludedInStatistics: Scalars['Boolean']['output'];
  newState?: Maybe<State>;
  newStateRef: Reference;
  oldIncludedInStatistics: Scalars['Boolean']['output'];
  oldState?: Maybe<State>;
  oldStateRef?: Maybe<Reference>;
  target?: Maybe<ReviewTarget>;
  targetRef?: Maybe<Reference>;
  type: Scalars['String']['output'];
};

export type ReviewTarget = {
  id: Scalars['String']['output'];
};

export type ReviewUpdateAction = {
  setAuthorName?: InputMaybe<SetReviewAuthorName>;
  setCustomField?: InputMaybe<SetReviewCustomField>;
  setCustomType?: InputMaybe<SetReviewCustomType>;
  setCustomer?: InputMaybe<SetReviewCustomer>;
  setKey?: InputMaybe<SetReviewKey>;
  setLocale?: InputMaybe<SetReviewLocale>;
  setRating?: InputMaybe<SetReviewRating>;
  setTarget?: InputMaybe<SetReviewTarget>;
  setText?: InputMaybe<SetReviewText>;
  setTitle?: InputMaybe<SetReviewTitle>;
  transitionState?: InputMaybe<TransitionReviewState>;
};

export enum RoundingMode {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down) */
  HalfDown = 'HalfDown',
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). Default rounding mode as used in IEEE 754 computing functions and operators. */
  HalfEven = 'HalfEven',
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */
  HalfUp = 'HalfUp'
}

export type RuleApprover = {
  associateRole: AssociateRole;
  associateRoleRef: KeyReference;
};

export type RuleApproverDraft = {
  associateRole: ResourceIdentifierInput;
};

export type RuleRequester = {
  associateRole: AssociateRole;
  associateRoleRef: KeyReference;
};

export type RuleRequesterDraft = {
  associateRole: ResourceIdentifierInput;
};

export type SnsDestination = Destination & {
  accessKey?: Maybe<Scalars['String']['output']>;
  accessSecret?: Maybe<Scalars['String']['output']>;
  authenticationMode: AwsAuthenticationMode;
  topicArn: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type SnsDestinationInput = {
  accessKey?: InputMaybe<Scalars['String']['input']>;
  accessSecret?: InputMaybe<Scalars['String']['input']>;
  authenticationMode?: InputMaybe<AwsAuthenticationMode>;
  topicArn: Scalars['String']['input'];
};

export type SqsDestination = Destination & {
  accessKey?: Maybe<Scalars['String']['output']>;
  accessSecret?: Maybe<Scalars['String']['output']>;
  authenticationMode: AwsAuthenticationMode;
  queueUrl: Scalars['String']['output'];
  region: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type SqsDestinationInput = {
  accessKey?: InputMaybe<Scalars['String']['input']>;
  accessSecret?: InputMaybe<Scalars['String']['input']>;
  authenticationMode?: InputMaybe<AwsAuthenticationMode>;
  queueUrl: Scalars['String']['input'];
  region: Scalars['String']['input'];
};

export type ScopedPrice = {
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['String']['output']>;
  currentValue: BaseMoney;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductSearchPriceValue>;
  id: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: BaseMoney;
};

export type ScoreShippingRateInput = ShippingRateInput & {
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type ScoreShippingRateInputDraft = {
  score: Scalars['Int']['input'];
};

export type ScoreShippingRateInputDraftOutput = ShippingRateInputDraftOutput & {
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type SearchFacetInput = {
  model?: InputMaybe<SearchFacetModelInput>;
  string?: InputMaybe<Scalars['String']['input']>;
};

export type SearchFacetModelInput = {
  range?: InputMaybe<RangeFacetInput>;
  terms?: InputMaybe<TermsFacetInput>;
};

export type SearchFilterInput = {
  model?: InputMaybe<SearchFilterModelInput>;
  string?: InputMaybe<Scalars['String']['input']>;
};

export type SearchFilterModelInput = {
  exists?: InputMaybe<ExistsFilterInput>;
  missing?: InputMaybe<MissingFilterInput>;
  range?: InputMaybe<RangeFilterInput>;
  tree?: InputMaybe<TreeFilterInput>;
  value?: InputMaybe<ValueFilterInput>;
};

export type SearchIndexingConfiguration = {
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  businessUnits?: Maybe<BusinessUnitSearchConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  customers?: Maybe<CustomerSearchConfiguration>;
  orders?: Maybe<OrderSearchConfiguration>;
  products?: Maybe<SearchIndexingConfigurationValues>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  productsSearch?: Maybe<ProductsSearchConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  standalonePrices?: Maybe<StandalonePriceSearchConfiguration>;
};

export type SearchIndexingConfigurationValues = {
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Initiator>;
  status?: Maybe<SearchIndexingStatus>;
};

export enum SearchIndexingStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
  Indexing = 'Indexing'
}

export type SearchKeyword = {
  suggestTokenizer?: Maybe<SuggestTokenizer>;
  text: Scalars['String']['output'];
};

export type SearchKeywordArgument = {
  locale: Scalars['Locale']['input'];
  searchKeyword: Scalars['String']['input'];
};

export type SearchKeywordInput = {
  keywords: Array<SearchKeywordItemInput>;
  locale: Scalars['Locale']['input'];
};

export type SearchKeywordItemInput = {
  suggestTokenizer?: InputMaybe<BaseSearchKeywordInput>;
  text: Scalars['String']['input'];
};

export type SearchKeywordProductSearch = {
  suggestTokenizer?: Maybe<SuggestTokenizerProductSearch>;
  text: Scalars['String']['output'];
};

export type SearchKeywords = {
  locale: Scalars['Locale']['output'];
  searchKeywords: Array<SearchKeyword>;
};

export type SearchKeywordsProductSearch = {
  locale: Scalars['Locale']['output'];
  searchKeywords: Array<SearchKeywordProductSearch>;
};

export type SearchLimitsProjection = {
  maxTextSize: Limit;
};

/** In order to decide which of the matching items will actually be discounted */
export enum SelectionMode {
  Cheapest = 'Cheapest',
  MostExpensive = 'MostExpensive'
}

export type SelectionOfProduct = {
  createdAt: Scalars['DateTime']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  productSelection?: Maybe<ProductSelection>;
  productSelectionRef: Reference;
  variantExclusion?: Maybe<ProductVariantExclusion>;
  variantSelection?: Maybe<ProductVariantSelection>;
};

export type SelectionOfProductQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<SelectionOfProduct>;
  total: Scalars['Long']['output'];
};

export type SetApprovalFlowCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetApprovalFlowCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetApprovalRuleApprovers = {
  approvers: ApproverHierarchyDraft;
};

export type SetApprovalRuleDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SetApprovalRuleKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetApprovalRuleName = {
  name: Scalars['String']['input'];
};

export type SetApprovalRulePredicate = {
  predicate: Scalars['String']['input'];
};

export type SetApprovalRuleRequesters = {
  requesters: Array<RuleRequesterDraft>;
};

export type SetApprovalRuleStatus = {
  status: ApprovalRuleStatus;
};

export type SetAssociateRoleCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetAssociateRoleCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetAssociateRoleName = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SetAssociateRolePermissions = {
  permissions?: InputMaybe<Array<Permission>>;
};

export type SetAttributeDefinitionType = AttributeDefinitionType & {
  elementType: AttributeDefinitionType;
  name: Scalars['String']['output'];
};

export type SetAttributeGroupAttributes = {
  attributes: Array<AttributeReferenceInput>;
};

export type SetAttributeGroupDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetAttributeGroupKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitAddressCustomField = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitAddressCustomType = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitAssociates = {
  associates?: InputMaybe<Array<AssociateDraft>>;
};

export type SetBusinessUnitContactEmail = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetBusinessUnitStoreMode = {
  storeMode?: InputMaybe<Scalars['String']['input']>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetBusinessUnitStores = {
  stores: Array<ResourceIdentifierInput>;
};

export type SetCartAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartBillingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetCartBillingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartBillingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartBusinessUnit = {
  businessUnit: ResourceIdentifierInput;
};

export type SetCartCountry = {
  country?: InputMaybe<Scalars['Country']['input']>;
};

export type SetCartCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomLineItemCustomField = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomLineItemCustomType = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomLineItemShippingDetails = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
};

export type SetCartCustomLineItemTaxAmount = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomLineItemTaxRate = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomerEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartCustomerGroup = {
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartCustomerId = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type SetCartDirectDiscounts = {
  discounts: Array<DirectDiscountDraft>;
};

export type SetCartDiscountCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartDiscountCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartDiscountDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCartDiscountKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartDiscountStores = {
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetCartDiscountValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetCartDiscountValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetCartDiscountValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetCartItemShippingAddressCustomField = {
  addressKey: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartItemShippingAddressCustomType = {
  addressKey: Scalars['String']['input'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemDistributionChannel = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemInventoryMode = {
  inventoryMode?: InputMaybe<InventoryMode>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemPrice = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemShippingDetails = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
};

export type SetCartLineItemSupplyChannel = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartLineItemTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLineItemTotalPrice = {
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type SetCartShippingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetCartShippingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartShippingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartShippingCustomField = {
  name: Scalars['String']['input'];
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartShippingCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartShippingMethodTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartShippingMethodTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCartShippingRateInput = {
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
};

export type SetCartTotalTax = {
  externalTaxPortions?: InputMaybe<Array<TaxPortionDraft>>;
  externalTotalGross?: InputMaybe<MoneyInput>;
};

export type SetCategoryAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryAssetDescription = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryAssetKey = {
  assetId: Scalars['String']['input'];
  assetKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryAssetSources = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
};

export type SetCategoryAssetTags = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SetCategoryCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryExternalId = {
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetCategoryMetaDescription = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryMetaKeywords = {
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryMetaTitle = {
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetChannelAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetChannelAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetChannelAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetChannelCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetChannelCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetChannelGeoLocation = {
  geoLocation?: InputMaybe<GeometryInput>;
};

export type SetChannelRoles = {
  roles: Array<ChannelRole>;
};

export type SetCustomerAddressCustomField = {
  addressId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerAddressCustomType = {
  addressId: Scalars['String']['input'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerAuthenticationMode = {
  authMode: AuthenticationMode;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerCompanyName = {
  companyName?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerDateOfBirth = {
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
};

export type SetCustomerDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerExternalId = {
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerFirstName = {
  firstName?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerGroup = {
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCustomerGroupAssignments = {
  customerGroupAssignments: Array<CustomerGroupAssignmentDraft>;
};

export type SetCustomerGroupCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerGroupCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerGroupKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerLastName = {
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type SetCustomerMiddleName = {
  middleName?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerNumber = {
  customerNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerSalutation = {
  salutation?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerStores = {
  stores: Array<ResourceIdentifierInput>;
};

export type SetCustomerTitle = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SetCustomerVatId = {
  vatId?: InputMaybe<Scalars['String']['input']>;
};

export type SetDiscountCodeCartPredicate = {
  cartPredicate?: InputMaybe<Scalars['String']['input']>;
};

export type SetDiscountCodeCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetDiscountCodeCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetDiscountCodeDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetDiscountCodeKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetDiscountCodeMaxApplications = {
  maxApplications?: InputMaybe<Scalars['Long']['input']>;
};

export type SetDiscountCodeMaxApplicationsPerCustomer = {
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Long']['input']>;
};

export type SetDiscountCodeName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetDiscountCodeValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetDiscountCodeValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetDiscountCodeValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetExtensionKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetExtensionTimeoutInMs = {
  timeoutInMs?: InputMaybe<Scalars['Int']['input']>;
};

export type SetInventoryEntryCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetInventoryEntryCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetInventoryEntryExpectedDelivery = {
  expectedDelivery?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetInventoryEntryRestockableInDays = {
  restockableInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type SetInventoryEntrySupplyChannel = {
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type SetMyBusinessUnitAddressCustomField = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyBusinessUnitAddressCustomType = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyBusinessUnitContactEmail = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyBusinessUnitCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyBusinessUnitCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyBusinessUnitDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyBusinessUnitDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyCartShippingMethod = {
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetMyQuoteRequestCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetMyQuoteRequestCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderBillingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetOrderBillingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderBillingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderCustomLineItemCustomField = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderCustomLineItemCustomType = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderCustomLineItemShippingDetails = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetOrderCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderCustomerEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderCustomerId = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderDeliveryAddress = {
  address?: InputMaybe<AddressInput>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderDeliveryAddressCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderDeliveryAddressCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderDeliveryCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderDeliveryCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderDeliveryItems = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items: Array<DeliveryItemDraftType>;
};

export type SetOrderEditComment = {
  comment?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderEditCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderEditCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderEditKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderEditStagedActions = {
  stagedActions: Array<StagedOrderUpdateAction>;
};

export type SetOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String']['input'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderLineItemShippingDetails = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetOrderLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type SetOrderNumber = {
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderParcelCustomField = {
  name: Scalars['String']['input'];
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderParcelCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderParcelItems = {
  items: Array<DeliveryItemDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderParcelMeasurements = {
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderParcelTrackingData = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type SetOrderPurchaseOrderNumber = {
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderReturnInfo = {
  items?: InputMaybe<Array<ReturnInfoDraftType>>;
};

export type SetOrderReturnItemCustomField = {
  name: Scalars['String']['input'];
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderReturnItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderReturnPaymentState = {
  paymentState: ReturnPaymentState;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderReturnShipmentState = {
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  shipmentState: ReturnShipmentState;
};

export type SetOrderShippingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetOrderShippingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderShippingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderShippingCustomField = {
  name: Scalars['String']['input'];
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderShippingCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetOrderStore = {
  store?: InputMaybe<ResourceIdentifierInput>;
};

export type SetPaymentAmountPaid = {
  amount?: InputMaybe<MoneyInput>;
};

export type SetPaymentAmountRefunded = {
  amount?: InputMaybe<MoneyInput>;
};

export type SetPaymentAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentAuthorization = {
  amount?: InputMaybe<MoneyInput>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetPaymentCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentCustomer = {
  customer?: InputMaybe<ResourceIdentifierInput>;
};

export type SetPaymentExternalId = {
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentInterfaceId = {
  interfaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentMethodInfoInterface = {
  interface: Scalars['String']['input'];
};

export type SetPaymentMethodInfoMethod = {
  method?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentMethodInfoName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetPaymentStatusInterfaceCode = {
  interfaceCode?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentStatusInterfaceText = {
  interfaceText?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentTransactionCustomField = {
  name: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetPaymentTransactionCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  transactionId: Scalars['String']['input'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAssetDescription = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAssetKey = {
  assetId: Scalars['String']['input'];
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAssetSources = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAssetTags = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAttribute = {
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductAttributeInAllVariants = {
  name: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductCategoryOrderHint = {
  categoryId: Scalars['String']['input'];
  orderHint?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductDiscountDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetProductDiscountKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductDiscountValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetProductDiscountValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetProductDiscountValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetProductDiscountedPrice = {
  discounted?: InputMaybe<DiscountedProductPriceValueInput>;
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductImageLabel = {
  imageUrl: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductMetaAttributes = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductMetaDescription = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductMetaKeywords = {
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductMetaTitle = {
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductPriceCustomField = {
  name: Scalars['String']['input'];
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductPriceCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductPriceKey = {
  key?: InputMaybe<Scalars['String']['input']>;
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductPriceMode = {
  priceMode?: InputMaybe<PriceMode>;
};

export type SetProductPrices = {
  prices: Array<ProductPriceDataInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductSelectionCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductSelectionCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductSelectionKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetProductSelectionVariantExclusion = {
  product: ResourceIdentifierInput;
  variantExclusion?: InputMaybe<ProductVariantExclusionDraft>;
};

export type SetProductSelectionVariantSelection = {
  product: ResourceIdentifierInput;
  variantSelection?: InputMaybe<ProductVariantSelectionDraft>;
};

export type SetProductSku = {
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId: Scalars['Int']['input'];
};

export type SetProductTailoringAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringAssetDescription = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringAssetKey = {
  assetId: Scalars['String']['input'];
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringAssetSources = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringAssetTags = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTailoringImageLabel = {
  imageUrl: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringImages = {
  images: Array<ImageInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProductTailoringMetaAttributes = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTailoringMetaDescription = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTailoringMetaKeywords = {
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTailoringMetaTitle = {
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTailoringName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTailoringSlug = {
  slug?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetProductTaxCategory = {
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetProductVariantKey = {
  key?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type SetProjectSettingsExternalOAuth = {
  externalOAuth?: InputMaybe<ExternalOAuthDraft>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type SetProjectSettingsMyBusinessUnitAssociateRoleOnCreation = {
  associateRole?: InputMaybe<ResourceIdentifierInput>;
};

export type SetProjectSettingsShippingRateInputType = {
  shippingRateInputType?: InputMaybe<ShippingRateInputTypeInput>;
};

export type SetQuoteCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetQuoteCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetQuoteRequestCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetQuoteRequestCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetReviewAuthorName = {
  authorName?: InputMaybe<Scalars['String']['input']>;
};

export type SetReviewCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetReviewCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetReviewCustomer = {
  customer?: InputMaybe<ResourceIdentifierInput>;
};

export type SetReviewKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetReviewLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type SetReviewRating = {
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type SetReviewTarget = {
  target?: InputMaybe<TargetReferenceInput>;
};

export type SetReviewText = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type SetReviewTitle = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SetSearchKeywords = {
  searchKeywords: Array<SearchKeywordInput>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetShippingMethodCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetShippingMethodCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetShippingMethodDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SetShippingMethodKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetShippingMethodLocalizedDescription = {
  localizedDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShippingMethodLocalizedName = {
  localizedName?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShippingMethodPredicate = {
  predicate?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListCustomer = {
  customer?: InputMaybe<ResourceIdentifierInput>;
};

export type SetShoppingListDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type SetShoppingListDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShoppingListKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListSlug = {
  slug?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShoppingListStore = {
  store?: InputMaybe<ResourceIdentifierInput>;
};

export type SetShoppingListTextLineItemCustomField = {
  name: Scalars['String']['input'];
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListTextLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetShoppingListTextLineItemDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderBillingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetStagedOrderBillingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderBillingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderBillingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderBillingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type SetStagedOrderBillingAddressOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCountry = {
  country?: InputMaybe<Scalars['Country']['input']>;
};

export type SetStagedOrderCountryOutput = StagedOrderUpdateActionOutput & {
  country?: Maybe<Scalars['Country']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderCustomLineItemCustomField = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomLineItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderCustomLineItemCustomType = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomLineItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomLineItemShippingDetails = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetStagedOrderCustomLineItemShippingDetailsOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomLineItemTaxAmount = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomLineItemTaxAmountOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomLineItemTaxRate = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomLineItemTaxRateOutput = StagedOrderUpdateActionOutput & {
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderCustomShippingMethodOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodName: Scalars['String']['output'];
  shippingRate: ShippingRate;
  taxCategoryResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomerEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomerEmailOutput = StagedOrderUpdateActionOutput & {
  email?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomerGroup = {
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderCustomerGroupOutput = StagedOrderUpdateActionOutput & {
  customerGroupResId?: Maybe<CustomerGroupReferenceIdentifier>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderCustomerId = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderCustomerIdOutput = StagedOrderUpdateActionOutput & {
  customerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderDeliveryAddress = {
  address?: InputMaybe<AddressInput>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderDeliveryAddressCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderDeliveryAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderDeliveryAddressCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderDeliveryAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderDeliveryAddressOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderDeliveryCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderDeliveryCustomFieldOutput = StagedOrderUpdateActionOutput & {
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderDeliveryCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderDeliveryCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderDeliveryItems = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items: Array<DeliveryItemDraftType>;
};

export type SetStagedOrderDeliveryItemsOutput = StagedOrderUpdateActionOutput & {
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  items: Array<DeliveryItem>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderDirectDiscounts = {
  discounts: Array<DirectDiscountDraft>;
};

export type SetStagedOrderDirectDiscountsOutput = StagedOrderUpdateActionOutput & {
  discounts: Array<DirectDiscountDraftOutput>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderItemShippingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  addressKey: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String']['input'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderItemShippingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  addressKey: Scalars['String']['output'];
  custom: CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemDistributionChannel = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemDistributionChannelOutput = StagedOrderUpdateActionOutput & {
  distributionChannelResId?: Maybe<ChannelReferenceIdentifier>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemPrice = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemPriceOutput = StagedOrderUpdateActionOutput & {
  externalPrice?: Maybe<BaseMoney>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemShippingDetails = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetStagedOrderLineItemShippingDetailsOutput = StagedOrderUpdateActionOutput & {
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemTaxAmountOutput = StagedOrderUpdateActionOutput & {
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemTaxRateOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLineItemTotalPrice = {
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderLineItemTotalPriceOutput = StagedOrderUpdateActionOutput & {
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type SetStagedOrderLocaleOutput = StagedOrderUpdateActionOutput & {
  locale?: Maybe<Scalars['Locale']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderOrderNumber = {
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderOrderNumberOutput = StagedOrderUpdateActionOutput & {
  orderNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderOrderTotalTax = {
  externalTaxPortions?: InputMaybe<Array<TaxPortionDraft>>;
  externalTotalGross?: InputMaybe<MoneyInput>;
};

export type SetStagedOrderOrderTotalTaxOutput = StagedOrderUpdateActionOutput & {
  externalTaxPortions: Array<TaxPortion>;
  externalTotalGross?: Maybe<Money>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderParcelCustomField = {
  name: Scalars['String']['input'];
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderParcelCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String']['output'];
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderParcelCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderParcelCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderParcelItems = {
  items: Array<DeliveryItemDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderParcelItemsOutput = StagedOrderUpdateActionOutput & {
  items: Array<DeliveryItem>;
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderParcelMeasurements = {
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderParcelMeasurementsOutput = StagedOrderUpdateActionOutput & {
  measurements?: Maybe<ParcelMeasurements>;
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderParcelTrackingData = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type SetStagedOrderParcelTrackingDataOutput = StagedOrderUpdateActionOutput & {
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  trackingData?: Maybe<TrackingData>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderPurchaseOrderNumber = {
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderPurchaseOrderNumberOutput = StagedOrderUpdateActionOutput & {
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderReturnInfo = {
  items?: InputMaybe<Array<ReturnInfoDraftType>>;
};

export type SetStagedOrderReturnInfoOutput = StagedOrderUpdateActionOutput & {
  items: Array<ReturnInfoDraftTypeOutput>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderReturnItemCustomField = {
  name: Scalars['String']['input'];
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderReturnItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String']['output'];
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderReturnItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderReturnItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderReturnPaymentState = {
  paymentState: ReturnPaymentState;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderReturnPaymentStateOutput = StagedOrderUpdateActionOutput & {
  paymentState: ReturnPaymentState;
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderReturnShipmentState = {
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  shipmentState: ReturnShipmentState;
};

export type SetStagedOrderReturnShipmentStateOutput = StagedOrderUpdateActionOutput & {
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  shipmentState: ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetStagedOrderShippingAddressAndCustomShippingMethod = {
  address: AddressInput;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderShippingAddressAndCustomShippingMethodOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodName: Scalars['String']['output'];
  shippingRate: ShippingRate;
  taxCategoryResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingAddressAndShippingMethod = {
  address: AddressInput;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderShippingAddressAndShippingMethodOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderShippingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderShippingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderShippingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingAddressOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingCustomField = {
  name: Scalars['String']['input'];
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderShippingCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type SetStagedOrderShippingCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderShippingCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderShippingMethodOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingMethodTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderShippingMethodTaxAmountOutput = StagedOrderUpdateActionOutput & {
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingMethodTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedOrderShippingMethodTaxRateOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderShippingRateInput = {
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
};

export type SetStagedOrderShippingRateInputOutput = StagedOrderUpdateActionOutput & {
  shippingRateInput?: Maybe<ShippingRateInputDraftOutput>;
  type: Scalars['String']['output'];
};

export type SetStagedOrderStore = {
  store?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderStoreOutput = StagedOrderUpdateActionOutput & {
  storeResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type SetStagedQuoteCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedQuoteCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedQuoteSellerComment = {
  sellerComment?: InputMaybe<Scalars['String']['input']>;
};

export type SetStagedQuoteValidTo = {
  validTo?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetStandalonePriceCustomFields = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStandalonePriceDiscountedPrice = {
  discounted?: InputMaybe<DiscountedProductPriceValueInput>;
};

export type SetStandalonePriceKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetStandalonePriceTiers = {
  tiers: Array<ProductPriceTierInput>;
};

export type SetStandalonePriceValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetStandalonePriceValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetStandalonePriceValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SetStateDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetStateName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetStateRoles = {
  roles: Array<StateRole>;
};

export type SetStateTransitions = {
  transitions?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetStoreCountries = {
  countries?: InputMaybe<Array<StoreCountryInput>>;
};

export type SetStoreCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetStoreCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type SetStoreDistributionChannels = {
  distributionChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetStoreLanguages = {
  languages?: InputMaybe<Array<Scalars['Locale']['input']>>;
};

export type SetStoreName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetStoreProductSelections = {
  productSelections?: InputMaybe<Array<ProductSelectionSettingInActionInput>>;
};

export type SetStoreSupplyChannels = {
  supplyChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetSubscriptionChanges = {
  changes: Array<ChangeSubscriptionInput>;
};

export type SetSubscriptionKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetSubscriptionMessages = {
  messages: Array<MessageSubscriptionInput>;
};

export type SetTaxCategoryKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type SetType = FieldType & {
  elementType: FieldType;
  name: Scalars['String']['output'];
};

export type SetTypeDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetZoneDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SetZoneKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export enum ShipmentState {
  Backorder = 'Backorder',
  Delayed = 'Delayed',
  Delivered = 'Delivered',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped'
}

export type Shipping = {
  shippingAddress?: Maybe<Address>;
  shippingCustomFields?: Maybe<CustomFieldsType>;
  shippingInfo?: Maybe<ShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingRateInput?: Maybe<ShippingRateInput>;
};

export type ShippingDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveries?: InputMaybe<Array<DeliveryDraft>>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  key: Scalars['String']['input'];
  shippingAddress: AddressInput;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
};

export type ShippingInfo = {
  deliveries: Array<Delivery>;
  discountedPrice?: Maybe<DiscountedLineItemPrice>;
  price: Money;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName: Scalars['String']['output'];
  shippingMethodRef?: Maybe<Reference>;
  shippingMethodState: ShippingMethodState;
  shippingRate: ShippingRate;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
};

export type ShippingInfoImportDraft = {
  deliveries?: Array<DeliveryDraft>;
  discountedPrice?: InputMaybe<DiscountedLineItemPriceDraft>;
  price: MoneyInput;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
  shippingMethodName: Scalars['String']['input'];
  shippingMethodState?: ShippingMethodState;
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
  taxRate?: InputMaybe<TaxRateInput>;
};

export type ShippingMethod = ReferenceExpandable & Versioned & {
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  localizedDescription?: Maybe<Scalars['String']['output']>;
  localizedDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  localizedName?: Maybe<Scalars['String']['output']>;
  localizedNameAllLocales?: Maybe<Array<LocalizedString>>;
  name: Scalars['String']['output'];
  predicate?: Maybe<Scalars['String']['output']>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  version: Scalars['Long']['output'];
  zoneRates: Array<ZoneRate>;
};


export type ShippingMethodLocalizedDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ShippingMethodLocalizedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ShippingMethodDraft = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  /** The usage of parameter 'description' is deprecated in favor of using 'localizedDescription' */
  description?: InputMaybe<Scalars['String']['input']>;
  isDefault: Scalars['Boolean']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  localizedDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  localizedName?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Scalars['String']['input'];
  predicate?: InputMaybe<Scalars['String']['input']>;
  taxCategory: ResourceIdentifierInput;
  zoneRates?: InputMaybe<Array<ZoneRateDraft>>;
};

export type ShippingMethodLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type ShippingMethodLimitsProjection = {
  total: ShippingMethodLimitWithCurrent;
};

export type ShippingMethodQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ShippingMethod>;
  total: Scalars['Long']['output'];
};

export enum ShippingMethodState {
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will fail with error ShippingMethodDoesNotMatchCart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  MatchesCart = 'MatchesCart'
}

export type ShippingMethodTargetDraft = {
  quantity: Scalars['Long']['input'];
  shippingMethodKey: Scalars['String']['input'];
};

export type ShippingMethodTargetDraftOutput = {
  quantity: Scalars['Long']['output'];
  shippingMethodKey: Scalars['String']['output'];
};

export type ShippingMethodTargetDraftType = {
  quantity: Scalars['Long']['input'];
  shippingMethodKey: Scalars['String']['input'];
};

export type ShippingMethodUpdateAction = {
  addShippingRate?: InputMaybe<AddShippingMethodShippingRate>;
  addZone?: InputMaybe<AddShippingMethodZone>;
  changeActive?: InputMaybe<ChangeShippingMethodActive>;
  changeIsDefault?: InputMaybe<ChangeShippingMethodIsDefault>;
  changeName?: InputMaybe<ChangeShippingMethodName>;
  changeTaxCategory?: InputMaybe<ChangeShippingMethodTaxCategory>;
  removeShippingRate?: InputMaybe<RemoveShippingMethodShippingRate>;
  removeZone?: InputMaybe<RemoveShippingMethodZone>;
  setCustomField?: InputMaybe<SetShippingMethodCustomField>;
  setCustomType?: InputMaybe<SetShippingMethodCustomType>;
  /** This action is deprecated in favor of using 'setLocalizedDescription' */
  setDescription?: InputMaybe<SetShippingMethodDescription>;
  setKey?: InputMaybe<SetShippingMethodKey>;
  setLocalizedDescription?: InputMaybe<SetShippingMethodLocalizedDescription>;
  setLocalizedName?: InputMaybe<SetShippingMethodLocalizedName>;
  setPredicate?: InputMaybe<SetShippingMethodPredicate>;
};

/** A field to retrieve available shipping methods for a cart. */
export type ShippingMethodsByCartInterface = {
  shippingMethodsByCart: Array<ShippingMethod>;
};


/** A field to retrieve available shipping methods for a cart. */
export type ShippingMethodsByCartInterfaceShippingMethodsByCartArgs = {
  id: Scalars['String']['input'];
};

export enum ShippingMode {
  /** Allows multiple shipping methods for the cart with their respective shipping addresses */
  Multiple = 'Multiple',
  /** Allows only one shipping method and shipping address for the cart */
  Single = 'Single'
}

/** Shipping Rate */
export type ShippingRate = {
  freeAbove?: Maybe<Money>;
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price: Money;
  tiers: Array<ShippingRatePriceTier>;
};

export type ShippingRateCartClassificationPriceTier = ShippingRatePriceTier & {
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price: Money;
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ShippingRateCartScorePriceTier = ShippingRatePriceTier & {
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Money>;
  priceFunction?: Maybe<PriceFunction>;
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type ShippingRateCartValuePriceTier = ShippingRatePriceTier & {
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  minimumCentAmount: Scalars['Int']['output'];
  price: Money;
  type: Scalars['String']['output'];
};

export type ShippingRateDraft = {
  freeAbove?: InputMaybe<MoneyDraft>;
  price: MoneyDraft;
  tiers?: InputMaybe<Array<ShippingRatePriceTierDraft>>;
};

export type ShippingRateInput = {
  type: Scalars['String']['output'];
};

export type ShippingRateInputDraft = {
  Classification?: InputMaybe<ClassificationShippingRateInputDraft>;
  Score?: InputMaybe<ScoreShippingRateInputDraft>;
};

export type ShippingRateInputDraftOutput = {
  type: Scalars['String']['output'];
};

export type ShippingRateInputLocalizedEnumValue = {
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<LocalizedString>;
};


export type ShippingRateInputLocalizedEnumValueLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ShippingRateInputType = {
  type: Scalars['String']['output'];
};

export type ShippingRateInputTypeInput = {
  CartClassification?: InputMaybe<CartClassificationInput>;
  CartScore?: InputMaybe<CartScoreInput>;
  CartValue?: InputMaybe<CartValueInput>;
};

export type ShippingRatePriceTier = {
  type: Scalars['String']['output'];
};

export type ShippingRatePriceTierCartClassificationDraft = {
  price: MoneyDraft;
  value: Scalars['String']['input'];
};

export type ShippingRatePriceTierCartScoreDraft = {
  price?: InputMaybe<MoneyDraft>;
  priceFunction?: InputMaybe<PriceFunctionDraft>;
  score: Scalars['Int']['input'];
};

export type ShippingRatePriceTierCartValueDraft = {
  minimumCentAmount: Scalars['Int']['input'];
  price: MoneyDraft;
};

export type ShippingRatePriceTierDraft = {
  CartClassification?: InputMaybe<ShippingRatePriceTierCartClassificationDraft>;
  CartScore?: InputMaybe<ShippingRatePriceTierCartScoreDraft>;
  CartValue?: InputMaybe<ShippingRatePriceTierCartValueDraft>;
};

export type ShippingTarget = CartDiscountTarget & {
  type: Scalars['String']['output'];
};

export type ShippingTargetDraft = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
  shippingMethodKey?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingTargetDraftType = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
  shippingMethodKey?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingTargetInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type ShoppingList = ReferenceExpandable & Versioned & {
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  lineItems: Array<ShoppingListLineItem>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  textLineItems: Array<TextLineItem>;
  version: Scalars['Long']['output'];
};


export type ShoppingListDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ShoppingListNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ShoppingListSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ShoppingListDraft = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customer?: InputMaybe<ResourceIdentifierInput>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<Array<ShoppingListLineItemDraft>>;
  name: Array<LocalizedStringItemInputType>;
  slug?: InputMaybe<Array<LocalizedStringItemInputType>>;
  textLineItems?: InputMaybe<Array<TextLineItemDraft>>;
};

export type ShoppingListLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type ShoppingListLimitsProjection = {
  lineItems: Limit;
  textLineItems: Limit;
  total: ShoppingListLimitWithCurrent;
};

export type ShoppingListLineItem = {
  addedAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  productId: Scalars['String']['output'];
  productSlug?: Maybe<Scalars['String']['output']>;
  productSlugAllLocales?: Maybe<Array<LocalizedString>>;
  productType: ProductTypeDefinition;
  productTypeRef: Reference;
  quantity: Scalars['Int']['output'];
  variant?: Maybe<ProductVariant>;
  variantId?: Maybe<Scalars['Int']['output']>;
};


export type ShoppingListLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type ShoppingListLineItemProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ShoppingListLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterface = {
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};


/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterfaceShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};


/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterfaceShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type ShoppingListQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<ShoppingList>;
  total: Scalars['Long']['output'];
};

export type ShoppingListUpdateAction = {
  addLineItem?: InputMaybe<AddShoppingListLineItem>;
  addTextLineItem?: InputMaybe<AddShoppingListTextLineItem>;
  changeLineItemQuantity?: InputMaybe<ChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<ChangeShoppingListLineItemsOrder>;
  changeName?: InputMaybe<ChangeShoppingListName>;
  changeTextLineItemName?: InputMaybe<ChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: InputMaybe<ChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: InputMaybe<ChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: InputMaybe<RemoveShoppingListLineItem>;
  removeTextLineItem?: InputMaybe<RemoveShoppingListTextLineItem>;
  setAnonymousId?: InputMaybe<SetShoppingListAnonymousId>;
  setCustomField?: InputMaybe<SetShoppingListCustomField>;
  setCustomType?: InputMaybe<SetShoppingListCustomType>;
  setCustomer?: InputMaybe<SetShoppingListCustomer>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: InputMaybe<SetShoppingListDescription>;
  setKey?: InputMaybe<SetShoppingListKey>;
  setLineItemCustomField?: InputMaybe<SetShoppingListLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetShoppingListLineItemCustomType>;
  setSlug?: InputMaybe<SetShoppingListSlug>;
  setStore?: InputMaybe<SetShoppingListStore>;
  setTextLineItemCustomField?: InputMaybe<SetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: InputMaybe<SetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: InputMaybe<SetShoppingListTextLineItemDescription>;
};

export type ShoppingListsConfiguration = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
};

export type ShoppingListsConfigurationInput = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type SignUpInMyBusinessUnitDraft = {
  associateRoleAssignments: Array<AssociateRoleAssignmentDraft>;
  businessUnit: ResourceIdentifierInput;
  customer: CustomerSignUpDraft;
  version: Scalars['Long']['input'];
};

export type SimpleAttributeTypeDraft = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type SimpleFieldTypeDraft = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

/** Describes how this discount interacts with other discounts */
export enum StackingMode {
  /** Default. Continue applying other matching discounts after applying this one. */
  Stacking = 'Stacking',
  /** Don’t apply any more matching discounts after this one. */
  StopAfterThisDiscount = 'StopAfterThisDiscount'
}

export type StagedOrderUpdateAction = {
  addCustomLineItem?: InputMaybe<AddStagedOrderCustomLineItem>;
  addDelivery?: InputMaybe<AddStagedOrderDelivery>;
  addDiscountCode?: InputMaybe<AddStagedOrderDiscountCode>;
  addItemShippingAddress?: InputMaybe<AddStagedOrderItemShippingAddress>;
  addLineItem?: InputMaybe<AddStagedOrderLineItem>;
  addParcelToDelivery?: InputMaybe<AddStagedOrderParcelToDelivery>;
  addPayment?: InputMaybe<AddStagedOrderPayment>;
  addReturnInfo?: InputMaybe<AddStagedOrderReturnInfo>;
  addShoppingList?: InputMaybe<AddStagedOrderShoppingList>;
  changeCustomLineItemMoney?: InputMaybe<ChangeStagedOrderCustomLineItemMoney>;
  changeCustomLineItemQuantity?: InputMaybe<ChangeStagedOrderCustomLineItemQuantity>;
  changeLineItemQuantity?: InputMaybe<ChangeStagedOrderLineItemQuantity>;
  changeOrderState?: InputMaybe<ChangeStagedOrderOrderState>;
  changePaymentState?: InputMaybe<ChangeStagedOrderPaymentState>;
  changeShipmentState?: InputMaybe<ChangeStagedOrderShipmentState>;
  changeTaxCalculationMode?: InputMaybe<ChangeStagedOrderTaxCalculationMode>;
  changeTaxMode?: InputMaybe<ChangeStagedOrderTaxMode>;
  changeTaxRoundingMode?: InputMaybe<ChangeStagedOrderTaxRoundingMode>;
  importCustomLineItemState?: InputMaybe<ImportStagedOrderCustomLineItemState>;
  importLineItemState?: InputMaybe<ImportStagedOrderLineItemState>;
  removeCustomLineItem?: InputMaybe<RemoveStagedOrderCustomLineItem>;
  removeDelivery?: InputMaybe<RemoveStagedOrderDelivery>;
  removeDiscountCode?: InputMaybe<RemoveStagedOrderDiscountCode>;
  removeItemShippingAddress?: InputMaybe<RemoveStagedOrderItemShippingAddress>;
  removeLineItem?: InputMaybe<RemoveStagedOrderLineItem>;
  removeParcelFromDelivery?: InputMaybe<RemoveStagedOrderParcelFromDelivery>;
  removePayment?: InputMaybe<RemoveStagedOrderPayment>;
  setBillingAddress?: InputMaybe<SetStagedOrderBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetStagedOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetStagedOrderBillingAddressCustomType>;
  setCountry?: InputMaybe<SetStagedOrderCountry>;
  setCustomField?: InputMaybe<SetStagedOrderCustomField>;
  setCustomLineItemCustomField?: InputMaybe<SetStagedOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<SetStagedOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<SetStagedOrderCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: InputMaybe<SetStagedOrderCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: InputMaybe<SetStagedOrderCustomLineItemTaxRate>;
  setCustomShippingMethod?: InputMaybe<SetStagedOrderCustomShippingMethod>;
  setCustomType?: InputMaybe<SetStagedOrderCustomType>;
  setCustomerEmail?: InputMaybe<SetStagedOrderCustomerEmail>;
  setCustomerGroup?: InputMaybe<SetStagedOrderCustomerGroup>;
  setCustomerId?: InputMaybe<SetStagedOrderCustomerId>;
  setDeliveryAddress?: InputMaybe<SetStagedOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: InputMaybe<SetStagedOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: InputMaybe<SetStagedOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: InputMaybe<SetStagedOrderDeliveryCustomField>;
  setDeliveryCustomType?: InputMaybe<SetStagedOrderDeliveryCustomType>;
  setDeliveryItems?: InputMaybe<SetStagedOrderDeliveryItems>;
  setDirectDiscounts?: InputMaybe<SetStagedOrderDirectDiscounts>;
  setItemShippingAddressCustomField?: InputMaybe<SetStagedOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetStagedOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<SetStagedOrderLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetStagedOrderLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<SetStagedOrderLineItemDistributionChannel>;
  setLineItemPrice?: InputMaybe<SetStagedOrderLineItemPrice>;
  setLineItemShippingDetails?: InputMaybe<SetStagedOrderLineItemShippingDetails>;
  setLineItemTaxAmount?: InputMaybe<SetStagedOrderLineItemTaxAmount>;
  setLineItemTaxRate?: InputMaybe<SetStagedOrderLineItemTaxRate>;
  setLineItemTotalPrice?: InputMaybe<SetStagedOrderLineItemTotalPrice>;
  setLocale?: InputMaybe<SetStagedOrderLocale>;
  setOrderNumber?: InputMaybe<SetStagedOrderOrderNumber>;
  setOrderTotalTax?: InputMaybe<SetStagedOrderOrderTotalTax>;
  setParcelCustomField?: InputMaybe<SetStagedOrderParcelCustomField>;
  setParcelCustomType?: InputMaybe<SetStagedOrderParcelCustomType>;
  setParcelItems?: InputMaybe<SetStagedOrderParcelItems>;
  setParcelMeasurements?: InputMaybe<SetStagedOrderParcelMeasurements>;
  setParcelTrackingData?: InputMaybe<SetStagedOrderParcelTrackingData>;
  setPurchaseOrderNumber?: InputMaybe<SetStagedOrderPurchaseOrderNumber>;
  setReturnInfo?: InputMaybe<SetStagedOrderReturnInfo>;
  setReturnItemCustomField?: InputMaybe<SetStagedOrderReturnItemCustomField>;
  setReturnItemCustomType?: InputMaybe<SetStagedOrderReturnItemCustomType>;
  setReturnPaymentState?: InputMaybe<SetStagedOrderReturnPaymentState>;
  setReturnShipmentState?: InputMaybe<SetStagedOrderReturnShipmentState>;
  setShippingAddress?: InputMaybe<SetStagedOrderShippingAddress>;
  setShippingAddressAndCustomShippingMethod?: InputMaybe<SetStagedOrderShippingAddressAndCustomShippingMethod>;
  setShippingAddressAndShippingMethod?: InputMaybe<SetStagedOrderShippingAddressAndShippingMethod>;
  setShippingAddressCustomField?: InputMaybe<SetStagedOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetStagedOrderShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<SetStagedOrderShippingCustomField>;
  setShippingCustomType?: InputMaybe<SetStagedOrderShippingCustomType>;
  setShippingMethod?: InputMaybe<SetStagedOrderShippingMethod>;
  setShippingMethodTaxAmount?: InputMaybe<SetStagedOrderShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: InputMaybe<SetStagedOrderShippingMethodTaxRate>;
  setShippingRateInput?: InputMaybe<SetStagedOrderShippingRateInput>;
  setStore?: InputMaybe<SetStagedOrderStore>;
  transitionCustomLineItemState?: InputMaybe<TransitionStagedOrderCustomLineItemState>;
  transitionLineItemState?: InputMaybe<TransitionStagedOrderLineItemState>;
  transitionState?: InputMaybe<TransitionStagedOrderState>;
  updateItemShippingAddress?: InputMaybe<UpdateStagedOrderItemShippingAddress>;
  updateSyncInfo?: InputMaybe<UpdateStagedOrderSyncInfo>;
};

export type StagedOrderUpdateActionOutput = {
  type: Scalars['String']['output'];
};

export type StagedPriceDraft = {
  value: BaseMoneyInput;
};

export type StagedQuote = Versioned & {
  businessUnit?: Maybe<BusinessUnit>;
  businessUnitRef?: Maybe<KeyReference>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quotationCart?: Maybe<Cart>;
  quotationCartRef: Reference;
  quoteRequest?: Maybe<QuoteRequest>;
  quoteRequestRef: Reference;
  sellerComment?: Maybe<Scalars['String']['output']>;
  stagedQuoteState: StagedQuoteState;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  store?: Maybe<Store>;
  storeRef?: Maybe<KeyReference>;
  validTo?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Long']['output'];
};

export type StagedQuoteCreated = MessagePayload & {
  stagedQuote: StagedQuote;
  type: Scalars['String']['output'];
};

export type StagedQuoteDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type StagedQuoteDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  quoteRequest?: InputMaybe<ResourceIdentifierInput>;
  quoteRequestStateToAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  quoteRequestVersion?: InputMaybe<Scalars['Long']['input']>;
  state?: InputMaybe<ReferenceInput>;
};

export type StagedQuoteQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<StagedQuote>;
  total: Scalars['Long']['output'];
};

export type StagedQuoteSellerCommentSet = MessagePayload & {
  sellerComment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export enum StagedQuoteState {
  Closed = 'Closed',
  InProgress = 'InProgress',
  Sent = 'Sent'
}

export type StagedQuoteStateChanged = MessagePayload & {
  oldStagedQuoteState: StagedQuoteState;
  stagedQuoteState: StagedQuoteState;
  type: Scalars['String']['output'];
};

export type StagedQuoteStateTransition = MessagePayload & {
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<State>;
  oldStateRef?: Maybe<Reference>;
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String']['output'];
};

export type StagedQuoteUpdateAction = {
  changeStagedQuoteState?: InputMaybe<ChangeStagedQuoteState>;
  setCustomField?: InputMaybe<SetStagedQuoteCustomField>;
  setCustomType?: InputMaybe<SetStagedQuoteCustomType>;
  setSellerComment?: InputMaybe<SetStagedQuoteSellerComment>;
  setValidTo?: InputMaybe<SetStagedQuoteValidTo>;
  transitionState?: InputMaybe<TransitionStagedQuoteState>;
};

export type StagedQuoteValidToSet = MessagePayload & {
  type: Scalars['String']['output'];
  validTo?: Maybe<Scalars['DateTime']['output']>;
};

export type StagedStandalonePrice = {
  discounted?: Maybe<DiscountedProductPriceValue>;
  value: BaseMoney;
};

/**
 * StandalonePrices are managed and queried through the StandalonePrices API
 * and associated to a ProductVariant through the sku field.
 */
export type StandalonePrice = Versioned & {
  /**
   * If set to `true`, the StandalonePrice is considered during Product price selection.
   * If set to `false`, the StandalonePrice is not considered during Product price selection and any associated Line Items in a Cart cannot be ordered.
   */
  active: Scalars['Boolean']['output'];
  channel?: Maybe<Channel>;
  /** Product distribution Channel for which this Price is valid. */
  channelRef?: Maybe<Reference>;
  /** Country for which this Price is valid. */
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  /** Custom Fields for the StandalonePrice. */
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  /** CustomerGroup Reference for which this Price is valid. */
  customerGroupRef?: Maybe<Reference>;
  /** Set if a matching ProductDiscount exists. */
  discounted?: Maybe<DiscountedProductPriceValue>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the StandalonePrice. */
  id: Scalars['String']['output'];
  /** User-defined unique identifier of the StandalonePrice. */
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  /** SKU of the ProductVariant to which this Price is associated. */
  sku: Scalars['String']['output'];
  /** Staged changes of the StandalonePrice. Only present if the StandalonePrice has some changes staged. */
  staged?: Maybe<StagedStandalonePrice>;
  /**
   * Price tiers if any are defined.
   * If `discounted` is present, the tiered Price is ignored for a Product Variant.
   */
  tiers?: Maybe<Array<ProductPriceTier>>;
  /** Date from which the Price is valid. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** Date until the Price is valid. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Money value of this Price. */
  value: BaseMoney;
  /** Current version of the StandalonePrice. */
  version: Scalars['Long']['output'];
};

export type StandalonePriceActiveChanged = MessagePayload & {
  active: Scalars['Boolean']['output'];
  oldActive: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type StandalonePriceCreated = MessagePayload & {
  standalonePrice: StandalonePrice;
  type: Scalars['String']['output'];
};

export type StandalonePriceDeleted = MessagePayload & {
  sku?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type StandalonePriceDiscountSet = MessagePayload & {
  discounted?: Maybe<DiscountedProductPriceValue>;
  type: Scalars['String']['output'];
};

export type StandalonePriceExpiresAtSet = MessagePayload & {
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
};

export type StandalonePriceExternalDiscountSet = MessagePayload & {
  discounted?: Maybe<DiscountedProductPriceValue>;
  type: Scalars['String']['output'];
};

export type StandalonePriceKeySet = MessagePayload & {
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type StandalonePriceQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<StandalonePrice>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type StandalonePriceSearchConfiguration = {
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  status: StandalonePriceSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum StandalonePriceSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated'
}

export type StandalonePriceStagedChangesApplied = MessagePayload & {
  stagedChanges: StagedStandalonePrice;
  type: Scalars['String']['output'];
};

export type StandalonePriceStagedChangesRemoved = MessagePayload & {
  stagedChanges?: Maybe<StagedStandalonePrice>;
  type: Scalars['String']['output'];
};

export type StandalonePriceTierAdded = MessagePayload & {
  tier: ProductPriceTier;
  type: Scalars['String']['output'];
};

export type StandalonePriceTierRemoved = MessagePayload & {
  tier: ProductPriceTier;
  type: Scalars['String']['output'];
};

export type StandalonePriceTiersSet = MessagePayload & {
  previousTiers: Array<ProductPriceTier>;
  tiers: Array<ProductPriceTier>;
  type: Scalars['String']['output'];
};

export type StandalonePriceUpdateAction = {
  addPriceTier?: InputMaybe<AddStandalonePriceTier>;
  applyStagedChanges?: InputMaybe<ApplyStagedChanges>;
  changeActive?: InputMaybe<ChangeStandalonePriceActive>;
  changeValue?: InputMaybe<ChangeStandalonePriceValue>;
  removePriceTier?: InputMaybe<RemoveStandalonePriceTier>;
  removeStagedChanges?: InputMaybe<RemoveStagedChanges>;
  setCustomField?: InputMaybe<SetStandalonePriceCustomFields>;
  setCustomType?: InputMaybe<CustomFieldsDraft>;
  setDiscountedPrice?: InputMaybe<SetStandalonePriceDiscountedPrice>;
  setKey?: InputMaybe<SetStandalonePriceKey>;
  setPriceTiers?: InputMaybe<SetStandalonePriceTiers>;
  setValidFrom?: InputMaybe<SetStandalonePriceValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetStandalonePriceValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetStandalonePriceValidUntil>;
};

export type StandalonePriceValidFromAndUntilSet = MessagePayload & {
  previousValidFrom?: Maybe<Scalars['DateTime']['output']>;
  previousValidUntil?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type StandalonePriceValidFromSet = MessagePayload & {
  previousValidFrom?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
};

export type StandalonePriceValidUntilSet = MessagePayload & {
  previousValidUntil?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type StandalonePriceValueChanged = MessagePayload & {
  oldValue?: Maybe<BaseMoney>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: BaseMoney;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type State = ReferenceExpandable & Versioned & {
  builtIn: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  initial: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  roles: Array<StateRole>;
  transitions?: Maybe<Array<State>>;
  transitionsRef?: Maybe<Array<Reference>>;
  type: StateType;
  version: Scalars['Long']['output'];
};


/** [State](https://docs.commercetools.com/api/projects/states) */
export type StateDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


/** [State](https://docs.commercetools.com/api/projects/states) */
export type StateNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type StateDraft = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  initial?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  roles?: InputMaybe<Array<StateRole>>;
  transitions?: InputMaybe<Array<ReferenceInput>>;
  type: StateType;
};

export type StateQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<State>;
  total: Scalars['Long']['output'];
};

export enum StateRole {
  Return = 'Return',
  ReviewIncludedInStatistics = 'ReviewIncludedInStatistics'
}

export enum StateType {
  LineItemState = 'LineItemState',
  OrderState = 'OrderState',
  PaymentState = 'PaymentState',
  ProductState = 'ProductState',
  QuoteRequestState = 'QuoteRequestState',
  QuoteState = 'QuoteState',
  ReviewState = 'ReviewState',
  StagedQuoteState = 'StagedQuoteState'
}

export type StateUpdateAction = {
  addRoles?: InputMaybe<AddStateRoles>;
  changeInitial?: InputMaybe<ChangeStateInitial>;
  changeKey?: InputMaybe<ChangeStateKey>;
  changeType?: InputMaybe<ChangeStateType>;
  removeRoles?: InputMaybe<RemoveStateRoles>;
  setDescription?: InputMaybe<SetStateDescription>;
  setName?: InputMaybe<SetStateName>;
  setRoles?: InputMaybe<SetStateRoles>;
  setTransitions?: InputMaybe<SetStateTransitions>;
};

/** Stores allow defining different contexts for a project. */
export type Store = ReferenceExpandable & Versioned & {
  countries?: Maybe<Array<StoreCountry>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  distributionChannels: Array<Channel>;
  distributionChannelsRef: Array<Reference>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  languages?: Maybe<Array<Scalars['Locale']['output']>>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  productSelections: Array<ProductSelectionSetting>;
  supplyChannels: Array<Channel>;
  supplyChannelsRef: Array<Reference>;
  version: Scalars['Long']['output'];
};


/** Stores allow defining different contexts for a project. */
export type StoreNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type StoreCountriesChanged = MessagePayload & {
  addedCountries?: Maybe<Array<StoreCountry>>;
  removedCountries?: Maybe<Array<StoreCountry>>;
  type: Scalars['String']['output'];
};

export type StoreCountry = {
  code: Scalars['Country']['output'];
};

export type StoreCountryInput = {
  code: Scalars['Country']['input'];
};

export type StoreCreated = MessagePayload & {
  countries?: Maybe<Array<StoreCountry>>;
  custom?: Maybe<CustomFieldsType>;
  distributionChannels: Array<Channel>;
  distributionChannelsRef: Array<Reference>;
  languages: Array<Scalars['Locale']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  productSelections: Array<ProductSelectionSetting>;
  productSelectionsRef: Array<Reference>;
  supplyChannels: Array<Channel>;
  supplyChannelsRef: Array<Reference>;
  type: Scalars['String']['output'];
};


export type StoreCreatedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type StoreDeleted = MessagePayload & {
  type: Scalars['String']['output'];
};

export type StoreDistributionChannelsChanged = MessagePayload & {
  addedDistributionChannels?: Maybe<Array<Channel>>;
  addedDistributionChannelsRef?: Maybe<Array<Reference>>;
  removedDistributionChannels?: Maybe<Array<Channel>>;
  removedDistributionChannelsRef?: Maybe<Array<Reference>>;
  type: Scalars['String']['output'];
};

export type StoreLanguagesChanged = MessagePayload & {
  addedLanguages?: Maybe<Array<Scalars['Locale']['output']>>;
  removedLanguages?: Maybe<Array<Scalars['Locale']['output']>>;
  type: Scalars['String']['output'];
};

export type StoreLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type StoreLimitsProjection = {
  inventorySupplyChannels: Limit;
  productDistributionChannels: Limit;
  productSelections: Limit;
  total: StoreLimitWithCurrent;
};

export type StoreNameSet = MessagePayload & {
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  type: Scalars['String']['output'];
};


export type StoreNameSetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type StoreProductSelectionsChanged = MessagePayload & {
  addedProductSelections?: Maybe<Array<ProductSelectionSetting>>;
  removedProductSelections?: Maybe<Array<ProductSelectionSetting>>;
  type: Scalars['String']['output'];
  updatedProductSelections?: Maybe<Array<ProductSelectionSetting>>;
};

export type StoreQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Store>;
  total: Scalars['Long']['output'];
};

export type StoreSupplyChannelsChanged = MessagePayload & {
  addedSupplyChannels?: Maybe<Array<Channel>>;
  addedSupplyChannelsRef?: Maybe<Array<Reference>>;
  removedSupplyChannels?: Maybe<Array<Channel>>;
  removedSupplyChannelsRef?: Maybe<Array<Reference>>;
  type: Scalars['String']['output'];
};

export type StoreUpdateAction = {
  addCountry?: InputMaybe<AddStoreCountry>;
  addDistributionChannel?: InputMaybe<AddStoreDistributionChannel>;
  addProductSelection?: InputMaybe<AddStoreProductSelection>;
  addSupplyChannel?: InputMaybe<AddStoreSupplyChannel>;
  changeProductSelectionActive?: InputMaybe<ChangeStoreProductSelectionActive>;
  removeCountry?: InputMaybe<RemoveStoreCountry>;
  removeDistributionChannel?: InputMaybe<RemoveStoreDistributionChannel>;
  removeProductSelection?: InputMaybe<RemoveStoreProductSelection>;
  removeSupplyChannel?: InputMaybe<RemoveStoreSupplyChannel>;
  setCountries?: InputMaybe<SetStoreCountries>;
  setCustomField?: InputMaybe<SetStoreCustomField>;
  setCustomType?: InputMaybe<SetStoreCustomType>;
  setDistributionChannels?: InputMaybe<SetStoreDistributionChannels>;
  setLanguages?: InputMaybe<SetStoreLanguages>;
  setName?: InputMaybe<SetStoreName>;
  setProductSelections?: InputMaybe<SetStoreProductSelections>;
  setSupplyChannels?: InputMaybe<SetStoreSupplyChannels>;
};

export type StringAttribute = Attribute & {
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type StringField = CustomField & {
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type StringType = FieldType & {
  name: Scalars['String']['output'];
};

export type SubRate = {
  amount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type SubRateDraft = {
  amount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type SubscriptionDraft = {
  changes?: InputMaybe<Array<ChangeSubscriptionInput>>;
  destination: DestinationInput;
  format?: InputMaybe<SubscriptionFormatInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Array<MessageSubscriptionInput>>;
};

export type SubscriptionFormatInput = {
  CloudEvents?: InputMaybe<CloudEventsSubscriptionsFormatInput>;
  Platform?: InputMaybe<PlatformFormatInput>;
};

export enum SubscriptionHealthStatus {
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  Healthy = 'Healthy',
  ManuallySuspended = 'ManuallySuspended',
  TemporaryError = 'TemporaryError'
}

export type SubscriptionUpdateAction = {
  changeDestination?: InputMaybe<ChangeSubscriptionDestination>;
  setChanges?: InputMaybe<SetSubscriptionChanges>;
  setKey?: InputMaybe<SetSubscriptionKey>;
  setMessages?: InputMaybe<SetSubscriptionMessages>;
};

export type SubscriptionsLimitsProjection = {
  maxSubscriptions: Limit;
};

export type SuggestResult = {
  searchKeywords: Array<SuggestResultEntry>;
};

export type SuggestResultEntry = {
  locale: Scalars['Locale']['output'];
  suggestions: Array<Suggestion>;
};

export type SuggestTokenizer = {
  type: Scalars['String']['output'];
};

export type SuggestTokenizerProductSearch = {
  type: Scalars['String']['output'];
};

export type Suggestion = {
  text: Scalars['String']['output'];
};

/** Stores information about order synchronization activities (like export or import). */
export type SyncInfo = {
  channel?: Maybe<Channel>;
  channelRef: Reference;
  externalId?: Maybe<Scalars['String']['output']>;
  syncedAt: Scalars['DateTime']['output'];
};

export type TargetReferenceInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  typeId: Scalars['String']['input'];
};

export enum TaxCalculationMode {
  /**
   * Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */
  LineItemLevel = 'LineItemLevel',
  /**
   * This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  UnitPriceLevel = 'UnitPriceLevel'
}

/** Tax Categories define how products are to be taxed in different countries. */
export type TaxCategory = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name: Scalars['String']['output'];
  rates: Array<TaxRate>;
  version: Scalars['Long']['output'];
};

export type TaxCategoryAddTaxRate = {
  taxRate: TaxRateDraft;
};

export type TaxCategoryChangeName = {
  name: Scalars['String']['input'];
};

export type TaxCategoryDraft = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rates?: InputMaybe<Array<TaxRateDraft>>;
};

export type TaxCategoryLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TaxCategoryLimitsProjection = {
  total: TaxCategoryLimitWithCurrent;
};

export type TaxCategoryQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TaxCategory>;
  total: Scalars['Long']['output'];
};

export type TaxCategoryRemoveTaxRate = {
  taxRateId?: InputMaybe<Scalars['String']['input']>;
  taxRateKey?: InputMaybe<Scalars['String']['input']>;
};

export type TaxCategoryReplaceTaxRate = {
  taxRate: TaxRateDraft;
  taxRateId?: InputMaybe<Scalars['String']['input']>;
  taxRateKey?: InputMaybe<Scalars['String']['input']>;
};

export type TaxCategorySetDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type TaxCategoryUpdateAction = {
  addTaxRate?: InputMaybe<TaxCategoryAddTaxRate>;
  changeName?: InputMaybe<TaxCategoryChangeName>;
  removeTaxRate?: InputMaybe<TaxCategoryRemoveTaxRate>;
  replaceTaxRate?: InputMaybe<TaxCategoryReplaceTaxRate>;
  setDescription?: InputMaybe<TaxCategorySetDescription>;
  setKey?: InputMaybe<SetTaxCategoryKey>;
};

export enum TaxMode {
  /** No taxes are added to the cart. */
  Disabled = 'Disabled',
  /**
   * The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated according to the taxRoundingMode.
   */
  External = 'External',
  /**
   * The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */
  ExternalAmount = 'ExternalAmount',
  /**
   * The tax rates are selected from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated according to the
   * taxRoundingMode.
   */
  Platform = 'Platform'
}

/**
 * Represents the portions that sum up to the totalGross field of a TaxedPrice. The portions are calculated
 * from the TaxRates. If a tax rate has SubRates, they are used and can be identified by name. Tax portions
 * from line items that have the same rate and name will be accumulated to the same tax portion.
 */
export type TaxPortion = {
  amount: Money;
  name?: Maybe<Scalars['String']['output']>;
  rate: Scalars['Float']['output'];
};

export type TaxPortionDraft = {
  amount: MoneyInput;
  name?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
};

export type TaxRate = {
  amount: Scalars['Float']['output'];
  country: Scalars['Country']['output'];
  id?: Maybe<Scalars['String']['output']>;
  includedInPrice: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subRates: Array<SubRate>;
};

export type TaxRateDraft = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  country: Scalars['Country']['input'];
  includedInPrice: Scalars['Boolean']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subRates?: InputMaybe<Array<SubRateDraft>>;
};

export type TaxRateInput = {
  amount: Scalars['Float']['input'];
  country: Scalars['Country']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includedInPrice: Scalars['Boolean']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subRates?: InputMaybe<Array<SubRateDraft>>;
};

export type TaxedItemPrice = {
  taxPortions: Array<TaxPortion>;
  totalGross: Money;
  totalNet: Money;
  totalTax?: Maybe<Money>;
};

export type TaxedPrice = {
  taxPortions: Array<TaxPortion>;
  totalGross: Money;
  totalNet: Money;
  totalTax?: Maybe<Money>;
};

export type TaxedPriceDraft = {
  taxPortions: Array<TaxPortionDraft>;
  totalGross: BaseMoneyInput;
  totalNet: BaseMoneyInput;
  totalTax?: InputMaybe<BaseMoneyInput>;
};

export type TermCount = {
  count: Scalars['Int']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  term: Scalars['String']['output'];
};

export type TermsFacetInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  countProducts?: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
};

export type TermsFacetResult = FacetResult & {
  dataType: Scalars['String']['output'];
  missing: Scalars['Int']['output'];
  other: Scalars['Int']['output'];
  terms: Array<TermCount>;
  total: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TextAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

/** UI hint telling what kind of edit control should be displayed for a text attribute. */
export enum TextInputHint {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine'
}

export type TextLineItem = {
  addedAt: Scalars['DateTime']['output'];
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  quantity: Scalars['Int']['output'];
};


export type TextLineItemDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


export type TextLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TextLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type TimeAttribute = Attribute & {
  name: Scalars['String']['output'];
  value: Scalars['Time']['output'];
};

export type TimeAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String']['output'];
};

export type TimeField = CustomField & {
  name: Scalars['String']['output'];
  value: Scalars['Time']['output'];
};

export type TimeType = FieldType & {
  name: Scalars['String']['output'];
};

export type TrackingData = {
  carrier?: Maybe<Scalars['String']['output']>;
  isReturn: Scalars['Boolean']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  providerTransaction?: Maybe<Scalars['String']['output']>;
  trackingId?: Maybe<Scalars['String']['output']>;
};

export type TrackingDataDraftType = {
  carrier?: InputMaybe<Scalars['String']['input']>;
  isReturn?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerTransaction?: InputMaybe<Scalars['String']['input']>;
  trackingId?: InputMaybe<Scalars['String']['input']>;
};

export type Transaction = {
  amount: Money;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String']['output'];
  interactionId?: Maybe<Scalars['String']['output']>;
  state: TransactionState;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<TransactionType>;
};

export type TransactionDraft = {
  amount: MoneyInput;
  custom?: InputMaybe<CustomFieldsDraft>;
  interactionId?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<TransactionState>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: TransactionType;
};

export enum TransactionState {
  Failure = 'Failure',
  Initial = 'Initial',
  Pending = 'Pending',
  Success = 'Success'
}

export enum TransactionType {
  Authorization = 'Authorization',
  CancelAuthorization = 'CancelAuthorization',
  Charge = 'Charge',
  Chargeback = 'Chargeback',
  Refund = 'Refund'
}

export type TransitionOrderCustomLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fromState: ResourceIdentifierInput;
  quantity: Scalars['Long']['input'];
  toState: ResourceIdentifierInput;
};

export type TransitionOrderLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  fromState: ResourceIdentifierInput;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  toState: ResourceIdentifierInput;
};

export type TransitionOrderState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TransitionPaymentState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TransitionProductState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ReferenceInput;
};

export type TransitionQuoteRequestState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TransitionQuoteState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TransitionReviewState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TransitionStagedOrderCustomLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fromState: ResourceIdentifierInput;
  quantity: Scalars['Long']['input'];
  toState: ResourceIdentifierInput;
};

export type TransitionStagedOrderCustomLineItemStateOutput = StagedOrderUpdateActionOutput & {
  actualTransitionDate?: Maybe<Scalars['DateTime']['output']>;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  fromStateResId: ResourceIdentifier;
  quantity: Scalars['Long']['output'];
  toStateResId: ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type TransitionStagedOrderLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  fromState: ResourceIdentifierInput;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  toState: ResourceIdentifierInput;
};

export type TransitionStagedOrderLineItemStateOutput = StagedOrderUpdateActionOutput & {
  actualTransitionDate?: Maybe<Scalars['DateTime']['output']>;
  fromStateResId: ResourceIdentifier;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Long']['output'];
  toStateResId: ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type TransitionStagedOrderState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TransitionStagedOrderStateOutput = StagedOrderUpdateActionOutput & {
  force: Scalars['Boolean']['output'];
  stateResId: ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type TransitionStagedQuoteState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: ResourceIdentifierInput;
};

export type TreeFilterInput = {
  path: Scalars['String']['input'];
  rootValues: Array<Scalars['String']['input']>;
  subTreeValues: Array<Scalars['String']['input']>;
};

export type Trigger = {
  actions: Array<ActionType>;
  condition?: Maybe<Scalars['String']['output']>;
  resourceTypeId: Scalars['String']['output'];
};

export type TriggerInput = {
  actions?: InputMaybe<Array<ActionType>>;
  condition?: InputMaybe<Scalars['String']['input']>;
  resourceTypeId: Scalars['String']['input'];
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TypeDefinition = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  fieldDefinitions: Array<FieldDefinition>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<LocalizedString>;
  resourceTypeIds: Array<Scalars['String']['output']>;
  version: Scalars['Long']['output'];
};


/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TypeDefinitionDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};


/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TypeDefinitionFieldDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TypeDefinitionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TypeDefinitionDraft = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  fieldDefinitions?: InputMaybe<Array<FieldDefinitionInput>>;
  key: Scalars['String']['input'];
  name: Array<LocalizedStringItemInputType>;
  resourceTypeIds: Array<Scalars['String']['input']>;
};

export type TypeDefinitionQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TypeDefinition>;
  total: Scalars['Long']['output'];
};

export type TypeUpdateAction = {
  addEnumValue?: InputMaybe<AddTypeEnumValue>;
  addFieldDefinition?: InputMaybe<AddTypeFieldDefinition>;
  addLocalizedEnumValue?: InputMaybe<AddTypeLocalizedEnumValue>;
  changeEnumValueLabel?: InputMaybe<ChangeTypeEnumValueLabel>;
  changeEnumValueOrder?: InputMaybe<ChangeTypeEnumValueOrder>;
  changeFieldDefinitionOrder?: InputMaybe<ChangeTypeFieldDefinitionOrder>;
  changeInputHint?: InputMaybe<ChangeTypeInputHint>;
  changeKey?: InputMaybe<ChangeTypeKey>;
  changeLabel?: InputMaybe<ChangeTypeLabel>;
  changeLocalizedEnumValueLabel?: InputMaybe<ChangeTypeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: InputMaybe<ChangeTypeLocalizedEnumValueOrder>;
  changeName?: InputMaybe<ChangeTypeName>;
  removeFieldDefinition?: InputMaybe<RemoveTypeFieldDefinition>;
  setDescription?: InputMaybe<SetTypeDescription>;
};

export type UnfreezeCart = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type UnpublishProduct = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type UnpublishTailoring = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCartItemShippingAddress = {
  address: AddressInput;
};

export type UpdateOrderItemShippingAddress = {
  address: AddressInput;
};

export type UpdateOrderSyncInfo = {
  channel: ResourceIdentifierInput;
  externalId?: InputMaybe<Scalars['String']['input']>;
  syncedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateStagedOrderItemShippingAddress = {
  address: AddressInput;
};

export type UpdateStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  type: Scalars['String']['output'];
};

export type UpdateStagedOrderSyncInfo = {
  channel: ResourceIdentifierInput;
  externalId?: InputMaybe<Scalars['String']['input']>;
  syncedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateStagedOrderSyncInfoOutput = StagedOrderUpdateActionOutput & {
  channelResId: ChannelReferenceIdentifier;
  externalId?: Maybe<Scalars['String']['output']>;
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
};

export type UserProvidedIdentifiers = {
  customerNumber?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
};


export type UserProvidedIdentifiersSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type ValueFacetResult = FacetResult & {
  count: Scalars['Int']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
};

export type ValueFilterInput = {
  path: Scalars['String']['input'];
  values: Array<Scalars['String']['input']>;
};

export type VariantTailoring = {
  assets: Array<Asset>;
  images: Array<Image>;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type Versioned = {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  version: Scalars['Long']['output'];
};

export type WhitespaceSuggestTokenizer = SuggestTokenizer & {
  type: Scalars['String']['output'];
};

export type WhitespaceSuggestTokenizerInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type WhitespaceSuggestTokenizerProductSearch = SuggestTokenizerProductSearch & {
  type: Scalars['String']['output'];
};

/** Zones allow defining ShippingRates for specific Locations. */
export type Zone = ReferenceExpandable & Versioned & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Initiator>;
  locations: Array<Location>;
  name: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type ZoneLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type ZoneLimitsProjection = {
  total: ZoneLimitWithCurrent;
};

export type ZoneLocation = {
  country: Scalars['Country']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type ZoneQueryResult = {
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Zone>;
  total: Scalars['Long']['output'];
};

export type ZoneRate = {
  shippingRates: Array<ShippingRate>;
  zone?: Maybe<Zone>;
  zoneRef?: Maybe<Reference>;
};

export type ZoneRateDraft = {
  shippingRates?: InputMaybe<Array<ShippingRateDraft>>;
  zone: ResourceIdentifierInput;
};

export type ZoneUpdateAction = {
  addLocation?: InputMaybe<AddZoneLocation>;
  changeName?: InputMaybe<ChangeZoneName>;
  removeLocation?: InputMaybe<RemoveZoneLocation>;
  setDescription?: InputMaybe<SetZoneDescription>;
  setKey?: InputMaybe<SetZoneKey>;
};

export type AddAttributeDefinition = {
  attributeDefinition: AttributeDefinitionDraft;
};

export type AddLocalizedEnumValue = {
  attributeName: Scalars['String']['input'];
  value: LocalizedEnumValueDraft;
};

export type AddPlainEnumValue = {
  attributeName: Scalars['String']['input'];
  value: PlainEnumValueDraft;
};

export type ChangeAttributeName = {
  attributeName: Scalars['String']['input'];
  newAttributeName: Scalars['String']['input'];
};

export type ChangeAttributeOrder = {
  attributeDefinitions: Array<AttributeDefinitionDraft>;
};

export type ChangeAttributeOrderByName = {
  attributeNames: Array<Scalars['String']['input']>;
};

export type ChangeDescription = {
  description: Scalars['String']['input'];
};

export type ChangeEnumKey = {
  attributeName: Scalars['String']['input'];
  key: Scalars['String']['input'];
  newKey: Scalars['String']['input'];
};

export type ChangeInputHint = {
  attributeName: Scalars['String']['input'];
  newValue: TextInputHint;
};

export type ChangeIsSearchable = {
  attributeName: Scalars['String']['input'];
  isSearchable: Scalars['Boolean']['input'];
};

export type ChangeLabel = {
  attributeName: Scalars['String']['input'];
  label: Array<LocalizedStringItemInputType>;
};

export type ChangeLocalizedEnumValueLabel = {
  attributeName: Scalars['String']['input'];
  newValue: LocalizedEnumValueDraft;
};

export type ChangeLocalizedEnumValueOrder = {
  attributeName: Scalars['String']['input'];
  values: Array<LocalizedEnumValueDraft>;
};

export type ChangeName = {
  name: Scalars['String']['input'];
};

export type ChangePlainEnumValueLabel = {
  attributeName: Scalars['String']['input'];
  newValue: PlainEnumValueDraft;
};

export type ChangePlainEnumValueOrder = {
  attributeName: Scalars['String']['input'];
  values: Array<PlainEnumValueDraft>;
};

export type RemoveAttributeDefinition = {
  name: Scalars['String']['input'];
};

export type RemoveEnumValues = {
  attributeName: Scalars['String']['input'];
  keys: Array<Scalars['String']['input']>;
};

export type SetInputTip = {
  attributeName: Scalars['String']['input'];
  inputTip?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type CartVersionCustomerKeyQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type CartVersionCustomerKeyQuery = { cart?: { version: any, customer?: { key?: string | null } | null } | null };

export type CartByIdQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type CartByIdQuery = { cart?: { lineItems: Array<{ quantity: any, nameAllLocales: Array<{ value: string }>, price: { value: { centAmount: any } } }> } | null };

export type SetCustomerEmailMutationVariables = Exact<{
  cartId: Scalars['String']['input'];
  cartVersion: Scalars['Long']['input'];
  email: Scalars['String']['input'];
}>;


export type SetCustomerEmailMutation = { updateCart?: { id: string, version: any } | null };

export type CreateCartAndAddProductMutationVariables = Exact<{
  customerId: Scalars['String']['input'];
  currency: Scalars['Currency']['input'];
  locale: Scalars['Locale']['input'];
  productSku: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
}>;


export type CreateCartAndAddProductMutation = { createCart?: { id: string, version: any } | null };

export type CartsForCustomerQueryVariables = Exact<{
  where: Scalars['String']['input'];
  locale: Scalars['Locale']['input'];
}>;


export type CartsForCustomerQuery = { carts: { results: Array<{ version: any, id: string, lineItems: Array<{ id: string, name?: string | null, quantity: any, variant?: { sku?: string | null } | null }> }> } };

export type GetCartByIdQueryVariables = Exact<{
  cartId: Scalars['String']['input'];
}>;


export type GetCartByIdQuery = { cart?: { customerId?: string | null, version: any } | null };

export type RemoveLineItemFromCartMutationVariables = Exact<{
  lineItemId: Scalars['String']['input'];
  version: Scalars['Long']['input'];
  id: Scalars['String']['input'];
}>;


export type RemoveLineItemFromCartMutation = { updateCart?: { version: any } | null };

export type AddProductToCartMutationVariables = Exact<{
  id: Scalars['String']['input'];
  productSku: Scalars['String']['input'];
  version: Scalars['Long']['input'];
}>;


export type AddProductToCartMutation = { updateCart?: { version: any } | null };

export type ChangeQuantityProductMutationVariables = Exact<{
  lineItemId: Scalars['String']['input'];
  version: Scalars['Long']['input'];
  cartId: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
}>;


export type ChangeQuantityProductMutation = { updateCart?: { version: any } | null };

export type ProductSearchQueryVariables = Exact<{
  text: Scalars['String']['input'];
  locale: Scalars['Locale']['input'];
}>;


export type ProductSearchQuery = { productProjectionSearch: { results: Array<{ name?: string | null, description?: string | null, masterVariant: { sku?: string | null } }> } };


export const CartVersionCustomerKey = gql`
    query CartVersionCustomerKey($cartId: String!) {
  cart(id: $cartId) {
    version
    customer {
      key
    }
  }
}
    `;
export const CartById = gql`
    query CartById($cartId: String!) {
  cart(id: $cartId) {
    lineItems {
      nameAllLocales {
        value
      }
      price {
        value {
          centAmount
        }
      }
      quantity
    }
  }
}
    `;
export const SetCustomerEmail = gql`
    mutation SetCustomerEmail($cartId: String!, $cartVersion: Long!, $email: String!) {
  updateCart(
    id: $cartId
    version: $cartVersion
    actions: {setCustomerEmail: {email: $email}}
  ) {
    id
    version
  }
}
    `;
export const CreateCartAndAddProduct = gql`
    mutation CreateCartAndAddProduct($customerId: String!, $currency: Currency!, $locale: Locale!, $productSku: String!, $quantity: Long!) {
  createCart(
    draft: {currency: $currency, customerId: $customerId, locale: $locale, lineItems: {sku: $productSku, quantity: $quantity}}
  ) {
    id
    version
  }
}
    `;
export const CartsForCustomer = gql`
    query cartsForCustomer($where: String!, $locale: Locale!) {
  carts(where: $where) {
    results {
      version
      id
      lineItems {
        id
        name(locale: $locale)
        quantity
        variant {
          sku
        }
      }
    }
  }
}
    `;
export const GetCartById = gql`
    query getCartById($cartId: String!) {
  cart(id: $cartId) {
    customerId
    version
  }
}
    `;
export const RemoveLineItemFromCart = gql`
    mutation removeLineItemFromCart($lineItemId: String!, $version: Long!, $id: String!) {
  updateCart(
    actions: [{removeLineItem: {lineItemId: $lineItemId}}]
    version: $version
    id: $id
  ) {
    version
  }
}
    `;
export const AddProductToCart = gql`
    mutation addProductToCart($id: String!, $productSku: String!, $version: Long!) {
  updateCart(
    actions: [{addLineItem: {sku: $productSku}}]
    version: $version
    id: $id
  ) {
    version
  }
}
    `;
export const ChangeQuantityProduct = gql`
    mutation changeQuantityProduct($lineItemId: String!, $version: Long!, $cartId: String!, $quantity: Long!) {
  updateCart(
    actions: [{changeLineItemQuantity: {lineItemId: $lineItemId, quantity: $quantity}}]
    version: $version
    id: $cartId
  ) {
    version
  }
}
    `;
export const ProductSearch = gql`
    query ProductSearch($text: String!, $locale: Locale!) {
  productProjectionSearch(text: $text, locale: $locale) {
    results {
      name(locale: $locale)
      description(locale: $locale)
      masterVariant {
        sku
      }
    }
  }
}
    `;