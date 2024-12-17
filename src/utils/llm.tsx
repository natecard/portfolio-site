// // contexts/MLCContext.tsx
// "use client";
// import { CreateMLCEngine, MLCEngineInterface } from "@mlc-ai/web-llm";
// import { createContext, useContext, useEffect, useState } from "react";

// interface MLCContextType {
//   engine: MLCEngineInterface | null;
//   isLoading: boolean;
//   error: string | null;
//   loadingProgress: number;
// }

// const MLCContext = createContext<MLCContextType>({
//   engine: null,
//   isLoading: false,
//   error: null,
//   loadingProgress: 0,
// });

// export function MLCProvider({ children }: { children: React.ReactNode }) {
//   const [engine, setEngine] = useState<MLCEngineInterface | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   useEffect(() => {
//     async function initEngine() {
//       try {
//         setIsLoading(true);
//         const engineInstance = await CreateMLCEngine(
//           "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
//           {
//             initProgressCallback: (progress) => {
//               setLoadingProgress(Math.round(progress * 100));
//             },
//           },
//         );
//         setEngine(engineInstance);
//       } catch (err) {
//         setError(
//           err instanceof Error ? err.message : "Failed to initialize engine",
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     initEngine();
//   }, []);

//   return (
//     <MLCContext.Provider value={{ engine, isLoading, error, loadingProgress }}>
//       {children}
//     </MLCContext.Provider>
//   );
// }

// export const useMLC = () => useContext(MLCContext);
