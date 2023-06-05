import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { formatPrice, formatValue } from "../helpers/formatValue";
import { ObjectProps } from "../interfaces/global";

const useFetchCrypto = (urlAssets: string, urlMarkets: string): ObjectProps => {
    const initialState: ObjectProps = {
        price: 0,
        change1h: "0",
        change24h: "0",
        daytrend: [0, 0, 0, 0, 0, 0, 0],
        marketcap: "0",
        realvolume24h: "0",
        change7d: "0",
        change30d: "0",
        changeytd: "0",
        sector: "",
    };
    const [data, setData] = useState<ObjectProps>(initialState);
    const [hasFetched, setHasFetched] = useState<boolean>(false);

    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const responseAssets: AxiosResponse = await axios.get(
                    urlAssets
                );
                const responseMarkets: AxiosResponse = await axios.get(
                    urlMarkets
                );

                const asset = responseAssets.data.data;
                const market = responseMarkets.data.data;

                const obj: ObjectProps = {
                    price: formatPrice(asset.market_data.price_usd, 2),
                    change1h: formatValue(
                        asset.market_data.percent_change_usd_last_1_hour
                    ),
                    change24h: formatValue(
                        asset.market_data.percent_change_usd_last_24_hours
                    ),
                    daytrend: market.values[0],
                    marketcap: formatValue(
                        asset.marketcap.current_marketcap_usd
                    ),
                    realvolume24h: formatValue(
                        asset.market_data.real_volume_last_24_hours
                    ),
                    change7d: formatValue(
                        asset.roi_data.percent_change_last_1_week
                    ),
                    change30d: formatValue(
                        asset.roi_data.percent_change_last_1_month
                    ),
                    changeytd: formatValue(
                        asset.roi_data.percent_change_year_to_date
                    ),
                    sector: asset.misc_data.sectors[0],
                };
                setData(obj);
            } catch (error) {
                console.error(error);
            }
        };

        if (!hasFetched) {
            fetchCrypto();
            setHasFetched(true);
        }

        const intervalId = setInterval(fetchCrypto, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [urlAssets, urlMarkets, hasFetched]);

    return data;
};

export default useFetchCrypto;
