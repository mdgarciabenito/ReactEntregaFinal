export const items = [
  {
    title: "Taza Mágica",
    precio: 1000,
    id: 1,
    categoría: "Taza",
  },
  {
    title: "Taza Plástica",
    precio: 500,
    id: 2,
    categoría: "Taza",
  },
  {
    title: "Taza Cerámica",
    precio: 2000,
    id: 3,
    categoría: "Taza",
  },
  {
    title: "Hoppi",
    precio: 1000,
    id: 4,
    categoría: "Varios",
  },
  {
    title: "Remera",
    precio: 500,
    id: 5,
    categoría: "Ropa",
  },
  {
    title: "Buzo",
    precio: 2000,
    id: 6,
    categoría: "Ropa",
  },
];

export function getItemById(id) {
  return items.find((item) => item.id === id);
}
