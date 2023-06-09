import { component$, $, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Character } from "~/components/character/character";
import { DontResource } from "~/components/dont-resource";
import { SearchBar } from "~/components/search-bar";
import { useDebounding } from "~/hooks/use-debounding";
import { useIntersectionObserver } from "~/hooks/use-intersection-observer";
import { useLoadCharacters } from "~/hooks/use-load-characters";
import { useLoading } from "~/hooks/use-loading";
import type { CharacterType, storeProps } from "~/models";

export default component$(() => {
  const initialState = {
    page: 0,
    data: null,
    loading: false,
    search: "",
  };

  const state = useStore<storeProps>(initialState);
  useLoadCharacters(state);

  useLoading(state);
  const element = useIntersectionObserver(
    $(() => {
      state.loading = true;
      state.page++;
    })
  );
  const search = useDebounding(state, 300);

  return (
    <>
      <SearchBar search={search} placeholder="A-Bonb" />
      <section class="w-full p-8 flex justify-center items-center">
        {state.data && state.data?.results.length > 0 && (
          <div
            class=" w-full grid  gap-8 "
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            }}
          >
            {state.data.results.map((result: CharacterType) => {
              return (
                <Character ref={element} key={result.id} character={result} />
              );
            })}
          </div>
        )}
        {state.data && state.data.results?.length === 0 && (
          <div class="py-8 w-full h-full items-center justify-center">
            <DontResource
              classStyle="w-full h-full"
              message="Don't have any results"
            />
          </div>
        )}
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
