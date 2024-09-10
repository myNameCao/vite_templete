const perview = [1440, 900] //PC效果图

const maxWidth = perview[0] //最大视图

const pwBase = perview[0] / 144 //宽度基数(结合postCSS配置)

const maxHeight = +(perview[1] * (maxWidth / perview[0])).toFixed(2)

const maxPc = [maxWidth, maxHeight] //PC最大视图
const phone = 1200 //移动效果图(这里是基于PC的不是设计图大小)
// 设置 rem 函数
const setRem = (): void => {
  // 当前页面宽度的缩放比例，可根据自己需要修改。
  const clientW = document.documentElement.clientWidth
  const clientH = document.documentElement.clientHeight

  //基数
  const wBase = clientW / maxPc[0]
  const hBase = clientH / maxPc[1]

  const whBase = Math.abs(1 - hBase) > Math.abs(1 - wBase) ? hBase : wBase
  let contrastW = maxPc[0] * whBase

  //最大不超过当前设计图大小
  if (contrastW >= maxPc[0]) contrastW = maxPc[0]
  //宽度基数时设置最小尺寸
  if (contrastW <= phone) contrastW = phone

  const scale = contrastW / pwBase
  document.documentElement.style.fontSize = scale + 'px'
}
//初始化
setRem()
//改变窗口大小时重新设置 rem,这里最好加上节流
window.addEventListener('resize', () => {
  setRem()
})
