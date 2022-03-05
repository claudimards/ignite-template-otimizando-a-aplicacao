import { Button } from "./Button";
import { List, ListRowRenderer } from 'react-virtualized'

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <Button
          title={genres[index].title}
          iconName={genres[index].name}
          onClick={() => buttonClickCallback(genres[index].id)}
          selected={selectedGenreId === genres[index].id}
        />
      </div>
    )
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">

        <List
          height={372}
          rowCount={genres.length}
          rowHeight={62}
          rowRenderer={rowRenderer}
          width={320}
        />
        
      </div>

    </nav>
  )
}
