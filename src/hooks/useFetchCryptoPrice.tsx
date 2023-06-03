import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchCryptoPrice = (url: string, crypto: string): number | null => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchCryptoPrice = async () => {
            try {
                const response: AxiosResponse = await axios.get(url);
                setPrice(response.data[crypto].usd);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCryptoPrice();
    }, [url]);

    return price;
};

export default useFetchCryptoPrice;
