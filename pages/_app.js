import Navbar from "../components/Navbar";
import { ProvideAuth } from "../auth/useAuth";
import { ProvideUser } from "../user/useUser";
import "../styles/styles.css";
import "react-datepicker/dist/react-datepicker.css";

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
