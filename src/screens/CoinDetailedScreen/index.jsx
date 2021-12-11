import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;

  return (
    <View>
      <View style={styles.headerContainer}>
        <Ionicons name="chevron-back-sharp" size={24} color="white" />

        <View style={styles.tickerContainer}>
          <Image source={{ uri: small }} style={{ width: 26, height: 26 }} />
          <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>

          <View style={styles.rankContainer}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              #{market_cap_rank}
            </Text>
          </View>
        </View>
        <EvilIcons name="user" size={30} color="white" />
      </View>
    </View>
  );
};

export default CoinDetailedScreen;
