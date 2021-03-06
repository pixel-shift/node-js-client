/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Representation of an RGB color.
 *
 */
class Color {
  /**
   * Create a Color.
   * @member {number} r The red component.
   * @member {number} g The green component.
   * @member {number} b The blue component.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Color
   *
   * @returns {object} metadata of Color
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Color',
      type: {
        name: 'Composite',
        className: 'Color',
        modelProperties: {
          r: {
            required: true,
            serializedName: 'r',
            constraints: {
              InclusiveMaximum: 255,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          g: {
            required: true,
            serializedName: 'g',
            constraints: {
              InclusiveMaximum: 255,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          b: {
            required: true,
            serializedName: 'b',
            constraints: {
              InclusiveMaximum: 255,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Color;
