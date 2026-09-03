import type { UseAppProps } from "../types/app-hook";

const useApp = (options: UseAppProps = {}) => {
  const { text } = options || {};
  return { text };
};

export default useApp;
