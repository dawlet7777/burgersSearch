import { useQuery } from "@tanstack/react-query"
import { getBurgers } from "../service/burger.service"
import { useFilterStore } from "../store/useFilterStore"
import Card from "../components/Card"

function CardList() {
  const { items, activeFilterId } = useFilterStore()
  const activeCategory = items.find(item => item.id === activeFilterId)?.name

  const { data, isLoading } = useQuery({
    queryKey: ['burgers', activeCategory],
    queryFn: () => getBurgers(activeCategory),
  })

  if (isLoading) return <p>Загрузка...</p>

  return (
    <div className="card-list">
      {data?.map((burger) => (
        <Card key={burger.id} {...burger} />
      ))}
    </div>
  )
}

export default CardList