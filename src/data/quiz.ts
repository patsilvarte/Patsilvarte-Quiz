import { Q1to5, QAvsB, QGNNG } from "../types";

export const Q1: QAvsB = {
  format: "AvsB",
  image1: { url: "https://via.placeholder.com/150", value: "Option A" },
  image2: { url: "https://via.placeholder.com/150", value: "Option B" },
};

export const Q2: QGNNG = {
  format: "GNNG",
  imageUrl: "https://via.placeholder.com/300x150",
  field: [{ text: "Bananas" }, { text: "Kiwis" }, { text: "Mangos" }],
};

export const Q3: Q1to5 = {
  format: "1to5",
  options: [
    { imageUrl: "https://via.placeholder.com/150" },
    { imageUrl: "https://via.placeholder.com/150" },
    { imageUrl: "https://via.placeholder.com/150" },
  ],
};
