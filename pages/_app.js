import Navbar from "../components/Navbar";
import { ProvideAuth } from "../auth/useAuth";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Navbar />
      <Component {...pageProps} />
    </ProvideAuth>
  );
}
