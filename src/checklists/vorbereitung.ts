import { testIdUnique } from "./tests";

/*

- Landewiesen
  - Anflug
  - Hindernisse
- Flugplätze
  - Anflug
  - Frequenzen
- Thermik Hotspots
- Wetter
  - Großwetterlage
  - Wind
  - Abschirmung
  - Luftmassen
  - Gewitterneigung
- Flugzeug
  - Polare
  - Eigenheiten
  - Beladeplan
  - Instrumente

*/

export const items = [
  {
    id: "1",
    title: "Landewiesen",
    completed: false,
    children: [
      { id: "1-1", title: "Anflug", completed: false },
      { id: "1-2", title: "Hindernisse", completed: false },
    ],
  },
  {
    id: "2",
    title: "Flugplätze",
    completed: false,
    children: [
      { id: "2-1", title: "Anflug", completed: false },
      { id: "2-2", title: "Frequenzen", completed: false },
    ],
  },
  { id: "3", title: "Thermik Hotspots", completed: false },
  {
    id: "4",
    title: "Wetter",
    completed: false,
    children: [
      { id: "4-1", title: "Großwetterlage", completed: false },
      { id: "4-2", title: "Wind", completed: false },
      { id: "4-3", title: "Abschirmung", completed: false },
      { id: "4-4", title: "Luftmassen", completed: false },
      { id: "4-5", title: "Gewitterneigung", completed: false },
    ],
  },
  {
    id: "5",
    title: "Flugzeug",
    completed: false,
    children: [
      { id: "5-1", title: "Polare", completed: false },
      { id: "5-2", title: "Eigenheiten", completed: false },
      { id: "5-3", title: "Beladeplan", completed: false },
      { id: "5-4", title: "Instrumente", completed: false },
    ],
  },
];

testIdUnique(items);
