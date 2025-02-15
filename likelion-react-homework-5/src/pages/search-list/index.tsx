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
    <section>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList list={list} query={query} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
