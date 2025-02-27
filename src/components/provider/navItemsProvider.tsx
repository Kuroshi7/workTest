import { ReactNode } from "react";
import { MenuType, NavItemsContext } from "../context/navItemsContext";

type NavBarProviderType = {
  children: ReactNode;
}

export function NavBarProvider({ children }: NavBarProviderType) {

  const menuItems = [
    {
      "label": 'INSTITUCIONAL',
      "value": "INSTITUCIONAL",
      "url": "#",
    },
    {
      "label": 'PÓS-GRADUAÇÃO',
      "value": "PÓS-GRADUAÇÃO",
      "submenu":[
        {
          "label": "cursosEADAtivos",
          "value": "cursosEADAtivos",
          "url": "#"
        },
      ]
    },
    {
      "label": 'CONCURSO DE BOLSAS',
      "value": "CONCURSO DE BOLSAS",
      "url": "#",
    },
    {
      "label": 'CURSOS DE EXTENSÃO',
      "value": "CURSOS DE EXTENSÃO",
      "url": "#",
    },
    {
      "label": 'EVENTOS',
      "value": 'EVENTOS',
      "submenu": [
        {
          "label": "SIMPÓSIOS",
          "value": "SIMPÓSIOS",
          "submenu": [
            {
              "label": 'XV SIMPÓSIO (2024)',
              "value": 'XV SIMPÓSIO (2024)',
              "url": "#"
            },
            {
              "label": 'XIV SIMPÓSIO (2020)',
              "value": 'XIV SIMPÓSIO (2020)',
              "url": "#"
            },
            {
              "label": 'XIII SIMPÓSIO (2018)',
              "value": 'XIII SIMPÓSIO (2018)',
              "url": "#"
            },
            {
              "label": 'I SIMPÓSIO BRASILEIRO DE PROC. CIVIL (2017)',
              "value": 'I SIMPÓSIO BRASILEIRO DE PROC. CIVIL (2017)',
              "url": "#"
            },
            {
              "label": 'XII SIMPÓSIO (2016)',
              "value": 'XII SIMPÓSIO (2016)',
              "url": "#"
            },
            {
              "label": 'XI SIMPÓSIO (2014)',
              "value": 'XI SIMPÓSIO (2014)',
              "url": "#"
            },
            {
              "label": 'X SIMPÓSIO (2012)',
              "value": 'X SIMPÓSIO (2012)',
              "url": "#"
            },
            {
              "label": 'IX SIMPÓSIO (2010)',
              "value": 'IX SIMPÓSIO (2010)',
              "url": "#"
            },
            {
              "label": 'VIII SIMPÓSIO (2008)',
              "value": 'VIII SIMPÓSIO (2008)',
              "url": "#"
            },
            {
              "label": 'VII SIMPÓSIO (2006)',
              "value": 'VII SIMPÓSIO (2006)',
              "url": "#"
            },
            {
              "label": 'VI SIMPÓSIO (2004)',
              "value": 'VI SIMPÓSIO (2004)',
              "url": "#"
            },
            {
              "label": 'V SIMPÓSIO (2003)',
              "value": 'V SIMPÓSIO (2003)',
              "url": "#"
            },
            {
              "label": 'III SIMPÓSIO (2001)',
              "value": 'III SIMPÓSIO (2001)',
              "url": "#"
            },
            {
              "label": 'II SIMPÓSIO (2000)',
              "value": 'II SIMPÓSIO (2000)',
              "url": "#"
            },
            {
              "label": 'I SIMPÓSIO (1999)',
              "value": 'I SIMPÓSIO (1999)',
              "url": "#"
            },
          ]
        },
        {
          "label": 'OUTROS',
          "value": 'OUTROS',
          "url": "#"
        }
      ]
    },
    {
      "label": 'PROJETOS',
      "value": 'PROJETOS',
      "url": "#"
    },
  ];


  const data: MenuType = {
    items: menuItems
  }
  return (
    <NavItemsContext.Provider value={data}>
      {children}
    </NavItemsContext.Provider>
  )

}