import React, { FC, useState } from 'react'
import RightArrow from '@/assets/icons/right-secondary-arrow.svg'
import Lock from '@/assets/icons/header-icons/lock.svg'
import { ProductSwitcherMenuItemType } from '@/ts/types'
import { PRODUCT_SWITCHER_COLORS } from '@/constants/colors'
import ProductSwitcherMenuHoveredItem from '@/components/templates/header/product-switcher/product-switcher-menu-hovered-Item'

interface IProductSwitcherMenuItem {
  menuItem: ProductSwitcherMenuItemType
}

const ProductSwitcherMenuItem: FC<IProductSwitcherMenuItem> = ({
  menuItem,
}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <li
      data-testid="product-switcher--item-test-id"
      className={'product-switcher--item'}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={'product-switcher--item--content'}
        style={
          hovered
            ? { borderColor: PRODUCT_SWITCHER_COLORS[menuItem?.name || ''] }
            : { borderColor: 'transparent' }
        }
      >
        <div className={'product-switcher--item--content--block'}>
          <div>
            <img
              src={menuItem?.logo}
              alt={menuItem?.name}
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className={'product-switcher--item--name'}>{menuItem?.name}</p>
            <p className={'product-switcher--item--desc'}>{menuItem?.desc}</p>
          </div>
        </div>
        {menuItem?.active ? (
          <RightArrow className={'product-switcher--item--arrow'} />
        ) : (
          <Lock />
        )}
      </div>

      {menuItem?.active && (
        <ul className={'product-switcher--hover--item'}>
          {menuItem?.products.map((item, index: number) => {
            return (
              <ProductSwitcherMenuHoveredItem
                parentItem={menuItem}
                item={item}
                key={index}
              />
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default ProductSwitcherMenuItem
