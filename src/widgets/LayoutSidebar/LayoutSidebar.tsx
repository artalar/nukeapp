import { selectIsAuthorize } from '@/entities/session/model/slice'
import { useAppSelector } from '@/shared/model/hooks'
import { useFeatureSlicedDebug } from '@/widgets/DebugMode/lib/useFeatureSlicedDebug'
import { ProductWishlistList } from '@/widgets/ProductWishlistList/ProductWishlistList'
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