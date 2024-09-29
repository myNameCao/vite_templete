const view =750 //效果图

const base =view / 75 //宽度基数(结合postCSS配置)


// 设置 rem 函数
const setmobilRem = (): void => {
  // 当前页面宽度的缩放比例，可根据自己需要修改。
  const clientW = document.documentElement.clientWidth
  //基数
  const scale = clientW/base
  document.documentElement.style.fontSize = scale + 'px'
}
//初始化
setmobilRem()
//改变窗口大小时重新设置 rem,这里最好加上节流
window.addEventListener('resize', () => {
  setmobilRem()
})
