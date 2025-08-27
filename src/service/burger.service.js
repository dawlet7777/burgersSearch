import axios from "axios"

export const getBurgers = async (category) => {
  const res = await axios.get('https://7247184569b84363.mokky.dev/burgers', {
    params: {
      category: category !== "Все" ? category : undefined,
    }
  })
  return res.data
}

export const CreateBurger = async (data) => {
  const res = await axios.post('https://7247184569b84363.mokky.dev/burgers', data)
  return res.data
}



export const DeleteBurger = async (id) => {
  const res = await axios.delete(`https://7247184569b84363.mokky.dev/burgers/${id}`)
  return res.data
}

export const UpdateBurger = async (id, data) => {
  const res = await axios.patch(`https://7247184569b84363.mokky.dev/burgers/${id}`, data)
  return res.data
}