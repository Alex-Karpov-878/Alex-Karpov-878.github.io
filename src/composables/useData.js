import { ref, reactive } from "vue";

// Import JSON data files
import homeData from "../data/home.json";
import aboutData from "../data/about.json";
import servicesData from "../data/services.json";
import portfolioData from "../data/portfolio.json";
import blogData from "../data/blog.json";
import contactData from "../data/contact.json";
import careersData from "../data/careers.json";

// Create reactive data store
const dataStore = reactive({
  home: homeData,
  about: aboutData,
  services: servicesData,
  portfolio: portfolioData,
  blog: blogData,
  contact: contactData,
  careers: careersData,
});

// Loading state
const isLoading = ref(false);

// Error state
const error = ref(null);

export function useData() {
  const loadData = async (section) => {
    isLoading.value = true;
    error.value = null;

    try {
      // In a real application, you might fetch from an API here
      // For now, we're using the imported JSON data
      isLoading.value = false;
      return dataStore[section];
    } catch (err) {
      error.value = err.message;
      isLoading.value = false;
      throw err;
    }
  };

  const getData = (section) => {
    return dataStore[section];
  };

  const updateData = (section, newData) => {
    dataStore[section] = { ...dataStore[section], ...newData };
  };

  return {
    dataStore,
    isLoading,
    error,
    loadData,
    getData,
    updateData,
  };
}

// Export individual data getters for convenience
export const useHomeData = () => useData().getData("home");
export const useAboutData = () => useData().getData("about");
export const useServicesData = () => useData().getData("services");
export const usePortfolioData = () => useData().getData("portfolio");
export const useBlogData = () => useData().getData("blog");
export const useContactData = () => useData().getData("contact");
export const useCareersData = () => useData().getData("careers");
