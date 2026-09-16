"use client";

import { items } from "@/assets/data/route-menu-items";
import { RouteMenu } from "@/builder/RouteMenu";
import useUser from "@/hooks/states/useUser";
import {
  setActiveBreadcrumbs,
  setActiveIndexes,
  setBreadcrumbsMap,
  setIndexesMap,
  setMenus,
  setOpenIndexes,
} from "@/redux/slices/menu-slice";
import type { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const MenuApplier = () => {
  const { user } = useUser();
  const { info } = user || {};
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { indexesMap, breadcrumbsMap } = useSelector(
    (state: RootState) => state.menu,
  );

  const menusData = useMemo(() => {
    const routeMenu = new RouteMenu(items);
    return routeMenu.getMenus({ role: info?.role, initialPath: "/admin" });
  }, [info?.role]);

  useEffect(() => {
    if (menusData) {
      const { menus, indexesMap, breadcrumbsMap } = menusData;
      dispatch(setMenus(menus));
      dispatch(setIndexesMap(indexesMap));
      dispatch(setBreadcrumbsMap(breadcrumbsMap));
    }
  }, [dispatch, menusData]);

  useEffect(() => {
    if (pathname && indexesMap) {
      dispatch(setActiveIndexes(indexesMap[pathname]));
      dispatch(setOpenIndexes(indexesMap[pathname]));
      dispatch(setActiveBreadcrumbs(breadcrumbsMap[pathname]));
    }
  }, [pathname, indexesMap, breadcrumbsMap, dispatch]);

  return null;
};

export default MenuApplier;
