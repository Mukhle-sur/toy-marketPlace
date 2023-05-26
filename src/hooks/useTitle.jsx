import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Action figure toys`;
  }, [title]);
};

export default useTitle;
