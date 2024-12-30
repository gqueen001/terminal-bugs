import { useMemo } from "react";

interface UsePaginationType {
  currentPage: number;
  bugs: any;
  dataOfPerPage: number;
  totalPage: number;
}

export const usePagination = ({
  currentPage,
  totalPage,
}: UsePaginationType) => {
  const paginations = useMemo(() => {
    const range = (start: number, end: number) => {
      let length: number = end - start + 1;
      return Array.from({ length }, (_, index) => index + start);
    };

    if (totalPage <= 7) {
      return range(1, totalPage);
    }

    const pages: (number | string)[] = [];

    pages.push(1, 2);

    if (currentPage > 4) {
      pages.push("...");
    }

    const middleStart = Math.max(3, currentPage - 1);
    const middleEnd = Math.min(totalPage - 2, currentPage + 1);

    for (let i = middleStart; i <= middleEnd; i++) {
      if (!pages.includes(i)) pages.push(i);
    }

    if (currentPage < totalPage - 3) {
      pages.push("...");
    }

    pages.push(totalPage - 1, totalPage);

    return pages;
  }, [currentPage, totalPage]);

  return paginations;
};
