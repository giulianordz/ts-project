// Definimos el tipo de los objetos que estarán en la colección
interface Cosas {
  id: number;
  name: string;
  description: string;
}

const collection: Cosas[] = [
  { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
  { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
  { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
];

export function getAll(): Cosas[] {
  return Array.from(collection);
}

export function getById(id: number): Cosas | undefined {
  return collection.find(cosa => cosa.id === id);
}



