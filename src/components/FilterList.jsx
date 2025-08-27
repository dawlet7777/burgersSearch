
import { useFilterStore } from "../store/useFilterStore"
import FilterItem from "./FilterItem"


function FilterList() {
  const { items, activeFilterId, setFilterId } = useFilterStore()
  return (
    <div className="container">
      <div className="filter-list">
        {
          items.map((item) => (
            <FilterItem 
            key={item.id} 
            onActive={() => setFilterId(item.id)} 
            isActive={item.id === activeFilterId} 
            src={item.src}  
            name={item.name} />
          ))
        }
      </div>
    </div>
  )
}

export default FilterList
