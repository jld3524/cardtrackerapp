
export type PokemonCard = {
  id: string;
  localId: string;
  name: string;
  image?: string;
};

export async function getPokemonCards(): Promise<PokemonCard[]> {
  const response = await fetch(
    "https://api.tcgdex.net/v2/en/sets/smp"
  );

  if (!response.ok) {
    throw new Error("Fehler beim Laden der Pokémon-Karten");
  }

  const data = await response.json();

  return data.cards;
}
