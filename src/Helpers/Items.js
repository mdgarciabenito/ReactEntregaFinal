export const items = [
  {
    title: "Taza Mágica",
    precio: 1000,
    id: 1,
    categoría: "Taza",
    url: "/Images/taza magica.png",
  },
  {
    title: "Taza Plástica",
    precio: 500,
    id: 2,
    categoría: "Taza",
    url: "/Images/taza plastica.png",
  },
  {
    title: "Taza Cerámica",
    precio: 2000,
    id: 3,
    categoría: "Taza",
    url: "/Images/taza ceramica.png",
  },
  {
    title: "Hoppi",
    precio: 1000,
    id: 4,
    categoría: "Varios",
    url: "/Images/hoppi.png",
  },
  {
    title: "Remera",
    precio: 500,
    id: 5,
    categoría: "Ropa",
    url: "/Images/remera.png",
  },
  {
    title: "Buzo",
    precio: 2000,
    id: 6,
    categoría: "Ropa",
    url: "/Images/buzo.png",
  },
  {
    title: "Mate",
    precio: 2000,
    id: 7,
    categoría: "Varios",
    url: "/Images/mate.png",
  },
];

export function getItemById(id) {
  return items.find((item) => item.id === id);
}
