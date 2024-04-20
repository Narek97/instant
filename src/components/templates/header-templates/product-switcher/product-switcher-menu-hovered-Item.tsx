import { FC, useState } from "react";
import Lock from "@/assets/icons/header-icons/lock.svg";
import {
  ProductSwitcherMenuItemProductType,
  ProductSwitcherMenuItemType,
} from "@/ts/types";
import {
  PRODUCT_SWITCHER_COLORS,
  PRODUCT_SWITCHER_HOVER_COLORS,
} from "@/constants/colors";

interface IProductSwitcherMenuHoveredItem {
  parentItem: ProductSwitcherMenuItemType;
  item: ProductSwitcherMenuItemProductType;
}

const ProductSwitcherMenuHoveredItem: FC<IProductSwitcherMenuHoveredItem> = ({
  parentItem,
  item,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <li
      className={"product-switcher--hover--item--li"}
      style={{
        borderColor: hovered
          ? PRODUCT_SWITCHER_HOVER_COLORS[parentItem?.name || ""]
          : PRODUCT_SWITCHER_COLORS[parentItem?.name || ""],
      }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item?.active ? (
        <a className={"product-switcher--hover--item--link"} href={item?.link}>
          <div className={"product-switcher--hover--item--icon"}>
            <img
              width={16}
              height={16}
              src={item?.logo}
              color={"#f10000"}
              alt={item?.name}
            />
          </div>
          <span className={"product-switcher--hover--item--name"}>
            {item?.name}
          </span>
        </a>
      ) : (
        <div className={"product-switcher--hover--item--lock"}>
          <Lock />
          <p>Upgrade to unlock</p>
        </div>
      )}
    </li>
  );
};

export default ProductSwitcherMenuHoveredItem;
