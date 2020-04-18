const menuList=[
{
	title:'首页',
	key:'/home',
	icon:'pie-chart'
},
{
	title:'商品',
	key:'/products',
	icon:'pie-chart',
	children:[
	{
		title:'品类管理',
		key:'/category',
		icon:'pie-chart'

	},
	{
		title:'商品管理',
		key:'/product',
		icon:'pie-chart'
	}
	]
},
{
	title:'用户管理',
	key:'/user',
	icon:'pie-chart'
},
{
	title:'角色管理',
	key:'/role',
	icon:'pie-chart'
},
{
	title:'图形图表',
	key:'/charts',
	icon:'pie-chart',
	children:[
	{
		title:'柱形图',
		key:'/charts/bar',
		icon:'pie-chart'

	},
	{
		title:'折线图',
		key:'/charts/line',
		icon:'pie-chart'
	},
	{
	    title:'饼图',
		key:'/charts/pie',
		icon:'pie-chart'	
	}
	]
},


]
export default menuList