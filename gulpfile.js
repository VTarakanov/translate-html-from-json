import * as fs from "fs";
import pkg from 'gulp'
const { gulp, src, dest, series } = pkg
//fancy-log для удобного отображения данных в консоль
import log from 'fancy-log'
import del from 'del'
import pug from "gulp-pug"

//Путь к json c данными
const dataFromFile = JSON.parse(fs.readFileSync('app/json/test.json'))

async function buildhtml() {

	let keysArr = Object.keys(dataFromFile[0]);
	for (let key in keysArr) {
		let dataKey = keysArr[key];
		let dataForGeo = dataFromFile[0][dataKey];
		src(['app/pug/**/*.pug'])
			.pipe(pug({
				pretty: true,
				locals: dataForGeo || {},
			}))
			.pipe(dest(`testhtml/${dataKey}`))
	}
}

async function cleandist() {
	del('dist/**/*', { force: true })
}

export let build = series(cleandist, buildhtml);
export default series(cleandist, buildhtml);
