import { selectIsAuthorize } from '@/entities/session'
import { useFeatureSlicedDebug } from '@/shared/lib'
import { useAppSelector } from '@/shared/model'
import { ProductWishlistList } from '@/widgets/ProductWishlistList'
import css from './LayoutSidebar.module.css'

export function LayoutSidebar() {
  const { rootAttributes } = useFeatureSlicedDebug('widget/LayoutSidebar')
  const isAuthorize = useAppSelector(selectIsAuthorize)

  if (!isAuthorize) {
    return null
  }

  return (
    <aside className={css.root} {...rootAttributes}>
      <ProductWishlistList />
    </aside>
  )
}
