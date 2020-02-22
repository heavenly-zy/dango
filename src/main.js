import string from './css.js'

const player = {
    id: undefined,
    n: 1,
    time: 50,
    view: {
        codeWrapper: document.getElementById('codeWrapper'),
        code: document.getElementById('code'),
        styleTag: document.getElementById('styleTag')
    },
    events: { // 表驱动编程
        '#btnPlay': 'play',
        '#btnPause': 'pause',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnSkipAnima': 'skipAnima'
    },
    init: () => {
        player.view.code.innerText = string.slice(0, player.n)
        player.view.styleTag.innerHTML = string.slice(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) { // 保证只遍历events的自身属性
                const value = player.events[key] // 'play'、'pause'、'slow'...
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.view.codeWrapper.scrollTop = codeWrapper.scrollHeight
        player.view.code.innerText = string.slice(0, player.n)
        player.view.styleTag.innerHTML = string.slice(0, player.n)
    },
    play: () => {
        player.pause()
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    normal: () => {
        player.pause()
        player.time = 50
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    skipAnima: () => {
        player.pause()
        player.view.code.innerText = string
        player.view.styleTag.innerHTML = string
        player.view.codeWrapper.scrollTop = codeWrapper.scrollHeight
    }
}

player.init()