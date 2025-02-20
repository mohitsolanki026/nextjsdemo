import React from "react";
import { Helmet } from "react-helmet";

// Default data
const defaultSeo = {
  title: "Best Organic Skincare Products for Glowing Skin | PureBeauty",
  description: "Discover PureBeauty's range of organic skincare products to achieve glowing, healthy skin. Shop now for free shipping on orders over $50!",
  keywords: "organic skincare, glowing skin, natural beauty, best skincare products, eco-friendly skincare",
  url: "https://www.purebeauty.com/organic-skincare-products",
  image: "https://www.purebeauty.com/images/organic-skincare.jpg"
};

const SEO = ({ 
  title = defaultSeo.title, 
  description = defaultSeo.description, 
  keywords = defaultSeo.keywords, 
  url = defaultSeo.url, 
  image = defaultSeo.image 
}) => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link rel="canonical" href={url} />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </div>
  );
};

export default SEO;
