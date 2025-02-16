import Card from './card';
import { tm } from '@/util/tw-merge';
import { type SongListItem } from '@/pages/search-card-list/types';

interface SearchedListProps {
  query: string;
  list: SongListItem[];
  onUpdate: (item: SongListItem, isFavorited: boolean) => void;
}
function SearchedList({ list, query, onUpdate }: SearchedListProps) {
  const word = query.toLowerCase();

  const filteredList = list.filter((item) => item.title.includes(word));

  return (
    <section className="flex flex-col items-center">
      <h3>검색 리스트</h3>
      <ul>
        <h3 className="sr-only">검색된 리스트</h3>
        <ul className={tm('grid grid-cols-4 gap-1')}>
          {filteredList.map((item) => (
            <Card key={item.id} item={item} onUpdate={onUpdate} />
          ))}
        </ul>
      </ul>
    </section>
  );
}

export default SearchedList;
