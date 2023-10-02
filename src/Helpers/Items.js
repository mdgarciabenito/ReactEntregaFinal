export const items = [
  {
    title: "Taza Mágica",
    precio: 1000,
    id: 1,
  },
  {
    title: "Taza Plástica",
    precio: 500,
    id: 2,
  },
  {
    title: "Taza Cerámica",
    precio: 2000,
    id: 3,
  },
  {
    title: "Hoppi",
    precio: 1000,
    id: 4,
  },
  {
    title: "Remera",
    precio: 500,
    id: 5,
  },
  {
    title: "Buzo",
    precio: 2000,
    id: 6,
  },
];

export function getItemById(id) {
  return items.find((item) => item.id === id);
}
