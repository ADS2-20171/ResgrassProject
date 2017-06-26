app.config(function($translateProvider) {
    $translateProvider.translations('en-us', {
        HEADLINE: 'XSS possible!',
        PARAGRAPH: 'Hello {{username}}!',
        TITLE: 'Hello',
        'hola foo': 'This is a paragraph.',
        'en-us': 'English',
        'es-pe': 'Spanish Peruvian'
    });


});