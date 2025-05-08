type QuestionFormat = "AvsB" | "GNNG" | "1to5";

type QAvsB = {
  format: "AvsB";
  image1: { url: string; value: string };
  image2: { url: string; value: string };
  pick?: string; // value from one of the above options
};

type QGNNG = {
  format: "GNNG";
  imageUrl: string;
  field: { text: string; pick?: boolean }[]; // true for Good, undefined for Neutral, false for Not Good
};

type Q1to5 = {
  format: "1to5";
  options: {
    imageUrl: string;
    pick?: number; // 1 to 5 values
  }[];
};

type Question = QAvsB | QGNNG | Q1to5;
