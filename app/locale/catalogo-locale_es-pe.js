app.config(function($translateProvider) {
    $translateProvider.translations('es-pe', {
        HEADLINE: 'XSS possible!',
        PARAGRAPH: 'Hola es-pe {{username}}!',
        TITLE: 'Hola',
        'hola foo': 'This is a paragraph.',
        'en-us': 'Inglés',
        'es-pe': 'Español Perú',
        'categoria': 'Categoría',
        'categorias': 'Categorías',
        'trabajar con': 'Trabajar con',
        'codigo': 'Código',
        'nombre': 'Nombre',
        'estado': 'Estado',

    });


});