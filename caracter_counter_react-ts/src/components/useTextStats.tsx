import { useMemo } from "react";

const useTextStats = (text: string) => {
  return useMemo(() => {
    const words = text.match(/\b[-?(\w+)?]+\b/gi) || [];
    const sentences = text.split(/[.!?]+\s/).filter(Boolean);
    const paragraphs = text.split(/\n+/).filter(Boolean);
    const lines = text.split("\n");
    const unique = new Set(words.map((word) => word.toLowerCase()));

    return {
      words: words.length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      lines: text ? lines.length : 0,
      unique: unique.size,
    };
  }, [text]);
};

export default useTextStats;
