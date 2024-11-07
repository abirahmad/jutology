import axios from "axios";

export const revalidate = 30; // Revalidate every 30 seconds

export default async function sitemap() {
  try {
    const { products, category, subcategory } = await fetchProducts();
    let appUrl = "https://akijplastics.com";
    const productEntries = products.map((item) => ({
      url: `${appUrl}/product/${item.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.8, // You can adjust this based on product importance
      changeFrequency: "weekly",
    }));
    const entityCategory = category.map((item) => ({
      url: `${appUrl}/categories/${item.slug}/main`,
      lastModified: new Date().toISOString(),
      priority: 0.8, // You can adjust this based on product importance
      changeFrequency: "weekly",
    }));
    const productSubcategory = subcategory.map((item) => ({
      url: `${appUrl}/categories/${item.slug}/subcategory`,
      lastModified: new Date().toISOString(),
      priority: 0.8, // You can adjust this based on product importance
      changeFrequency: "weekly",
    }));

    // Return the sitemap, including the homepage
    return [
      {
        url: `${appUrl}`,
        lastModified: new Date().toISOString(),
        priority: 1.0, // Homepage priority is typically higher
        changeFrequency: "weekly",
      },
      {
        url: `${appUrl}/products`,
        lastModified: new Date().toISOString(),
        priority: 1.0, // Homepage priority is typically higher
        changeFrequency: "weekly",
      },
      {
        url: `${appUrl}/category`,
        lastModified: new Date().toISOString(),
        priority: 1.0, // Homepage priority is typically higher
        changeFrequency: "weekly",
      },
      {
        url: `${appUrl}/sustainability`,
        lastModified: new Date().toISOString(),
        priority: 1.0, // Homepage priority is typically higher
        changeFrequency: "weekly",
      },
      ...productEntries,
      ...entityCategory,
      ...productSubcategory,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}

// Fetch products data for sitemap generation
async function fetchProducts() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sitemap`;

  const response = await axios.get(apiUrl, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store", // Disable caching for fresh data
  });

  return response.data;
}
