import Ember from 'ember';
import layout from '../templates/components/sortable-th';

export default Ember.Component.extend({
  layout,
  tagName: 'TH',
  classNames: ['sortable'],
  name: null,
  sortable: null,
  width: null,
  label: null,
  ariaRole: ['columnheader'],

  activeAscending: Ember.computed('name','current','descending', function() {
    return !this.get('descending') && this.get('current') === this.get('name');
  }),

  activeDescending: Ember.computed('name','current','descending', function() {
    return this.get('descending') && this.get('current') === this.get('name');
  }),

  attributeBindings: ['width'],

  click: function() {
    this.sendAction('action', this.get('name'));
  }
});