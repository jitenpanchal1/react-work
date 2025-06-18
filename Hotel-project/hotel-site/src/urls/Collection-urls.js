const Urls = {
  appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
  projectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  disheshcollection: String(
    import.meta.env.VITE_APPWRITE_HOTEL_DISHES_COLLECTION_ID
  ),
  reservationcollection: String(
    import.meta.env.VITE_APPWRITE_RESERVATION_COLLECTION_ID
  ),
  buckeddata: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default Urls;
