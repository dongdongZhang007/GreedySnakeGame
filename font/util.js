/*
 * @Author: your name
 * @Date: 2021-11-05 11:07:08
 * @LastEditTime: 2021-11-05 11:32:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \GreadySnake\util.js
 */

export function getRandom(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return parseInt(Math.random()*(max - min) + min);
}
