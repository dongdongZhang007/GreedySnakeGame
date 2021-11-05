/*
 * @Author: your name
 * @Date: 2021-11-05 11:06:55
 * @LastEditTime: 2021-11-05 20:38:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \GreadySnake\food.js
 */
// 1. 蛇类
// 2. 食物类
// 3. 地图类
// 4. 入口文件

import { getRandom  } from "./util.js";

// 食物类
class Food {
    // 数据初始化
    // 知识点：es6 class 构造函数，解构赋值，设置默认参数
    constructor({x = 0, y = 0, width = 20, height = 20, color = 'green' } = {}) {
        // 存储食物
        this.elements = [];

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }

    // 渲染函数
    render(map) {
        // 移除旧的食物
        this.remove();
        // 创建新的坐标
        // map.offsetWidth/this.width 将地图变成格子（根据食物宽度）
        this.x = getRandom(0, map.offsetWidth/this.width - 10) * this.width;
        this.y = getRandom(0, map.offsetHeight/this.height - 1) * this.height;

        console.log(this.x, this.y);
        let foodDiv = document.createElement('div');
        map.appendChild(foodDiv);
        this.elements.push(foodDiv);

        // 设置foodDiv的样式
        foodDiv.style.position = 'absolute';
        foodDiv.style.left = this.x + 'px';
        foodDiv.style.top = this.y + 'px';
        foodDiv.style.width = this.width + 'px';
        foodDiv.style.height = this.height + 'px';
        foodDiv.style.backgroundColor = this.color;
    }
    // delete food
    remove() {
        for(let i = this.elements.length - 1; i >=0; i-- ) {
            this.elements[i].parentNode.removeChild(this.elements[i]); // 删除div
            this.elements.splice(i, 1); // 删除数组中的元素
        }
    }
}

export default Food;
