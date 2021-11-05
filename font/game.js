/*
 * @Author: your name
 * @Date: 2021-11-05 11:55:11
 * @LastEditTime: 2021-11-05 20:28:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \GreadySnake\game.js
 */
import Food from "./food.js";
import Snake from "./snakes.js";

class Game {
    constructor() {
        this.food = new Food();
        this.snake = new Snake();

        this.map = map;
        this.timerId = null;
    }

    start() {
        this.food.render(this.map);
        this.snake.render(this.map);

        this.bindKey();
        this.runSnake();
    }

    // 绑定键盘事件
    bindKey() {
        let that = this;
        document.addEventListener('keydown', function(e){
            switch(e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
            that.snake.render(that.map);
        });
    }

    // 让蛇移动
    runSnake() {
        this.timerId = setInterval(() => {
            
            this.snake.move(this.food, this.map);
            // 判断边界
            let maxX = this.map.offsetWidth / this.snake.width;
            let maxY = this.map.offsetHeight / this.snake.height;
            let headX = this.snake.body[0].x;
            let headY = this.snake.body[0].y;
            
            if(headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                alert('Game Over');
                clearInterval(this.timerId);
                return;
            }
            
            this.snake.render(this.map);
        }, 300);
    }
}

export default Game;

