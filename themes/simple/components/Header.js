import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer
      className='relative w-full px-6 border-t'
      style={{
        backgroundImage: "url('/topbar_punk_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
  {/* <DarkModeButton className='text-center pt-4' /> */}

  <div className='text-yellow-300 container mx-auto max-w-4xl py-12 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm'>
        <div className='text-center'>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights
          reserved.
        </div>
        <div className='md:p-0 text-center md:text-right text-xs'>
          {/* 右侧链接 */}
          {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
          {siteConfig('BEI_AN') && (
            <a
              href={siteConfig('BEI_AN_LINK')}
              className='no-underline hover:underline ml-4'>
              {siteConfig('BEI_AN')}
            </a>
          )}
          <BeiAnGongAn />
          <span className='no-underline ml-4'>
            Powered by
            <a
              href='https://github.com/tangly1024/NotionNext'
              className=' hover:underline'>
              NotionNext {siteConfig('VERSION')}
            </a>
          </span>
        </div>
      </div>
      {/* 底部朋克尖刺SVG 蒸汽波/复古/金属/哥特暗黑风格 */}
  <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '115px', pointerEvents: 'none', zIndex: 1 }}>
        <svg width="100%" height="48" viewBox="0 0 1200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="punkMetal" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B0B4B9" />
              <stop offset="0.5" stopColor="#23272f" />
              <stop offset="1" stopColor="#8B0000" />
            </linearGradient>
          </defs>
          {Array.from({ length: 40 }).map((_, i) => {
            const x = i * 30;
            const spikeHeight = i % 2 === 0 ? 48 : 32;
            return (
              <polygon
                key={i}
                points={`${x},0 ${x+15},${spikeHeight} ${x+30},0`}
                fill="url(#punkMetal)"
                stroke="#222"
                strokeWidth="2"
                opacity="0.92"
              />
            );
          })}
        </svg>
      </div>
    </footer>
  )
}
