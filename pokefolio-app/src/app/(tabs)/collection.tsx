import { View, Text, StyleSheet } from "react-native";
import { mockCards } from "../../data/mockCards";

export default function CollectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyCollection</Text>

      <Text style={styles.value}>2.438,52 €</Text>

      <Text style={styles.change}>
        +124,30 € (+5,37 %)
      </Text>

      <View style={styles.chartPlaceholder}>
        <Text>Graph kommt später</Text>
      </View>

      <Text style={styles.sectionTitle}>Meine Karten</Text>

   {mockCards.map((card) => (
  <View key={card.id} style={styles.cardRow}>
    <View>
      <Text style={styles.cardName}>{card.name}</Text>
      <Text style={styles.cardSet}>{card.set}</Text>
    </View>
    <View>

    <Text style={styles.cardValue}>{card.value} €</Text>
    <Text
  style={[
    styles.change,
    card.change >= 0 ? styles.positiveChange : styles.negativeChange,
  ]}
>
  {card.change}%
</Text>
    </View>
  </View>
  
))}
    </View>

    
 
  );
}

const styles = StyleSheet.create({

  cardRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#ddd",
},

cardName: {
  fontSize: 16,
  fontWeight: "600",
},

cardSet: {
  fontSize: 13,
  color: "#777",
  marginTop: 4,
},

cardValue: {
  fontSize: 16,
  fontWeight: "600",
},

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  value: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 20,
  },

  change: {
  fontSize: 16,
  marginTop: 6,
},
positiveChange: {
  color: "green",
},

negativeChange: {
  color: "red",
},

chartPlaceholder: {
  height: 220,
  marginTop: 30,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: "600",
  marginTop: 30,
},

  
});