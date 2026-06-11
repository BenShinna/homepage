import './App.css'
import PixelBlast from './PixelBlast'

function App() {
  // 定义字体样式
  const fontStyle = { fontFamily: "'ZCOOL KuaiLe', cursive" }

  return (
    <>
      <div className='flex flex-col'>
        {/* 背景动画 */}
        <div className="absolute h-screen w-screen bg-black z-0">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#E9FFAC"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0.1}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.02}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0}
            transparent
          />
        </div>

        {/* 主要内容区域 */}
        <div className='flex flex-col z-10 items-center justify-center h-screen pointer-events-none'>
          <div className='w-72 md:w-100 lg:w-111 bg-black/50 backdrop-blur-2xl justify-between'>
            <div className='flex flex-row justify-between w-full'>
              <h1 style={fontStyle} className='text-5xl font-bold items-center justify-center text-[#E9FFAC] w-auto'>叶佩芳</h1>
              <h1 style={fontStyle} className='text-3xl font-bold items-center justify-center text-[#E9FFAC] w-auto'>+</h1>
            </div>
            <h1 style={fontStyle} className='text-xl font-bold items-center justify-center text-[#E9FFAC]/80'>要把生活当作小说看，又要把小说当作生活看。</h1>
            <div className='flex flex-row mt-1 pointer-events-auto justify-end gap-2'>
              <a href='https://legendary-goggles.asia/' className='btn btn-sm rounded-4xl bg-transparent border-2 border-[#E9FFAC] text-[#E9FFAC] hover:bg-[#E9FFAC] hover:text-black'>BLOG</a>
            </div>
          </div>

          {/* 页脚归属说明 */}
          <div className='fixed bottom-4 left-0 right-0 text-center pointer-events-auto'>
            <p className='text-xs text-[#E9FFAC]/50 hover:text-[#E9FFAC]/80 transition-colors'>
              Theme based on <a href='https://github.com/sout233/soout-homepage' target='_blank' rel='noopener noreferrer' className='underline hover:text-[#E9FFAC]'>sout233/soout-homepage</a>
            </p>
          </div>
        </div>

        {/* 页脚归属说明 - 新增部分 */}
        {/* z-50 确保它在背景和内容之上 */}
        <div className='fixed bottom-4 left-0 right-0 text-center pointer-events-auto z-50'>
          <p className='text-xs text-[#E9FFAC]/50 hover:text-[#E9FFAC]/80 transition-colors'>
            Theme based on <a href='https://github.com/sout233/soout-homepage' target='_blank' rel='noopener noreferrer' className='underline hover:text-[#E9FFAC]'>sout233/soout-homepage</a>
          </p>
        </div>

      </div>
    </>
  )
}

export default App
