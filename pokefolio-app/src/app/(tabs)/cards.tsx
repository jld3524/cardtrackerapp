
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";

import { useState, useEffect } from "react";
import { getPokemonCards, type PokemonCard } from "../../services/tcgdex";

export default function CardsScreen() {
  const [search, setSearch] = useState("");
  const [apiCards, setApiCards] = useState<PokemonCard[]>([]);

  const { width } = useWindowDimensions();

  const columns =
    width >= 1400 ? 6 :
    width >= 1100 ? 5 :
    width >= 800 ? 4 :
    width >= 600 ? 3 :
    2;

  // Karten von der API abrufen
  useEffect(() => {
    async function loadCards() {
      try {
        const cards = await getPokemonCards();

        setApiCards(cards);

        console.log("Geladene Karten:", cards);
      } catch (error) {
        console.error("API-Fehler:", error);
      }
    }

    loadCards();
  }, []);

  // Karten nach Suchbegriff filtern
  const filteredApiCards = apiCards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search cards..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredApiCards}
        numColumns={columns}
        key={columns}
        keyExtractor={(card) => card.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            {item.image ? (
              <Image
                source={{ uri: `${item.image}/high.webp` }}
                style={styles.cardImage}
                resizeMode="contain"
              />
            ) : null}

            <Text style={styles.cardName}>
              {item.name}
            </Text>

            <Text style={styles.cardNumber}>
              #{item.localId}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  cardContainer: {
    flex: 1,
    margin: 8,
    maxWidth: 220,
  },

  cardImage: {
    width: "100%",
    aspectRatio: 0.714,
    resizeMode: "contain",
  },

  cardName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },

  cardSet: {
    fontSize: 13,
    color: "#777",
  },

  cardNumber: {
    fontSize: 13,
    color: "#777",
  },
});
