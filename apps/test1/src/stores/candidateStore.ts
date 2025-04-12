import { sync } from "@tonk/keepsync";
import { create } from "zustand";

export interface Candidate {
  id: string;
  name: string;
  role: string;
  votes: number;
}

export type FilterOption = "all";
export type SortOption = "role" | "name";

interface CandidateState {
  candidates: Candidate[];
  currentFilter: FilterOption;
  currentSort: SortOption;
  sortDirection: "asc" | "desc";

  addCandidate: (name: string, role: string) => void;
  deleteCandidate: (id: string) => void;
  toggleVote: (id: string) => void;
  deleteAll: () => void;

  setFilter: (filter: FilterOption) => void;
  setSort: (sort: SortOption) => void;
  toggleSortDirection: () => void;

  getFilteredAndSortedCandidates: () => Candidate[];
}

export const useCandidateStore = create<CandidateState>(
  sync(
    (set, get) => ({
      candidates: [],
      currentFilter: "all",
      currentSort: "name",
      sortDirection: "asc",

      addCandidate: (name, role) => {
        set((state) => ({
          candidates: [
            ...state.candidates,
            {
              id: crypto.randomUUID(),
              name,
              role,
              votes: 0,
            },
          ],
        }));
      },

      deleteCandidate: (id) => {
        set((state) => ({
          candidates: state.candidates.filter((c) => c.id !== id),
        }));
      },

      toggleVote: (id) => {
        set((state) => ({
          candidates: state.candidates.map((c) =>
            c.id === id
              ? {
                  ...c,
                  votes: c.votes+=1,
                }
              : c
          ),
        }));
      },

      deleteAll: () => {
        set({ candidates: [] });
      },

      setFilter: (filter) => {
        set({ currentFilter: filter });
      },

      setSort: (sort) => {
        set({ currentSort: sort });
      },

      toggleSortDirection: () => {
        const { sortDirection } = get();
        set({ sortDirection: sortDirection === "asc" ? "desc" : "asc" });
      },

      getFilteredAndSortedCandidates: () => {
        const { candidates, currentSort, sortDirection } = get();

        const sorted = [...candidates].sort((a, b) => {
          let valA = a[currentSort].toLowerCase();
          let valB = b[currentSort].toLowerCase();

          if (valA < valB) return sortDirection === "asc" ? -1 : 1;
          if (valA > valB) return sortDirection === "asc" ? 1 : -1;
          return 0;
        });

        return sorted;
      },
    }),
    {
      docId: "candidate-list",
    }
  )
);
