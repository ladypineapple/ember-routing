import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        id: 1,
        name: 'Maura',
        role: 'Boss Lady',
      },
      {
        id: 2,
        name: 'Louis',
        role: 'Angsty Teen',
      },
      {
        id: 3,
        name: 'Andrew',
        role: 'Cartoon Bear',
      },
      {
        id: 4,
        name: 'Wei',
        role: 'Secret Weapon',
      },
      {
        id: 5,
        name: 'Colon',
        role: 'Guy on the Couch',
      },
    ];
  },
});
