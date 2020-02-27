import $ from 'jquery';
const datepicker = require('jquery-ui/ui/widgets/datepicker')

$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
$('#date').datepicker({
	showOtherMonths: true	
});