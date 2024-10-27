import Nav from "@components/shared/Nav";
import Provider from "@components/shared/Provider";
import "@styles/globals.css";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI-Powered Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
