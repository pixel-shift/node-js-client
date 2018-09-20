/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Output to Tiff
 *
 * @extends models['TransformUnit']
 */
class ImageFormatTiff extends models['TransformUnit'] {
  /**
   * Create a ImageFormatTiff.
   * @member {number} [quality] Tiff compression level. Default value: 80 .
   * @member {string} [compression] Type of compression used in Tiff output.
   * Possible values include: 'jpeg', 'deflate', 'lzw', 'ccittfax4'. Default
   * value: 'jpeg' .
   * @member {string} [predictor] Tiff compression predictor. Possible values
   * include: 'horizontal', 'float', 'none'. Default value: 'horizontal' .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ImageFormatTiff
   *
   * @returns {object} metadata of ImageFormatTiff
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageFormat_Tiff',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'TransformUnit',
        className: 'ImageFormatTiff',
        modelProperties: {
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          quality: {
            required: false,
            serializedName: 'quality',
            defaultValue: 80,
            constraints: {
              InclusiveMaximum: 100,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          compression: {
            required: false,
            serializedName: 'compression',
            defaultValue: 'jpeg',
            type: {
              name: 'Enum',
              allowedValues: [ 'jpeg', 'deflate', 'lzw', 'ccittfax4' ]
            }
          },
          predictor: {
            required: false,
            serializedName: 'predictor',
            defaultValue: 'horizontal',
            type: {
              name: 'Enum',
              allowedValues: [ 'horizontal', 'float', 'none' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ImageFormatTiff;