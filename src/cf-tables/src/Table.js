/* ==========================================================================
   Table Organism
   ========================================================================== */

'use strict';

var config = require( 'atomic-component/src/utilities/config' );
var Organism = require( 'atomic-component/src/components/Organism' );
var TableSortable = require( './TableSortable' );
var TableRowLinks = require( './TableRowLinks' );

var TableOrganism = Organism.extend( {

  ui: {
    base: '.o-table'
  },

  modifiers: [ TableSortable, TableRowLinks ]

} );

TableOrganism.constants.DIRECTIONS = config.DIRECTIONS;

module.exports = TableOrganism;