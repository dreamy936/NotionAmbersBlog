import React, { useState } from 'react'

function EmailButton() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const email = 'yy1662179@gmail.com';

  const openModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
    } catch (_) {
      /* ignore */
    }
    // 关闭弹窗 + 顶部吐司提示 3s 淡出
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* 邮箱图标按钮 */}
      <button
        onClick={openModal}
        className="mt-4 bg-transparent border-none cursor-pointer flex items-center justify-center"
        style={{ width: 42, height: 42 }}
        aria-label="Show email"
      >
        <svg width="41.6" height="41.6" fill="#B0B4B9" viewBox="0 0 48 36">
          <rect x="2" y="6" width="44" height="24" rx="4" fill="#B0B4B9" stroke="#222" strokeWidth="2" />
          <polyline points="2,6 24,22 46,6" fill="none" stroke="#222" strokeWidth="2" />
          <polyline points="2,30 24,14 46,30" fill="none" stroke="#222" strokeWidth="2" />
        </svg>
      </button>

      {/* 居中弹窗 + 半透明遮罩 */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="rounded-xl shadow-xl px-6 py-5 text-center relative w-[420px] max-w-[92vw]"
            style={{
              background: 'linear-gradient(135deg, #23272f 80%, #444 100%)',
              color: '#E5E7EB',
              boxShadow: '0 8px 32px rgba(0,0,0,.45)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2.5 right-3 text-gray-400 hover:text-white text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            {/* 两行：标题 + 邮箱 */}
            <div className="text-base font-semibold mb-2" style={{ color: '#d1d5db' }}>
              Email
            </div>
            <div className="text-sm mb-4 break-all text-gray-300">
              {email}
            </div>

            {/* 复制按钮 */}
            <button
              onClick={handleCopy}
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 text-sm"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {/* 顶部居中吐司（3s 自动淡出） */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-6 z-[60] transition-opacity duration-500 ${
          showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-emerald-600 text-white px-4 py-2 rounded shadow-lg text-sm">
          Copied. Contact me now!
        </div>
      </div>
    </>
  );
}

export { EmailButton };

import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import SocialButton from './SocialButton'

/**
 * 网站顶部
 * @returns
 */
export default function Header(props) {
  const { siteInfo } = props;
  return (
    <header
      className='text-center justify-between items-center px-6 h-80 relative z-10'
      style={{
        backgroundImage: "url('/topbar_punk_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* 朋克暗黑风血滴SVG动画分布整个header */}
        <div className='absolute inset-0 w-full h-full pointer-events-none select-none z-0'>
          <svg width="100%" height="100%" viewBox="0 0 800 320" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ellipse cx="120" cy="60" rx="8" ry="18" fill="#8B0000">
              <animate attributeName="cy" values="60;100;60" dur="2.2s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="400" cy="40" rx="6" ry="14" fill="#B22222">
              <animate attributeName="cy" values="40;80;40" dur="1.7s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="700" cy="90" rx="7" ry="16" fill="#6B0000">
              <animate attributeName="cy" values="90;130;90" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="250" cy="180" rx="5" ry="12" fill="#8B0000">
              <animate attributeName="cy" values="180;220;180" dur="1.9s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="600" cy="220" rx="9" ry="20" fill="#B22222">
              <animate attributeName="cy" values="220;260;220" dur="2.1s" repeatCount="indefinite" />
            </ellipse>
          </svg>
        </div>
        <div className='float-none inline-block py-12'>
          <SmartLink href='/'>
            <div className='flex space-x-6 justify-center items-start'>
              <div className='flex flex-col items-center relative' style={{ width: 110 }}>
                <div className='hover:rotate-45 hover:scale-125 transform duration-200 cursor-pointer justify-center items-center flex relative' style={{ width: 110, height: 110 }}>
                  {/* 外圈高低交错红色尖刺SVG效果 */}
                  <svg width="110" height="110" viewBox="0 0 110 110" className="absolute top-0 left-0 z-0">
                    <circle cx="55" cy="55" r="50" stroke="#8B0000" strokeWidth="6" fill="none" />
                    {/* 尖刺效果 */}
                    {Array.from({ length: 12 }).map((_, i) => {
                      const spikeBase = 50;
                      const spikeMin = 56;
                      const spikeMax = 66;
                      const angle = (i * 360 / 12) * Math.PI / 180;
                      const len = i % 2 === 0 ? spikeMax : spikeMin;
                      // 尖刺三角形顶点
                      const x1 = 55 + (spikeBase - 6) * Math.cos(angle - Math.PI / 36);
                      const y1 = 55 + (spikeBase - 6) * Math.sin(angle - Math.PI / 36);
                      const x2 = 55 + len * Math.cos(angle);
                      const y2 = 55 + len * Math.sin(angle);
                      const x3 = 55 + (spikeBase - 6) * Math.cos(angle + Math.PI / 36);
                      const y3 = 55 + (spikeBase - 6) * Math.sin(angle + Math.PI / 36);
                      return (
                        <polygon
                          key={i}
                          points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                          fill="#8B0000"
                          stroke="#222"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </svg>
                  {/* 头像图片 */}
                  <LazyImage
                    priority={true}
                    src={siteInfo?.icon}
                    className='rounded-full z-10'
                    width={90}
                    height={90}
                    alt={siteConfig('AUTHOR')}
                  />
                </div>
                {/* 邮箱按钮放头像正下方，左移并上移 */}
                <div className='absolute left-0 top-[90px] flex justify-center w-full' style={{ transform: 'translate(-5px, 20px)' }}>
                  <EmailButton />
                </div>
              </div>
              <div className='flex-col flex justify-center items-start ml-8 w-full'>
                <div className='text-5xl font-black dark:text-white py-2 mb-4 max-w-full overflow-hidden' style={{ fontFamily: 'UnifrakturCook, Gothic, serif', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  Amber's Blog
                </div>
                <div
                  className='font-light dark:text-white py-2 text-xl text-left tracking-widest leading-loose max-w-full overflow-hidden'
                  style={{ letterSpacing: '0.12em', lineHeight: '2.2em', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                  dangerouslySetInnerHTML={{
                    __html: siteConfig('SIMPLE_LOGO_DESCRIPTION', null, CONFIG)
                  }}
                />
              </div>
            </div>
          </SmartLink>
          <div className='flex justify-center'>
            <SocialButton />
          </div>
          {/* 去掉底部欢迎语 */}
        </div>
      </div>
    </header>
  );

}
