import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header className="col-12" />

      <main>
        <Toaster />

        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app -  hunt-X-sales",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "prithijit",
};

export default Layout;
