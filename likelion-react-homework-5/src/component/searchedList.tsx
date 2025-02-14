import Card from './card';
import { tm } from '@/util/tw-merge';
import { type SongListItem } from '@/pages/search-list/types';

interface SearchedListProps {
  query: string;
  list: SongListItem[];
  onUpdate: (item: SongListItem, isFavorited: boolean) => void;
}
function SearchedList({ list, query, onUpdate }: SearchedListProps) {
  const word = query.toLowerCase();

  const filteredList = list.filter((item) => item.title.includes(word));

  return (
    <section>
      <h3>검색 리스트</h3>
      <ul>
        <h3 className="sr-only">검색된 리스트</h3>
        <ul className={tm('flex flex-col gap-4')}>
          {filteredList.map((item) => (
            <Card key={item.id} item={item} onUpdate={onUpdate} />
          ))}
        </ul>
      </ul>
    </section>
  );
}

export default SearchedList;
