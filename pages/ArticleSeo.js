import { NextSeo } from 'next-seo';

const ArticleSEO = ({ title, description, image, url }) => {
    console.log(title,description,image,url,'data')
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'article',
        url: url,
        title: title,
        description: description,
        images: [
          {
            url: image,
            alt: title,
          },
        ],
      }}
    />
  );
};

export default ArticleSEO;
