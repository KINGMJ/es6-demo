const marked = require('marked')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true, //支持换行br
  pedantic: false,
  sanitize: true, //过滤输出，输出纯文本，不解析html和js代码
  smartLists: false,
  smartypants: false,
})

// Override function
const tokenizer = {
  list(src) {
    const cap = this.rules.block.list.exec(src)
    if (cap) {
      let raw = cap[0]
      const bull = cap[2]
      const isordered = bull.length > 1

      const list = {
        type: 'list',
        raw,
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: [],
      }

      // Get each top-level item.
      const itemMatch = cap[0].match(this.rules.block.item)

      let next = false,
        item,
        space,
        bcurr,
        bnext,
        addBack,
        loose,
        istask,
        ischecked,
        endMatch

      let l = itemMatch.length
      bcurr = this.rules.block.listItemStart.exec(itemMatch[0])
      for (let i = 0; i < l; i++) {
        item = itemMatch[i]
        raw = item

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (i !== l - 1) {
          bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1])
          if (bnext[1].length > bcurr[1].length) {
            // nested list or continuation
            itemMatch.splice(i, 2, itemMatch[i] + '\n' + itemMatch[i + 1])
            i--
            l--
            continue
          } else if (
            // different bullet style
            this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)
          ) {
            addBack = itemMatch.slice(i + 1).join('\n').length
            list.raw = list.raw.substring(0, list.raw.length - addBack)
            i = l - 1
          }
          bcurr = bnext
        }

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length
        item = item.replace(/^ *([*+-]|\d+[.)]) ?/, '')

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length
          item = item.replace(/^ {1,4}/gm, '')
        }

        // trim item newlines at end
        item = rtrim(item, '\n')
        if (i !== l - 1) {
          raw = raw + '\n'
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(raw)
        if (i !== l - 1) {
          next = raw.slice(-2) === '\n\n'
          if (!loose) loose = next
        }

        if (loose) {
          list.loose = true
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.test(item)
          ischecked = undefined
          if (istask) {
            ischecked = item[1] !== ' '
            item = item.replace(/^\[[ xX]\] +/, '')
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: istask,
          checked: ischecked,
          loose: loose,
          text: item,
        })
      }

      return list
    }
  },
}

marked.use({ tokenizer })

const textarea = document.createElement('textarea')
document.body.appendChild(textarea)

const br = document.createElement('br')
document.body.appendChild(br)

const btn = document.createElement('button')
btn.innerText = 'Preview'

btn.onclick = () => {
  const html = marked(textarea.value)
  const div = document.createElement('DIV')
  div.innerHTML = html
  document.body.appendChild(div)
}

document.body.appendChild(btn)

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  const l = str.length
  if (l === 0) {
    return ''
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1)
    if (currChar === c && !invert) {
      suffLen++
    } else if (currChar !== c && invert) {
      suffLen++
    } else {
      break
    }
  }

  return str.substr(0, l - suffLen)
}
