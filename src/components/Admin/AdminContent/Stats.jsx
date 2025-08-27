import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { CreateBurger, UpdateBurger } from "../../../service/burger.service";
import { useLocation, useNavigate } from "react-router-dom";

export const Stats = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const editingBurger = location.state; 

  useEffect(() => {                     
    if (editingBurger) {
      form.setFieldsValue(editingBurger);
    }
  }, [editingBurger, form]);

  const onFinish = async (values) => {
    if (editingBurger) {
      await UpdateBurger(editingBurger.id, values);
    } else {
      await CreateBurger(values);
    }
    form.resetFields();
    navigate("/admin/hello"); // возвращаемся к списку
  };

  return (
    <Form form={form} layout="vertical" autoComplete="off" onFinish={onFinish}>
      <Form.Item name="name" label="Название еды" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item rules={[{ required: true }]} name="img" label="Фото (ссылка)">
        <Input style={{ width: "100%", height: "100%" }}/>
      </Form.Item>

      <Form.Item rules={[{ required: true }]} name="category" label="Категория">
        <Select>
          <Select.Option value="Бургеры">Бургеры</Select.Option>
          <Select.Option value="Закуски">Закуски</Select.Option>
          <Select.Option value="Напитки">Напитки</Select.Option>
          <Select.Option value="Десерты">Десерты</Select.Option>
          <Select.Option value="Пицца">Пицца</Select.Option>
          <Select.Option value="Сеты">Сеты</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item rules={[{ required: true }]} name="price" label="Цена">
        <Input />
      </Form.Item>

      <Form.Item rules={[{ required: true }]} name="weight" label="Вес">
        <Input />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          {editingBurger ? "Обновить" : "Создать"}
        </Button>
      </Form.Item>
    </Form>
  );
};