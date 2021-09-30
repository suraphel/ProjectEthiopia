// Wrap the Component so the entire site will be included

// import Layout from "../components/usersAccount/Layout/Layout";
import Layout from "../components/layout/Layout";
// import Layout from "../components/usersAccount/Layout/Layout";
import "../styles/globals.css";
import "../components/dataFlow/companyregistration/AddCompanies.css";
import "../components/dataFlow/choreregistreation/AddChore.module.css";
import "../components/searchBar/Search.module.css";
import { AuthContextProvider } from "../components/Token/LogInAuthentication ";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        {/* <AuthContextProvider> */}
        <Component {...pageProps} />
        {/* </AuthContextProvider> */}
      </Layout>
    </div>
  );
}

export default MyApp;
