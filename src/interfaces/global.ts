export interface ObjectProps {
    price: number;
    change1h: string;
    change24h: string;
    daytrend: Array<number>;
    marketcap: string;
    realvolume24h: string;
    change7d: string;
    change30d: string;
    changeytd: string;
    sector: string;
}

export interface StateProps {
    coin: string;
    label: string;
    icon: string;
    balance: number;
    data: ObjectProps;
    price?: number;
    quantity: number;
    annualProfit: number;
    monthlyReturn: number;
}

export interface CryptoCurrencyProps {
    coin: string;
    label: string;
    icon: string;
    monthlyReturn: number;
    calculateQuantity: (price: number) => number;
    setCryptoData: React.Dispatch<React.SetStateAction<StateProps[]>>;
}

export interface CryptoRowProps {
    data: ObjectProps;
    coin: string;
    label: string;
    icon: string;
}
