/*
 * @Author: your name
 * @Date: 2021-11-05 11:32:13
 * @LastEditTime: 2021-11-05 20:37:40
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \GreadySnake\snakes.js
 */
class Snake{
    constructor({ width = 20, height = 20, direction = 'right' } = {}) {
        // 存储蛇
        this.elements = [];

        this.height = height;
        this.width = width;
        this.direction = direction;
        
        this.body = [
            { x: 3, y: 2, color: 'red'},
            { x: 2, y: 2, color: 'blue'},
            { x: 1, y: 2, color: 'blue'},
        ];
    }

    render(map) {
        this.remove();

        for(let i=0, len = this.body.length; i < len; i++) {
            let obj = this.body[i];

            let div = document.createElement('div');
            map.appendChild(div);
            this.elements.push(div);

            // 设置div的样式
            div.style.position = 'absolute';
            div.style.left = obj.x * this.width + 'px';
            div.style.top = obj.y * this.height + 'px';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor = obj.color;
        }
    }

    move(food, map) {
        // body move
        for(let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }

        // head move
        let head = this.body[0];
        switch(this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }

        let headX = head.x * this.width;
        let headY = head.y * this.height;

        if(headX === food.x && headY == food.y) {
            // 蛇最后一节
            let last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color,
            });
            // 重新生成食物
            food.render(map);
        }
        console.log("snake  move.");
    }

    remove() {
        for(let i = this.elements.length - 1; i >=0; i-- ) {
            this.elements[i].parentNode.removeChild(this.elements[i]); // 删除div
            this.elements.splice(i, 1); // 删除数组中的元素
        }
        console.log("snake  remove.");
    }
}

export default Snake
