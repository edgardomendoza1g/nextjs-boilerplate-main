// navConfig.tsx
import React from "react";
import SvgColor from "../svg-color/SvgColor";

// Define la interfaz para los elementos de la navegación
interface NavItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  info?: string;
  children?: NavItem[]; // Recursividad para subelementos
}

// Función para crear iconos
const icon = (name: string): React.ReactNode => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

// Configuración de la navegación
const navConfig: NavItem[] = [
  {
    title: "DataGrid con filtros",
    icon: icon("ic_hamburger"),
    info: "Informacion general sobre esta ventana",
    children: [
      {
        title: "Vista General",
        path: "/datagrid-with-filter/blog",
        icon: icon("ic_check"),
      },
      {
        title: "Componentes",
        icon: icon("ic_check"),
        children: [
          {
            title: "Columnas y filas",
            path: "/datagrid-with-filter/user",
            icon: icon("ic_punto"),
          },
          {
            title: "Custom Toolbar",
            path: "/datagrid-with-filter/products",
            icon: icon("ic_punto"),
          },
          {
            title: "Nivel 3",
            icon: icon("ic_punto"),
            children: [
              {
                title: "Nivel 2",
                icon: icon("ic_punto"),
                children: [
                  {
                    title: "Nivel 1",
                    path: "/datagrid-with-filter/pagination",
                    icon: icon("ic_punto"),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Ejemplos de CRUD",
        path: "/datagrid-with-filter/ejemplo-crud",
        icon: icon("ic_check"),
      },
      {
        title: "Microsoft Graph",
        path: "/datagrid-with-filter/microsoft-graph",
        icon: icon("ic_check"),
      },
    ],
  },
  {
    title: "Componentes Generales",
    icon: icon("ic_hamburger"),
    children: [
      {
        title: "Botón",
        path: "/componentes-generales/boton",
      },
      {
        title: "Listas",
        path: "/componentes-generales/listas",
      },
      {
        title: "Tags",
        path: "/componentes-generales/tags",
      },
      {
        title: "Calendario",
        path: "/componentes-generales/calendario",
      },
      {
        title: "Visualización",
        path: "/componentes-generales/visualizacion",
      },
      {
        title: "Acciones: Edición , Imprimir , Eliminar ",
        path: "/componentes-generales/edicion",
      },

      {
        title: "Searchbar",
        path: "/componentes-generales/searchbar",
      },
      {
        title: "Notificaciones",
        path: "/componentes-generales/notificaciones",
      },
      {
        title: "Filtros",
        path: "/componentes-generales/filtros",
      },
      {
        title: "Cuadro de texto",
        path: "/componentes-generales/cuadro-texto",
      },
      /*
        {
          title: 'Pantalla emergente',
          path: '/componentes-generales/pantalla_modal',
        }, */
      {
        title: "Sección colapsable",
        path: "/componentes-generales/colapsable",
      },
      {
        title: "On/ Off",
        path: "/componentes-generales/onoff",
      },
      {
        title: "Escanear",
        path: "/componentes-generales/escanear",
      },
      {
        title: "Acción de aprobar, rechazar,modificar",
        path: "/componentes-generales/imprimir",
      },
      /*
        {
          title: 'Guardar en grid',
          path: '/componentes-generales/guardar_en_grid',
        }, */
      {
        title: "Slider",
        path: "/componentes-generales/slider",
      },
      {
        title: "Hora",
        path: "/componentes-generales/hora",
      },
      {
        title: "Barra de porcentaje",
        path: "/componentes-generales/barra_de_porcentaje",
      },
      {
        title: "Avisos/ Pantalla emergente",
        path: "/componentes-generales/avisos",
      },
    ],
  },
  {
    title: "Login",
    path: "/login",
    icon: icon("ic_bookmark"),
  },
  {
    title: "Error",
    path: "/404",
    icon: icon("ic_bookmark"),
  },
  {
    title: "Typography",
    path: "/datagrid-with-filter/typos",
    icon: icon("ic_bookmark"),
  },
  {
    title: "Color Palette",
    path: "/datagrid-with-filter/color",
    icon: icon("ic_bookmark"),
  },
];

export default navConfig;
