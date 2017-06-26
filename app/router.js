var ejemplo = { // nadie lo referencia, borrar
    "estado.nombre": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    },
};

app.constant('ROUTERS', [

    {
        "catalogo": {
            "url": "/acuerdos",
            "views": {
                "": {
                    "templateUrl": "dist/views/layouts/uno/layout.html"
                }
            },
            "loginRequired": false
        },
        "catalogo.401_unauthorized": {
            "url": "/401_unauthorized",
            "data": {
                "page": "Error 401: unauthorized"
            },
            "views": {
                "": {
                    "templateUrl": "dist/views/layouts/401_unauthorized.html"
                }
            }
        },
        "catalogo.dashboard": {
            "url": "/dashboard",
            "data": {
                "page": "Dashboard"
            },
            "views": {
                "": {
                    "templateUrl": "dist/views/layouts/dashboard.wall.html"
                }
            }
        },
        "catalogo.catalogo": {
            "url": "/acuerdos",
            "template": "<div ui-view ></div>"
        }
    },
  {
      "catalogo.catalogo.publico": {
          "url": "/page-main",
          "data": {
              "section": "Configuración",
              "page": "empresas"
          },
          "templateUrl": "app/views/publico/index.html"
      },"catalogo.catalogo.calendar": {
          "url": "/page-main",
          "data": {
              "section": "Configuración",
              "page": "empresas"
          },
          "templateUrl": "app/views/publico/calendar/calendario.html"
      },
      "catalogo.catalogo.empresa": {
          "url": "/empresas",
          "data": {
              "section": "Configuración",
              "page": "empresas"
          },
          "templateUrl": "app/views/empresas/index.html"
      },
      "catalogo.catalogo.empresaNuevo": {
          "url": "/empresas/nuevo",
          "data": {
              "section": "Configuración",
              "page": "empresas"
          },
          "templateUrl": "app/views/empresas/form.html"
      },
      "catalogo.catalogo.empresaEditar": {
          "url": "/empresas/editar/:id",
          "data": {
              "section": "Configuración",
              "page": "empresas"
          },
          "templateUrl": "app/views/empresas/form.html"
      },
        "catalogo.catalogo.local": {
            "url": "/locales",
                "data": {
                "section": "Configuración",
                    "page": "locales"
            },
            "templateUrl": "app/views/locales/index.html"
        },
        "catalogo.catalogo.localNuevo": {
            "url": "/locales/nuevo",
                "data": {
                "section": "Configuración",
                    "page": "locales"
            },
            "templateUrl": "app/views/locales/form.html"
        },
        "catalogo.catalogo.localEditar": {
            "url": "/locales/editar/:id",
                "data": {
                "section": "Configuración",
                    "page": "locales"
            },
            "templateUrl": "app/views/locales/form.html"
        },
      "catalogo.catalogo.agendas": {
          "url": "/agendas",
          "data": {
              "section": "Configuración",
              "page": "Agendas"
          },
          "templateUrl": "app/views/agendas/index.html"
      },
        "catalogo.catalogo.agendasNew": {
            "url": "/agendas/new",
            "data": {
                "section": "Catálogo",
                "page": "Autores"
            },
            "templateUrl": "dist/views/agendas/form.html"
        },
        "catalogo.catalogo.agendasEdit": {
            "url": "/agendas/:id/edit",
            "data": {
                "section": "Catálogo",
                "page": "Agendas"
            },
            "templateUrl": "dist/views/agendas/form.html"

        },
        "catalogo.catalogo.catSec": {
            "url": "/categoria_sector",
            "data": {
                "section": "Configuración",
                "page": "CategoriaSector"
            },
            "templateUrl": "app/views/categoriaSector/index.html"
            
        },
        "catalogo.catalogo.catSecNew":{

            "url":"/categoria_sector/new",
            "data":{
                "section":"Configuración",
               "page":"CategoriaSector" 
            },
             "templateUrl": "app/views/categoriaSector/form.html"
            
        },
        "catalogo.catalogo.catSecEdit": {
            "url": "/categoria_sector/:id/edit",
            "data": {
                "section": "Configuración",
                "page": "CategoriaSector"
            },
            "templateUrl": "app/views/categoriaSector/form.html"

        },
        "catalogo.catalogo.instituciones": {
            "url": "/institucion",
            "data": {
                "section": "Configuración",
                "page": "Instituciones"
            },
            "templateUrl": "app/views/instituciones/index.html"
            
        }

        

    }


]);
