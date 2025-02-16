import songList from '@/data/songList';
import { tm } from '@/util/tw-merge';
import SearchForm from '../../component/searchForm';
import SearchedList from '../../component/searchedList';
import { useState, useEffect, useRef } from 'react';
import { SongListItem } from './types';

function SearchListPage() {
  const [list, setList] = useState<SongListItem[]>(songList);
  const [query, setQuery] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchInput = searchInputRef.current;

    if (searchInput) {
      setTimeout(() => {
        if (searchInput) {
          searchInput.focus();
        }
      }, 1000);
    }
  }, []);

  const handleUpdateList = (item: SongListItem, isFavorited: boolean) => {
    setList(
      list.map((it) => (it.id === item.id ? { ...it, isFavorited } : it))
    );
  };

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center">
      <h2 className="flex text-7xl font-medium text-react m-8 font-display">
        CARD SEARCH LIST
      </h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList list={list} query={query} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
