import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('products');
  this.route('product', { path: '/products/:product_id' });
  this.route('about');
  this.route('contact', function () {
    this.route('nyc');
    this.route('boston');
  });
  this.route('team', function () {
    this.route('leadership');
    this.route('engineering');
    this.route('sales');
  });
  this.route('employees');
  this.route('employee', { path: '/employees/:employee_id' });
});

export default Router;
