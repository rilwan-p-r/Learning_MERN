import React, { useEffect, useState } from "react";

const ListsSearch = () => {
  const [lists, setlists] = useState(["apple", "orange", "banana", "carrot"]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const searchedItem = searchItem(search, lists);
    setFiltered(searchedItem);
  }, [search, lists]);

  const searchItem = (text, lists) => {
    if (text === "") {
      return lists;
    } else {
      const searchedItems = lists.filter((item) => {
        return item.toLowerCase().includes(text);
      });
      return searchedItems;
    }
  };
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {filtered
        ? filtered.map((list, index) => <li key={index}>{list}</li>)
        : lists.map((list, index) => <li key={index}>{list}</li>)}
    </div>
  );
};

export default ListsSearch;
