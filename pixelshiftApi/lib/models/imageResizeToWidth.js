/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Resize the image to a specific width. Height will depend on aspect ratio of
 * image.
 *
 * @extends models['TransformUnit']
 */
class ImageResizeToWidth extends models['TransformUnit'] {
  /**
   * Create a ImageResizeToWidth.
   * @member {number} width
   * @member {string} [resizeKernel] The resampling algorithm used for
   * resizing. Possible values include: 'lanczos3', 'lanczos2', 'cubic',
   * 'nearest'. Default value: 'lanczos3' .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ImageResizeToWidth
   *
   * @returns {object} metadata of ImageResizeToWidth
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Image_ResizeToWidth',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'TransformUnit',
        className: 'ImageResizeToWidth',
        modelProperties: {
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          width: {
            required: true,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          resizeKernel: {
            required: false,
            serializedName: 'resizeKernel',
            defaultValue: 'lanczos3',
            type: {
              name: 'Enum',
              allowedValues: [ 'lanczos3', 'lanczos2', 'cubic', 'nearest' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ImageResizeToWidth;