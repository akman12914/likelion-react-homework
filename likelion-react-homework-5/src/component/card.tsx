import { useState } from 'react';
import { tm } from '@/util/tw-merge';
import { SongListItem } from '@/pages/search-card-list/types';
import { Heart, HeartSolid } from '@mynaui/icons-react';

interface CardProps {
  item: SongListItem;
  onUpdate: (item: SongListItem, isFavorited: boolean) => void;
}

function Card({ item, onUpdate }: CardProps) {
  const isFavorited = item.isFavorited;

  const handleChangeFavorite = () => {
    const nextIsFavorited = !isFavorited;
    onUpdate(item, nextIsFavorited);
  };

  const iconSize = 48;
  const slug = `/songListItem/${item.id}`;
  const buttonLabel = `즐겨찾기 ${isFavorited ? '제거' : '추가'}`;

  const Icon = isFavorited ? HeartSolid : Heart;

  return (
    <li
      className={tm('flex flex-col items-center gap-3 aspect-square size-52')}
    >
      <figure
        role="presentation"
        className={tm('size-32 rounded-full', 'relative')}
      >
        <button
          type="button"
          title={buttonLabel}
          aria-label={buttonLabel}
          onClick={handleChangeFavorite}
          className={tm(
            'cursor-pointer',
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'rounded-full '
          )}
        >
          <Icon size={iconSize} />
        </button>
      </figure>
      <a href={slug} className={tm('flex flex-col items-center gap-0')}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </a>
    </li>
  );
}

export default Card;
