
function FilterItem({  name, src, isActive, onActive }) {
  const activeClass = isActive ? ' active' : ''

  return (
    <div className={'filter-item' + activeClass} onClick={onActive}>
      <img className="filter-img" src={src} />
      <span>{name}</span>
    </div>
  )
}

export default FilterItem