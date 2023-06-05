import moment from "moment";

const urlBase = "https://data.messari.io/api/v1";
const market_data = "market_data,";
const marketcap = "marketcap/current_marketcap_usd,";
const roi_data = "roi_data,";
const misc_data = "misc_data/sectors";
const deepFields = `${market_data}${marketcap}${roi_data}${misc_data}`;
const fields = `id,slug,symbol,${deepFields}`;
const dateStart = `start=${moment().subtract(7, "days").format("YYYY-MM-DD")}`;
const dateEnd = `&end=${moment().format("YYYY-MM-DD")}`;
const interval = "&interval=1w";

const cryptoUrl = `metrics?fields=${fields}`;
const cryptoTimeSeries = `metrics/price/time-series?${dateStart}${dateEnd}${interval}`;

export { cryptoTimeSeries, cryptoUrl, urlBase };
