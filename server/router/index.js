/** @format */

const Router = require('koa-router')
const multer = require('koa-multer');//加载koa-multer模块
const address = require('../db/address')
const barData = require('../db/charts/bar')
const lineData = require('../db/charts/line')
const pieData = require('../db/charts/pie')
const tableData = require('../db/tables/tables')
const formData = require('../db/form/form')


// 上传 图片
var storage = multer.diskStorage({
	//文件保存路径
	destination: function(req, file, cb) {
			cb(null, 'server/uploads/')
	},
	//修改文件名称
	filename: function(req, file, cb) {
		console.log(file)
		console.log(Date.now())
			var fileFormat = (file.originalname).split(".");
			cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
})
//加载配置
var upload = multer({
	storage: storage
});

const router = new Router({
	prefix: '/api',
})

router.get('/addressData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: address,
	}
})

router.get('/getBarData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: barData,
	}
})

router.get('/getLineData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: lineData,
	}
})

router.get('/getPieData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: pieData,
	}
})

router.get('/getTableData', async (ctx, next) => {
	let query = ctx.query
	let per_page = query.per_page
	let cur_page = query.cur_page

	let min = per_page * cur_page - per_page
	let max = per_page * cur_page

	let arr = tableData.slice(min, max)

	ctx.body = {
		errno: 0,
		data: {
			table: arr,
			total: tableData.length,
		},
	}
})

router.get('/getFormData', async (ctx, next) => {
	ctx.body = {
		errno: 0,
		data: formData,
	}
})

router.post('/upload', upload.single('file'), async(ctx, next) => {
	ctx.body = {
			filename: ctx.req.file.filename //返回文件名
	}
})
router.get('/getimg', async(ctx, next) => {
	ctx.body = {
		errno: 0,
		data: {
			filename:'123.jpg',
			imgUrl:'http://pic3.zhimg.com/v2-46a8e6a6f8419bc8bf02dcec85d991d2_b.jpg'
		},
	}
})
module.exports = router
