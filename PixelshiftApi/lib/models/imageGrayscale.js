/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Converts source to grayscale.
 *
 * @extends models['TransformUnit']
 */
class ImageGrayscale extends models['TransformUnit'] {
  /**
   * Create a ImageGrayscale.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ImageGrayscale
   *
   * @returns {object} metadata of ImageGrayscale
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Image_Grayscale',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'TransformUnit',
        className: 'ImageGrayscale',
        modelProperties: {
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageGrayscale;