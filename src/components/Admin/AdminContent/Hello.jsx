import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { DeleteBurger } from "../../../service/burger.service";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const Hello = ({ id, img, name, price, weight,category, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await DeleteBurger(id);
    onDelete?.(id);
  };

  const handleEdit = () => {
    navigate("/admin/stats", {
      state: { id,category, img, name, price, weight }
    });
  };

  return (
    <Card
      className="card-item"
      cover={<img id="img" alt={name} src={img} />}
      actions={[
        <EditOutlined key="edit" onClick={handleEdit} />,
        <Button
          danger
          style={{ border: 0, paddingBottom: 10 }}
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        />,
      ]}
    >
      <Meta title={name} description={`Цена: ${price} | Вес: ${weight}`} />
    </Card>
  );
};