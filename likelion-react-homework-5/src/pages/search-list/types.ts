import songList from '../../data/songList';

export type SongList = typeof songList;
export type SongListItem = songList[number];
// export type SongListItem = (typeof songList)[number];
