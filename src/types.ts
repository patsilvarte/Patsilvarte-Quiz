type QuestionFormat = "AvsB" | "GNNG" | "1to5";

export type QAvsB = {
  format: "AvsB";
  image1: { url: string; value: string };
  image2: { url: string; value: string };
  pick?: string; // value from one of the above options
};

export type QGNNGOption = {
  text: string;
  pick?: boolean;
};

export type QGNNG = {
  format: "GNNG";
  imageUrl: string;
  field: QGNNGOption[]; // true for Good, undefined for Neutral, false for Not Good
};

export type Q1to5 = {
  format: "1to5";
  options: {
    imageUrl: string;
    pick?: number; // 1 to 5 values
  }[];
};

export type Question = QAvsB | QGNNG | Q1to5;

export enum ProgressState {
  NotStarted = "not_started",
  OnGoing = "on_going",
  Completed = "completed",
}
