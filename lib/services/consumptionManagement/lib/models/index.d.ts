/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the MeterDetails class.
 * @constructor
 * The properties of the meter detail.
 *
 * @member {string} [meterName] The name of the meter, within the given meter
 * category
 * @member {string} [meterCategory] The category of the meter, for example,
 * 'Cloud services', 'Networking', etc..
 * @member {string} [meterSubCategory] The subcategory of the meter, for
 * example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
 * @member {string} [unit] The unit in which the meter consumption is charged,
 * for example, 'Hours', 'GB', etc.
 * @member {string} [meterLocation] The location in which the Azure service is
 * available.
 * @member {number} [totalIncludedQuantity] The total included quantity
 * associated with the offer.
 * @member {number} [pretaxStandardRate] The pretax listing price.
 */
export interface MeterDetails {
  readonly meterName?: string;
  readonly meterCategory?: string;
  readonly meterSubCategory?: string;
  readonly unit?: string;
  readonly meterLocation?: string;
  readonly totalIncludedQuantity?: number;
  readonly pretaxStandardRate?: number;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Resource model definition.
 *
 * @member {string} [id] Resource Id.
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 * @member {object} [tags] Resource tags.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the UsageDetail class.
 * @constructor
 * An usage detail resource.
 *
 * @member {string} [billingPeriodId] The id of the billing period resource
 * that the usage belongs to.
 * @member {string} [invoiceId] The id of the invoice resource that the usage
 * belongs to.
 * @member {date} [usageStart] The start of the date time range covered by the
 * usage detail.
 * @member {date} [usageEnd] The end of the date time range covered by the
 * usage detail.
 * @member {string} [instanceName] The name of the resource instance that the
 * usage is about.
 * @member {string} [instanceId] The uri of the resource instance that the
 * usage is about.
 * @member {string} [instanceLocation] The location of the resource instance
 * that the usage is about.
 * @member {string} [currency] The ISO currency in which the meter is charged,
 * for example, USD.
 * @member {number} [usageQuantity] The quantity of usage.
 * @member {number} [billableQuantity] The billable usage quantity.
 * @member {number} [pretaxCost] The amount of cost before tax.
 * @member {boolean} [isEstimated] The estimated usage is subject to change.
 * @member {string} [meterId] The meter id.
 * @member {object} [meterDetails] The details about the meter. By default this
 * is not populated, unless it's specified in $expand.
 * @member {string} [meterDetails.meterName] The name of the meter, within the
 * given meter category
 * @member {string} [meterDetails.meterCategory] The category of the meter, for
 * example, 'Cloud services', 'Networking', etc..
 * @member {string} [meterDetails.meterSubCategory] The subcategory of the
 * meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
 * @member {string} [meterDetails.unit] The unit in which the meter consumption
 * is charged, for example, 'Hours', 'GB', etc.
 * @member {string} [meterDetails.meterLocation] The location in which the
 * Azure service is available.
 * @member {number} [meterDetails.totalIncludedQuantity] The total included
 * quantity associated with the offer.
 * @member {number} [meterDetails.pretaxStandardRate] The pretax listing price.
 * @member {string} [subscriptionGuid] Subscription guid.
 * @member {string} [subscriptionName] Subscription name.
 * @member {string} [accountName] Account name.
 * @member {string} [departmentName] Department name.
 * @member {string} [product] Product name.
 * @member {string} [consumedService] Consumed service name.
 * @member {string} [costCenter] The cost center of this department if it is a
 * department and a costcenter exists
 * @member {string} [additionalProperties] Additional details of this usage
 * item. By default this is not populated, unless it's specified in $expand.
 */
export interface UsageDetail extends Resource {
  readonly billingPeriodId?: string;
  readonly invoiceId?: string;
  readonly usageStart?: Date;
  readonly usageEnd?: Date;
  readonly instanceName?: string;
  readonly instanceId?: string;
  readonly instanceLocation?: string;
  readonly currency?: string;
  readonly usageQuantity?: number;
  readonly billableQuantity?: number;
  readonly pretaxCost?: number;
  readonly isEstimated?: boolean;
  readonly meterId?: string;
  readonly meterDetails?: MeterDetails;
  readonly subscriptionGuid?: string;
  readonly subscriptionName?: string;
  readonly accountName?: string;
  readonly departmentName?: string;
  readonly product?: string;
  readonly consumedService?: string;
  readonly costCenter?: string;
  readonly additionalProperties?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetails class.
 * @constructor
 * The details of the error.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorDetails {
  readonly code?: string;
  readonly message?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error response indicates that the service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 * @member {object} [error] The details of the error.
 * @member {string} [error.code] Error code.
 * @member {string} [error.message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  error?: ErrorDetails;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.Consumption.
 * @member {string} [resource] Resource on which the operation is performed:
 * UsageDetail, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * A Consumption REST API operation.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider: Microsoft.Consumption.
 * @member {string} [display.resource] Resource on which the operation is
 * performed: UsageDetail, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}


/**
 * @class
 * Initializes a new instance of the UsageDetailsListResult class.
 * @constructor
 * Result of listing usage details. It contains a list of available usage
 * details in reverse chronological order by billing period.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface UsageDetailsListResult extends Array<UsageDetail> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of listing consumption operations. It contains a list of operations
 * and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}