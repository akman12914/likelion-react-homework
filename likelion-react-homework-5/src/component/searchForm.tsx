import { tm } from '@/util/tw-merge';
import { useEffect, useId, useRef } from 'react';

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ query, setQuery }: SearchFormProps) {
  const searchInputId = useId();

   const searchInputRef = useRef<HTMLInputElement>(null);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    
  };

  useEffect(() => {
    const searchInput = searchInputRef.current;
     if (searchInput) {

      setTimeout(() => {
        if (searchInput) {
          searchInput.focus();
        }
      }, 50);
    }

  });

  return (
    <form className={tm('mb-10')}>
      <label htmlFor={searchInputId} className="sr-only">
        카드 검색
      </label>
      <div className={tm('flex gap-1')}>
        <input
          ref={searchInputRef}
          type="search"
          name="query"
          id={searchInputId}
          value={query}
          onChange={handleQuery}
          className={tm(
            'rounded-sm px-2.5 py-1',
            'bg-white text-react font-medium'
          )}
        />
        <button
          type="submit"
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-react text-white',
            'px-4 py-2 rounded-sm',
            'hover:opacity-100'
          )}
        >
          검색
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
