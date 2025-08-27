import {
	BarChartOutlined,
	HomeOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	OrderedListOutlined,
} from "@ant-design/icons"
import { Button, Layout, Menu, theme } from "antd"
import { useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router"
const { Header, Sider, Content } = Layout
export const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical" />
				<Menu
                  
					theme="dark"
					mode="inline"
					selectedKeys={[location.pathname]}
					onSelect={(value) => navigate(value.key)}
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "/admin/hello",
							icon: <HomeOutlined />,
							label: "Главная",
						},
						{
							key: "/admin/stats",
							icon: <BarChartOutlined />,
							label: "Создание блюд",
						},
						{
							key: "/admin/orders",
							icon: <OrderedListOutlined />,
							label: "Заказы",
						},
					]}
				/>
			</Sider >
			<Layout >
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}
