import '../styles/SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск товаров..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};