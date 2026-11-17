import { Pack } from "../../features/cart";
export const metadata = {
  title: "Your pack",
  robots: { index: false, follow: false },
};
export default function CartPage() {
  return <Pack />;
}
