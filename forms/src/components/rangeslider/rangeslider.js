import $ from 'jquery';
const slider = require('jquery-ui/ui/widgets/slider')

$('#flat-slider').slider({
  orientation: 'horizontal',
  range:       true,
  values:      [17,67]
});