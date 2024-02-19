import React from 'react'
import { FilterPanelProps } from '../../../../interfaces/feedViewsInterfaces'
import { delayHidingElementDisplayProperty } from '../../../../functions/delayedToggle'

const FilterPanel:React.FC<FilterPanelProps> = ({isFilterPanelVisible}) => {
    
    const displayProperty = delayHidingElementDisplayProperty(isFilterPanelVisible, 250)

    return (
        <div 
            className={`filterPanel ${isFilterPanelVisible ? 'filterPanel-open' : 'filterPanel-closed'}`}
            style={{display: displayProperty}}
        >
            <div className="filterPanel-innerSections filterPanel-innerSection1">
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
            </div>
            <div className="filterPanel-innerSections filterPanel-innerSection2">
                <select name="" id=""></select>
                <select name="" id=""></select>
                <select name="" id=""></select>
            </div>
        </div>
    )
}

export default FilterPanel