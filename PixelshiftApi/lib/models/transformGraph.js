/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A description of steps for processing images from source to destination. Can
 * be branched by using the "outputs"
 * property to allow for multiple transformations on a single source image.
 *
 */
class TransformGraph {
  /**
   * Create a TransformGraph.
   * @member {array} transforms A list of transforms that run one after
   * another, piping content from one transform to the next
   * @member {array} [outputs] A list of output transform graphs, each one
   * receiving the output of the last transform in the "transforms"
   * collection
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransformGraph
   *
   * @returns {object} metadata of TransformGraph
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransformGraph',
      type: {
        name: 'Composite',
        className: 'TransformGraph',
        modelProperties: {
          transforms: {
            required: true,
            serializedName: 'transforms',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformUnitElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'kind',
                      clientName: 'kind'
                    },
                    uberParent: 'TransformUnit',
                    className: 'TransformUnit'
                  }
              }
            }
          },
          outputs: {
            required: false,
            serializedName: 'outputs',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TransformGraphElementType',
                  type: {
                    name: 'Composite',
                    className: 'TransformGraph'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TransformGraph;
