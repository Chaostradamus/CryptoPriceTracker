import React from "react";
import { Text, View } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./components/CoinDetailedHeader/index";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;

  return (
    <View>
      <CoinDetailedHeader
        image={small}
        
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
    </View>
  );
};

export default CoinDetailedScreen;
