const getApiUrl = () => {
  const env = process.env.NEXT_PUBLIC_ENV;
  if (env === 'dev') {
    return process.env.NEXT_PUBLIC_DEVURL;
  } else if (env === 'prod') {
    return process.env.NEXT_PUBLIC_PRODURL;
  } else {
    return process.env.NEXT_PUBLIC_LOCALURL;
  }
};

export const globalUrl = getApiUrl();
export const ImageUrl =
  `${globalUrl}/News_Feed/Send-File-Response?FilePath=`;
export const htmlUrl =
  `${globalUrl}/News_Feed/Send-HTML-File-Response?FilePath=`;


// console.log(`this is the status of the site: ${globalUrl}`);
// export const globalUrl = "https://backend.vehya.com";
// export const globalUrl = process.env.NEXT_PUBLIC_ENV === 'dev' ? process.env.NEXT_PUBLIC_ENV : process.env.NEXT_PUBLIC_ENV;
// export const globalUrl = "http://192.168.1.83:8000";  