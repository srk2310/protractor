# protractor
The locators are passed to the element function, as below:

element(by.css('some-css'));
element(by.model('item.name'));
element(by.binding('item.name'));
When using CSS Selectors as a locator, you can use the shortcut $() notation:

$('my-css');

// Is the same as:

element(by.css('my-css'));
