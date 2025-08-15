import { useGlobal } from '@/lib/global'
import { getQueryParam } from '@/lib/utils'
import { THEMES } from '@/themes/theme'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DarkModeButton from './DarkModeButton'
import { Draggable } from './Draggable'
import LazyImage from './LazyImage'
import SideBarDrawer from './SideBarDrawer'
/**
 *
 * @returns 主题切换
 */
const ThemeSwitch = () => {
  // const { theme, locale, isDarkMode, toggleDarkMode } = useGlobal()
  // const router = useRouter()
  // const currentTheme = getQueryParam(router.asPath, 'theme') || theme
  // const [sideBarVisible, setSideBarVisible] = useState(false)

  // const changeTheme = newTheme => {
  //   const query = router.query
  //   query.theme = newTheme
  //   router.push({ pathname: router.pathname, query }).then(() => {})
  // }

  // 主题切换相关功能已被注释，组件不再显示任何内容
  return null
}

export default ThemeSwitch
