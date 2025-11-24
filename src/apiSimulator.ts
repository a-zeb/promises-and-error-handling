import { NetworkError, DataError } from "./CustomError.ts";

// Simulates fetching a list of products, each with id, name, and price.
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const roll = Math.random();

            if (roll < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else if (roll < 0.9) {
                reject(new DataError("Product catalog response is missing fields."));
            } else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};

// Simulates fetching reviews for a product.
export const fetchProductReviews = (productId: number): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const roll = Math.random();
            const reviews = [
                "It's great!",
                "It's decent.",
            ];

            if (roll < 0.1) {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
                return;
            }

            if (roll < 0.2) {
                reject(new DataError(`Reviews for product ID ${productId} were malformed.`));
                return;
            }

            if (!reviews.length) {
                reject(new DataError(`Reviews for product ID ${productId} were malformed.`));
                return;
            }

            resolve(reviews);
        }, 1500);
    });
};

// Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
export const fetchSalesReport = (): Promise<{ totalSales: number, unitsSold: number, averagePrice: number }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const roll = Math.random();
            const report = { totalSales: 4, unitsSold: 3, averagePrice: 3 };

            if (roll < 0.1) {
                reject(new NetworkError("Failed to fetch sales report"));
                return;
            }

            if (roll < 0.2) {
                reject(new DataError("Sales report failed to parse."));
                return;
            }

            if (!report.totalSales || !report.unitsSold || !report.averagePrice) {
                reject(new DataError("Sales report is missing required totals."));
                return;
            }

            resolve(report);
        }, 1000);
    });
};
