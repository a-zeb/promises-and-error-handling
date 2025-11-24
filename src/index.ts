import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";
import { NetworkError, DataError } from "./CustomError.ts";

function handleApiAndDisplay() {
    fetchProductCatalog()
        .then((products) => {
            console.log("products:", products);

            const reviewPromises = products.map((product) =>
                fetchProductReviews(product.id)
                    .then((reviews) => ({
                        id: product.id,
                        reviews,
                    }))
                    .catch((error) => {
                        console.error(`Failed to fetch reviews for product ${product.id}:`, error);
                        return { id: product.id, reviews: [] };
                    })
            );

            return Promise.all(reviewPromises);
        })
        .then((productReviews) => {
            console.log("productReviews:", productReviews);
            return fetchSalesReport();
        })
        .then((salesReport) => {
            console.log("Sales report:", salesReport);
        })
        .catch((error) => {
            if (error instanceof NetworkError || error instanceof DataError) {
                console.error("Failed to fetch product catalog:", error);
            } else {
                console.error("Unexpected error while fetching data:", error);
            }
        })
        .finally(() => {
            console.log("all API calls have been attempted.");
        });
}

handleApiAndDisplay();
