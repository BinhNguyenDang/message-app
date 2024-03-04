// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as jquery from "jquery"
import "semantic-ui"


window.scroll_bottom = function(){
  if ($('#messages').length > 0){
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}



$(document).on('turbo:load', function() {
    console.log('loaded turbo links')
    $('.ui.dropdown').dropdown()
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  document.addEventListener('turbo:submit-end', function(event) {
    if (event.target.id === 'new_message_form') {
      // Assuming that the input field has an ID 'message_body' as per the previous instructions.
      document.getElementById('message_body').value = '';
      // Scrolls to the bottom of the messages
      scroll_bottom();
    }
  });
  scroll_bottom();
});

import "channels"
