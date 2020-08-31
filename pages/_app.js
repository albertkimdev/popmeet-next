import Navbar from "../components/Navbar";
import { ProvideAuth } from "../auth/useAuth";
import { ProvideUser } from "../user/useUser";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ProvideUser>
        <Navbar />
        <Component {...pageProps} />
      </ProvideUser>
    </ProvideAuth>
  );
}
