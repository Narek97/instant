import React, { FC, useCallback, useEffect, useState } from 'react'
import './product-switcher.scss'
import { ProductSwitcherMenuItemType } from '@/ts/types'
import ProductSwitcherMenuItem from '@/components/templates/header/product-switcher/product-switcher-menu-item'
import { useRecoilValue } from 'recoil'
import { userState } from '@/store/atoms/user.atom'

interface IProductSwitcher {
  isOpen: boolean
}

const ProductSwitcher: FC<IProductSwitcher> = ({ isOpen }) => {
  const [productSwitcherData, setProductSwitcherData] = useState<any>(null)
  const user = useRecoilValue(userState)
  const url = `${process.env.NEXT_PUBLIC_PRODUCT_SWITCHER}?apiToken=${user?.apiToken}&apiKey=${process.env.NEXT_PUBLIC_APP_KEY}&clientID=${process.env.NEXT_PUBLIC_CLIENT_ID}`

  const getProductSwitcher = useCallback(async () => {
    const response = await fetch(url)
    return response.json()
  }, [url])

  useEffect(() => {
    getProductSwitcher().then((r) => {
      setProductSwitcherData(r)
    })
  }, [getProductSwitcher])

  return (
    <ul className={`product-switcher ${isOpen ? 'product-switcher-open' : ''}`}>
      {productSwitcherData?.headerInfo?.length &&
        productSwitcherData?.headerInfo[0]?.productSwitcher?.categories?.map(
          (menuItem: ProductSwitcherMenuItemType, index: number) => {
            return <ProductSwitcherMenuItem key={index} menuItem={menuItem} />
          }
        )}
    </ul>
  )
}

export default ProductSwitcher
