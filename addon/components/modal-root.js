import Ember from 'ember';
import layout from '../templates/components/modal-root';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNames: ['lacsso', 'modal-overlay'],
  classNameBindings: ['modalVisible:modal-open:modal-closed'],
  modalService: Ember.inject.service('modal'),
  modalType: Ember.computed.alias('modalService.modalType'),
  modalVisible: Ember.computed.alias('modalService.modalVisible'),
  click() {
    if (this.get('modalService.closeWithOutsideClick') && Ember.$(this.element).hasClass('modal-open')) {
      this.get('modalService').toggleModal();
    }
  }
});
