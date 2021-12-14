import React from "react";
import { Text, View } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./components/CoinDetailedHeader/index";
import styles from "./styles";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price },
  } = Coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailedHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>${current_price.usd}</Text>
      </View>
    </View>
  );
};

export default CoinDetailedScreen;
