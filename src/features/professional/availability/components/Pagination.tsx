// shadcn/ui
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// motion
import { motion } from "motion/react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  amountOfSections: number;
  start_pagination_item: number;
  end_pagination_item: number;
};

function PaginationComponent({
  currentPage,
  setCurrentPage,
  amountOfSections,
  start_pagination_item,
  end_pagination_item,
}: PaginationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="flex items-center justify-center"
    >
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage === 1
                  ? "text-gray-400 hover:text-gray-400 hover:bg-transparent"
                  : "cursor-pointer"
              }
              onClick={() =>
                currentPage > 1 ? setCurrentPage(currentPage - 1) : null
              }
            />
          </PaginationItem>
          {Array.from({ length: amountOfSections })
            .slice(start_pagination_item, end_pagination_item)
            .map((_, i) => {
              const pageNumber = start_pagination_item + i + 1;
              return (
                <PaginationItem
                  key={pageNumber}
                  className={
                    currentPage === pageNumber
                      ? "border-1 rounded-lg"
                      : "cursor-pointer"
                  }
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  <PaginationLink>{pageNumber}</PaginationLink>
                </PaginationItem>
              );
            })}

          <PaginationItem>
            <PaginationNext
              className={
                currentPage === amountOfSections
                  ? "text-gray-400 hover:text-gray-400 hover:bg-transparent"
                  : "cursor-pointer"
              }
              onClick={() =>
                currentPage < amountOfSections
                  ? setCurrentPage(currentPage + 1)
                  : null
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </motion.div>
  );
}

export default PaginationComponent;
