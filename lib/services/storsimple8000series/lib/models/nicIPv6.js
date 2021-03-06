/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Details related to the IPv6 address configuration.
 *
 */
class NicIPv6 {
  /**
   * Create a NicIPv6.
   * @member {string} [ipv6Address] The IPv6 address of the network adapter.
   * @member {string} [ipv6Prefix] The IPv6 prefix of the network adapter.
   * @member {string} [ipv6Gateway] The IPv6 gateway of the network adapter.
   * @member {string} [controller0Ipv6Address] The IPv6 address of Controller0.
   * @member {string} [controller1Ipv6Address] The IPv6 address of Controller1.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NicIPv6
   *
   * @returns {object} metadata of NicIPv6
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NicIPv6',
      type: {
        name: 'Composite',
        className: 'NicIPv6',
        modelProperties: {
          ipv6Address: {
            required: false,
            serializedName: 'ipv6Address',
            type: {
              name: 'String'
            }
          },
          ipv6Prefix: {
            required: false,
            serializedName: 'ipv6Prefix',
            type: {
              name: 'String'
            }
          },
          ipv6Gateway: {
            required: false,
            serializedName: 'ipv6Gateway',
            type: {
              name: 'String'
            }
          },
          controller0Ipv6Address: {
            required: false,
            serializedName: 'controller0Ipv6Address',
            type: {
              name: 'String'
            }
          },
          controller1Ipv6Address: {
            required: false,
            serializedName: 'controller1Ipv6Address',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NicIPv6;
