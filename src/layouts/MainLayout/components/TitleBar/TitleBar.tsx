import { getCurrentWindow } from '@tauri-apps/api/window'
import { CloseIcon, MaximizeIcon, MinimizeIcon } from './TitleBarIcons'
import { TitleBarItem } from './TitleBarItem'

export const TitleBar = () => {
  const window = getCurrentWindow()

  return (
    <section
      data-tauri-drag-region
      className='fixed flex w-full flex-row-reverse'
    >
      <TitleBarItem className='hover:bg-red-600' onClick={() => window.close()}>
        <CloseIcon />
      </TitleBarItem>
      <TitleBarItem onClick={() => window.toggleMaximize()}>
        <MaximizeIcon />
      </TitleBarItem>
      <TitleBarItem onClick={() => window.minimize()}>
        <MinimizeIcon />
      </TitleBarItem>
    </section>
  )
}
