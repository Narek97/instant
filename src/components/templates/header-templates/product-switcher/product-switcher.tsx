import React, { FC } from 'react'
import './product-switcher.scss'
// import { ProductSwitcherMenuItemType } from '@/ts/types'
// import ProductSwitcherMenuItem from '@/components/templates/header-templates/product-switcher/product-switcher-menu-item'

interface IProductSwitcher {
  isOpen: boolean
}

const ProductSwitcher: FC<IProductSwitcher> = ({ isOpen }) => {
  // const { data: productSwitcherData } = useGetProductSwitcherQuery<
  //   GetProductSwitcherQuery,
  //   Error
  // >(
  //   {},
  //   {
  //     cacheTime: queryCacheTime,
  //   }
  // );

  return (
    <ul
      className={`product-switcher ${isOpen ? 'product-switcher-open' : ''}`}
      data-testid="product-switcher-test-id"
    >
      {/*{productSwitcherData?.getProductSwitcher?.headerInfo?.length &&*/}
      {/*  productSwitcherData?.getProductSwitcher?.headerInfo[0]?.productSwitcher?.categories?.map(*/}
      {/*    (menuItem: ProductSwitcherMenuItemType, index: number) => {*/}
      {/*      return <ProductSwitcherMenuItem key={index} menuItem={menuItem} />;*/}
      {/*    },*/}
      {/*  )}*/}
    </ul>
  )
}

export default ProductSwitcher
