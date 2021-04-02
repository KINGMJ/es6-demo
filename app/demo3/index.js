const str = `invite you to board <span class="board" data-board_id={{board_id}}>board{{- board_name}}</span><p>看板</p>board`;

console.group("最开始的字符")
console.log(str)
console.groupEnd()

//过滤出html标签
const reg = /<[a-zA-Z].*?>/g
const match = str.match(reg)
let replaceStr = str.replace(reg, '---replace-html-tag---')

console.log(replaceStr)

//过滤出变量
const reg2 = /{{.*?}}/g
const match2 = replaceStr.match(reg2)
replaceStr = replaceStr.replace(reg2, '---replace-variable---')

console.log(replaceStr)

//board和mindmap互转

replaceStr = replaceStr.replace(/看板/g, '脑图')
    .replace(/board/g, 'mindmap')
    .replace(/Board/g, 'Mindmap');

console.log(replaceStr)

//字符逆转
match2.forEach(item=>{
    replaceStr = replaceStr.replace(/---replace-variable---/, item);
})

match.forEach(item=>{
    replaceStr = replaceStr.replace(/---replace-html-tag---/, item)
})


console.group("转换后的字符")
console.log(replaceStr)
console.groupEnd()

