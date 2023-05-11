import '../styles/SearchInput.css';

function SearchInput({ searchString, setSearchString }) {

  return (
    <form className="eventPage--search">
      <input type="search" placeholder="Sök event" value={searchString} onChange={evt => setSearchString(evt.target.value)} />
    </form>
  );
}

export default SearchInput;
