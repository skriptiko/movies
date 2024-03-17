"use client";

import { useGetMovies } from "@/api/hooks/useGetMovies";

export default function MoviesPage() {
  const { data } = useGetMovies();

  console.log("useGetMovies", data);
  return (
    <main>
      <div>MoviesPage</div>
    </main>
  );
}
