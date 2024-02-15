// import { HeaderMenuPanelProps } from "./headerInterfaces";
import { HeaderMenuPanelProps } from "./headerMenuInterfaces"
// import { InnerSectionHomeProps } from "./innerSectionsInterfaces"

export interface SelectorProps {
    headerMenuPanelSelectedElement?: HeaderMenuPanelProps['headerMenuPanelSelectedElement']
    setHeaderMenuPanelSelectedElement: HeaderMenuPanelProps['setHeaderMenuPanelSelectedElement']
}

export interface ViewTypeSelectorProps {
    selectedViewType: 'regular' | 'columns' | 'details'
    setSelectedViewType: (type:ViewTypeSelectorProps['selectedViewType']) => void
}