import React, { useState } from "react";
import useTextStats from "./useTextStats.tsx";

const TextAnalysis = () => {
  const [text, setText] = useState<string>("");

  const stats = useTextStats(text);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl w-full">
        <textarea
          name="analysis"
          className="w-full h-64 p-2 border-cyan-500 border-4 rounded-2xl"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
          }}
        ></textarea>

        <div className="mt-4 flex-wrap flex justify-center">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="m-2 text-center flex-1">
              <div className="text-violet-400 text-2xl font-bold">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </div>
              <span className="text-xl font-bold text-cyan-500">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextAnalysis;
