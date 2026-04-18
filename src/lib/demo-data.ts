export const DEMO_RATE = 114;

export const HERO_CYCLE = [
  { old: 250_000, new: 2500, usd: 22.02 },
  { old: 150_000, new: 1500, usd: 13.16 },
  { old: 500_000, new: 5000, usd: 43.86 },
  { old: 75_000, new: 750, usd: 6.58 },
  { old: 1_000_000, new: 10_000, usd: 87.72 },
] as const;

export const TICKER_DATA = [
  { code: "USD", val: "114.00", chg: "+0.3%", up: true, flag: "🇺🇸" },
  { code: "EUR", val: "122.30", chg: "+0.2%", up: true, flag: "🇪🇺" },
  { code: "TRY", val: "44.74", chg: "-0.5%", up: false, flag: "🇹🇷" },
  { code: "AED", val: "3.67", chg: "0.0%", up: true, flag: "🇦🇪" },
  { code: "SAR", val: "30.40", chg: "+0.1%", up: true, flag: "🇸🇦" },
  { code: "GBP", val: "142.80", chg: "-0.2%", up: false, flag: "🇬🇧" },
  { code: "JOD", val: "160.55", chg: "+0.1%", up: true, flag: "🇯🇴" },
  { code: "EGP", val: "2.34", chg: "+0.4%", up: true, flag: "🇪🇬" },
] as const;

type Denomination = {
  amount: string;
  border: string;
  grad: string;
  image: string;
};

export const DENOMINATIONS: Denomination[] = [
  {
    amount: "500",
    border: "#3D7F78",
    grad: "linear-gradient(135deg,#1a4a44 0%,#3D7F78 50%,#0B2F2A 100%)",
    image: "/assets/currencies/500-lira.jpg",
  },
  {
    amount: "200",
    border: "#0B2F2A",
    grad: "linear-gradient(135deg,#0d2520 0%,#0B2F2A 55%,#00160A 100%)",
    image: "/assets/currencies/200-lira.jpg",
  },
  {
    amount: "100",
    border: "#0E3C36",
    grad: "linear-gradient(135deg,#123832 0%,#0E3C36 50%,#061812 100%)",
    image: "/assets/currencies/100-lira.jpg",
  },
  {
    amount: "50",
    border: "#A61E2B",
    grad: "linear-gradient(135deg,#6b1520 0%,#A61E2B 50%,#3a0a10 100%)",
    image: "/assets/currencies/50-lira.jpg",
  },
  {
    amount: "25",
    border: "#C8A24B",
    grad: "linear-gradient(135deg,#8a6d2f 0%,#C8A24B 50%,#5c4a1f 100%)",
    image: "/assets/currencies/25-lira.jpg",
  },
  {
    amount: "10",
    border: "#9A9A96",
    grad: "linear-gradient(135deg,#6a6a68 0%,#9A9A96 50%,#4a4a48 100%)",
    image: "/assets/currencies/10-lira.png",
  },
] as const;
