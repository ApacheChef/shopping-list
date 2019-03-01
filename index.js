function processListEvents() {
    // If the input text box is not empty or full of spaces, append the
    // shopping list with the new item and then clear input text box
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        newItem = $(this).find('#shopping-list-entry');
        //if($(newItem).val() === '' || / +/gi.test($(newItem).val())) {
        if($(newItem).val() === '' || $(newItem).val().trim() === '') {
            $(newItem).val('');
            return;
        }
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${$(newItem).val()}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
        $(newItem).val('');
    });

    // Handle check button events on the individual list items, applying the
    // .shopping-item__checked class to the span element in the parent list item
    // using event delegation

    // Handle delete button events on the list items, using .remove() to remove
    // the parent list item using event delegation
}

$(processListEvents);