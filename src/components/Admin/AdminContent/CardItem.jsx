import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBurgers, DeleteBurger } from "../../../service/burger.service";
import { Hello } from "./Hello";

export const CardItem = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["burgers"],
    queryFn: () => getBurgers()
  });

  const handleDelete = async (id) => {

    queryClient.setQueryData(["burgers"], oldData =>
      oldData.filter(burger => burger.id !== id)
    );
    await DeleteBurger(id);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {data?.map((burger) => (
        <Hello
          key={burger.id}
          id={burger.id}
          name={burger.name}
          img={burger.img} 
          price={burger.price}
          weight={burger.weight}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};