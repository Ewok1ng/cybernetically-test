export interface IStock {
    symbol: string;
    sector: string;
    securityType: string;
    bidPrice: number;
    bidSize: number;
    askPrice: number;
    askSize: number;
    lastUpdated: number;
    lastSalePrice: number;
    lastSaleSize: number;
    lastSaleTime: number;
    volume: number;
}
